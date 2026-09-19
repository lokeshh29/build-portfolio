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
      { at: 15, text: "// initializing portfolio..." },
      { at: 40, text: "// loading neural context..." },
      { at: 65, text: "// mounting AI agents..." },
      { at: 90, text: "// system ready." },
    ];

    const interval = setInterval(() => {
      setProgress((prev) => {
        const next = Math.min(prev + 3, 100);
        const matched = statuses.filter((s) => next >= s.at).pop();
        if (matched) {
          setStatusText(matched.text);
        }

        if (next >= 100) {
          clearInterval(interval);
          setTimeout(() => {
            setIsExiting(true);
            setTimeout(() => {
              onComplete?.();
            }, 500);
          }, 250);
        }

        return next;
      });
    }, 25);

    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <div
      className={`fixed inset-0 z-50 flex flex-col items-center justify-center bg-white dark:bg-black transition-all duration-500 ease-in-out px-4 select-none ${
        isExiting
          ? "opacity-0 -translate-y-6 pointer-events-none scale-95"
          : "opacity-100 translate-y-0"
      }`}
    >
      {/* Ambient Animated Glow Orb */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[85vw] max-w-[700px] h-[300px] bg-gradient-to-tr from-[#4e3f6e]/15 via-[#7b689a]/10 to-transparent dark:from-[#4e3f6e]/25 dark:via-[#7b689a]/15 rounded-full blur-[120px] pointer-events-none -z-10 animate-pulse" />

      {/* Main Container */}
      <div className="flex flex-col items-center text-center w-full max-w-4xl px-4 animate-in fade-in zoom-in-95 duration-500">
        {/* Big Stylized Name in ONE Line with Syne Font - Perfectly Scaled to Viewport */}
        <div className="relative w-full flex justify-center">
          <h1 className="font-display font-extrabold tracking-tight text-3xl sm:text-5xl md:text-6xl lg:text-7xl text-transparent bg-clip-text bg-gradient-to-r from-black via-[#4e3f6e] to-[#7b689a] dark:from-white dark:via-[#dbd5e7] dark:to-[#4e3f6e] drop-shadow-[0_10px_35px_rgba(78,63,110,0.2)] dark:drop-shadow-[0_0_40px_rgba(78,63,110,0.45)] transition-all">
            Lokesh Kumar R
          </h1>
        </div>

        {/* Status Line with JetBrains Mono */}
        <div className="mt-7 flex items-center justify-center gap-3 font-mono text-xs sm:text-sm md:text-base text-neutral-600 dark:text-slate-300">
          <span className="text-[#4e3f6e] dark:text-[#c4b7d8] font-semibold">{statusText}</span>
          <span className="inline-block w-2 h-4 sm:h-5 bg-[#4e3f6e] animate-pulse align-middle" />
          <span className="text-neutral-400 dark:text-neutral-500 font-mono text-xs sm:text-sm ml-1">
            [{progress}%]
          </span>
        </div>

        {/* Glowing Progress Line */}
        <div className="mt-5 w-56 sm:w-72 md:w-80 h-[3px] bg-neutral-200/80 dark:bg-[#1a1626] border border-neutral-300/40 dark:border-[#4e3f6e]/30 rounded-full overflow-hidden relative shadow-inner">
          <div
            className="h-full bg-gradient-to-r from-[#4e3f6e] via-[#7b689a] to-[#4e3f6e] dark:to-white transition-all duration-75 ease-out shadow-[0_0_16px_rgba(78,63,110,0.9)]"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>
    </div>
  );
}
