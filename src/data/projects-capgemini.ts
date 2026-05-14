export type Project = {
  slug: string;
  title: string;
  oneLiner: string;
  highlights: string[]; // keep 2–3
  tech: string[]; // keep 6–10
  links: { label: string; href: string }[]; // fill later
  featured?: boolean;
};

export const projects: Project[] = [
  {
    slug: "retrieval-advisor-assist",
    title: "Intelligent Retrieval & Advisor-Assist System",
    oneLiner:
      "RAG-powered decision-support application with conditional routing, grounding verification, and provider-agnostic LLM integration.",
    highlights: [
      "Multi-node RAG pipeline in LangGraph with conditional routing across five query types and configurable retrieval strategies",
      "Hallucination mitigation via token-overlap grounding verification, retry/refuse loop, and dual confidence thresholds",
      "Evaluation framework with groundedness, relevance, and refusal-correctness scorers",
    ],
    tech: [
      "Python",
      "LangGraph",
      "FastAPI",
      "FAISS",
      "ChromaDB",
      "OpenAI",
      "Anthropic Claude",
      "AWS Bedrock",
      "Ollama",
    ],
    links: [{ label: "Repo", href: "" }, { label: "Demo", href: "" }],
    featured: true,
  },
  {
    slug: "multi-agent-orchestration",
    title: "Multi-Agent Orchestration Platform",
    oneLiner:
      "Agent-based research pipeline with parallel tool execution, self-critique revision, and Pydantic-validated inter-agent contracts.",
    highlights: [
      "4-agent pipeline (TopicSplitter, parallel Researchers, Synthesizer, Critic) with concurrent execution",
      "Self-critique revision loop evaluating factual consistency, citation accuracy, and logical coherence",
      "Pydantic-validated inter-agent data contracts for reliable structured data flow",
    ],
    tech: [
      "Python",
      "OpenAI",
      "Tavily",
      "Pydantic",
      "ThreadPoolExecutor",
      "Gradio",
    ],
    links: [{ label: "Repo", href: "" }, { label: "Demo", href: "" }],
    featured: true,
  },
  {
    slug: "decision-simulation-engine",
    title: "Decision-Simulation Engine",
    oneLiner:
      "Full-stack GenAI application with event sourcing, deterministic replay, scenario versioning, and admin analytics.",
    highlights: [
      "Containerized full-stack app (Next.js, FastAPI, PostgreSQL, Docker Compose) with OpenAPI-documented APIs",
      "Event-sourced session model with custom lexer/parser/AST evaluator eliminating code injection risk",
      "3,200+ line test suite and Playwright E2E coverage",
    ],
    tech: [
      "Python",
      "TypeScript",
      "Next.js",
      "FastAPI",
      "PostgreSQL",
      "Docker",
      "Playwright",
      "Pydantic",
    ],
    links: [{ label: "Repo", href: "" }, { label: "Demo", href: "" }],
    featured: true,
  },
  {
    slug: "content-generation-pipeline",
    title: "Data Ingestion & Content Generation Pipeline",
    oneLiner:
      "Multi-format document ingestion pipeline with TF-IDF content alignment and provider-agnostic LLM orchestration.",
    highlights: [
      "6-stage pipeline ingesting unstructured documents (PowerPoint, PDF, RTF, DOCX) with style-aware heading detection",
      "TF-IDF cosine similarity for cross-document content alignment",
      "Provider-agnostic LLM layer (OpenAI, Gemini, Grok) with priority-based fallback for graceful degradation",
    ],
    tech: [
      "Python",
      "NLP",
      "TF-IDF",
      "scikit-learn",
      "OpenAI",
      "Google Gemini",
      "Pydantic",
    ],
    links: [{ label: "Repo", href: "" }, { label: "Demo", href: "" }],
    featured: true,
  },
  {
    slug: "fault-tolerant-etl",
    title: "Fault-Tolerant ETL & Content Generation System",
    oneLiner:
      "Production-grade AI pipeline with SHA256-keyed caching, rate limiting, checkpoint/resume, and multi-format export.",
    highlights: [
      "4-stage ETL pipeline with YAML-driven config, SHA256-keyed disk caching, RPM/TPM rate limiting, and exponential backoff retry",
      "Checkpoint/resume system eliminating redundant API calls and enabling mid-run recovery",
      "Multi-format export adapters (structured data API, mobile JSON API, Next.js PWA) with Pydantic v2 cross-field validators",
    ],
    tech: [
      "Python",
      "TypeScript",
      "Next.js",
      "Claude API",
      "Pydantic v2",
      "Vercel",
      "YAML",
    ],
    links: [{ label: "Repo", href: "" }, { label: "Demo", href: "" }],
    featured: true,
  },
  {
    slug: "powercast",
    title: "Powercast",
    oneLiner:
      "AttentionLSTM forecasting model with Dockerized FastAPI inference service for power demand prediction.",
    highlights: [
      "AttentionLSTM model with interpretability (saliency/attention inspection)",
      "Dockerized FastAPI inference service with weather-driven 7-day forecasts",
    ],
    tech: [
      "Python",
      "PyTorch",
      "FastAPI",
      "Docker",
      "Plotly",
      "Pydantic",
    ],
    links: [{ label: "Repo", href: "" }, { label: "Demo", href: "" }],
  },
  {
    slug: "finresearch-ai",
    title: "FinResearch AI",
    oneLiner:
      "Multi-agent system generating structured research reports with shared semantic memory and reliability fallbacks.",
    highlights: [
      "Agent orchestration with shared semantic memory for context-aware report generation",
      "Data ingestion with reliability fallbacks across multiple sources",
      "Multi-perspective output (bull/bear/neutral) via Gradio interface",
    ],
    tech: [
      "Python",
      "LangChain/LangGraph",
      "ChromaDB",
      "Embeddings",
      "yfinance",
      "Gradio",
    ],
    links: [{ label: "Repo", href: "" }, { label: "Demo", href: "" }],
  },
  {
    slug: "watt-wise",
    title: "Watt Wise",
    oneLiner:
      "End-to-end time-series forecasting comparing ARIMA/SARIMA baselines against ML/DL models.",
    highlights: [
      "ARIMA/SARIMA baselines with ML/DL model comparisons",
      "Feature engineering with exogenous variables",
      "Interactive Streamlit dashboard for predictions",
    ],
    tech: [
      "Python",
      "pandas",
      "statsmodels",
      "scikit-learn",
      "XGBoost",
      "TensorFlow/Keras",
      "Streamlit",
    ],
    links: [{ label: "Repo", href: "" }, { label: "Demo", href: "" }],
  },
  {
    slug: "incomeinsight",
    title: "IncomeInsight",
    oneLiner:
      "Classification pipeline benchmarking boosting/tree models and neural embeddings with demographic disparity analysis.",
    highlights: [
      "Benchmarked boosting/tree models and neural network embeddings",
      "Demographic disparity analysis for responsible AI evaluation",
    ],
    tech: [
      "Python",
      "scikit-learn",
      "XGBoost",
      "LightGBM",
      "CatBoost",
      "PyTorch",
      "MLflow",
    ],
    links: [{ label: "Repo", href: "" }, { label: "Write-up", href: "" }],
  },
  {
    slug: "video-quiz-platform",
    title: "Interactive Video Quiz Platform",
    oneLiner:
      "Real-time video-embedded comprehension checks with dual persistence and responsive UI.",
    highlights: [
      "Pauses video at timestamps for real-time comprehension checks",
      "Dual persistence paths (Apps Script + Netlify Functions) into Google Sheets",
    ],
    tech: [
      "JavaScript (ES6)",
      "HTML/CSS",
      "Netlify Functions",
      "Google Sheets",
      "Cloudflare R2",
    ],
    links: [{ label: "Repo", href: "" }, { label: "Demo", href: "" }],
  },
];
