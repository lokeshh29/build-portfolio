import json
import logging
from typing import List, Dict, Any, Optional, Tuple, AsyncGenerator
import httpx
from fastapi import HTTPException, status

from app.core.config import settings
from app.llm.base import LLMProvider

logger = logging.getLogger("openrouter-provider")


class OpenRouterProvider(LLMProvider):
    """
    OpenRouter API provider implementation.
    Supports standard generation and Server-Sent Events (SSE) streaming.
    """

    def __init__(self):
        self.api_key = settings.OPENROUTER_API_KEY
        self.base_url = settings.OPENROUTER_BASE_URL.rstrip("/")
        self.default_model = settings.DEFAULT_MODEL

    def _get_headers(self) -> Dict[str, str]:
        headers = {
            "Authorization": f"Bearer {self.api_key}",
            "Content-Type": "application/json",
            "HTTP-Referer": "http://localhost:3000",
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
        payload = {
            "model": target_model,
            "messages": messages,
            "temperature": temperature,
            "max_tokens": max_tokens,
        }

        endpoint = f"{self.base_url}/chat/completions"

        async with httpx.AsyncClient(timeout=60.0) as client:
            try:
                response = await client.post(
                    endpoint,
                    headers=self._get_headers(),
                    json=payload,
                )
            except httpx.TimeoutException:
                logger.error("Timeout connecting to OpenRouter API")
                raise HTTPException(
                    status_code=status.HTTP_504_GATEWAY_TIMEOUT,
                    detail="AI service request timed out. Please try again.",
                )
            except httpx.RequestError as exc:
                logger.error(f"Network error connecting to OpenRouter: {exc}")
                raise HTTPException(
                    status_code=status.HTTP_502_BAD_GATEWAY,
                    detail=f"Network error while connecting to AI service: {str(exc)}",
                )

        if response.status_code != 200:
            error_data = {}
            try:
                error_data = response.json()
            except Exception:
                error_data = {"raw": response.text}

            logger.error(f"OpenRouter error [{response.status_code}]: {error_data}")
            err_msg = error_data.get("error", {}).get(
                "message", "OpenRouter returned an error."
            )
            raise HTTPException(
                status_code=response.status_code
                if response.status_code in (400, 401, 403, 404, 429)
                else status.HTTP_500_INTERNAL_SERVER_ERROR,
                detail=f"OpenRouter Provider Error: {err_msg}",
            )

        data = response.json()
        try:
            answer = data["choices"][0]["message"]["content"]
            model_used = data.get("model", target_model)
            return answer, model_used
        except (KeyError, IndexError) as exc:
            logger.error(f"Malformed response from OpenRouter: {data}")
            raise HTTPException(
                status_code=status.HTTP_500_INTERNAL_SERVER_ERROR,
                detail="Failed to parse response from AI provider.",
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
        payload = {
            "model": target_model,
            "messages": messages,
            "temperature": temperature,
            "max_tokens": max_tokens,
            "stream": True,
        }

        endpoint = f"{self.base_url}/chat/completions"

        async with httpx.AsyncClient(timeout=60.0) as client:
            async with client.stream(
                "POST", endpoint, headers=self._get_headers(), json=payload
            ) as response:
                if response.status_code != 200:
                    yield f"Error: Provider returned status {response.status_code}"
                    return

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
                                yield content
                        except json.JSONDecodeError:
                            continue
