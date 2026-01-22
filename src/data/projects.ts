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
    slug: "branching-scenarios",
    title: "Branching Scenarios",
    oneLiner: "Branching-narrative learning app powered by a JSON state-machine engine.",
    highlights: [
      "JSON-defined decision trees with variable tracking + conditional logic",
      "Google Sheets data capture for completion + reflection responses",
      "Multi-scenario content authoring without code changes",
    ],
    tech: ["Python", "Streamlit", "JSON", "Pandas", "Google Sheets API", "OAuth2", "Git/GitHub"],
    links: [{ label: "Repo", href: "" }, { label: "Demo", href: "" }],
    featured: true,
  },
  {
    slug: "studytok-pipeline",
    title: "StudyTok Pipeline",
    oneLiner: "Pipeline that turns transcript libraries into validated quiz banks using an LLM.",
    highlights: [
      "Multi-stage ETL with schemas/validation and checkpointed resumability",
      "Caching/checkpointing reduces rerun costs and improves fault tolerance",
      "Exports to Anki + mobile JSON; deployed as a responsive web app",
    ],
    tech: ["Python", "Pydantic", "Claude API", "CLI", "Async", "Next.js (static)", "Vercel"],
    links: [{ label: "Repo", href: "" }, { label: "Demo", href: "" }],
    featured: true,
  },
  {
    slug: "video-quiz-platform",
    title: "Interactive Video Quiz Platform",
    oneLiner: "Transforms video into stop-and-check learning with timed embedded questions.",
    highlights: [
      "Pauses video at timestamps to collect comprehension checks in real time",
      "Dual persistence paths (Apps Script + Netlify Functions) into Google Sheets",
      "Roster autocomplete + accessible responsive UI",
    ],
    tech: ["JavaScript (ES6)", "HTML/CSS", "Netlify Functions", "Google Sheets", "Cloudflare R2"],
    links: [{ label: "Repo", href: "" }, { label: "Demo", href: "" }],
    featured: true,
  },
  {
    slug: "watt-wise",
    title: "Watt Wise",
    oneLiner: "End-to-end time-series forecasting app for building energy consumption.",
    highlights: [
      "ARIMA/SARIMA baselines + ML/DL comparisons",
      "Feature engineering with exogenous variables",
      "Streamlit dashboard for interactive predictions",
    ],
    tech: ["Python", "pandas", "statsmodels", "scikit-learn", "XGBoost", "TensorFlow/Keras", "Streamlit"],
    links: [{ label: "Repo", href: "" }, { label: "Demo", href: "" }],
    featured: true,
  },
  {
    slug: "finresearch-ai",
    title: "FinResearch AI",
    oneLiner: "Multi-agent system that generates structured stock research reports from metrics + news.",
    highlights: [
      "Agent orchestration + shared semantic memory for context-aware reports",
      "News/metrics ingestion with reliability fallbacks",
      "Gradio UI with bull/bear/neutral perspectives",
    ],
    tech: ["Python", "LangChain/LangGraph", "ChromaDB", "Embeddings", "yfinance", "Gradio"],
    links: [{ label: "Repo", href: "" }, { label: "Demo", href: "" }],
  },
  {
    slug: "incomeinsight",
    title: "IncomeInsight",
    oneLiner: "Income classification pipeline comparing models with performance + disparity analysis.",
    highlights: [
      "Benchmarked boosting/tree models + NN embeddings",
      "Misclassification review beyond aggregate metrics",
      "Demographic disparity analysis for responsible AI discussion",
    ],
    tech: ["Python", "scikit-learn", "XGBoost", "LightGBM", "CatBoost", "PyTorch", "MLflow"],
    links: [{ label: "Repo", href: "" }, { label: "Write-up", href: "" }],
  },
  {
    slug: "powercast",
    title: "Powercast",
    oneLiner: "AttentionLSTM forecasting + production FastAPI service for power demand prediction.",
    highlights: [
      "AttentionLSTM model + interpretability (saliency/attention inspection)",
      "Resolved target normalization issue that unlocked strong performance",
      "Dockerized FastAPI inference + weather-driven 7-day forecasts",
    ],
    tech: ["Python", "PyTorch", "FastAPI", "Docker", "Plotly", "Pydantic"],
    links: [{ label: "Repo", href: "" }, { label: "Demo", href: "" }],
  },
  {
    slug: "scholarai",
    title: "ScholarAI",
    oneLiner: "Multi-agent literature research automation with structured outputs + QA loop.",
    highlights: [
      "Fan-out/fan-in parallel research workflow",
      "Self-critique revision loop for higher quality synthesis",
      "Pydantic structured outputs + Gradio interface",
    ],
    tech: ["Python", "OpenAI", "Tavily", "Pydantic", "Gradio", "Concurrency"],
    links: [{ label: "Repo", href: "" }, { label: "Demo", href: "" }],
  },
];
