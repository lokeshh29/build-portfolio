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
          ? "bg-white/85 dark:bg-[#07090E]/85 backdrop-blur-md border-b border-slate-200 dark:border-slate-800/80 shadow-md dark:shadow-black/20 py-3.5"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand */}
        <a
          href="#"
          className="group flex items-center gap-2 text-lg font-semibold tracking-tight text-slate-900 dark:text-white hover:text-sky-500 dark:hover:text-sky-400 transition-colors"
        >
          <div className="h-8 w-8 rounded-lg bg-sky-500/10 border border-sky-500/30 flex items-center justify-center text-sky-600 dark:text-sky-400 group-hover:border-sky-400/60 transition-all">
            <Terminal className="h-4 w-4" />
          </div>
          <span>
            Lokesh<span className="text-sky-500 dark:text-sky-400">.</span>
          </span>
        </a>

        {/* Desktop Nav Links */}
        <nav className="hidden md:flex items-center gap-7">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-slate-600 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-100 transition-colors"
            >
              {link.name}
            </a>
          ))}
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-sm font-medium text-slate-600 hover:text-sky-600 dark:text-slate-400 dark:hover:text-sky-300 transition-colors"
          >
            <FileText className="h-3.5 w-3.5 text-sky-500 dark:text-sky-400" />
            <span>Resume</span>
          </a>
        </nav>

        {/* Right Actions & Theme Toggle */}
        <div className="hidden md:flex items-center gap-3">
          {/* Theme Toggle Button */}
          <ThemeToggle />

          <button
            onClick={onOpenChat}
            className="group relative inline-flex items-center gap-2 px-3.5 py-1.5 rounded-lg text-xs font-semibold text-sky-700 dark:text-sky-300 bg-sky-50 dark:bg-sky-500/10 border border-sky-300 dark:border-sky-500/30 hover:bg-sky-100 dark:hover:bg-sky-500/20 hover:border-sky-400 transition-all shadow-sm"
          >
            <Sparkles className="h-3.5 w-3.5 text-sky-500 dark:text-sky-400 group-hover:scale-110 transition-transform" />
            <span>Ask Lokesh AI</span>
          </button>

          <a
            href="#contact"
            className="inline-flex items-center justify-center px-4 py-1.5 rounded-lg text-xs font-semibold text-slate-700 dark:text-slate-200 bg-slate-100 hover:bg-slate-200 dark:bg-slate-800/80 dark:hover:bg-slate-700/80 border border-slate-300 dark:border-slate-700 transition-all"
          >
            Get in Touch
          </a>
        </div>

        {/* Mobile Actions */}
        <div className="flex md:hidden items-center gap-2">
          <ThemeToggle />
          <button
            onClick={onOpenChat}
            className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md text-xs font-semibold text-sky-700 dark:text-sky-300 bg-sky-50 dark:bg-sky-500/10 border border-sky-300 dark:border-sky-500/30"
          >
            <Sparkles className="h-3 w-3 text-sky-500 dark:text-sky-400" />
            <span>AI</span>
          </button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-1.5 rounded-lg text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800/60 focus:outline-none"
            aria-label="Toggle Menu"
          >
            {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white/95 dark:bg-[#0D111A]/95 backdrop-blur-xl border-b border-slate-200 dark:border-slate-800 px-6 py-5 space-y-3 animate-in fade-in slide-in-from-top-4 duration-200 shadow-xl">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="block text-sm font-medium text-slate-700 dark:text-slate-300 hover:text-sky-500 dark:hover:text-sky-400 py-1.5"
            >
              {link.name}
            </a>
          ))}
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setMobileMenuOpen(false)}
            className="flex items-center gap-2 text-sm font-medium text-sky-600 dark:text-sky-300 hover:underline py-1.5"
          >
            <FileText className="h-4 w-4 text-sky-500 dark:text-sky-400" />
            <span>Resume (PDF)</span>
          </a>
          <div className="pt-3 border-t border-slate-200 dark:border-slate-800 flex flex-col gap-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenChat?.();
              }}
              className="w-full flex items-center justify-center gap-2 px-4 py-2 rounded-lg text-xs font-semibold text-sky-700 dark:text-sky-300 bg-sky-50 dark:bg-sky-500/10 border border-sky-300 dark:border-sky-500/30"
            >
              <Sparkles className="h-4 w-4 text-sky-500 dark:text-sky-400" />
              <span>Ask Lokesh AI Assistant</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
