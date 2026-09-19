import json
import logging
from typing import List, Dict, Any, Optional, Tuple, AsyncGenerator
import httpx
from fastapi import HTTPException, status

from app.core.config import settings
from app.llm.base import LLMProvider

logger = logging.getLogger("openrouter-provider")


FREE_FALLBACK_MODELS = [
    "google/gemma-4-31b-it:free",
    "google/gemma-4-26b-a4b-it:free",
    "meta-llama/llama-3.3-70b-instruct:free",
    "meta-llama/llama-3.1-8b-instruct:free",
    "qwen/qwen-2.5-72b-instruct:free",
    "mistralai/mistral-7b-instruct:free",
]


class OpenRouterProvider(LLMProvider):
    """
    OpenRouter API provider implementation with automatic model failover
    and resilience against 429 rate limits for free models.
    """

    def __init__(self):
        self.api_key = settings.OPENROUTER_API_KEY
        self.base_url = settings.OPENROUTER_BASE_URL.rstrip("/")
        self.default_model = settings.DEFAULT_MODEL

    def _get_headers(self) -> Dict[str, str]:
        headers = {
            "Authorization": f"Bearer {self.api_key}",
            "Content-Type": "application/json",
            "HTTP-Referer": "https://lokesh-portfolio.vercel.app",
            "X-Title": "Lokesh Kumar R Portfolio",
        }
        return headers

    async def generate(
        self,
        messages: List[Dict[str, str]],
        model: Optional[str] = None,
        temperature: float = 0.4,
        max_tokens: int = 1000,
    ) -> Tuple[str, str]:
        if not self.api_key or self.api_key == "your_openrouter_api_key_here":
            raise HTTPException(
                status_code=status.HTTP_500_INTERNAL_SERVER_ERROR,
                detail="OpenRouter API key is not configured in environment.",
            )

        target_model = model or self.default_model
        fallback_chain = list(dict.fromkeys([target_model] + FREE_FALLBACK_MODELS))
        endpoint = f"{self.base_url}/chat/completions"

        last_error = None

        for candidate_model in fallback_chain:
            payload = {
                "model": candidate_model,
                "models": fallback_chain,
                "messages": messages,
                "temperature": temperature,
                "max_tokens": max_tokens,
            }

            async with httpx.AsyncClient(timeout=60.0) as client:
                try:
                    response = await client.post(
                        endpoint,
                        headers=self._get_headers(),
                        json=payload,
                    )
                    if response.status_code == 429:
                        logger.warning(
                            f"Model {candidate_model} rate-limited (429). Trying fallback model..."
                        )
                        last_error = "Rate limit reached"
                        continue

                    if response.status_code != 200:
                        logger.warning(
                            f"Model {candidate_model} returned {response.status_code}. Trying fallback..."
                        )
                        continue

                    data = response.json()
                    answer = data["choices"][0]["message"]["content"]
                    model_used = data.get("model", candidate_model)
                    return answer, model_used

                except httpx.RequestError as exc:
                    logger.error(f"Error calling {candidate_model}: {exc}")
                    last_error = str(exc)
                    continue

        raise HTTPException(
            status_code=status.HTTP_429_TOO_MANY_REQUESTS,
            detail="All free AI models are currently experiencing high traffic. Please try again in a moment.",
        )

    async def stream_generate(
        self,
        messages: List[Dict[str, str]],
        model: Optional[str] = None,
        temperature: float = 0.4,
        max_tokens: int = 1000,
    ) -> AsyncGenerator[str, None]:
        if not self.api_key:
            yield "Error: OpenRouter API key is not configured."
            return

        target_model = model or self.default_model
        fallback_chain = list(dict.fromkeys([target_model] + FREE_FALLBACK_MODELS))
        endpoint = f"{self.base_url}/chat/completions"

        for candidate_model in fallback_chain:
            payload = {
                "model": candidate_model,
                "models": fallback_chain,
                "messages": messages,
                "temperature": temperature,
                "max_tokens": max_tokens,
                "stream": True,
            }

            try:
                async with httpx.AsyncClient(timeout=60.0) as client:
                    async with client.stream(
                        "POST", endpoint, headers=self._get_headers(), json=payload
                    ) as response:
                        if response.status_code == 429:
                            logger.warning(
                                f"Model {candidate_model} returned 429. Trying next free fallback..."
                            )
                            continue

                        if response.status_code != 200:
                            logger.warning(
                                f"Model {candidate_model} returned status {response.status_code}. Trying fallback..."
                            )
                            continue

                        streamed_any = False
                        async for line in response.aiter_lines():
                            if not line:
                                continue
                            if line.startswith("data: "):
                                data_str = line[6:].strip()
                                if data_str == "[DONE]":
                                    break
                                try:
                                    chunk = json.loads(data_str)
                                    delta = chunk.get("choices", [{}])[0].get("delta", {})
                                    content = delta.get("content", "")
                                    if content:
                                        streamed_any = True
                                        yield content
                                except json.JSONDecodeError:
                                    continue
                        if streamed_any:
                            return

            except Exception as exc:
                logger.error(f"Stream error on {candidate_model}: {exc}")
                continue

        yield "The free AI models are currently experiencing high global traffic. Please try again in a few moments."
