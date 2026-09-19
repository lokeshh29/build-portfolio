"use client";

import React from "react";
import { motion } from "framer-motion";
import { Network, Github, CheckCircle } from "lucide-react";
import { ProjectArchitecture } from "./ArchitectureModal";

export interface ProjectData {
  id: string;
  title: string;
  badge: string;
  tagline: string;
  description: string;
  engineeringHighlights: string[];
  technologies: string[];
  architecture: ProjectArchitecture;
  githubUrl?: string;
  featured?: boolean;
}

interface ProjectCardProps {
  project: ProjectData;
  onViewArchitecture: (arch: ProjectArchitecture) => void;
}

export default function ProjectCard({
  project,
  onViewArchitecture,
}: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 35 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ y: -5 }}
      className="glass-card rounded-3xl p-7 sm:p-10 w-full transition-shadow duration-300 hover:border-[#4e3f6e]/60 hover:shadow-2xl hover:shadow-[#4e3f6e]/10 group"
    >
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
        {/* Left Column: Details, Tech, Actions */}
        <div className="lg:col-span-7 flex flex-col justify-between space-y-6">
          <div className="space-y-4">
            {/* Top Badges */}
            <div className="flex items-center gap-3">
              <span className="px-3 py-1 rounded-md font-mono text-xs sm:text-sm font-bold uppercase tracking-wider bg-[#4e3f6e]/10 dark:bg-[#4e3f6e]/25 text-[#4e3f6e] dark:text-[#c4b7d8] border border-[#4e3f6e]/30">
                {project.badge}
              </span>
              {project.featured && (
                <span className="font-mono text-xs sm:text-sm font-medium text-neutral-500">
                  Featured System
                </span>
              )}
            </div>

            {/* Title & Tagline */}
            <div>
              <h3 className="font-display text-3xl sm:text-4xl font-bold text-black dark:text-white group-hover:text-[#4e3f6e] dark:group-hover:text-[#c4b7d8] transition-colors">
                {project.title}
              </h3>
              <p className="font-display text-base sm:text-lg font-semibold text-[#4e3f6e] dark:text-[#c4b7d8] mt-1.5">
                {project.tagline}
              </p>
            </div>

            {/* Description */}
            <p className="font-body text-base sm:text-lg text-neutral-600 dark:text-neutral-300 leading-relaxed">
              {project.description}
            </p>
          </div>

          {/* Tech Stack & Action Buttons */}
          <div className="space-y-6 pt-4 border-t border-neutral-200 dark:border-[#4e3f6e]/30">
            {/* Tech Stack Tags */}
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="font-mono px-3 py-1 rounded-lg text-xs sm:text-sm font-medium bg-white dark:bg-black text-black dark:text-white border border-neutral-200 dark:border-[#4e3f6e]/30 shadow-sm"
                >
                  {tech}
                </span>
              ))}
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-3.5">
              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                onClick={() => onViewArchitecture(project.architecture)}
                className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl font-mono text-xs sm:text-sm font-semibold text-[#4e3f6e] dark:text-[#c4b7d8] bg-[#4e3f6e]/10 hover:bg-[#4e3f6e] hover:text-white dark:bg-[#4e3f6e]/20 dark:hover:bg-[#4e3f6e] dark:hover:text-white border border-[#4e3f6e]/30 transition-colors shadow-sm"
              >
                <Network className="h-4 w-4" />
                <span>Architecture Flow</span>
              </motion.button>
              {project.githubUrl && (
                <motion.a
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl font-mono text-xs sm:text-sm font-medium text-black dark:text-white hover:bg-neutral-100 dark:hover:bg-neutral-900 bg-white dark:bg-black border border-neutral-300 dark:border-[#4e3f6e]/30 transition-colors shadow-sm"
                  title="View Source on GitHub"
                >
                  <Github className="h-4 w-4 text-neutral-700 dark:text-neutral-300" />
                  <span>GitHub</span>
                </motion.a>
              )}
            </div>
          </div>
        </div>

        {/* Right Column: Key Engineering Highlights Panel */}
        <div className="lg:col-span-5 bg-neutral-50/90 dark:bg-[#120F1A]/90 border border-neutral-200 dark:border-[#4e3f6e]/30 rounded-2xl p-6 sm:p-8 space-y-4">
          <h4 className="font-mono text-xs sm:text-sm font-semibold uppercase tracking-wider text-neutral-500 dark:text-neutral-400">
            Key Engineering Highlights:
          </h4>
          <ul className="space-y-3.5">
            {project.engineeringHighlights.map((highlight, idx) => (
              <li
                key={idx}
                className="flex items-start gap-3 font-body text-sm sm:text-base text-neutral-700 dark:text-neutral-300 leading-relaxed"
              >
                <CheckCircle className="h-5 w-5 text-[#4e3f6e] dark:text-[#c4b7d8] shrink-0 mt-0.5" />
                <span>{highlight}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </motion.div>
  );
}
