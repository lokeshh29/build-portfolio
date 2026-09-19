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
    <div className="space-y-2 pt-2">
      <div className="flex items-center gap-1.5 text-[11px] font-semibold uppercase tracking-wider text-slate-500">
        <Sparkles className="h-3 w-3 text-sky-400" />
        <span>Suggested Recruiter Questions</span>
      </div>
      <div className="flex flex-wrap gap-1.5">
        {questions.map((q, idx) => (
          <button
            key={idx}
            disabled={disabled}
            onClick={() => onSelect(q)}
            className="text-left text-xs text-slate-300 bg-slate-900/90 hover:bg-slate-800 hover:text-white border border-slate-800 hover:border-sky-500/40 rounded-lg px-2.5 py-1.5 transition-all disabled:opacity-50 disabled:pointer-events-none"
          >
            {q}
          </button>
        ))}
      </div>
    </div>
  );
}
