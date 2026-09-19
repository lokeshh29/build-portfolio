"use client";

import React, { useState } from "react";
import Navbar from "@/components/navbar/Navbar";
import Hero from "@/components/hero/Hero";
import About from "@/components/about/About";
import Experience from "@/components/experience/Experience";
import Projects from "@/components/projects/Projects";
import Skills from "@/components/skills/Skills";
import Achievements from "@/components/achievements/Achievements";
import Contact from "@/components/contact/Contact";
import Footer from "@/components/footer/Footer";
import ChatWidget from "@/components/ai-chat/ChatWidget";
import PortfolioLoader from "@/components/loader/PortfolioLoader";

export default function Home() {
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  return (
    <div className="min-h-screen bg-[#FAFAFC] text-slate-900 dark:bg-[#07090E] dark:text-slate-100 selection:bg-sky-500/20 selection:text-sky-500 relative transition-colors duration-300">
      {/* Intro Portfolio Loader */}
      {isLoading && (
        <PortfolioLoader onComplete={() => setIsLoading(false)} />
      )}

      {/* Navigation */}
      <Navbar onOpenChat={() => setIsChatOpen(true)} />

      {/* Main Content */}
      <main
        className={`transition-opacity duration-700 ${
          isLoading ? "opacity-0" : "opacity-100"
        }`}
      >
        <Hero onOpenChat={() => setIsChatOpen(true)} />
        <About />
        <Experience />
        <Projects />
        <Skills />
        <Achievements />
        <Contact />
      </main>

      {/* Footer */}
      <Footer />

      {/* AI Assistant Chat Widget */}
      <ChatWidget
        isOpen={isChatOpen}
        onClose={() => setIsChatOpen(false)}
      />
    </div>
  );
}
