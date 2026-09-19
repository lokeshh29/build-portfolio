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
      color: "text-sky-600 dark:text-sky-400",
      bgColor: "bg-sky-50 dark:bg-sky-500/10",
      borderColor: "border-sky-200 dark:border-sky-500/30",
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
      color: "text-indigo-600 dark:text-indigo-400",
      bgColor: "bg-indigo-50 dark:bg-indigo-500/10",
      borderColor: "border-indigo-200 dark:border-indigo-500/30",
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
      color: "text-cyan-600 dark:text-cyan-400",
      bgColor: "bg-cyan-50 dark:bg-cyan-500/10",
      borderColor: "border-cyan-200 dark:border-cyan-500/30",
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
      color: "text-emerald-600 dark:text-emerald-400",
      bgColor: "bg-emerald-50 dark:bg-emerald-500/10",
      borderColor: "border-emerald-200 dark:border-emerald-500/30",
      skills: ["Python", "Java", "JavaScript", "HTML", "CSS"],
    },
    {
      title: "AI Security & Governance",
      icon: ShieldCheck,
      color: "text-amber-600 dark:text-amber-400",
      bgColor: "bg-amber-50 dark:bg-amber-500/10",
      borderColor: "border-amber-200 dark:border-amber-500/30",
      skills: [
        "Prompt Injection Defense",
        "PII Redaction",
        "Audit Logging",
        "Model Scope & Guardrails",
      ],
    },
  ];

  return (
    <section id="skills" className="py-20 border-t border-slate-200 dark:border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mb-12">
          <span className="text-xs font-semibold uppercase tracking-wider text-sky-600 dark:text-sky-400">
            Technical Stack
          </span>
          <h2 className="mt-2 text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white tracking-tight">
            Skills & Competencies
          </h2>
          <p className="mt-3 text-slate-600 dark:text-slate-400 text-sm sm:text-base">
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
                className="glass-card rounded-2xl p-6 transition-all duration-300 hover:border-slate-300 dark:hover:border-slate-700"
              >
                <div className="flex items-center gap-3 mb-5">
                  <div
                    className={`p-2.5 rounded-xl ${cat.bgColor} border ${cat.borderColor} ${cat.color}`}
                  >
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white">{cat.title}</h3>
                </div>

                <ul className="space-y-2.5">
                  {cat.skills.map((skill) => (
                    <li
                      key={skill}
                      className="flex items-center gap-2.5 text-xs sm:text-sm text-slate-700 dark:text-slate-300"
                    >
                      <CheckCircle2 className="h-4 w-4 text-slate-400 dark:text-slate-500 shrink-0" />
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
