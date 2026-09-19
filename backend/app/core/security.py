import re
import time
import logging
from collections import defaultdict
from typing import Dict, List
from fastapi import Request, HTTPException, status

logger = logging.getLogger("security-guard")

# Prompt injection heuristics
INJECTION_PATTERNS = [
    r"(?i)\b(ignore|disregard|forget|bypass|override)\b.*\b(previous|all|system|above|prior)\b.*\b(instructions|rules|prompts?|constraints?)\b",
    r"(?i)\b(reveal|show|print|display|tell me|give me|what is)\b.*\b(system prompt|hidden instructions|api[ _-]?key|secret|env|environment variables?)\b",
    r"(?i)\b(jailbreak|dan mode|developer mode|unrestricted mode|do anything now)\b",
    r"(?i)\b(pretend you are|you are now|act as)\b.*\b(unrestricted|evil|chaos|dan|without limits)\b",
    r"(?i)\b(system instructions?|system message)\s*:\s*",
]

COMPILED_PATTERNS = [re.compile(p) for p in INJECTION_PATTERNS]


def validate_prompt_safety(query: str, max_length: int = 500) -> None:
    """
    Validates input query for maximum length and prompt injection attacks.
    Raises HTTPException(400) if a violation is detected.
    """
    cleaned = query.strip()

    # 1. Length Check
    if len(cleaned) > max_length:
        raise HTTPException(
            status_code=status.HTTP_400_BAD_REQUEST,
            detail=f"Query exceeds maximum allowed length of {max_length} characters.",
        )

    # 2. Prompt Injection Defense
    for pattern in COMPILED_PATTERNS:
        if pattern.search(cleaned):
            logger.warning(f"Prompt injection attempt detected: '{cleaned[:60]}...'")
            raise HTTPException(
                status_code=status.HTTP_400_BAD_REQUEST,
                detail=(
                    "I am designed to answer questions about Lokesh Kumar R's professional experience, "
                    "projects, skills, education, and achievements. I cannot execute system override commands."
                ),
            )


class InMemoryRateLimiter:
    """
    Lightweight sliding-window IP rate limiter (default: 10 requests / minute).
    Requires zero external services and provides immediate defense.
    """

    def __init__(self, requests_per_minute: int = 10):
        self.requests_per_minute = requests_per_minute
        self.window_seconds = 60
        self.requests: Dict[str, List[float]] = defaultdict(list)

    async def __call__(self, request: Request):
        # Extract client IP (handling reverse proxy X-Forwarded-For if available)
        forwarded = request.headers.get("X-Forwarded-For")
        if forwarded:
            client_ip = forwarded.split(",")[0].strip()
        else:
            client_ip = request.client.host if request.client else "127.0.0.1"

        now = time.time()
        window_start = now - self.window_seconds

        # Clean timestamps older than sliding window
        self.requests[client_ip] = [
            ts for ts in self.requests[client_ip] if ts > window_start
        ]

        if len(self.requests[client_ip]) >= self.requests_per_minute:
            logger.warning(f"Rate limit exceeded for IP: {client_ip}")
            raise HTTPException(
                status_code=status.HTTP_429_TOO_MANY_REQUESTS,
                detail="Rate limit exceeded: Maximum 10 requests per minute allowed. Please try again later.",
            )

        self.requests[client_ip].append(now)


rate_limiter = InMemoryRateLimiter(requests_per_minute=10)
