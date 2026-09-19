"use client";

import React from "react";
import { Sparkles } from "lucide-react";

interface SuggestedQuestionsProps {
  questions: string[];
  onSelect: (question: string) => void;
  disabled?: boolean;
}

export default function SuggestedQuestions({
  questions,
  onSelect,
  disabled = false,
}: SuggestedQuestionsProps) {
  if (!questions || questions.length === 0) return null;

  return (
    <div className="space-y-2 pt-2 font-mono">
      <div className="flex items-center gap-1.5 text-[11px] font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-500">
        <Sparkles className="h-3 w-3 text-violet-600 dark:text-fuchsia-400" />
        <span>Suggested Recruiter Questions</span>
      </div>
      <div className="flex flex-wrap gap-1.5">
        {questions.map((q, idx) => (
          <button
            key={idx}
            disabled={disabled}
            onClick={() => onSelect(q)}
            className="text-left text-xs text-slate-800 dark:text-slate-300 bg-slate-100 hover:bg-slate-200 dark:bg-slate-900/90 dark:hover:bg-slate-800 dark:hover:text-white border border-slate-200 dark:border-slate-800 hover:border-purple-400 dark:hover:border-purple-500/40 rounded-lg px-2.5 py-1.5 transition-all disabled:opacity-50 disabled:pointer-events-none shadow-sm"
          >
            {q}
          </button>
        ))}
      </div>
    </div>
  );
}
