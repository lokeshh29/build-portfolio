import React from "react";
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
    <section id="skills" className="py-24 border-t border-black/10 dark:border-[#4e3f6e]/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mb-12">
          <span className="font-mono text-xs font-semibold uppercase tracking-widest text-[#4e3f6e] dark:text-[#c4b7d8]">
            Technical Stack
          </span>
          <h2 className="mt-2 font-display text-3xl sm:text-5xl font-extrabold text-black dark:text-white tracking-tight">
            Skills & Competencies
          </h2>
          <p className="mt-3 font-body text-neutral-600 dark:text-neutral-400 text-base sm:text-lg">
            Categorized technical capabilities spanning AI agents, RAG, backend engineering, cloud architecture, and AI governance.
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((cat) => {
            const Icon = cat.icon;
            return (
              <div
                key={cat.title}
                className="glass-card rounded-2xl p-6 transition-all duration-300 hover:border-[#4e3f6e]/60"
              >
                <div className="flex items-center gap-3 mb-5">
                  <div
                    className={`p-2.5 rounded-xl ${cat.bgColor} border ${cat.borderColor} ${cat.color}`}
                  >
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="font-display text-lg font-bold text-black dark:text-white">{cat.title}</h3>
                </div>

                <ul className="space-y-2.5">
                  {cat.skills.map((skill) => (
                    <li
                      key={skill}
                      className="flex items-center gap-2.5 font-mono text-xs sm:text-sm text-neutral-700 dark:text-neutral-300"
                    >
                      <CheckCircle2 className="h-4 w-4 text-[#4e3f6e] dark:text-[#c4b7d8] shrink-0" />
                      <span>{skill}</span>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
