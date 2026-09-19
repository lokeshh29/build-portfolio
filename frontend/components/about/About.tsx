"use client";

import React from "react";
import { Cpu, Network, Cloud, ShieldCheck } from "lucide-react";
import { motion } from "framer-motion";

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
    <section id="about" className="py-24 border-t border-black/10 dark:border-[#4e3f6e]/30 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Narrative with motion reveal */}
          <motion.div
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.65, ease: "easeOut" }}
            className="lg:col-span-6 space-y-6"
          >
            <div>
              <span className="font-mono text-xs sm:text-sm font-semibold uppercase tracking-[0.25em] text-[#4e3f6e] dark:text-[#c4b7d8]">
                About Me
              </span>
              <h2 className="mt-3 font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-black dark:text-white tracking-tight leading-[1.15]">
                Prototype to Production.
              </h2>
            </div>

            <div className="space-y-5 text-neutral-700 dark:text-neutral-300 leading-relaxed text-lg sm:text-xl font-body">
              <p>
                I'm <span className="text-black dark:text-white font-semibold">Lokesh Kumar R</span>, an AI/ML Engineer focused on building production-oriented AI systems.
              </p>
              <p>
                My work spans AI agents, retrieval-augmented generation, LLM workflows, backend APIs, and cloud-native architectures.
              </p>
              <p>
                I have worked on AI applications using Python, FastAPI, AWS, RAG, multi-agent systems, and tool-calling architectures.
              </p>
              <p className="text-neutral-600 dark:text-neutral-400">
                I enjoy turning AI prototypes into reliable systems with guardrails, observability, APIs, and deployment infrastructure.
              </p>
            </div>

            <div className="pt-4 flex items-center gap-3 font-mono text-sm sm:text-base text-[#4e3f6e] dark:text-[#c4b7d8] font-medium">
              <ShieldCheck className="h-5 w-5 text-[#4e3f6e] dark:text-[#c4b7d8] shrink-0" />
              <span>Prioritizing prompt injection defense, PII protection, and strict model grounding.</span>
            </div>
          </motion.div>

          {/* Right Column: Key Pillars with staggered entrance and interactive hover */}
          <div className="lg:col-span-6 space-y-5">
            {pillars.map((pillar, idx) => {
              const Icon = pillar.icon;
              return (
                <motion.div
                  key={pillar.title}
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ duration: 0.5, delay: idx * 0.15, ease: "easeOut" }}
                  whileHover={{ x: 6, transition: { duration: 0.2 } }}
                  className="glass-card p-7 sm:p-8 rounded-3xl transition-all duration-300 hover:border-[#4e3f6e]/60"
                >
                  <div className="flex items-start gap-5">
                    <div className="p-3 rounded-2xl bg-[#4e3f6e]/10 dark:bg-[#4e3f6e]/25 border border-[#4e3f6e]/30 text-[#4e3f6e] dark:text-[#c4b7d8] shrink-0">
                      <Icon className="h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="font-display text-xl sm:text-2xl font-bold text-black dark:text-white">
                        {pillar.title}
                      </h3>
                      <p className="mt-2 font-body text-base sm:text-lg text-neutral-600 dark:text-neutral-400 leading-relaxed">
                        {pillar.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
