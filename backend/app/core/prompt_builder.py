from typing import List, Dict, Any, Optional
from app.core.system_prompt import SYSTEM_PROMPT

class PromptBuilder:
    """
    Constructs grounded system prompts and message payloads for the Ask Lokesh AI assistant.
    """

    def __init__(self):
        self.base_prompt = SYSTEM_PROMPT.strip()

    def get_system_prompt(self) -> str:
        """
        Returns the ground-truth system prompt.
        """
        return self.base_prompt

    def get_suggested_questions(self) -> List[str]:
        """
        Returns curated recruiter questions for quick user selection.
        """
        return [
            "What experience does Lokesh have with RAG?",
            "Tell me about AssistHub.",
            "What AWS services has Lokesh used?",
            "What was Lokesh's role at Invisibl Cloud?",
            "Has Lokesh worked with AI agents?",
            "What backend technologies does Lokesh use?",
            "What projects has Lokesh built?",
            "Does Lokesh know Docker?",
            "When does Lokesh graduate?",
        ]

    def build_chat_messages(
        self, 
        user_message: str, 
        history: Optional[List[Dict[str, str]]] = None
    ) -> List[Dict[str, str]]:
        """
        Constructs the full messages array with system prompt, optional conversation history, and the latest user query.
        """
        messages = [
            {"role": "system", "content": self.base_prompt}
        ]

        if history:
            for item in history:
                role = item.get("role")
                content = item.get("content")
                if role in ("user", "assistant") and content:
                    messages.append({"role": role, "content": content})

        messages.append({"role": "user", "content": user_message})
        return messages


prompt_builder = PromptBuilder()
