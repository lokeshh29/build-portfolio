import type { Metadata, Viewport } from "next";
import "./globals.css";

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
    <html lang="en" className="dark">
      <body className="min-h-screen bg-[#07090E] text-slate-100 antialiased selection:bg-cyan-500/20 selection:text-cyan-300">
        {children}
      </body>
    </html>
  );
}
