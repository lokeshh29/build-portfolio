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
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand with Syne Display font */}
        <a
          href="#"
          className="group flex items-center gap-2.5 font-display text-xl font-extrabold tracking-tight text-black dark:text-white transition-colors"
        >
          <div className="h-8 w-8 rounded-lg bg-[#4e3f6e]/10 dark:bg-[#4e3f6e]/25 border border-[#4e3f6e]/30 flex items-center justify-center text-[#4e3f6e] dark:text-[#c4b7d8] group-hover:border-[#4e3f6e]/60 transition-all">
            <Terminal className="h-4 w-4" />
          </div>
          <span>
            Lokesh<span className="text-[#4e3f6e]">.</span>
          </span>
        </a>

        {/* Desktop Nav Links in JetBrains Mono style */}
        <nav className="hidden md:flex items-center gap-7 font-mono text-xs uppercase tracking-wider">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-black/70 hover:text-black dark:text-white/70 dark:hover:text-white transition-colors"
            >
              {link.name}
            </a>
          ))}
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-[#4e3f6e] hover:text-[#302645] dark:text-[#c4b7d8] dark:hover:text-white transition-colors font-semibold"
          >
            <FileText className="h-3.5 w-3.5" />
            <span>Resume</span>
          </a>
        </nav>

        {/* Right Actions & Theme Toggle */}
        <div className="hidden md:flex items-center gap-3">
          <ThemeToggle />

          <button
            onClick={onOpenChat}
            className="group relative inline-flex items-center gap-2 px-3.5 py-1.5 rounded-lg font-mono text-xs font-semibold text-[#4e3f6e] dark:text-[#dbd5e7] bg-[#4e3f6e]/10 dark:bg-[#4e3f6e]/20 border border-[#4e3f6e]/30 hover:bg-[#4e3f6e] hover:text-white transition-all shadow-sm"
          >
            <Sparkles className="h-3.5 w-3.5 text-[#4e3f6e] dark:text-[#c4b7d8] group-hover:text-white group-hover:scale-110 transition-transform" />
            <span>Ask Lokesh AI</span>
          </button>

          <a
            href="#contact"
            className="inline-flex items-center justify-center px-4 py-1.5 rounded-lg font-mono text-xs font-semibold text-white bg-black hover:bg-neutral-800 dark:text-black dark:bg-white dark:hover:bg-neutral-200 transition-all shadow-sm"
          >
            Get in Touch
          </a>
        </div>

        {/* Mobile Actions */}
        <div className="flex md:hidden items-center gap-2">
          <ThemeToggle />
          <button
            onClick={onOpenChat}
            className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md font-mono text-xs font-semibold text-[#4e3f6e] dark:text-[#dbd5e7] bg-[#4e3f6e]/10 dark:bg-[#4e3f6e]/20 border border-[#4e3f6e]/30"
          >
            <Sparkles className="h-3 w-3 text-[#4e3f6e] dark:text-[#c4b7d8]" />
            <span>AI</span>
          </button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-1.5 rounded-lg text-black/70 dark:text-white/70 hover:text-black dark:hover:text-white hover:bg-neutral-100 dark:hover:bg-neutral-900 focus:outline-none"
            aria-label="Toggle Menu"
          >
            {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white/95 dark:bg-black/95 backdrop-blur-xl border-b border-black/10 dark:border-[#4e3f6e]/30 px-6 py-5 space-y-3 animate-in fade-in slide-in-from-top-4 duration-200 shadow-xl">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="block font-mono text-xs uppercase tracking-wider text-black/80 dark:text-white/80 hover:text-[#4e3f6e] dark:hover:text-[#c4b7d8] py-1.5"
            >
              {link.name}
            </a>
          ))}
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setMobileMenuOpen(false)}
            className="flex items-center gap-2 font-mono text-xs uppercase tracking-wider text-[#4e3f6e] dark:text-[#c4b7d8] py-1.5 font-semibold"
          >
            <FileText className="h-4 w-4 text-[#4e3f6e] dark:text-[#c4b7d8]" />
            <span>Resume (PDF)</span>
          </a>
          <div className="pt-3 border-t border-black/10 dark:border-neutral-800 flex flex-col gap-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenChat?.();
              }}
              className="w-full flex items-center justify-center gap-2 px-4 py-2 rounded-lg font-mono text-xs font-semibold text-[#4e3f6e] dark:text-[#dbd5e7] bg-[#4e3f6e]/10 dark:bg-[#4e3f6e]/20 border border-[#4e3f6e]/30"
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
