"use client";

import React from "react";
import { Sparkles, ArrowRight, FileDown, Briefcase, GraduationCap } from "lucide-react";
import { motion } from "framer-motion";

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
      {/* Background Animated Floating Glow Orbs */}
      <motion.div
        animate={{ y: [0, -25, 0], scale: [1, 1.06, 1] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[350px] bg-[#4e3f6e]/10 dark:bg-[#4e3f6e]/20 rounded-full blur-[130px] pointer-events-none -z-10"
      />
      <motion.div
        animate={{ y: [0, 20, 0], scale: [1, 1.08, 1] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        className="absolute top-1/3 right-1/4 w-[400px] h-[300px] bg-[#4e3f6e]/10 dark:bg-[#4e3f6e]/15 rounded-full blur-[140px] pointer-events-none -z-10"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl">
          {/* Heading with Syne Display font and entrance animation */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="font-display text-6xl sm:text-8xl lg:text-9xl font-extrabold tracking-[-3px] text-black dark:text-white leading-[1.02]"
          >
            Hi, I'm{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#4e3f6e] via-[#7b689a] to-black dark:from-white dark:via-[#dbd5e7] dark:to-[#4e3f6e]">
              Lokesh.
            </span>
          </motion.h1>

          {/* Core Tagline */}
          <motion.h2
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15, ease: "easeOut" }}
            className="mt-6 font-display text-2xl sm:text-4xl lg:text-5xl font-bold text-black dark:text-white tracking-tight leading-snug"
          >
            AI/ML Engineer building{" "}
            <span className="text-[#4e3f6e] dark:text-[#c4b7d8]">AI Agents</span>,{" "}
            <span className="text-[#4e3f6e] dark:text-[#c4b7d8]">RAG systems</span> and{" "}
            <span className="text-black dark:text-white">cloud-native AI applications</span>.
          </motion.h2>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3, ease: "easeOut" }}
            className="mt-6 font-display text-xl sm:text-2xl lg:text-[26px] font-medium text-neutral-700 dark:text-neutral-200 tracking-tight leading-relaxed max-w-3xl"
          >
            I design intelligent systems that combine LLMs, retrieval, agents, APIs, and cloud infrastructure.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.45, ease: "easeOut" }}
            className="mt-10 flex flex-wrap items-center gap-4 font-body"
          >
            <motion.button
              whileHover={{ y: -3, scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={onOpenChat}
              className="group inline-flex items-center gap-3 px-7 py-3.5 rounded-xl text-base sm:text-lg font-semibold text-white bg-[#4e3f6e] hover:bg-[#3e3258] shadow-lg shadow-[#4e3f6e]/30 transition-all active:translate-y-0"
            >
              <Sparkles className="h-5 w-5 text-[#c4b7d8] group-hover:rotate-12 transition-transform" />
              <span>Ask My AI</span>
            </motion.button>

            <motion.a
              whileHover={{ y: -3, scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              href="#projects"
              className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-xl text-base sm:text-lg font-semibold text-black dark:text-white bg-white dark:bg-black hover:bg-neutral-50 dark:hover:bg-neutral-900 border border-neutral-300 dark:border-[#4e3f6e]/40 transition-all shadow-sm"
            >
              <span>View Projects</span>
              <ArrowRight className="h-5 w-5 text-neutral-500 dark:text-neutral-400 group-hover:translate-x-1 transition-transform" />
            </motion.a>

            <motion.a
              whileHover={{ y: -3, scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              download="lokesh_resume.pdf"
              className="inline-flex items-center gap-2 px-5 py-3.5 rounded-xl text-sm sm:text-base font-medium font-mono text-[#4e3f6e] dark:text-[#c4b7d8] hover:text-black dark:hover:text-white transition-colors group"
            >
              <FileDown className="h-5 w-5 text-[#4e3f6e] dark:text-[#c4b7d8] group-hover:scale-110 transition-transform" />
              <span>Download Resume</span>
            </motion.a>
          </motion.div>

          {/* Tech Pills Row */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.6 }}
            className="mt-14 pt-8 border-t border-black/10 dark:border-[#4e3f6e]/30"
          >
            <p className="font-mono text-xs sm:text-sm font-semibold tracking-widest text-neutral-500 uppercase mb-4">
              Core Technologies & Architecture
            </p>
            <div className="flex flex-wrap items-center gap-2.5">
              {techStack.map((tech) => (
                <motion.span
                  key={tech}
                  whileHover={{ scale: 1.06, y: -2 }}
                  className="font-mono px-4 py-1.5 rounded-lg text-sm sm:text-base font-medium text-black dark:text-white bg-white dark:bg-black border border-neutral-200 dark:border-[#4e3f6e]/30 shadow-sm cursor-default transition-colors hover:border-[#4e3f6e]/60"
                >
                  {tech}
                </motion.span>
              ))}
            </div>
          </motion.div>

          {/* Credential Badges */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.75 }}
            className="mt-6 flex flex-wrap gap-4 text-xs sm:text-sm font-mono text-neutral-600 dark:text-neutral-400"
          >
            <div className="flex items-center gap-2.5 bg-white dark:bg-black border border-neutral-200 dark:border-[#4e3f6e]/30 rounded-xl px-4 py-2 shadow-sm text-black dark:text-white font-medium">
              <Briefcase className="h-4 w-4 text-[#4e3f6e] dark:text-[#c4b7d8]" />
              <span>AI/ML Engineer Intern @ Invisibl Cloud (Present)</span>
            </div>
            <div className="flex items-center gap-2.5 bg-white dark:bg-black border border-neutral-200 dark:border-[#4e3f6e]/30 rounded-xl px-4 py-2 shadow-sm text-black dark:text-white font-medium">
              <GraduationCap className="h-4 w-4 text-[#4e3f6e] dark:text-[#c4b7d8]" />
              <span>M.Sc. Integrated CS @ CEG, Anna University (2027)</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
