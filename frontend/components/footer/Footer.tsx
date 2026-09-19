import React from "react";
import { Terminal } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-black/10 dark:border-[#4e3f6e]/30 bg-neutral-100 dark:bg-black py-14 text-neutral-600 dark:text-neutral-400 text-sm transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-3.5">
          <div className="h-8 w-8 rounded-xl bg-[#4e3f6e]/10 dark:bg-[#4e3f6e]/25 border border-[#4e3f6e]/30 flex items-center justify-center text-[#4e3f6e] dark:text-[#c4b7d8]">
            <Terminal className="h-4 w-4" />
          </div>
          <div>
            <span className="font-display text-base sm:text-lg font-bold text-black dark:text-white">Lokesh Kumar R</span>
            <span className="font-mono text-xs sm:text-sm text-neutral-500 ml-2">
              • AI/ML Engineer | AI Agents & RAG
            </span>
          </div>
        </div>

        <div className="flex items-center gap-6 sm:gap-8 font-mono text-xs sm:text-sm uppercase tracking-wider">
          <a href="#about" className="hover:text-black dark:hover:text-white transition-colors">
            About
          </a>
          <a
            href="#experience"
            className="hover:text-black dark:hover:text-white transition-colors"
          >
            Experience
          </a>
          <a href="#projects" className="hover:text-black dark:hover:text-white transition-colors">
            Projects
          </a>
          <a href="#skills" className="hover:text-black dark:hover:text-white transition-colors">
            Skills
          </a>
          <a href="#contact" className="hover:text-black dark:hover:text-white transition-colors">
            Contact
          </a>
        </div>

        <div className="font-mono text-xs sm:text-sm text-neutral-500 text-center sm:text-right">
          © {new Date().getFullYear()} Lokesh Kumar R. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
