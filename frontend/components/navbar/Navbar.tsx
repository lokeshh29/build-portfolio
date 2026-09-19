"use client";

import React, { useState, useEffect } from "react";
import { Sparkles, Menu, X, Terminal, FileText } from "lucide-react";
import ThemeToggle from "@/components/theme/ThemeToggle";

interface NavbarProps {
  onOpenChat?: () => void;
}

export default function Navbar({ onOpenChat }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "About", href: "#about" },
    { name: "Experience", href: "#experience" },
    { name: "Projects", href: "#projects" },
    { name: "Skills", href: "#skills" },
    { name: "Achievements", href: "#achievements" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? "bg-white/90 dark:bg-black/90 backdrop-blur-md border-b border-black/10 dark:border-[#4e3f6e]/30 shadow-md dark:shadow-black/60 py-3.5"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between gap-4">
        {/* Brand (Left: flex-1 to balance right container) */}
        <div className="flex-1 flex items-center justify-start">
          <a
            href="#"
            className="group flex items-center gap-2.5 font-display text-xl sm:text-2xl font-extrabold tracking-tight text-black dark:text-white transition-colors"
          >
            <div className="h-8 w-8 sm:h-9 sm:w-9 rounded-xl bg-[#4e3f6e]/10 dark:bg-[#4e3f6e]/25 border border-[#4e3f6e]/30 flex items-center justify-center text-[#4e3f6e] dark:text-[#c4b7d8] group-hover:border-[#4e3f6e]/60 transition-all">
              <Terminal className="h-4 w-4 sm:h-4.5 sm:w-4.5" />
            </div>
            <span className="whitespace-nowrap">
              Lokesh<span className="text-[#4e3f6e]">.</span>
            </span>
          </a>
        </div>

        {/* Desktop Nav Links (Center: balanced and never overlapping) */}
        <nav className="hidden lg:flex items-center justify-center gap-5 xl:gap-8 font-mono text-xs xl:text-sm uppercase tracking-wider xl:tracking-[0.16em] whitespace-nowrap shrink-0">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-neutral-600 hover:text-black dark:text-neutral-300 dark:hover:text-white transition-colors font-semibold py-1"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Right Actions & Theme Toggle (Right: flex-1 flex justify-end) */}
        <div className="hidden md:flex flex-1 items-center justify-end gap-3 xl:gap-4 shrink-0">
          <ThemeToggle />

          <button
            onClick={onOpenChat}
            className="group relative inline-flex items-center gap-2 px-3.5 py-1.5 xl:px-4 xl:py-2 rounded-xl font-mono text-xs xl:text-sm font-semibold text-[#4e3f6e] dark:text-[#dbd5e7] bg-[#4e3f6e]/10 dark:bg-[#4e3f6e]/20 border border-[#4e3f6e]/30 hover:bg-[#4e3f6e] hover:text-white transition-all shadow-sm whitespace-nowrap"
          >
            <Sparkles className="h-4 w-4 text-[#4e3f6e] dark:text-[#c4b7d8] group-hover:text-white group-hover:scale-110 transition-transform" />
            <span>Ask Lokesh AI</span>
          </button>

          <a
            href="#contact"
            className="inline-flex items-center justify-center px-4 py-1.5 xl:px-5 xl:py-2 rounded-xl font-mono text-xs xl:text-sm font-semibold text-white bg-black hover:bg-neutral-800 dark:text-black dark:bg-white dark:hover:bg-neutral-200 transition-all shadow-sm whitespace-nowrap"
          >
            Get in Touch
          </a>
        </div>

        {/* Mobile Actions */}
        <div className="flex md:hidden items-center gap-2">
          <ThemeToggle />
          <button
            onClick={onOpenChat}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg font-mono text-xs font-semibold text-[#4e3f6e] dark:text-[#dbd5e7] bg-[#4e3f6e]/10 dark:bg-[#4e3f6e]/20 border border-[#4e3f6e]/30"
          >
            <Sparkles className="h-3.5 w-3.5 text-[#4e3f6e] dark:text-[#c4b7d8]" />
            <span>AI</span>
          </button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-1.5 rounded-lg text-black/70 dark:text-white/70 hover:text-black dark:hover:text-white hover:bg-neutral-100 dark:hover:bg-neutral-900 focus:outline-none"
            aria-label="Toggle Menu"
          >
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white/95 dark:bg-black/95 backdrop-blur-xl border-b border-black/10 dark:border-[#4e3f6e]/30 px-6 py-6 space-y-4 animate-in fade-in slide-in-from-top-4 duration-200 shadow-xl">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="block font-mono text-sm sm:text-base uppercase tracking-[0.18em] text-neutral-800 dark:text-neutral-200 hover:text-[#4e3f6e] dark:hover:text-[#c4b7d8] py-2 font-semibold"
            >
              {link.name}
            </a>
          ))}
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setMobileMenuOpen(false)}
            className="flex items-center gap-2 font-mono text-sm uppercase tracking-[0.18em] text-[#4e3f6e] dark:text-[#c4b7d8] py-2 font-semibold"
          >
            <FileText className="h-4 w-4 text-[#4e3f6e] dark:text-[#c4b7d8]" />
            <span>Resume (PDF)</span>
          </a>
          <div className="pt-4 border-t border-black/10 dark:border-neutral-800 flex flex-col gap-2.5">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenChat?.();
              }}
              className="w-full flex items-center justify-center gap-2 px-4 py-3 rounded-xl font-mono text-sm font-semibold text-[#4e3f6e] dark:text-[#dbd5e7] bg-[#4e3f6e]/10 dark:bg-[#4e3f6e]/20 border border-[#4e3f6e]/30"
            >
              <Sparkles className="h-4 w-4 text-[#4e3f6e] dark:text-[#c4b7d8]" />
              <span>Ask Lokesh AI Assistant</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
