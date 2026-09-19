import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        background: {
          DEFAULT: "#0A0A0F",
          subtle: "#13131A",
          card: "#1A1A24",
          hover: "#222230",
        },
        border: {
          subtle: "rgba(124, 58, 237, 0.2)",
          highlight: "rgba(232, 121, 249, 0.4)",
        },
        accent: {
          violet: "#7C3AED",
          fuchsia: "#E879F9",
          purple: "#A855F7",
          sky: "#38BDF8",
          indigo: "#6366F1",
        },
      },
      fontFamily: {
        display: ["Syne", "sans-serif"],
        body: ["DM Sans", "sans-serif"],
        sans: ["DM Sans", "sans-serif"],
        mono: ["JetBrains Mono", "monospace"],
      },
      animation: {
        "pulse-subtle": "pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite",
      },
    },
  },
  plugins: [],
};
export default config;
