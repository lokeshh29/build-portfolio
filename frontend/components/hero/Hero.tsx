"use client";

import React from "react";
import { Sparkles, ArrowRight, FileDown, Briefcase, GraduationCap } from "lucide-react";

interface HeroProps {
  onOpenChat?: () => void;
}

export default function Hero({ onOpenChat }: HeroProps) {
  const techStack = [
    "Python",
    "FastAPI",
    "RAG",
    "AI Agents",
    "AWS",
    "Docker",
  ];

  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
      {/* Subtle Background Glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[350px] bg-sky-500/10 rounded-full blur-[120px] pointer-events-none -z-10" />
      <div className="absolute top-1/3 right-1/4 w-[400px] h-[300px] bg-indigo-500/10 rounded-full blur-[140px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          {/* Status Badge */}
          <div className="inline-flex items-center gap-2.5 px-3 py-1.5 rounded-full border border-sky-500/30 bg-sky-500/10 text-xs font-medium text-sky-400 mb-6 backdrop-blur-sm">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-sky-500"></span>
            </span>
            <span>Available for AI/ML Engineering Opportunities</span>
          </div>

          {/* Heading */}
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-white leading-[1.1]">
            Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 via-sky-200 to-indigo-300">Lokesh.</span>
          </h1>

          {/* Core Tagline */}
          <h2 className="mt-4 text-xl sm:text-2xl lg:text-3xl font-semibold text-slate-200 tracking-tight leading-snug">
            AI/ML Engineer building{" "}
            <span className="text-sky-400">AI Agents</span>,{" "}
            <span className="text-indigo-400">RAG systems</span> and{" "}
            <span className="text-slate-100">cloud-native AI applications</span>.
          </h2>

          {/* Subtitle */}
          <p className="mt-5 text-base sm:text-lg text-slate-400 leading-relaxed max-w-2xl font-normal">
            I design intelligent systems that combine LLMs, retrieval, agents, APIs, and cloud infrastructure.
          </p>

          {/* CTA Buttons */}
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <button
              onClick={onOpenChat}
              className="group inline-flex items-center gap-2.5 px-5 py-3 rounded-xl text-sm font-semibold text-white bg-gradient-to-r from-sky-500 to-indigo-600 hover:from-sky-400 hover:to-indigo-500 shadow-lg shadow-sky-500/25 transition-all transform hover:-translate-y-0.5 active:translate-y-0"
            >
              <Sparkles className="h-4 w-4 text-sky-200 group-hover:rotate-12 transition-transform" />
              <span>Ask My AI</span>
            </button>

            <a
              href="#projects"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-xl text-sm font-semibold text-slate-200 bg-slate-900/90 hover:bg-slate-800 border border-slate-700/80 transition-all hover:border-slate-600"
            >
              <span>View Projects</span>
              <ArrowRight className="h-4 w-4 text-slate-400" />
            </a>

            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              download="lokesh_resume.pdf"
              className="inline-flex items-center gap-2 px-4 py-3 rounded-xl text-sm font-medium text-slate-400 hover:text-slate-200 transition-colors group"
            >
              <FileDown className="h-4 w-4 group-hover:text-sky-400 transition-colors" />
              <span>Download Resume</span>
            </a>
          </div>

          {/* Tech Pills Row */}
          <div className="mt-10 pt-8 border-t border-slate-800/80">
            <p className="text-xs font-semibold tracking-wider text-slate-500 uppercase mb-3">
              Core Technologies & Architecture
            </p>
            <div className="flex flex-wrap items-center gap-2">
              {techStack.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 rounded-md text-xs font-medium text-slate-300 bg-slate-900/80 border border-slate-800 hover:border-slate-700 transition-colors"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Credential Badges */}
          <div className="mt-6 flex flex-wrap gap-4 text-xs text-slate-400">
            <div className="flex items-center gap-2 bg-slate-900/60 border border-slate-800/80 rounded-lg px-3 py-1.5">
              <Briefcase className="h-3.5 w-3.5 text-sky-400" />
              <span>AI/ML Engineer Intern @ Invisibl Cloud</span>
            </div>
            <div className="flex items-center gap-2 bg-slate-900/60 border border-slate-800/80 rounded-lg px-3 py-1.5">
              <GraduationCap className="h-3.5 w-3.5 text-indigo-400" />
              <span>M.Sc. Integrated CS @ CEG, Anna University (2027)</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
