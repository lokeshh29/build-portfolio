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
    <section id="contact" className="py-28 border-t border-black/10 dark:border-[#4e3f6e]/30 relative">
      {/* Background Accent Glow */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-[#4e3f6e]/15 dark:bg-[#4e3f6e]/25 rounded-full blur-[140px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <span className="font-mono text-xs sm:text-sm font-semibold uppercase tracking-[0.25em] text-[#4e3f6e] dark:text-[#c4b7d8]">
            Get in Touch
          </span>
          <h2 className="mt-3 font-display text-5xl sm:text-7xl lg:text-8xl font-extrabold text-black dark:text-white tracking-tight leading-[1.08]">
            Let's build intelligent systems together.
          </h2>

          <p className="mt-6 font-body text-xl sm:text-2xl text-neutral-700 dark:text-neutral-300">
            I'm actively interested in full-time and project opportunities involving:
          </p>

          {/* Opportunity Badges */}
          <div className="mt-6 flex flex-wrap justify-center gap-2.5">
            {opportunityAreas.map((area) => (
              <span
                key={area}
                className="font-mono px-4 py-2 rounded-full text-sm sm:text-base font-medium bg-white dark:bg-black text-black dark:text-white border border-neutral-200 dark:border-[#4e3f6e]/30 shadow-sm"
              >
                {area}
              </span>
            ))}
          </div>

          {/* Contact Action Buttons */}
          <div className="mt-12 flex flex-wrap justify-center items-center gap-4 sm:gap-5">
            <a
              href="mailto:lokeshkumarr2905@gmail.com"
              className="inline-flex items-center gap-2.5 px-8 py-4 rounded-2xl font-mono text-base sm:text-lg font-semibold text-white bg-[#4e3f6e] hover:bg-[#3e3258] shadow-lg shadow-[#4e3f6e]/30 transition-all transform hover:-translate-y-0.5"
            >
              <Mail className="h-5 w-5" />
              <span>Email Me</span>
            </a>

            <a
              href="https://www.linkedin.com/in/lokeshhh29/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 px-6 py-4 rounded-2xl font-mono text-base sm:text-lg font-semibold text-black dark:text-white bg-white hover:bg-neutral-100 dark:bg-black dark:hover:bg-neutral-900 border border-neutral-300 dark:border-[#4e3f6e]/30 transition-all shadow-sm"
            >
              <Linkedin className="h-5 w-5 text-[#4e3f6e] dark:text-[#c4b7d8]" />
              <span>LinkedIn</span>
              <ArrowUpRight className="h-4 w-4 text-neutral-400" />
            </a>

            <a
              href="https://github.com/lokeshh29"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 px-6 py-4 rounded-2xl font-mono text-base sm:text-lg font-semibold text-black dark:text-white bg-white hover:bg-neutral-100 dark:bg-black dark:hover:bg-neutral-900 border border-neutral-300 dark:border-[#4e3f6e]/30 transition-all shadow-sm"
            >
              <Github className="h-5 w-5 text-black dark:text-white" />
              <span>GitHub</span>
              <ArrowUpRight className="h-4 w-4 text-neutral-400" />
            </a>

            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              download="lokesh_resume.pdf"
              className="inline-flex items-center gap-2.5 px-6 py-4 rounded-2xl font-mono text-base sm:text-lg font-semibold text-black dark:text-white bg-white hover:bg-neutral-100 dark:bg-black dark:hover:bg-neutral-900 border border-neutral-300 dark:border-[#4e3f6e]/30 transition-all shadow-sm"
            >
              <FileText className="h-5 w-5 text-[#4e3f6e] dark:text-[#c4b7d8]" />
              <span>Resume</span>
            </a>
          </div>

          <p className="mt-10 font-mono text-sm sm:text-base text-neutral-500">
            Email: <span className="text-black dark:text-white font-medium">lokeshkumarr2905@gmail.com</span> • Based in Chennai, India
          </p>
        </div>
      </div>
    </section>
  );
}
