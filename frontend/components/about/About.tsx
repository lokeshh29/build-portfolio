import React from "react";
import { Cpu, Network, Cloud, ShieldCheck } from "lucide-react";

export default function About() {
  const pillars = [
    {
      icon: Network,
      title: "AI Agents & Tool Calling",
      description:
        "Designing autonomous, multi-agent workflows, supervisor agents, and tool-calling architectures for real-world execution.",
    },
    {
      icon: Cpu,
      title: "Grounded RAG Systems",
      description:
        "Developing context-aware retrieval pipelines with strict hallucination mitigation, semantic chunking, and source citations.",
    },
    {
      icon: Cloud,
      title: "Production APIs & Cloud",
      description:
        "Building asynchronous Python backends using FastAPI, containerized with Docker, and architected on AWS cloud services.",
    },
  ];

  return (
    <section id="about" className="py-20 border-t border-slate-800/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Narrative */}
          <div className="lg:col-span-6 space-y-6">
            <div>
              <span className="text-xs font-semibold uppercase tracking-wider text-sky-400">
                About Me
              </span>
              <h2 className="mt-2 text-3xl sm:text-4xl font-bold text-white tracking-tight">
                Engineering AI from Prototype to Production.
              </h2>
            </div>

            <div className="space-y-4 text-slate-300 leading-relaxed text-base">
              <p>
                I'm <span className="text-white font-medium">Lokesh Kumar R</span>, an AI/ML Engineer focused on building production-oriented AI systems.
              </p>
              <p>
                My work spans AI agents, retrieval-augmented generation, LLM workflows, backend APIs, and cloud-native architectures.
              </p>
              <p>
                I have worked on AI applications using Python, FastAPI, AWS, RAG, multi-agent systems, and tool-calling architectures.
              </p>
              <p className="text-slate-400">
                I enjoy turning AI prototypes into reliable systems with guardrails, observability, APIs, and deployment infrastructure.
              </p>
            </div>

            <div className="pt-2 flex items-center gap-2 text-xs text-sky-400/90 font-medium">
              <ShieldCheck className="h-4 w-4" />
              <span>Prioritizing prompt injection defense, PII protection, and strict model grounding.</span>
            </div>
          </div>

          {/* Right Column: Key Pillars */}
          <div className="lg:col-span-6 space-y-4">
            {pillars.map((pillar) => {
              const Icon = pillar.icon;
              return (
                <div
                  key={pillar.title}
                  className="glass-card p-6 rounded-2xl transition-all duration-300 hover:translate-x-1"
                >
                  <div className="flex items-start gap-4">
                    <div className="p-2.5 rounded-xl bg-sky-500/10 border border-sky-500/20 text-sky-400 shrink-0">
                      <Icon className="h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="text-base font-semibold text-white">
                        {pillar.title}
                      </h3>
                      <p className="mt-1.5 text-sm text-slate-400 leading-relaxed">
                        {pillar.description}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
