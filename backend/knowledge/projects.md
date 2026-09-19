# Projects: Production AI Implementations

## Project 1: AssistHub — AI HR Assistant
- **Type**: AI-powered HR Assistant
- **Purpose**: Enables employees to access company policies and internal organizational information through a conversational interface.
- **Key Capabilities**:
  - Conversational access to company policies and internal documents.
  - Multi-agent architecture (Supervisor, RAG, Calendar, and Email agents).
  - Retrieval-Augmented Generation (RAG) with context-aware response generation.
  - Agent tool calling for automated Google Meet scheduling and email notifications.
  - Google Workspace API integration.
- **Technologies**: AWS Bedrock, FastAPI, React.js, Python, Strands SDK, RAG, Google Workspace APIs, AWS S3, AWS Knowledge Bases, AWS Lambda, Vercel.
- **Summary**: Combines multi-agent systems, RAG, and tool calling to retrieve internal company knowledge and execute workplace actions such as scheduling meetings and sending emails.

---

## Project 2: Intelligent Candidate Discovery Agent
- **Type**: AI-powered recruitment and candidate-ranking system
- **Purpose**: Automates candidate screening and dynamic ranking.
- **Key Capabilities**:
  - Analyzes job descriptions, candidate skills, and professional history.
  - Performs AI-powered candidate screening.
  - Ranks candidates based on job relevance with dynamic scoring.
  - Incorporates candidate activity signals and offer-acceptance likelihood into ranking.
- **Technologies**: Python, FastAPI, React.js, Azure AI, Pydantic, Docker, DockerHub.
- **Summary**: AI recruitment agent that evaluates candidates using JDs, skills, and history, dynamically adjusting rankings based on activity and acceptance probability.

---

## Project 3: News Ranking Using LLM Agent
- **Type**: LLM-powered news-ranking platform
- **Purpose**: Evaluates and ranks news articles using AI across multidimensional metrics.
- **Key Capabilities**:
  - Scrapes news articles in real time using Selenium.
  - Analyzes relevance, sentiment, and factuality with Gemini 2.0.
  - Provides an interactive exploration interface for ranked news content.
- **Technologies**: Gemini 2.0, FastAPI, LangChain, Selenium, JavaScript, HTML, CSS.
- **Summary**: LLM-powered platform that evaluates news articles based on relevance, sentiment, and factuality.
