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
    <div className="space-y-2.5 pt-2.5 font-mono">
      <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-neutral-500">
        <Sparkles className="h-3.5 w-3.5 text-[#4e3f6e] dark:text-[#c4b7d8]" />
        <span>Suggested Recruiter Questions</span>
      </div>
      <div className="flex flex-wrap gap-2">
        {questions.map((q, idx) => (
          <button
            key={idx}
            disabled={disabled}
            onClick={() => onSelect(q)}
            className="text-left text-xs sm:text-sm text-black dark:text-white bg-neutral-100 hover:bg-neutral-200 dark:bg-[#120F1A] dark:hover:bg-neutral-900 border border-neutral-200 dark:border-[#4e3f6e]/30 hover:border-[#4e3f6e]/60 rounded-xl px-3 py-2 transition-all disabled:opacity-50 disabled:pointer-events-none shadow-sm"
          >
            {q}
          </button>
        ))}
      </div>
    </div>
  );
}
