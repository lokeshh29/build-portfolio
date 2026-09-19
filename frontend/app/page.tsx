export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-8 text-center">
      <div className="inline-flex items-center gap-2 rounded-full border border-sky-500/30 bg-sky-500/10 px-4 py-1.5 text-xs font-medium text-sky-400">
        <span className="h-2 w-2 rounded-full bg-sky-400 animate-pulse"></span>
        AI/ML Engineer | AI Agents & RAG
      </div>
      <h1 className="mt-6 text-4xl sm:text-6xl font-bold tracking-tight text-white">
        Lokesh Kumar R
      </h1>
      <p className="mt-4 max-w-xl text-base sm:text-lg text-slate-400">
        Building intelligent systems that combine LLMs, retrieval, agents, APIs, and cloud infrastructure.
      </p>
    </main>
  );
}
