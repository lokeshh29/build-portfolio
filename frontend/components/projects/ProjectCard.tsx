"use client";

import React from "react";
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
    <div className="glass-card rounded-2xl p-6 sm:p-8 flex flex-col justify-between transition-all duration-300 hover:border-[#4e3f6e]/60 hover:-translate-y-1 group">
      <div>
        {/* Top Badges */}
        <div className="flex items-center justify-between gap-2 mb-4">
          <span className="px-2.5 py-0.5 rounded font-mono text-[11px] font-bold uppercase tracking-wider bg-[#4e3f6e]/10 dark:bg-[#4e3f6e]/25 text-[#4e3f6e] dark:text-[#c4b7d8] border border-[#4e3f6e]/30">
            {project.badge}
          </span>
          {project.featured && (
            <span className="font-mono text-[11px] font-medium text-neutral-500">
              Featured System
            </span>
          )}
        </div>

        {/* Title & Tagline with Syne font */}
        <h3 className="font-display text-2xl font-bold text-black dark:text-white group-hover:text-[#4e3f6e] dark:group-hover:text-[#c4b7d8] transition-colors">
          {project.title}
        </h3>
        <p className="font-display text-sm font-semibold text-neutral-700 dark:text-neutral-300 mt-1">
          {project.tagline}
        </p>

        {/* Description */}
        <p className="mt-3 font-body text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed">
          {project.description}
        </p>

        {/* Key Engineering Highlights */}
        <div className="mt-6 pt-5 border-t border-neutral-200 dark:border-[#4e3f6e]/30">
          <h4 className="font-mono text-xs font-semibold uppercase tracking-wider text-neutral-500 dark:text-neutral-400 mb-3">
            Key Engineering:
          </h4>
          <ul className="space-y-2">
            {project.engineeringHighlights.map((highlight, idx) => (
              <li
                key={idx}
                className="flex items-start gap-2.5 font-body text-xs sm:text-sm text-neutral-700 dark:text-neutral-300"
              >
                <CheckCircle className="h-4 w-4 text-[#4e3f6e] dark:text-[#c4b7d8] shrink-0 mt-0.5" />
                <span>{highlight}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="mt-8 pt-5 border-t border-neutral-200 dark:border-[#4e3f6e]/30">
        {/* Tech Stack Tags with JetBrains Mono */}
        <div className="flex flex-wrap gap-1.5 mb-5">
          {project.technologies.slice(0, 7).map((tech) => (
            <span
              key={tech}
              className="font-mono px-2 py-0.5 rounded text-[11px] font-medium bg-white dark:bg-black text-black dark:text-white border border-neutral-200 dark:border-[#4e3f6e]/30"
            >
              {tech}
            </span>
          ))}
          {project.technologies.length > 7 && (
            <span className="font-mono px-2 py-0.5 rounded text-[11px] font-medium bg-white dark:bg-black text-neutral-500 border border-neutral-200 dark:border-[#4e3f6e]/30">
              +{project.technologies.length - 7} more
            </span>
          )}
        </div>

        {/* Action Buttons */}
        <div className="flex items-center gap-3">
          <button
            onClick={() => onViewArchitecture(project.architecture)}
            className="flex-1 inline-flex items-center justify-center gap-2 px-3.5 py-2 rounded-xl font-mono text-xs font-semibold text-[#4e3f6e] dark:text-[#c4b7d8] bg-[#4e3f6e]/10 hover:bg-[#4e3f6e] hover:text-white dark:bg-[#4e3f6e]/20 dark:hover:bg-[#4e3f6e] dark:hover:text-white border border-[#4e3f6e]/30 transition-all shadow-sm"
          >
            <Network className="h-3.5 w-3.5" />
            <span>Architecture Flow</span>
          </button>
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-1.5 px-3.5 py-2 rounded-xl font-mono text-xs font-medium text-black dark:text-white hover:bg-neutral-100 dark:hover:bg-neutral-900 bg-white dark:bg-black border border-neutral-300 dark:border-[#4e3f6e]/30 transition-all shadow-sm"
              title="View Source on GitHub"
            >
              <Github className="h-3.5 w-3.5 text-neutral-700 dark:text-neutral-300" />
              <span>GitHub</span>
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
