from typing import List, Optional, Dict, Any
from pydantic import BaseModel, Field


class ChatMessage(BaseModel):
    role: str = Field(..., description="Role of the sender: 'user' or 'assistant'")
    content: str = Field(..., description="Message text content")


class ChatRequest(BaseModel):
    message: str = Field(
        ...,
        min_length=1,
        max_length=500,
        description="The question or prompt about Lokesh's portfolio.",
        examples=["What experience does Lokesh have with RAG?"]
    )
    history: Optional[List[ChatMessage]] = Field(
        default=None,
        description="Optional preceding conversation turns for context."
    )
    model: Optional[str] = Field(
        default=None,
        description="Optional OpenRouter model override."
    )


class ChatResponse(BaseModel):
    answer: str = Field(..., description="Grounded AI answer to user inquiry.")
    model_used: str = Field(..., description="AI model that generated the response.")
    suggested_questions: Optional[List[str]] = Field(
        default=None,
        description="Follow-up prompt suggestions."
    )


class FeedbackRequest(BaseModel):
    rating: str = Field(..., description="'positive' or 'negative'")
    question: Optional[str] = None
    answer: Optional[str] = None
    comment: Optional[str] = None
