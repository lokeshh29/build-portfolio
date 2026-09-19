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

export default function Home() {
  const [isChatOpen, setIsChatOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#07090E] text-slate-100 selection:bg-sky-500/20 selection:text-sky-300">
      {/* Navigation */}
      <Navbar onOpenChat={() => setIsChatOpen(true)} />

      {/* Main Content */}
      <main>
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
