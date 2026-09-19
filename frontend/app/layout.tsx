import type { Metadata, Viewport } from "next";
import "./globals.css";
import { ThemeProvider } from "@/components/theme/ThemeProvider";

export const metadata: Metadata = {
  title: "Lokesh Kumar R | AI/ML Engineer",
  description:
    "Personal portfolio of Lokesh Kumar R — AI/ML Engineer building AI Agents, RAG systems, and cloud-native AI applications.",
  keywords: [
    "Lokesh Kumar R",
    "AI/ML Engineer",
    "AI Agents",
    "RAG",
    "FastAPI",
    "Python",
    "AWS",
    "Multi-Agent Systems",
  ],
  authors: [{ name: "Lokesh Kumar R" }],
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <body className="min-h-screen bg-[#FAFAFC] text-slate-900 dark:bg-[#07090E] dark:text-slate-100 antialiased selection:bg-sky-500/20 selection:text-sky-500 transition-colors duration-300">
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
