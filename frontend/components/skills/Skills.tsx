"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  Code2,
  Server,
  Cpu,
  Cloud,
  ShieldCheck,
  CheckCircle2,
} from "lucide-react";

export default function Skills() {
  const skillCategories = [
    {
      title: "AI & LLM Engineering",
      icon: Cpu,
      color: "text-[#4e3f6e] dark:text-[#c4b7d8]",
      bgColor: "bg-[#4e3f6e]/10 dark:bg-[#4e3f6e]/25",
      borderColor: "border-[#4e3f6e]/30",
      skills: [
        "Retrieval-Augmented Generation (RAG)",
        "AI Agents",
        "Multi-Agent Orchestration",
        "Burr",
        "Tool Calling & Function Calling",
        "Strands AgentCore",
        "LangChain",
        "Prompt Engineering",
        "Hallucination Mitigation",
        "Guardrails",
      ],
    },
    {
      title: "Backend & APIs",
      icon: Server,
      color: "text-[#4e3f6e] dark:text-[#c4b7d8]",
      bgColor: "bg-[#4e3f6e]/10 dark:bg-[#4e3f6e]/25",
      borderColor: "border-[#4e3f6e]/30",
      skills: [
        "FastAPI",
        "REST APIs",
        "Pydantic (Data Validation)",
        "Async Python (asyncio)",
        "Microservices Architecture",
      ],
    },
    {
      title: "Cloud & DevOps",
      icon: Cloud,
      color: "text-[#4e3f6e] dark:text-[#c4b7d8]",
      bgColor: "bg-[#4e3f6e]/10 dark:bg-[#4e3f6e]/25",
      borderColor: "border-[#4e3f6e]/30",
      skills: [
        "AWS Bedrock",
        "AWS S3 & Knowledge Bases",
        "AWS Lambda",
        "AWS API Gateway",
        "AWS AgentCore & IAM",
        "AWS CloudFormation",
        "Docker & DockerHub",
        "CI/CD Pipelines",
      ],
    },
    {
      title: "Programming Languages",
      icon: Code2,
      color: "text-[#4e3f6e] dark:text-[#c4b7d8]",
      bgColor: "bg-[#4e3f6e]/10 dark:bg-[#4e3f6e]/25",
      borderColor: "border-[#4e3f6e]/30",
      skills: ["Python", "Java", "JavaScript", "HTML", "CSS"],
    },
    {
      title: "AI Security & Governance",
      icon: ShieldCheck,
      color: "text-[#4e3f6e] dark:text-[#c4b7d8]",
      bgColor: "bg-[#4e3f6e]/10 dark:bg-[#4e3f6e]/25",
      borderColor: "border-[#4e3f6e]/30",
      skills: [
        "Prompt Injection Defense",
        "PII Redaction",
        "Audit Logging",
        "Model Scope & Guardrails",
      ],
    },
  ];

  return (
    <section id="skills" className="py-28 border-t border-black/10 dark:border-[#4e3f6e]/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mb-14"
        >
          <span className="font-mono text-xs sm:text-sm font-semibold uppercase tracking-[0.25em] text-[#4e3f6e] dark:text-[#c4b7d8]">
            Technical Stack
          </span>
          <h2 className="mt-3 font-display text-4xl sm:text-6xl lg:text-7xl font-extrabold text-black dark:text-white tracking-tight">
            Skills & Competencies
          </h2>
          <p className="mt-4 font-body text-neutral-600 dark:text-neutral-300 text-lg sm:text-xl leading-relaxed">
            Categorized technical capabilities spanning AI agents, RAG, backend engineering, cloud architecture, and AI governance.
          </p>
        </motion.div>

        {/* Skills Horizontal Boxes */}
        <div className="space-y-6 w-full">
          {skillCategories.map((cat, idx) => {
            const Icon = cat.icon;
            return (
              <motion.div
                key={cat.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: idx * 0.08 }}
                whileHover={{ y: -4 }}
                className="glass-card rounded-3xl p-6 sm:p-8 w-full transition-shadow duration-300 hover:border-[#4e3f6e]/60 hover:shadow-xl hover:shadow-[#4e3f6e]/10"
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
                  {/* Category Header (Left: 4 cols) */}
                  <div className="lg:col-span-4 flex items-center gap-4">
                    <div
                      className={`p-3.5 rounded-2xl ${cat.bgColor} border ${cat.borderColor} ${cat.color} shrink-0`}
                    >
                      <Icon className="h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="font-display text-xl sm:text-2xl font-bold text-black dark:text-white">
                        {cat.title}
                      </h3>
                      <span className="font-mono text-xs text-neutral-500">
                        {cat.skills.length} core competencies
                      </span>
                    </div>
                  </div>

                  {/* Skills List (Right: 8 cols) as horizontal tags */}
                  <div className="lg:col-span-8 flex flex-wrap gap-2.5 sm:gap-3">
                    {cat.skills.map((skill) => (
                      <motion.span
                        key={skill}
                        whileHover={{ scale: 1.05, y: -2 }}
                        whileTap={{ scale: 0.98 }}
                        className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl font-mono text-xs sm:text-sm font-medium bg-white dark:bg-black text-black dark:text-white border border-neutral-200 dark:border-[#4e3f6e]/30 shadow-sm hover:border-[#4e3f6e]/60 transition-colors cursor-default"
                      >
                        <CheckCircle2 className="h-4 w-4 text-[#4e3f6e] dark:text-[#c4b7d8] shrink-0" />
                        <span>{skill}</span>
                      </motion.span>
                    ))}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
