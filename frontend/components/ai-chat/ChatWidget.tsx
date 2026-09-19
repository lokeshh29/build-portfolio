"use client";

import React, { useState, useRef, useEffect } from "react";
import {
  Sparkles,
  X,
  Send,
  Trash2,
  AlertCircle,
  RefreshCw,
  Loader2,
} from "lucide-react";
import ChatMessage from "./ChatMessage";
import SuggestedQuestions from "./SuggestedQuestions";
import { streamChatMessage, ChatMessage as MessageType } from "@/lib/api";

interface ChatWidgetProps {
  isOpen?: boolean;
  onClose?: () => void;
}

export default function ChatWidget({
  isOpen = false,
  onClose,
}: ChatWidgetProps) {
  const [internalOpen, setInternalOpen] = useState(false);
  const activeOpen = isOpen || internalOpen;

  const [inputMessage, setInputMessage] = useState("");
  const [messages, setMessages] = useState<MessageType[]>([
    {
      role: "assistant",
      content:
        "👋 Hi! I'm Lokesh's AI Assistant. Ask me about his experience at Invisibl Cloud, production projects (AssistHub, Candidate Discovery, News Ranking), RAG and AI Agents, or his background in Computer Science at CEG, Anna University.",
    },
  ]);
  const [isStreaming, setIsStreaming] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const defaultSuggestions = [
    "What experience does Lokesh have with RAG?",
    "Tell me about AssistHub.",
    "What AWS services has Lokesh used?",
    "What was Lokesh's role at Invisibl Cloud?",
    "Has Lokesh worked with AI agents?",
    "What backend technologies does Lokesh use?",
  ];

  const handleClose = () => {
    setInternalOpen(false);
    onClose?.();
  };

  useEffect(() => {
    if (activeOpen) {
      setTimeout(() => inputRef.current?.focus(), 150);
    }
  }, [activeOpen]);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isStreaming]);

  const handleSendMessage = async (textToSend?: string) => {
    const query = (textToSend || inputMessage).trim();
    if (!query || isStreaming) return;

    setInputMessage("");
    setError(null);

    const updatedMessages: MessageType[] = [
      ...messages,
      { role: "user", content: query },
    ];
    setMessages(updatedMessages);
    setIsStreaming(true);

    // Placeholder assistant message for incoming stream
    setMessages((prev) => [...prev, { role: "assistant", content: "" }]);

    let accumulatedAnswer = "";

    await streamChatMessage(
      query,
      updatedMessages.slice(1, -1),
      (chunk) => {
        accumulatedAnswer += chunk;
        setMessages((prev) => {
          const newArr = [...prev];
          newArr[newArr.length - 1] = {
            role: "assistant",
            content: accumulatedAnswer,
          };
          return newArr;
        });
      },
      () => {
        setIsStreaming(false);
      },
      (err) => {
        setIsStreaming(false);
        setError(err || "Failed to generate answer. Please try again.");
      }
    );
  };

  const handleClearChat = () => {
    setMessages([
      {
        role: "assistant",
        content:
          "Conversation cleared. Feel free to ask any question about Lokesh's projects, experience, or technical skills!",
      },
    ]);
    setError(null);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  return (
    <>
      {/* Floating Trigger Button */}
      {!activeOpen && (
        <button
          onClick={() => setInternalOpen(true)}
          className="fixed bottom-6 right-6 z-40 group flex items-center gap-2.5 px-4 py-3 rounded-full bg-gradient-to-r from-violet-600 to-fuchsia-600 text-white font-mono font-semibold text-xs sm:text-sm shadow-xl shadow-purple-500/25 hover:from-violet-500 hover:to-fuchsia-500 hover:shadow-purple-500/40 transition-all transform hover:-translate-y-1 active:translate-y-0"
          aria-label="Ask Lokesh AI"
        >
          <span className="relative flex h-2.5 w-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-fuchsia-200 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-white"></span>
          </span>
          <Sparkles className="h-4 w-4 text-purple-200 group-hover:rotate-12 transition-transform" />
          <span>Ask Lokesh AI</span>
        </button>
      )}

      {/* Slide-out Panel / Mobile Full-Screen Modal */}
      {activeOpen && (
        <div className="fixed inset-0 sm:inset-auto sm:bottom-6 sm:right-6 sm:w-[420px] sm:h-[600px] z-50 flex flex-col bg-white dark:bg-[#0E0E17] border border-slate-200 dark:border-purple-500/20 sm:rounded-2xl shadow-2xl shadow-black/10 dark:shadow-black/80 overflow-hidden animate-in fade-in slide-in-from-bottom-6 duration-200">
          {/* Header */}
          <div className="flex items-center justify-between px-5 py-3.5 border-b border-slate-200 dark:border-slate-800 bg-slate-50/90 dark:bg-[#07070C]/90 backdrop-blur-md">
            <div className="flex items-center gap-2.5">
              <div className="h-8 w-8 rounded-lg bg-violet-50 dark:bg-violet-500/10 border border-violet-200 dark:border-violet-500/30 flex items-center justify-center text-violet-600 dark:text-fuchsia-400">
                <Sparkles className="h-4 w-4" />
              </div>
              <div>
                <h3 className="font-display text-sm font-bold text-slate-900 dark:text-white flex items-center gap-2">
                  Ask Lokesh AI
                  <span className="h-2 w-2 rounded-full bg-emerald-500"></span>
                </h3>
                <p className="font-mono text-[11px] text-slate-500 dark:text-slate-400">
                  Portfolio Intelligence Assistant
                </p>
              </div>
            </div>

            <div className="flex items-center gap-1">
              <button
                onClick={handleClearChat}
                className="p-1.5 rounded-lg text-slate-400 hover:text-slate-700 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
                title="Clear conversation"
              >
                <Trash2 className="h-4 w-4" />
              </button>
              <button
                onClick={handleClose}
                className="p-1.5 rounded-lg text-slate-400 hover:text-slate-700 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
                aria-label="Close assistant"
              >
                <X className="h-5 w-5" />
              </button>
            </div>
          </div>

          {/* Conversation Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4 text-xs sm:text-sm bg-slate-50/50 dark:bg-transparent font-body">
            {messages.map((msg, idx) => (
              <ChatMessage
                key={idx}
                role={msg.role}
                content={msg.content}
                isStreaming={
                  isStreaming &&
                  idx === messages.length - 1 &&
                  msg.role === "assistant"
                }
              />
            ))}

            {/* Error Message with Retry */}
            {error && (
              <div className="p-3 rounded-xl bg-rose-50 dark:bg-rose-500/10 border border-rose-200 dark:border-rose-500/30 text-rose-700 dark:text-rose-300 text-xs flex items-center justify-between gap-3">
                <div className="flex items-center gap-2">
                  <AlertCircle className="h-4 w-4 shrink-0 text-rose-500 dark:text-rose-400" />
                  <span>{error}</span>
                </div>
                <button
                  onClick={() => handleSendMessage()}
                  className="inline-flex items-center gap-1 text-[11px] font-semibold text-rose-700 dark:text-rose-200 hover:underline shrink-0 font-mono"
                >
                  <RefreshCw className="h-3 w-3" />
                  <span>Retry</span>
                </button>
              </div>
            )}

            {/* Suggested Questions */}
            {!isStreaming && messages.length <= 2 && (
              <SuggestedQuestions
                questions={defaultSuggestions}
                onSelect={(q) => handleSendMessage(q)}
                disabled={isStreaming}
              />
            )}

            <div ref={messagesEndRef} />
          </div>

          {/* Input Box */}
          <div className="p-3 border-t border-slate-200 dark:border-slate-800 bg-white dark:bg-[#07070C]/80">
            <div className="relative flex items-center">
              <input
                ref={inputRef}
                type="text"
                value={inputMessage}
                onChange={(e) => setInputMessage(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder={
                  isStreaming
                    ? "Generating answer..."
                    : "Ask anything about Lokesh's portfolio..."
                }
                disabled={isStreaming}
                maxLength={500}
                className="w-full pl-3.5 pr-10 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-xs sm:text-sm text-slate-900 dark:text-slate-200 placeholder-slate-400 dark:placeholder-slate-500 focus:outline-none focus:border-purple-500/50 disabled:opacity-60 font-body"
              />
              <button
                onClick={() => handleSendMessage()}
                disabled={!inputMessage.trim() || isStreaming}
                className="absolute right-2 p-1.5 rounded-lg bg-violet-50 dark:bg-violet-500/10 text-violet-600 dark:text-fuchsia-400 hover:bg-violet-600 hover:text-white dark:hover:bg-violet-600 dark:hover:text-white transition-all disabled:opacity-40 disabled:pointer-events-none"
                aria-label="Send message"
              >
                {isStreaming ? (
                  <Loader2 className="h-3.5 w-3.5 animate-spin" />
                ) : (
                  <Send className="h-3.5 w-3.5" />
                )}
              </button>
            </div>
            <p className="mt-1.5 font-mono text-[10px] text-center text-slate-500">
              Grounded exclusively in Lokesh's verified portfolio knowledge.
            </p>
          </div>
        </div>
      )}
    </>
  );
}
