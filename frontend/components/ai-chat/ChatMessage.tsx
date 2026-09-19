"use client";

import React, { useState } from "react";
import { Bot, User, Copy, Check, ThumbsUp, ThumbsDown } from "lucide-react";
import { sendFeedback } from "@/lib/api";

interface ChatMessageProps {
  role: "user" | "assistant";
  content: string;
  isStreaming?: boolean;
}

export default function ChatMessage({
  role,
  content,
  isStreaming = false,
}: ChatMessageProps) {
  const [copied, setCopied] = useState(false);
  const [feedbackGiven, setFeedbackGiven] = useState<"positive" | "negative" | null>(
    null
  );

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(content);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy:", err);
    }
  };

  const handleFeedback = (rating: "positive" | "negative") => {
    if (feedbackGiven) return;
    setFeedbackGiven(rating);
    sendFeedback(rating, undefined, content);
  };

  const isUser = role === "user";

  return (
    <div
      className={`flex items-start gap-3 text-xs sm:text-sm ${
        isUser ? "flex-row-reverse" : "flex-row"
      }`}
    >
      {/* Avatar */}
      <div
        className={`h-7 w-7 rounded-lg flex items-center justify-center shrink-0 mt-0.5 ${
          isUser
            ? "bg-neutral-200 dark:bg-neutral-800 text-black dark:text-white border border-neutral-300 dark:border-neutral-700"
            : "bg-[#4e3f6e]/10 dark:bg-[#4e3f6e]/25 text-[#4e3f6e] dark:text-[#c4b7d8] border border-[#4e3f6e]/30"
        }`}
      >
        {isUser ? <User className="h-4 w-4" /> : <Bot className="h-4 w-4" />}
      </div>

      {/* Message Bubble */}
      <div
        className={`max-w-[82%] sm:max-w-[85%] rounded-2xl p-3.5 leading-relaxed font-body ${
          isUser
            ? "bg-[#4e3f6e] text-white rounded-tr-none font-medium shadow-sm shadow-[#4e3f6e]/30"
            : "bg-neutral-100 dark:bg-[#120F1A] text-black dark:text-white border border-neutral-200 dark:border-[#4e3f6e]/30 rounded-tl-none shadow-sm"
        }`}
      >
        {/* Text Content */}
        <div className="whitespace-pre-wrap break-words">
          {content}
          {isStreaming && (
            <span className="inline-block w-1.5 h-4 ml-1 bg-[#4e3f6e] animate-pulse align-middle" />
          )}
        </div>

        {/* Action Bar for Assistant Messages */}
        {!isUser && !isStreaming && content && (
          <div className="mt-3 pt-2.5 border-t border-neutral-200 dark:border-[#4e3f6e]/30 flex items-center justify-between text-neutral-500 font-mono text-[11px]">
            {/* Copy Button */}
            <button
              onClick={handleCopy}
              className="inline-flex items-center gap-1.5 hover:text-black dark:hover:text-white transition-colors py-0.5"
              title="Copy to clipboard"
            >
              {copied ? (
                <>
                  <Check className="h-3.5 w-3.5 text-emerald-600 dark:text-emerald-400" />
                  <span className="text-emerald-600 dark:text-emerald-400">Copied</span>
                </>
              ) : (
                <>
                  <Copy className="h-3.5 w-3.5" />
                  <span>Copy</span>
                </>
              )}
            </button>

            {/* Feedback Rating */}
            <div className="flex items-center gap-2">
              <button
                onClick={() => handleFeedback("positive")}
                disabled={feedbackGiven !== null}
                className={`p-1 rounded hover:text-[#4e3f6e] dark:hover:text-[#c4b7d8] transition-colors ${
                  feedbackGiven === "positive"
                    ? "text-[#4e3f6e] dark:text-[#c4b7d8] bg-[#4e3f6e]/15"
                    : "hover:bg-neutral-200 dark:hover:bg-neutral-800"
                }`}
                title="Helpful response"
              >
                <ThumbsUp className="h-3 w-3" />
              </button>
              <button
                onClick={() => handleFeedback("negative")}
                disabled={feedbackGiven !== null}
                className={`p-1 rounded hover:text-rose-600 dark:hover:text-rose-400 transition-colors ${
                  feedbackGiven === "negative"
                    ? "text-rose-600 dark:text-rose-400 bg-rose-100 dark:bg-rose-500/10"
                    : "hover:bg-neutral-200 dark:hover:bg-neutral-800"
                }`}
                title="Not helpful"
              >
                <ThumbsDown className="h-3 w-3" />
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
