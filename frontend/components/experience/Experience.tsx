import React from "react";
import { Building2, Calendar, Clock, CheckCircle2 } from "lucide-react";

export default function Experience() {
  const highlights = [
    "Working as an AI/ML Engineer for 1 year 3 months (8 months full-time, 7 months part-time), developing AI agent-based solutions, LLM-powered workflows, Python backend services, and cloud-native applications on AWS for scalable, production-ready solutions.",
    "Developed and integrated AI agents and agentic workflows, leveraging AWS cloud services to deploy, manage, and optimize AI applications for scalability, reliability, and performance.",
    "Collaborated directly with clients to gather feedback on product releases, translate requirements into technical improvements, and deliver iterative updates aligned with evolving business needs.",
  ];

  return (
    <section id="experience" className="py-24 border-t border-black/10 dark:border-[#4e3f6e]/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mb-12">
          <span className="font-mono text-xs font-semibold uppercase tracking-widest text-[#4e3f6e] dark:text-[#c4b7d8]">
            Work History
          </span>
          <h2 className="mt-2 font-display text-3xl sm:text-5xl font-extrabold text-black dark:text-white tracking-tight">
            Professional Experience
          </h2>
          <p className="mt-3 font-body text-neutral-600 dark:text-neutral-400 text-base sm:text-lg">
            Hands-on experience engineering production-grade AI agents, cloud APIs, and client-facing solutions.
          </p>
        </div>

        {/* Experience Timeline Card */}
        <div className="max-w-4xl">
          <div className="relative pl-6 sm:pl-8 border-l border-[#4e3f6e]/30 dark:border-[#4e3f6e]/50 space-y-10">
            {/* Timeline Dot */}
            <div className="absolute -left-2.5 top-1.5 h-5 w-5 rounded-full border-4 border-white dark:border-black bg-[#4e3f6e] shadow-sm shadow-[#4e3f6e]/50" />

            <div className="glass-card rounded-2xl p-6 sm:p-8 space-y-6">
              {/* Header */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-neutral-200 dark:border-[#4e3f6e]/30">
                <div>
                  <div className="flex items-center gap-2.5">
                    <span className="inline-block px-2.5 py-0.5 rounded font-mono text-[11px] font-bold tracking-wider uppercase bg-[#4e3f6e]/10 dark:bg-[#4e3f6e]/25 text-[#4e3f6e] dark:text-[#c4b7d8] border border-[#4e3f6e]/30">
                      Current Position
                    </span>
                    <h3 className="font-display text-xl sm:text-2xl font-bold text-black dark:text-white">
                      AI/ML Engineer Intern
                    </h3>
                  </div>
                  <div className="mt-2 flex items-center gap-2 font-display text-base font-semibold text-neutral-800 dark:text-neutral-200">
                    <Building2 className="h-4 w-4 text-[#4e3f6e] dark:text-[#c4b7d8]" />
                    <span>Invisibl Cloud</span>
                  </div>
                </div>

                <div className="font-mono text-xs text-neutral-600 dark:text-neutral-400 space-y-1 sm:text-right">
                  <div className="flex items-center sm:justify-end gap-1.5 font-medium text-black dark:text-white">
                    <Calendar className="h-3.5 w-3.5 text-[#4e3f6e] dark:text-[#c4b7d8]" />
                    <span>June 2025 – Present</span>
                  </div>
                  <div className="flex items-center sm:justify-end gap-1.5">
                    <Clock className="h-3.5 w-3.5 text-neutral-500" />
                    <span>1 year 3 months (8 mos Full-Time • 7 mos Part-Time • Present)</span>
                  </div>
                </div>
              </div>

              {/* Responsibilities & Achievements */}
              <div>
                <h4 className="font-mono text-xs font-semibold uppercase tracking-wider text-neutral-500 dark:text-neutral-400 mb-4">
                  Key Responsibilities & Deliverables:
                </h4>
                <ul className="space-y-3">
                  {highlights.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3 font-body text-sm sm:text-base text-neutral-700 dark:text-neutral-300">
                      <CheckCircle2 className="h-5 w-5 text-[#4e3f6e] dark:text-[#c4b7d8] shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Tags */}
              <div className="pt-4 border-t border-neutral-200 dark:border-[#4e3f6e]/30 flex flex-wrap gap-2">
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
                    className="font-mono px-2.5 py-1 rounded-md text-xs font-medium bg-white dark:bg-black text-black dark:text-white border border-neutral-200 dark:border-[#4e3f6e]/30"
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
