"use client";

import React from "react";
import { X, Network, ArrowRight } from "lucide-react";

export interface ProjectArchitecture {
  title: string;
  subtitle: string;
  description: string;
  flowSteps: { step: string; label: string; desc: string }[];
  components: { name: string; role: string }[];
  technologies: string[];
}

interface ArchitectureModalProps {
  isOpen: boolean;
  onClose: () => void;
  data: ProjectArchitecture | null;
}

export default function ArchitectureModal({
  isOpen,
  onClose,
  data,
}: ArchitectureModalProps) {
  if (!isOpen || !data) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/60 dark:bg-black/80 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      />

      {/* Modal Card */}
      <div className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto bg-white dark:bg-[#0D111A] border border-slate-200 dark:border-slate-700/80 rounded-2xl shadow-2xl shadow-black/20 dark:shadow-black/80 p-6 sm:p-8 z-10 text-slate-900 dark:text-slate-100">
        {/* Header */}
        <div className="flex items-start justify-between gap-4 border-b border-neutral-200 dark:border-[#4e3f6e]/30 pb-5">
          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-xl bg-[#4e3f6e]/10 dark:bg-[#4e3f6e]/25 border border-[#4e3f6e]/30 text-[#4e3f6e] dark:text-[#c4b7d8]">
              <Network className="h-5 w-5" />
            </div>
            <div>
              <span className="font-mono text-[11px] font-bold tracking-wider uppercase text-[#4e3f6e] dark:text-[#c4b7d8]">
                System Architecture
              </span>
              <h3 className="font-display text-xl sm:text-2xl font-bold text-black dark:text-white">
                {data.title}
              </h3>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-neutral-400 hover:text-black dark:hover:text-white hover:bg-neutral-100 dark:hover:bg-neutral-900 transition-colors"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {/* Content */}
        <div className="mt-6 space-y-8">
          {/* Summary */}
          <div>
            <h4 className="font-mono text-xs font-semibold uppercase tracking-wider text-neutral-500 dark:text-neutral-400 mb-2">
              Architecture Overview
            </h4>
            <p className="font-body text-sm text-neutral-700 dark:text-neutral-300 leading-relaxed">
              {data.description}
            </p>
          </div>

          {/* Sequential Data Flow */}
          <div>
            <h4 className="font-mono text-xs font-semibold uppercase tracking-wider text-neutral-500 dark:text-neutral-400 mb-4">
              Execution & Pipeline Flow
            </h4>
            <div className="space-y-3">
              {data.flowSteps.map((item, idx) => (
                <div
                  key={idx}
                  className="flex items-start gap-4 p-3.5 rounded-xl bg-white dark:bg-[#120F1A] border border-neutral-200 dark:border-[#4e3f6e]/30"
                >
                  <div className="flex items-center justify-center h-7 w-7 rounded-lg bg-[#4e3f6e]/15 text-[#4e3f6e] dark:text-[#c4b7d8] font-mono text-xs font-bold shrink-0">
                    0{idx + 1}
                  </div>
                  <div className="flex-1">
                    <div className="font-display text-sm font-semibold text-black dark:text-white flex items-center gap-2">
                      <span>{item.label}</span>
                    </div>
                    <p className="font-body text-xs text-neutral-600 dark:text-neutral-400 mt-1">{item.desc}</p>
                  </div>
                  {idx < data.flowSteps.length - 1 && (
                    <ArrowRight className="h-4 w-4 text-neutral-400 dark:text-neutral-600 shrink-0 self-center hidden sm:block" />
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Core Components */}
          <div>
            <h4 className="font-mono text-xs font-semibold uppercase tracking-wider text-neutral-500 dark:text-neutral-400 mb-3">
              Key Architecture Components
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {data.components.map((comp, idx) => (
                <div
                  key={idx}
                  className="p-3 rounded-lg bg-white dark:bg-[#120F1A] border border-neutral-200 dark:border-[#4e3f6e]/30 text-xs"
                >
                  <span className="font-display font-semibold text-[#4e3f6e] dark:text-[#c4b7d8] block mb-0.5">
                    {comp.name}
                  </span>
                  <span className="font-body text-neutral-600 dark:text-neutral-400">{comp.role}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Technology Badges */}
          <div className="pt-4 border-t border-neutral-200 dark:border-[#4e3f6e]/30">
            <h4 className="font-mono text-xs font-semibold uppercase tracking-wider text-neutral-500 dark:text-neutral-400 mb-3">
              Infrastructure & Technologies
            </h4>
            <div className="flex flex-wrap gap-2">
              {data.technologies.map((tech) => (
                <span
                  key={tech}
                  className="font-mono px-2.5 py-1 rounded-md text-xs font-medium bg-white dark:bg-black text-black dark:text-white border border-neutral-200 dark:border-[#4e3f6e]/30"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-8 pt-4 border-t border-neutral-200 dark:border-[#4e3f6e]/30 flex justify-end">
          <button
            onClick={onClose}
            className="font-mono px-4 py-2 rounded-lg text-xs font-semibold bg-neutral-100 hover:bg-neutral-200 dark:bg-neutral-900 dark:hover:bg-neutral-800 text-black dark:text-white transition-colors"
          >
            Close Architecture
          </button>
        </div>
      </div>
    </div>
  );
}
