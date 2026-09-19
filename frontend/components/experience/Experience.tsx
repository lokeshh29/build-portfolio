import React from "react";
import { Building2, Calendar, Clock, CheckCircle2 } from "lucide-react";

export default function Experience() {
  const highlights = [
    "Built AI agent-based solutions and LLM workflows.",
    "Developed Python backend services for production AI systems.",
    "Worked with AWS cloud infrastructure for scalable AI applications.",
    "Designed and integrated AI agents and agentic workflows.",
    "Collaborated directly with clients and converted feedback into technical improvements.",
  ];

  return (
    <section id="experience" className="py-24 border-t border-slate-200 dark:border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mb-12">
          <span className="font-mono text-xs font-semibold uppercase tracking-widest text-violet-600 dark:text-fuchsia-400">
            Work History
          </span>
          <h2 className="mt-2 font-display text-3xl sm:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Professional Experience
          </h2>
          <p className="mt-3 font-body text-slate-600 dark:text-slate-400 text-base sm:text-lg">
            Hands-on experience engineering production-grade AI agents, cloud APIs, and client-facing solutions.
          </p>
        </div>

        {/* Experience Timeline Card */}
        <div className="max-w-4xl">
          <div className="relative pl-6 sm:pl-8 border-l border-purple-400/40 dark:border-purple-500/30 space-y-10">
            {/* Timeline Dot */}
            <div className="absolute -left-2.5 top-1.5 h-5 w-5 rounded-full border-4 border-white dark:border-[#0A0A0F] bg-gradient-to-r from-violet-600 to-fuchsia-600 shadow-sm shadow-purple-500/50" />

            <div className="glass-card rounded-2xl p-6 sm:p-8 space-y-6">
              {/* Header */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-slate-200 dark:border-slate-800/80">
                <div>
                  <div className="flex items-center gap-2.5">
                    <span className="inline-block px-2.5 py-0.5 rounded font-mono text-[11px] font-bold tracking-wider uppercase bg-violet-50 dark:bg-violet-500/10 text-violet-700 dark:text-fuchsia-400 border border-violet-200 dark:border-violet-500/30">
                      Internship
                    </span>
                    <h3 className="font-display text-xl sm:text-2xl font-bold text-slate-900 dark:text-white">
                      AI/ML Engineer Intern
                    </h3>
                  </div>
                  <div className="mt-2 flex items-center gap-2 font-display text-base font-semibold text-slate-800 dark:text-slate-200">
                    <Building2 className="h-4 w-4 text-violet-600 dark:text-fuchsia-400" />
                    <span>Invisibl Cloud</span>
                  </div>
                </div>

                <div className="font-mono text-xs text-slate-600 dark:text-slate-400 space-y-1 sm:text-right">
                  <div className="flex items-center sm:justify-end gap-1.5 font-medium text-slate-800 dark:text-slate-200">
                    <Calendar className="h-3.5 w-3.5 text-violet-600 dark:text-fuchsia-400" />
                    <span>June 2025 – August 2026</span>
                  </div>
                  <div className="flex items-center sm:justify-end gap-1.5">
                    <Clock className="h-3.5 w-3.5 text-slate-500" />
                    <span>1 year 3 months (8 mos Full-Time • 7 mos Part-Time)</span>
                  </div>
                </div>
              </div>

              {/* Responsibilities & Achievements */}
              <div>
                <h4 className="font-mono text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-4">
                  Key Responsibilities & Deliverables:
                </h4>
                <ul className="space-y-3">
                  {highlights.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3 font-body text-sm sm:text-base text-slate-700 dark:text-slate-300">
                      <CheckCircle2 className="h-5 w-5 text-violet-600 dark:text-fuchsia-400 shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Tags */}
              <div className="pt-4 border-t border-slate-200 dark:border-slate-800/80 flex flex-wrap gap-2">
                {[
                  "AI Agents",
                  "Agentic Workflows",
                  "LLMs",
                  "Python",
                  "FastAPI",
                  "AWS Bedrock",
                  "AWS S3 / Lambda",
                  "Client Collaboration",
                ].map((skill) => (
                  <span
                    key={skill}
                    className="font-mono px-2.5 py-1 rounded-md text-xs font-medium bg-slate-100 dark:bg-slate-900 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-800"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
