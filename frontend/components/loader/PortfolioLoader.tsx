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
    }, 20);

    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <div
      className={`fixed inset-0 z-50 flex flex-col items-center justify-center bg-black transition-all duration-700 ease-in-out px-4 select-none ${
        isExiting
          ? "opacity-0 -translate-y-8 pointer-events-none scale-95"
          : "opacity-100 translate-y-0"
      }`}
    >
      {/* Background Soft Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vw] max-w-[800px] h-[300px] bg-[#4e3f6e]/25 rounded-full blur-[140px] pointer-events-none -z-10" />

      {/* Main Container */}
      <div className="flex flex-col items-center text-center w-full max-w-6xl">
        {/* Big Stylized Name in ONE Line with Syne Font */}
        <div className="relative w-full flex justify-center">
          <h1 className="whitespace-nowrap font-display font-extrabold tracking-[-2px] text-4xl sm:text-6xl md:text-8xl lg:text-9xl text-transparent bg-clip-text bg-gradient-to-r from-white via-[#dbd5e7] to-[#4e3f6e] drop-shadow-[0_0_40px_rgba(78,63,110,0.45)]">
            Lokesh Kumar R
          </h1>
        </div>

        {/* Status Line with JetBrains Mono */}
        <div className="mt-8 flex items-center justify-center gap-2 font-mono text-xs sm:text-sm md:text-base text-slate-300">
          <span className="text-[#c4b7d8]">{statusText}</span>
          <span className="inline-block w-2 h-4 sm:h-5 bg-[#4e3f6e] animate-pulse align-middle" />
        </div>

        {/* Glowing Progress Line */}
        <div className="mt-5 w-56 sm:w-80 md:w-96 h-[2px] bg-[#1a1626] rounded-full overflow-hidden relative">
          <div
            className="h-full bg-gradient-to-r from-[#4e3f6e] via-[#7b689a] to-white transition-all duration-75 ease-out shadow-[0_0_16px_rgba(78,63,110,1)]"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>
    </div>
  );
}
