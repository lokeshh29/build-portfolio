import json
import logging
from typing import AsyncGenerator
from fastapi import APIRouter, HTTPException, status, Depends
from fastapi.responses import StreamingResponse

from app.schemas.chat import (
    ChatRequest,
    ChatResponse,
    FeedbackRequest,
)
from app.core.prompt_builder import prompt_builder
from app.llm.factory import get_llm_provider
from app.llm.base import LLMProvider

logger = logging.getLogger("chat-endpoint")
router = APIRouter()


@router.post(
    "/chat",
    response_model=ChatResponse,
    summary="Ask Lokesh AI",
    description="Submits a question to Lokesh's AI Assistant and returns a grounded response.",
)
async def chat_with_assistant(
    request: ChatRequest,
    llm: LLMProvider = Depends(get_llm_provider),
):
    """
    Handles question answering using the grounded system prompt and OpenRouter.
    """
    history_dicts = (
        [h.model_dump() for h in request.history] if request.history else None
    )
    messages = prompt_builder.build_chat_messages(
        user_message=request.message,
        history=history_dicts,
    )

    answer, model_used = await llm.generate(
        messages=messages,
        model=request.model,
    )

    suggested = prompt_builder.get_suggested_questions()

    return ChatResponse(
        answer=answer,
        model_used=model_used,
        suggested_questions=suggested[:4],
    )


@router.post(
    "/chat/stream",
    summary="Stream Ask Lokesh AI Response",
    description="Server-Sent Events (SSE) streaming endpoint for live answer generation.",
)
async def stream_chat_with_assistant(
    request: ChatRequest,
    llm: LLMProvider = Depends(get_llm_provider),
):
    """
    Streams response tokens using Server-Sent Events (SSE).
    """
    history_dicts = (
        [h.model_dump() for h in request.history] if request.history else None
    )
    messages = prompt_builder.build_chat_messages(
        user_message=request.message,
        history=history_dicts,
    )

    async def event_generator() -> AsyncGenerator[str, None]:
        try:
            async for token in llm.stream_generate(
                messages=messages,
                model=request.model,
            ):
                payload = json.dumps({"token": token})
                yield f"data: {payload}\n\n"
            yield "data: [DONE]\n\n"
        except Exception as exc:
            logger.error(f"Streaming error: {exc}")
            err_payload = json.dumps({"error": str(exc)})
            yield f"data: {err_payload}\n\n"

    return StreamingResponse(
        event_generator(),
        media_type="text/event-stream",
        headers={
            "Cache-Control": "no-cache",
            "Connection": "keep-alive",
            "X-Accel-Buffering": "no",
        },
    )


@router.post(
    "/feedback",
    summary="Submit Chat Feedback",
    description="Captures thumbs up/down rating and comments on AI responses.",
)
async def submit_feedback(feedback: FeedbackRequest):
    """
    Records user feedback for observability and response improvement.
    """
    logger.info(
        f"Feedback recorded: Rating={feedback.rating}, Question='{feedback.question}'"
    )
    return {
        "status": "success",
        "rating": feedback.rating,
        "message": "Thank you for your feedback!",
    }
