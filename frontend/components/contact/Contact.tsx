import React from "react";
import { Mail, Linkedin, Github, FileText, ArrowUpRight } from "lucide-react";

export default function Contact() {
  const opportunityAreas = [
    "AI Engineering",
    "Generative AI",
    "AI Agents",
    "RAG Systems",
    "Backend Engineering",
    "Cloud AI",
  ];

  return (
    <section id="contact" className="py-24 border-t border-slate-800/80 relative">
      {/* Background Accent Glow */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-sky-500/10 rounded-full blur-[140px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <span className="text-xs font-semibold uppercase tracking-wider text-sky-400">
            Get in Touch
          </span>
          <h2 className="mt-2 text-3xl sm:text-5xl font-bold text-white tracking-tight">
            Let's build intelligent systems together.
          </h2>

          <p className="mt-4 text-base sm:text-lg text-slate-300">
            I'm actively interested in full-time and project opportunities involving:
          </p>

          {/* Opportunity Badges */}
          <div className="mt-5 flex flex-wrap justify-center gap-2">
            {opportunityAreas.map((area) => (
              <span
                key={area}
                className="px-3 py-1 rounded-full text-xs font-medium bg-slate-900/90 text-sky-300 border border-slate-800"
              >
                {area}
              </span>
            ))}
          </div>

          {/* Contact Action Buttons */}
          <div className="mt-10 flex flex-wrap justify-center items-center gap-4">
            <a
              href="mailto:lokeshkumarr2905@gmail.com"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl text-sm font-semibold text-white bg-gradient-to-r from-sky-500 to-indigo-600 hover:from-sky-400 hover:to-indigo-500 shadow-lg shadow-sky-500/25 transition-all transform hover:-translate-y-0.5"
            >
              <Mail className="h-4 w-4" />
              <span>Email Me</span>
            </a>

            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-3.5 rounded-xl text-sm font-semibold text-slate-200 bg-slate-900 hover:bg-slate-800 border border-slate-700/80 hover:border-slate-600 transition-all"
            >
              <Linkedin className="h-4 w-4 text-sky-400" />
              <span>LinkedIn</span>
              <ArrowUpRight className="h-3.5 w-3.5 text-slate-500" />
            </a>

            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-3.5 rounded-xl text-sm font-semibold text-slate-200 bg-slate-900 hover:bg-slate-800 border border-slate-700/80 hover:border-slate-600 transition-all"
            >
              <Github className="h-4 w-4 text-slate-200" />
              <span>GitHub</span>
              <ArrowUpRight className="h-3.5 w-3.5 text-slate-500" />
            </a>

            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-3.5 rounded-xl text-sm font-semibold text-slate-200 bg-slate-900 hover:bg-slate-800 border border-slate-700/80 hover:border-slate-600 transition-all"
            >
              <FileText className="h-4 w-4 text-indigo-400" />
              <span>Resume</span>
            </a>
          </div>

          <p className="mt-8 text-xs text-slate-500">
            Email: <span className="text-slate-400">lokeshkumarr2905@gmail.com</span> • Based in Chennai, India
          </p>
        </div>
      </div>
    </section>
  );
}
