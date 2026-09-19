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
        <div className="flex items-start justify-between gap-4 border-b border-slate-200 dark:border-slate-800 pb-5">
          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-xl bg-violet-50 dark:bg-violet-500/10 border border-violet-200 dark:border-violet-500/30 text-violet-600 dark:text-fuchsia-400">
              <Network className="h-5 w-5" />
            </div>
            <div>
              <span className="font-mono text-[11px] font-bold tracking-wider uppercase text-violet-600 dark:text-fuchsia-400">
                System Architecture
              </span>
              <h3 className="font-display text-xl sm:text-2xl font-bold text-slate-900 dark:text-white">
                {data.title}
              </h3>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {/* Content */}
        <div className="mt-6 space-y-8">
          {/* Summary */}
          <div>
            <h4 className="font-mono text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-2">
              Architecture Overview
            </h4>
            <p className="font-body text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
              {data.description}
            </p>
          </div>

          {/* Sequential Data Flow */}
          <div>
            <h4 className="font-mono text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-4">
              Execution & Pipeline Flow
            </h4>
            <div className="space-y-3">
              {data.flowSteps.map((item, idx) => (
                <div
                  key={idx}
                  className="flex items-start gap-4 p-3.5 rounded-xl bg-slate-50 dark:bg-slate-900/90 border border-slate-200 dark:border-slate-800/80"
                >
                  <div className="flex items-center justify-center h-7 w-7 rounded-lg bg-violet-100 dark:bg-violet-500/15 text-violet-700 dark:text-fuchsia-400 font-mono text-xs font-bold shrink-0">
                    0{idx + 1}
                  </div>
                  <div className="flex-1">
                    <div className="font-display text-sm font-semibold text-slate-900 dark:text-white flex items-center gap-2">
                      <span>{item.label}</span>
                    </div>
                    <p className="font-body text-xs text-slate-600 dark:text-slate-400 mt-1">{item.desc}</p>
                  </div>
                  {idx < data.flowSteps.length - 1 && (
                    <ArrowRight className="h-4 w-4 text-slate-400 dark:text-slate-600 shrink-0 self-center hidden sm:block" />
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Core Components */}
          <div>
            <h4 className="font-mono text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-3">
              Key Architecture Components
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {data.components.map((comp, idx) => (
                <div
                  key={idx}
                  className="p-3 rounded-lg bg-slate-50 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 text-xs"
                >
                  <span className="font-display font-semibold text-violet-700 dark:text-fuchsia-300 block mb-0.5">
                    {comp.name}
                  </span>
                  <span className="font-body text-slate-600 dark:text-slate-400">{comp.role}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Technology Badges */}
          <div className="pt-4 border-t border-slate-200 dark:border-slate-800">
            <h4 className="font-mono text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-3">
              Infrastructure & Technologies
            </h4>
            <div className="flex flex-wrap gap-2">
              {data.technologies.map((tech) => (
                <span
                  key={tech}
                  className="font-mono px-2.5 py-1 rounded-md text-xs font-medium bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-8 pt-4 border-t border-slate-200 dark:border-slate-800 flex justify-end">
          <button
            onClick={onClose}
            className="font-mono px-4 py-2 rounded-lg text-xs font-semibold bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200 transition-colors"
          >
            Close Architecture
          </button>
        </div>
      </div>
    </div>
  );
}
