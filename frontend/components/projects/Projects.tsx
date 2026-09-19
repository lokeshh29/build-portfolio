"use client";

import React, { useState } from "react";
import ProjectCard, { ProjectData } from "./ProjectCard";
import ArchitectureModal, { ProjectArchitecture } from "./ArchitectureModal";

export default function Projects() {
  const [selectedArch, setSelectedArch] = useState<ProjectArchitecture | null>(
    null
  );
  const [isModalOpen, setIsModalOpen] = useState(false);

  const projects: ProjectData[] = [
    {
      id: "assisthub",
      title: "AssistHub",
      badge: "Multi-Agent System",
      tagline: "Multi-Agent RAG HR Assistant",
      githubUrl: "https://github.com/lokeshh29/assisthub-doc-ai",
      description:
        "AI-powered HR assistant enabling employees to interact with organizational policies and internal information through a conversational interface, tool calling, and automated scheduling.",
      featured: true,
      engineeringHighlights: [
        "Multi-Agent Orchestration (Supervisor, RAG, Calendar & Email agents)",
        "Retrieval-Augmented Generation with AWS Bedrock Knowledge Bases",
        "Agent Tool Calling for automated Google Meet scheduling & email notifications",
        "Cloud-native serverless architecture deployed on AWS Lambda & S3",
      ],
      technologies: [
        "AWS Bedrock",
        "FastAPI",
        "React.js",
        "Python",
        "Strands SDK",
        "RAG",
        "Google Workspace APIs",
        "AWS S3",
        "AWS Knowledge Bases",
        "AWS Lambda",
        "Vercel",
      ],
      architecture: {
        title: "AssistHub — Multi-Agent RAG HR Assistant",
        subtitle: "Multi-Agent Architecture & Tool Calling Flow",
        description:
          "AssistHub combines a Supervisor Agent with specialized domain sub-agents (RAG, Calendar, Email) to retrieve verified internal knowledge and execute real-world organizational actions.",
        flowSteps: [
          {
            step: "01",
            label: "User Query & React UI",
            desc: "Employee submits natural language policy inquiry or meeting request via React frontend.",
          },
          {
            step: "02",
            label: "FastAPI Gateway",
            desc: "Validates session, enforces rate limits, and routes payload to the Supervisor Agent.",
          },
          {
            step: "03",
            label: "Supervisor Agent Decomposition",
            desc: "Parses user intent and delegates tasks to specialized sub-agents via tool-calling.",
          },
          {
            step: "04",
            label: "RAG & Action Execution",
            desc: "RAG Agent queries Bedrock KB / S3; Calendar & Email Agents invoke Google Workspace APIs.",
          },
          {
            step: "05",
            label: "Response Synthesis",
            desc: "Synthesizes citations and action confirmations back to user interface.",
          },
        ],
        components: [
          {
            name: "Supervisor Agent",
            role: "Intent classification & sub-agent orchestration",
          },
          {
            name: "RAG Agent",
            role: "Retrieval from AWS Bedrock Knowledge Bases & S3",
          },
          {
            name: "Calendar Agent",
            role: "Automated Google Meet generation & scheduling",
          },
          {
            name: "Email Agent",
            role: "Transactional notifications via Gmail API",
          },
        ],
        technologies: [
          "AWS Bedrock",
          "FastAPI",
          "React.js",
          "Python",
          "Strands SDK",
          "RAG",
          "AWS Lambda",
          "AWS S3",
        ],
      },
    },
    {
      id: "candidate-discovery",
      title: "Candidate Discovery Agent",
      badge: "Recruitment Automation",
      tagline: "Intelligent Candidate Discovery & Dynamic Ranking",
      githubUrl: "https://github.com/lokeshh29/intelligent-candidate-agent",
      description:
        "AI recruitment system that analyzes job descriptions, candidate skills, and professional history, dynamically adjusting rankings based on activity signals and offer-acceptance likelihood.",
      featured: true,
      engineeringHighlights: [
        "Dynamic candidate scoring incorporating activity signals & acceptance probabilities",
        "Deep skill & professional trajectory matching against complex job descriptions",
        "Containerized microservice built with FastAPI, Pydantic, and Azure AI",
        "Automated candidate screening eliminating manual resume parsing bottlenecks",
      ],
      technologies: [
        "Python",
        "FastAPI",
        "React.js",
        "Azure AI",
        "Pydantic",
        "Docker",
        "DockerHub",
      ],
      architecture: {
        title: "Intelligent Candidate Discovery Agent",
        subtitle: "Scoring & Dynamic Ranking Pipeline",
        description:
          "Multi-stage recruitment intelligence pipeline transforming unstructured candidate resumes and job descriptions into dynamic relevance scores.",
        flowSteps: [
          {
            step: "01",
            label: "JD & Candidate Ingestion",
            desc: "Ingests job descriptions and candidate profiles with Pydantic schema validation.",
          },
          {
            step: "02",
            label: "AI Semantic Skill Matching",
            desc: "Azure AI models extract technical competencies and career trajectory signals.",
          },
          {
            step: "03",
            label: "Dynamic Scoring Pipeline",
            desc: "Calculates relevance score weighted by recent activity signals and acceptance likelihood.",
          },
          {
            step: "04",
            label: "Ranked Exploration Interface",
            desc: "Renders sorted candidate recommendations with explainable ranking criteria.",
          },
        ],
        components: [
          {
            name: "Ingestion Engine",
            role: "Structured data parsing & normalization",
          },
          {
            name: "Matching Core",
            role: "Skill extraction & relevance computation via Azure AI",
          },
          {
            name: "Dynamic Ranker",
            role: "Behavioral signals & offer acceptance probability modeling",
          },
        ],
        technologies: [
          "Python",
          "FastAPI",
          "Azure AI",
          "Pydantic",
          "Docker",
          "React",
        ],
      },
    },
    {
      id: "news-ranking",
      title: "News Ranking Agent",
      badge: "LLM Content Analysis",
      tagline: "LLM-Powered News Ranking Platform",
      githubUrl: "https://github.com/lokeshh29/news_ranking",
      description:
        "Real-time news exploration platform using Gemini 2.0 and LangChain to evaluate and rank articles across multidimensional metrics: relevance, sentiment, and factuality.",
      featured: true,
      engineeringHighlights: [
        "Multidimensional LLM evaluation: Relevance, Sentiment, and Factuality analysis",
        "Automated real-time web scraping pipeline engineered with Selenium",
        "Interactive exploration interface for filtering and exploring ranked news content",
        "FastAPI backend managing asynchronous scraping and LLM evaluation tasks",
      ],
      technologies: [
        "Gemini 2.0",
        "FastAPI",
        "LangChain",
        "Selenium",
        "JavaScript",
        "HTML",
        "CSS",
      ],
      architecture: {
        title: "News Ranking Using LLM Agent",
        subtitle: "Content Ingestion & Factuality Ranking Pipeline",
        description:
          "Automated pipeline crawling diverse news sources, extracting articles, and applying LLMs for factuality verification and sentiment scoring.",
        flowSteps: [
          {
            step: "01",
            label: "Automated Web Scraping",
            desc: "Selenium workers scrape real-time articles from configured news publications.",
          },
          {
            step: "02",
            label: "Text Preprocessing & Cleaning",
            desc: "Cleans HTML, extracts article body, and formats metadata for LLM ingestion.",
          },
          {
            step: "03",
            label: "Gemini 2.0 Multidimensional Analysis",
            desc: "LangChain chain evaluates factual claims, sentiment polarity, and topic relevance.",
          },
          {
            step: "04",
            label: "Ranked Stream Delivery",
            desc: "Articles are indexed and served via FastAPI to an interactive web dashboard.",
          },
        ],
        components: [
          {
            name: "Scraper Module",
            role: "Selenium headless browser article collection",
          },
          {
            name: "Analysis Engine",
            role: "Gemini 2.0 factuality & sentiment scoring",
          },
          {
            name: "Dashboard API",
            role: "FastAPI endpoints delivering ranked real-time feeds",
          },
        ],
        technologies: [
          "Gemini 2.0",
          "FastAPI",
          "LangChain",
          "Selenium",
          "Python",
        ],
      },
    },
  ];

  const handleOpenArchitecture = (arch: ProjectArchitecture) => {
    setSelectedArch(arch);
    setIsModalOpen(true);
  };

  return (
    <section id="projects" className="py-20 border-t border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mb-12">
          <span className="text-xs font-semibold uppercase tracking-wider text-sky-400">
            Featured Work
          </span>
          <h2 className="mt-2 text-3xl sm:text-4xl font-bold text-white tracking-tight">
            Production AI Projects
          </h2>
          <p className="mt-3 text-slate-400 text-sm sm:text-base">
            Architected with multi-agent orchestration, retrieval-augmented generation, tool calling, and cloud infrastructure.
          </p>
        </div>

        {/* Project Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              onViewArchitecture={handleOpenArchitecture}
            />
          ))}
        </div>
      </div>

      {/* Interactive System Architecture Modal */}
      <ArchitectureModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        data={selectedArch}
      />
    </section>
  );
}
