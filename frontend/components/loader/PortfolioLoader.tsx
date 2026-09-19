"use client";

import React, { useState, useEffect } from "react";

interface PortfolioLoaderProps {
  onComplete?: () => void;
}

export default function PortfolioLoader({ onComplete }: PortfolioLoaderProps) {
  const [progress, setProgress] = useState(0);
  const [statusText, setStatusText] = useState("// initializing portfolio...");
  const [isExiting, setIsExiting] = useState(false);

  useEffect(() => {
    const statuses = [
      { at: 20, text: "// initializing portfolio..." },
      { at: 45, text: "// loading neural context..." },
      { at: 70, text: "// mounting AI agents..." },
      { at: 90, text: "// system ready." },
    ];

    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => {
            setIsExiting(true);
            setTimeout(() => {
              onComplete?.();
            }, 600);
          }, 350);
          return 100;
        }

        const next = prev + 2;
        const matched = statuses.filter((s) => next >= s.at).pop();
        if (matched) {
          setStatusText(matched.text);
        }
        return next;
      });
    }, 22);

    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <div
      className={`fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#07090E] transition-all duration-700 ease-in-out px-4 select-none ${
        isExiting
          ? "opacity-0 -translate-y-8 pointer-events-none scale-95"
          : "opacity-100 translate-y-0"
      }`}
    >
      {/* Background Soft Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vw] max-w-[800px] h-[300px] bg-gradient-to-r from-sky-500/15 via-indigo-500/20 to-purple-500/15 rounded-full blur-[140px] pointer-events-none -z-10" />

      {/* Main Container */}
      <div className="flex flex-col items-center text-center w-full max-w-6xl">
        {/* Big Stylized Name in ONE Line */}
        <div className="relative w-full flex justify-center">
          <h1 className="whitespace-nowrap font-sans font-black tracking-tighter text-4xl sm:text-6xl md:text-8xl lg:text-9xl text-transparent bg-clip-text bg-gradient-to-r from-sky-400 via-indigo-200 to-purple-400 drop-shadow-[0_0_35px_rgba(99,102,241,0.25)]">
            Lokesh Kumar R
          </h1>
        </div>

        {/* Status Line */}
        <div className="mt-8 flex items-center justify-center gap-2 font-mono text-xs sm:text-sm md:text-base text-slate-400">
          <span className="text-sky-300/90">{statusText}</span>
          <span className="inline-block w-2 h-4 sm:h-5 bg-sky-400 animate-pulse align-middle" />
        </div>

        {/* Glowing Progress Line */}
        <div className="mt-4 w-56 sm:w-80 md:w-96 h-[2px] bg-slate-800/90 rounded-full overflow-hidden relative">
          <div
            className="h-full bg-gradient-to-r from-sky-400 via-indigo-400 to-purple-500 transition-all duration-75 ease-out shadow-[0_0_15px_rgba(56,189,248,1)]"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>
    </div>
  );
}
