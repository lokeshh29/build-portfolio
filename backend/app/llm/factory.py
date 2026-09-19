from functools import lru_cache
from app.llm.base import LLMProvider
from app.llm.openrouter_provider import OpenRouterProvider


@lru_cache()
def get_llm_provider() -> LLMProvider:
    """
    Returns the OpenRouter LLM provider instance.
    """
    return OpenRouterProvider()
