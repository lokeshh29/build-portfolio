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
    <div className="glass-card rounded-2xl p-6 sm:p-8 flex flex-col justify-between transition-all duration-300 hover:border-purple-500/40 hover:-translate-y-1 group">
      <div>
        {/* Top Badges */}
        <div className="flex items-center justify-between gap-2 mb-4">
          <span className="px-2.5 py-0.5 rounded font-mono text-[11px] font-bold uppercase tracking-wider bg-violet-50 dark:bg-violet-500/10 text-violet-700 dark:text-fuchsia-400 border border-violet-200 dark:border-violet-500/30">
            {project.badge}
          </span>
          {project.featured && (
            <span className="font-mono text-[11px] font-medium text-slate-500 dark:text-slate-400">
              Featured System
            </span>
          )}
        </div>

        {/* Title & Tagline with Syne font */}
        <h3 className="font-display text-2xl font-bold text-slate-900 dark:text-white group-hover:text-violet-600 dark:group-hover:text-fuchsia-400 transition-colors">
          {project.title}
        </h3>
        <p className="font-display text-sm font-semibold text-slate-700 dark:text-slate-300 mt-1">
          {project.tagline}
        </p>

        {/* Description */}
        <p className="mt-3 font-body text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
          {project.description}
        </p>

        {/* Key Engineering Highlights */}
        <div className="mt-6 pt-5 border-t border-slate-200 dark:border-slate-800/80">
          <h4 className="font-mono text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-3">
            Key Engineering:
          </h4>
          <ul className="space-y-2">
            {project.engineeringHighlights.map((highlight, idx) => (
              <li
                key={idx}
                className="flex items-start gap-2.5 font-body text-xs sm:text-sm text-slate-700 dark:text-slate-300"
              >
                <CheckCircle className="h-4 w-4 text-violet-600 dark:text-fuchsia-400 shrink-0 mt-0.5" />
                <span>{highlight}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="mt-8 pt-5 border-t border-slate-200 dark:border-slate-800/80">
        {/* Tech Stack Tags with JetBrains Mono */}
        <div className="flex flex-wrap gap-1.5 mb-5">
          {project.technologies.slice(0, 7).map((tech) => (
            <span
              key={tech}
              className="font-mono px-2 py-0.5 rounded text-[11px] font-medium bg-slate-100 dark:bg-slate-900 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-800"
            >
              {tech}
            </span>
          ))}
          {project.technologies.length > 7 && (
            <span className="font-mono px-2 py-0.5 rounded text-[11px] font-medium bg-slate-100 dark:bg-slate-900 text-slate-500 border border-slate-200 dark:border-slate-800">
              +{project.technologies.length - 7} more
            </span>
          )}
        </div>

        {/* Action Buttons */}
        <div className="flex items-center gap-3">
          <button
            onClick={() => onViewArchitecture(project.architecture)}
            className="flex-1 inline-flex items-center justify-center gap-2 px-3.5 py-2 rounded-xl font-mono text-xs font-semibold text-violet-700 dark:text-fuchsia-300 bg-violet-50 hover:bg-violet-100 dark:bg-violet-500/10 dark:hover:bg-violet-500/20 border border-violet-300 hover:border-violet-400 dark:border-violet-500/30 dark:hover:border-violet-400 transition-all shadow-sm"
          >
            <Network className="h-3.5 w-3.5" />
            <span>Architecture Flow</span>
          </button>
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-1.5 px-3.5 py-2 rounded-xl font-mono text-xs font-medium text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white bg-slate-100 hover:bg-slate-200 dark:bg-slate-900 dark:hover:bg-slate-800 border border-slate-300 dark:border-slate-800 transition-all shadow-sm"
              title="View Source on GitHub"
            >
              <Github className="h-3.5 w-3.5 text-slate-600 dark:text-slate-400" />
              <span>GitHub</span>
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
