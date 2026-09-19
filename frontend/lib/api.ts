export interface ChatMessage {
  role: "user" | "assistant";
  content: string;
}

export interface ChatResponse {
  answer: string;
  model_used: string;
  suggested_questions?: string[];
}

const API_BASE =
  process.env.NEXT_PUBLIC_API_URL?.replace(/\/$/, "") || "http://localhost:8000";

/**
 * Sends a chat message to the FastAPI backend.
 */
export async function sendChatMessage(
  message: string,
  history: ChatMessage[] = []
): Promise<ChatResponse> {
  const response = await fetch(`${API_BASE}/api/v1/chat`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      message,
      history,
    }),
  });

  if (!response.ok) {
    const errorData = await response.json().catch(() => ({}));
    throw new Error(
      errorData.detail || `Server error (${response.status})`
    );
  }

  return response.json();
}

/**
 * Streams chat responses token by token via Server-Sent Events (SSE).
 */
export async function streamChatMessage(
  message: string,
  history: ChatMessage[] = [],
  onChunk: (token: string) => void,
  onDone: () => void,
  onError: (error: string) => void
) {
  try {
    const response = await fetch(`${API_BASE}/api/v1/chat/stream`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        message,
        history,
      }),
    });

    if (!response.ok) {
      throw new Error(`Streaming failed with status: ${response.status}`);
    }

    const reader = response.body?.getReader();
    if (!reader) {
      throw new Error("No readable stream received from server.");
    }

    const decoder = new TextDecoder("utf-8");
    let buffer = "";

    while (true) {
      const { done, value } = await reader.read();
      if (done) break;

      buffer += decoder.decode(value, { stream: true });
      const lines = buffer.split("\n");
      buffer = lines.pop() || "";

      for (const line of lines) {
        const trimmed = line.trim();
        if (!trimmed || !trimmed.startsWith("data: ")) continue;

        const dataStr = trimmed.slice(6).trim();
        if (dataStr === "[DONE]") {
          onDone();
          return;
        }

        try {
          const parsed = JSON.parse(dataStr);
          if (parsed.error) {
            onError(parsed.error);
            return;
          }
          if (parsed.token) {
            onChunk(parsed.token);
          }
        } catch {
          // ignore non-json keep-alive or ping
        }
      }
    }

    onDone();
  } catch (err: any) {
    onError(err.message || "An unexpected streaming error occurred.");
  }
}

/**
 * Submits user rating feedback to the backend.
 */
export async function sendFeedback(
  rating: "positive" | "negative",
  question?: string,
  answer?: string,
  comment?: string
) {
  try {
    await fetch(`${API_BASE}/api/v1/feedback`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ rating, question, answer, comment }),
    });
  } catch (e) {
    console.error("Failed to send feedback:", e);
  }
}
