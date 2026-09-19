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
            ? "bg-slate-200 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-300 dark:border-slate-700"
            : "bg-violet-50 dark:bg-violet-500/10 text-violet-600 dark:text-fuchsia-400 border border-violet-200 dark:border-violet-500/30"
        }`}
      >
        {isUser ? <User className="h-4 w-4" /> : <Bot className="h-4 w-4" />}
      </div>

      {/* Message Bubble */}
      <div
        className={`max-w-[82%] sm:max-w-[85%] rounded-2xl p-3.5 leading-relaxed font-body ${
          isUser
            ? "bg-gradient-to-r from-violet-600 to-purple-600 text-white rounded-tr-none font-medium shadow-sm shadow-purple-500/20"
            : "bg-slate-100 dark:bg-slate-900/90 text-slate-800 dark:text-slate-200 border border-slate-200 dark:border-purple-500/20 rounded-tl-none shadow-sm"
        }`}
      >
        {/* Text Content */}
        <div className="whitespace-pre-wrap break-words">
          {content}
          {isStreaming && (
            <span className="inline-block w-1.5 h-4 ml-1 bg-fuchsia-500 animate-pulse align-middle" />
          )}
        </div>

        {/* Action Bar for Assistant Messages */}
        {!isUser && !isStreaming && content && (
          <div className="mt-3 pt-2.5 border-t border-slate-200 dark:border-slate-800/80 flex items-center justify-between text-slate-500 dark:text-slate-400 font-mono text-[11px]">
            {/* Copy Button */}
            <button
              onClick={handleCopy}
              className="inline-flex items-center gap-1.5 hover:text-slate-900 dark:hover:text-slate-200 transition-colors py-0.5"
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
                className={`p-1 rounded hover:text-violet-600 dark:hover:text-fuchsia-400 transition-colors ${
                  feedbackGiven === "positive"
                    ? "text-violet-600 dark:text-fuchsia-400 bg-violet-100 dark:bg-violet-500/10"
                    : "hover:bg-slate-200 dark:hover:bg-slate-800"
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
                    : "hover:bg-slate-200 dark:hover:bg-slate-800"
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
