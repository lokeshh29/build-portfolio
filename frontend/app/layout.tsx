import type { Metadata, Viewport } from "next";
import "./globals.css";
import { ThemeProvider } from "@/components/theme/ThemeProvider";

export const metadata: Metadata = {
  title: "Lokesh Kumar R — AI & ML Engineer",
  description:
    "Portfolio of Lokesh Kumar R — AI & ML Engineer building AI Agents, RAG systems, and cloud-native AI applications.",
  keywords: [
    "Lokesh Kumar R",
    "AI & ML Engineer",
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
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=DM+Sans:ital,opsz,wght@0,9..40,300..800;1,9..40,300..800&family=JetBrains+Mono:wght@400;500;600&family=Syne:wght@500;600;700;800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-screen bg-[#FAFAF9] text-[#0F0F1A] dark:bg-[#0A0A0F] dark:text-[#F1F5F9] font-body antialiased selection:bg-purple-500/30 selection:text-purple-300 transition-colors duration-500">
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
