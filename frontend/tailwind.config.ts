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
          DEFAULT: "#000000",
          subtle: "#0B0910",
          card: "#120F1A",
          hover: "#1A1626",
        },
        border: {
          subtle: "rgba(78, 63, 110, 0.25)",
          highlight: "rgba(78, 63, 110, 0.55)",
        },
        brand: {
          DEFAULT: "#4e3f6e",
          50: "#f6f5f9",
          100: "#edeaf3",
          200: "#dbd5e7",
          300: "#c4b7d8",
          400: "#9e8cb8",
          500: "#7b689a",
          600: "#4e3f6e",
          700: "#3e3258",
          800: "#302645",
          900: "#221a32",
          950: "#120e1c",
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
