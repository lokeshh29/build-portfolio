"use client";

import React, { useState } from "react";
import { Sparkles, X, Send, Bot, User, CornerDownLeft } from "lucide-react";

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

  const handleClose = () => {
    setInternalOpen(false);
    onClose?.();
  };

  const suggestedQuestions = [
    "What experience does Lokesh have with RAG?",
    "Tell me about AssistHub.",
    "What AWS services has Lokesh used?",
    "What was Lokesh's role at Invisibl Cloud?",
    "Has Lokesh worked with AI agents?",
  ];

  return (
    <>
      {/* Floating Launcher Button (Bottom Right) */}
      {!activeOpen && (
        <button
          onClick={() => setInternalOpen(true)}
          className="fixed bottom-6 right-6 z-40 group flex items-center gap-2.5 px-4 py-3 rounded-full bg-gradient-to-r from-sky-500 to-indigo-600 text-white font-semibold text-sm shadow-xl shadow-sky-500/25 hover:from-sky-400 hover:to-indigo-500 hover:shadow-sky-500/40 transition-all transform hover:-translate-y-1 active:translate-y-0"
          aria-label="Open AI Assistant"
        >
          <Sparkles className="h-4 w-4 text-sky-200 group-hover:rotate-12 transition-transform" />
          <span>Ask Lokesh AI</span>
        </button>
      )}

      {/* Slide-out Panel / Mobile Full-Screen Modal */}
      {activeOpen && (
        <div className="fixed inset-0 sm:inset-auto sm:bottom-6 sm:right-6 sm:w-[420px] sm:h-[580px] z-50 flex flex-col bg-[#0D111A] border border-slate-700/80 sm:rounded-2xl shadow-2xl shadow-black/80 overflow-hidden animate-in fade-in slide-in-from-bottom-6 duration-200">
          {/* Header */}
          <div className="flex items-center justify-between px-5 py-4 border-b border-slate-800 bg-[#07090E]/80 backdrop-blur-md">
            <div className="flex items-center gap-2.5">
              <div className="h-8 w-8 rounded-lg bg-sky-500/10 border border-sky-500/30 flex items-center justify-center text-sky-400">
                <Sparkles className="h-4 w-4" />
              </div>
              <div>
                <h3 className="text-sm font-bold text-white flex items-center gap-2">
                  Ask Lokesh AI
                  <span className="h-2 w-2 rounded-full bg-emerald-400"></span>
                </h3>
                <p className="text-[11px] text-slate-400">
                  Portfolio Intelligence Assistant
                </p>
              </div>
            </div>
            <button
              onClick={handleClose}
              className="p-1 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
              aria-label="Close Assistant"
            >
              <X className="h-5 w-5" />
            </button>
          </div>

          {/* Conversation Area */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4 text-xs sm:text-sm">
            {/* Welcome message */}
            <div className="flex items-start gap-3">
              <div className="h-7 w-7 rounded-lg bg-sky-500/10 border border-sky-500/30 flex items-center justify-center text-sky-400 shrink-0 mt-0.5">
                <Bot className="h-4 w-4" />
              </div>
              <div className="flex-1 p-3.5 rounded-2xl rounded-tl-none bg-slate-900/90 border border-slate-800 text-slate-200 leading-relaxed space-y-2">
                <p>
                  👋 Hi! I'm Lokesh's AI assistant. Ask me about his:
                </p>
                <ul className="list-disc list-inside text-slate-400 space-y-1 pl-1">
                  <li>Experience at Invisibl Cloud</li>
                  <li>Projects (AssistHub, Candidate Discovery, News Ranking)</li>
                  <li>RAG, AI Agents & Tool Calling</li>
                  <li>AWS, FastAPI & Docker</li>
                  <li>Education at CEG, Anna University</li>
                </ul>
              </div>
            </div>

            {/* Suggested Questions */}
            <div className="pt-2">
              <p className="text-[11px] font-semibold uppercase tracking-wider text-slate-500 mb-2">
                Suggested Questions:
              </p>
              <div className="flex flex-wrap gap-1.5">
                {suggestedQuestions.map((q, idx) => (
                  <button
                    key={idx}
                    className="px-2.5 py-1 rounded-lg text-[11px] text-left text-slate-300 bg-slate-900/80 hover:bg-slate-800 border border-slate-800 hover:border-sky-500/40 transition-all"
                  >
                    {q}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Input Box */}
          <div className="p-3 border-t border-slate-800 bg-[#07090E]/60">
            <div className="relative flex items-center">
              <input
                type="text"
                placeholder="Ask anything about Lokesh's portfolio..."
                className="w-full pl-3.5 pr-10 py-2.5 rounded-xl bg-slate-900 border border-slate-800 text-xs sm:text-sm text-slate-200 placeholder-slate-500 focus:outline-none focus:border-sky-500/50"
              />
              <button
                className="absolute right-2 p-1.5 rounded-lg bg-sky-500/10 text-sky-400 hover:bg-sky-500 hover:text-white transition-all"
                aria-label="Send message"
              >
                <Send className="h-3.5 w-3.5" />
              </button>
            </div>
            <p className="mt-1.5 text-[10px] text-center text-slate-500">
              Grounded exclusively in Lokesh's verified experience and projects.
            </p>
          </div>
        </div>
      )}
    </>
  );
}
