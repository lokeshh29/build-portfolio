from abc import ABC, abstractmethod
from typing import List, Dict, Any, Optional, Tuple, AsyncGenerator


class LLMProvider(ABC):
    """
    Abstract base interface for LLM providers.
    Allows interchangeable use of OpenRouter, Groq, or other providers without changing business logic.
    """

    @abstractmethod
    async def generate(
        self,
        messages: List[Dict[str, str]],
        model: Optional[str] = None,
        temperature: float = 0.4,
        max_tokens: int = 1000,
    ) -> Tuple[str, str]:
        """
        Generates a non-streaming text completion.
        Returns (answer_text, model_used).
        """
        pass

    @abstractmethod
    async def stream_generate(
        self,
        messages: List[Dict[str, str]],
        model: Optional[str] = None,
        temperature: float = 0.4,
        max_tokens: int = 1000,
    ) -> AsyncGenerator[str, None]:
        """
        Yields text chunks as they arrive from the provider.
        """
        pass
