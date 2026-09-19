import React from "react";
import { Terminal, Heart } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-slate-800/80 bg-[#05070B] py-12 text-slate-400 text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-3">
          <div className="h-7 w-7 rounded-lg bg-sky-500/10 border border-sky-500/30 flex items-center justify-center text-sky-400">
            <Terminal className="h-3.5 w-3.5" />
          </div>
          <div>
            <span className="font-semibold text-white">Lokesh Kumar R</span>
            <span className="text-slate-500 ml-2">
              • AI/ML Engineer | AI Agents & RAG
            </span>
          </div>
        </div>

        <div className="flex items-center gap-6">
          <a href="#about" className="hover:text-slate-200 transition-colors">
            About
          </a>
          <a
            href="#experience"
            className="hover:text-slate-200 transition-colors"
          >
            Experience
          </a>
          <a href="#projects" className="hover:text-slate-200 transition-colors">
            Projects
          </a>
          <a href="#skills" className="hover:text-slate-200 transition-colors">
            Skills
          </a>
          <a href="#contact" className="hover:text-slate-200 transition-colors">
            Contact
          </a>
        </div>

        <div className="text-slate-500 text-center sm:text-right">
          © {new Date().getFullYear()} Lokesh Kumar R. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
