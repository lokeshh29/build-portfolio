"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Code2,
  Server,
  Cpu,
  Cloud,
  ShieldCheck,
  CheckCircle2,
  Briefcase,
  Info,
} from "lucide-react";

interface SkillObject {
  name: string;
  description: string;
}

type SkillItem = string | SkillObject;

export default function Skills() {
  const [activeTooltip, setActiveTooltip] = useState<string | null>(null);

  const skillCategories: {
    title: string;
    icon: React.ElementType;
    color: string;
    bgColor: string;
    borderColor: string;
    skills: SkillItem[];
  }[] = [
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
      title: "Domain Experience",
      icon: Briefcase,
      color: "text-[#4e3f6e] dark:text-[#c4b7d8]",
      bgColor: "bg-[#4e3f6e]/10 dark:bg-[#4e3f6e]/25",
      borderColor: "border-[#4e3f6e]/30",
      skills: [
        {
          name: "FinTech",
          description:
            "Worked on AI/ML solutions at Invisibl Cloud for financial-services use cases, including financial document analysis and accurate information extraction.",
        },
        {
          name: "Enterprise AI Systems",
          description:
            "Built AI agents, LLM workflows, backend APIs, and AWS-based applications for business use cases.",
        },
        {
          name: "HR Technology",
          description:
            "Developed AssistHub, an AI-powered HR assistant for accessing company policies and internal information through a conversational interface.",
        },
        {
          name: "Recruitment Technology",
          description:
            "Built an intelligent candidate discovery agent for candidate screening, scoring, and ranking using job descriptions, skills, and professional history.",
        },
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
            Categorized technical capabilities spanning AI agents, RAG, backend engineering, cloud architecture, and domain expertise.
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
                className="glass-card rounded-3xl p-5 sm:p-6 lg:p-8 w-full transition-shadow duration-300 hover:border-[#4e3f6e]/60 hover:shadow-xl hover:shadow-[#4e3f6e]/10"
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
                    {cat.skills.map((skill) => {
                      const name = typeof skill === "string" ? skill : skill.name;
                      const description = typeof skill === "object" ? skill.description : undefined;
                      const isActive = activeTooltip === name;

                      return (
                        <div key={name} className="relative group inline-block">
                          <motion.button
                            type="button"
                            whileHover={{ scale: 1.05, y: -2 }}
                            whileTap={{ scale: 0.98 }}
                            onMouseEnter={() => description && setActiveTooltip(name)}
                            onMouseLeave={() => setActiveTooltip(null)}
                            onClick={() => {
                              if (description) {
                                setActiveTooltip(isActive ? null : name);
                              }
                            }}
                            className={`inline-flex items-center gap-2 px-3.5 py-2 rounded-xl font-mono text-xs sm:text-sm font-medium transition-all text-left ${
                              description
                                ? "cursor-pointer bg-[#4e3f6e]/10 dark:bg-[#4e3f6e]/20 text-black dark:text-white border border-[#4e3f6e]/40 dark:border-[#4e3f6e]/60 shadow-md hover:border-[#4e3f6e] dark:hover:border-[#c4b7d8]"
                                : "cursor-default bg-white dark:bg-black text-black dark:text-white border border-neutral-200 dark:border-[#4e3f6e]/30 shadow-sm"
                            }`}
                          >
                            <CheckCircle2 className="h-4 w-4 text-[#4e3f6e] dark:text-[#c4b7d8] shrink-0" />
                            <span>{name}</span>
                            {description && (
                              <span className="relative flex h-2 w-2 ml-0.5">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#4e3f6e] opacity-75 dark:bg-[#c4b7d8]"></span>
                                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#4e3f6e] dark:bg-[#c4b7d8]"></span>
                              </span>
                            )}
                          </motion.button>

                          {/* Floating Tooltip Popover */}
                          <AnimatePresence>
                            {description && isActive && (
                              <motion.div
                                initial={{ opacity: 0, y: 8, scale: 0.95 }}
                                animate={{ opacity: 1, y: 0, scale: 1 }}
                                exit={{ opacity: 0, y: 8, scale: 0.95 }}
                                transition={{ duration: 0.18, ease: "easeOut" }}
                                className="absolute bottom-full left-1/2 -translate-x-1/2 mb-3 w-72 sm:w-84 p-4 rounded-2xl bg-black/95 text-white border border-[#4e3f6e] shadow-2xl backdrop-blur-xl z-50 text-left pointer-events-none"
                              >
                                <div className="flex items-center gap-2 mb-1.5 font-display font-bold text-sm text-[#c4b7d8]">
                                  <Info className="h-4 w-4 text-[#c4b7d8] shrink-0" />
                                  <span>{name}</span>
                                </div>
                                <p className="font-body text-xs leading-relaxed text-neutral-200 font-normal">
                                  {description}
                                </p>
                                {/* Popover Arrow */}
                                <div className="absolute top-full left-1/2 -translate-x-1/2 -mt-[1px] border-4 border-transparent border-t-black/95" />
                              </motion.div>
                            )}
                          </AnimatePresence>
                        </div>
                      );
                    })}
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
