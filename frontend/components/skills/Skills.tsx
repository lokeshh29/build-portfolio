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
      color: "text-violet-600 dark:text-fuchsia-400",
      bgColor: "bg-violet-50 dark:bg-violet-500/10",
      borderColor: "border-violet-200 dark:border-violet-500/30",
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
      color: "text-purple-600 dark:text-purple-400",
      bgColor: "bg-purple-50 dark:bg-purple-500/10",
      borderColor: "border-purple-200 dark:border-purple-500/30",
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
      color: "text-indigo-600 dark:text-indigo-400",
      bgColor: "bg-indigo-50 dark:bg-indigo-500/10",
      borderColor: "border-indigo-200 dark:border-indigo-500/30",
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
      color: "text-fuchsia-600 dark:text-fuchsia-400",
      bgColor: "bg-fuchsia-50 dark:bg-fuchsia-500/10",
      borderColor: "border-fuchsia-200 dark:border-fuchsia-500/30",
      skills: ["Python", "Java", "JavaScript", "HTML", "CSS"],
    },
    {
      title: "AI Security & Governance",
      icon: ShieldCheck,
      color: "text-emerald-600 dark:text-emerald-400",
      bgColor: "bg-emerald-50 dark:bg-emerald-500/10",
      borderColor: "border-emerald-200 dark:border-emerald-500/30",
      skills: [
        "Prompt Injection Defense",
        "PII Redaction",
        "Audit Logging",
        "Model Scope & Guardrails",
      ],
    },
  ];

  return (
    <section id="skills" className="py-24 border-t border-slate-200 dark:border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mb-12">
          <span className="font-mono text-xs font-semibold uppercase tracking-widest text-violet-600 dark:text-fuchsia-400">
            Technical Stack
          </span>
          <h2 className="mt-2 font-display text-3xl sm:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Skills & Competencies
          </h2>
          <p className="mt-3 font-body text-slate-600 dark:text-slate-400 text-base sm:text-lg">
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
                  <h3 className="font-display text-lg font-bold text-slate-900 dark:text-white">{cat.title}</h3>
                </div>

                <ul className="space-y-2.5">
                  {cat.skills.map((skill) => (
                    <li
                      key={skill}
                      className="flex items-center gap-2.5 font-mono text-xs sm:text-sm text-slate-700 dark:text-slate-300"
                    >
                      <CheckCircle2 className="h-4 w-4 text-violet-500 dark:text-fuchsia-400 shrink-0" />
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
