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
    <section className="relative pt-36 pb-20 md:pt-44 md:pb-32 overflow-hidden">
      {/* Background Glow Orbs */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[350px] bg-[#4e3f6e]/10 dark:bg-[#4e3f6e]/20 rounded-full blur-[130px] pointer-events-none -z-10" />
      <div className="absolute top-1/3 right-1/4 w-[400px] h-[300px] bg-[#4e3f6e]/10 dark:bg-[#4e3f6e]/15 rounded-full blur-[140px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl">
          {/* Heading with Syne Display font */}
          <h1 className="font-display text-6xl sm:text-8xl lg:text-9xl font-extrabold tracking-[-3px] text-black dark:text-white leading-[1.02]">
            Hi, I'm{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#4e3f6e] via-[#7b689a] to-black dark:from-white dark:via-[#dbd5e7] dark:to-[#4e3f6e]">
              Lokesh.
            </span>
          </h1>

          {/* Core Tagline */}
          <h2 className="mt-6 font-display text-2xl sm:text-4xl lg:text-5xl font-bold text-black dark:text-white tracking-tight leading-snug">
            AI/ML Engineer building{" "}
            <span className="text-[#4e3f6e] dark:text-[#c4b7d8]">AI Agents</span>,{" "}
            <span className="text-[#4e3f6e] dark:text-[#c4b7d8]">RAG systems</span> and{" "}
            <span className="text-black dark:text-white">cloud-native AI applications</span>.
          </h2>

          {/* Subtitle */}
          <p className="mt-6 text-lg sm:text-xl lg:text-2xl text-neutral-600 dark:text-neutral-300 leading-relaxed max-w-3xl font-normal font-body">
            I design intelligent systems that combine LLMs, retrieval, agents, APIs, and cloud infrastructure.
          </p>

          {/* CTA Buttons */}
          <div className="mt-10 flex flex-wrap items-center gap-4 font-body">
            <button
              onClick={onOpenChat}
              className="group inline-flex items-center gap-3 px-7 py-3.5 rounded-xl text-base sm:text-lg font-semibold text-white bg-[#4e3f6e] hover:bg-[#3e3258] shadow-lg shadow-[#4e3f6e]/30 transition-all transform hover:-translate-y-0.5 active:translate-y-0"
            >
              <Sparkles className="h-5 w-5 text-[#c4b7d8] group-hover:rotate-12 transition-transform" />
              <span>Ask My AI</span>
            </button>

            <a
              href="#projects"
              className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-xl text-base sm:text-lg font-semibold text-black dark:text-white bg-white dark:bg-black hover:bg-neutral-50 dark:hover:bg-neutral-900 border border-neutral-300 dark:border-[#4e3f6e]/40 transition-all shadow-sm"
            >
              <span>View Projects</span>
              <ArrowRight className="h-5 w-5 text-neutral-500 dark:text-neutral-400" />
            </a>

            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              download="lokesh_resume.pdf"
              className="inline-flex items-center gap-2 px-5 py-3.5 rounded-xl text-sm sm:text-base font-medium font-mono text-[#4e3f6e] dark:text-[#c4b7d8] hover:text-black dark:hover:text-white transition-colors group"
            >
              <FileDown className="h-5 w-5 text-[#4e3f6e] dark:text-[#c4b7d8] group-hover:scale-110 transition-transform" />
              <span>Download Resume</span>
            </a>
          </div>

          {/* Tech Pills Row */}
          <div className="mt-14 pt-8 border-t border-black/10 dark:border-[#4e3f6e]/30">
            <p className="font-mono text-xs sm:text-sm font-semibold tracking-widest text-neutral-500 uppercase mb-4">
              Core Technologies & Architecture
            </p>
            <div className="flex flex-wrap items-center gap-2.5">
              {techStack.map((tech) => (
                <span
                  key={tech}
                  className="font-mono px-4 py-1.5 rounded-lg text-sm sm:text-base font-medium text-black dark:text-white bg-white dark:bg-black border border-neutral-200 dark:border-[#4e3f6e]/30 shadow-sm"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Credential Badges */}
          <div className="mt-6 flex flex-wrap gap-4 text-xs sm:text-sm font-mono text-neutral-600 dark:text-neutral-400">
            <div className="flex items-center gap-2.5 bg-white dark:bg-black border border-neutral-200 dark:border-[#4e3f6e]/30 rounded-xl px-4 py-2 shadow-sm text-black dark:text-white font-medium">
              <Briefcase className="h-4 w-4 text-[#4e3f6e] dark:text-[#c4b7d8]" />
              <span>AI/ML Engineer Intern @ Invisibl Cloud (Present)</span>
            </div>
            <div className="flex items-center gap-2.5 bg-white dark:bg-black border border-neutral-200 dark:border-[#4e3f6e]/30 rounded-xl px-4 py-2 shadow-sm text-black dark:text-white font-medium">
              <GraduationCap className="h-4 w-4 text-[#4e3f6e] dark:text-[#c4b7d8]" />
              <span>M.Sc. Integrated CS @ CEG, Anna University (2027)</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
