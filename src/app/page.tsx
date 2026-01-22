import ProjectCard from "@/components/ProjectCard";
import { projects } from "@/data/projects";

export default function Home() {
  const featured = projects.filter((p) => p.featured);

  return (
    <main className="min-h-screen bg-black text-white">
      <div className="mx-auto max-w-5xl px-6 py-16">
        {/* Hero */}
        <header className="space-y-6">
          <div className="space-y-2">
            <h1 className="text-4xl font-semibold tracking-tight">Art Turner</h1>
            <p className="text-lg text-white/80">
              AI Engineer · Python · Cloud ML · Deployment
            </p>
            <p className="text-white/70 italic">
              Data-driven by default. Relentless by nature.
            </p>
          </div>

          <ul className="space-y-2 text-white/80">
            <li>• Build and deploy ML + LLM solutions end-to-end: data → model → evaluation → delivery.</li>
            <li>• Strong Python/SQL foundation with a production mindset (pipelines, reliability, automation).</li>
            <li>• Portfolio spans NLP, time-series forecasting, and AI-enabled workflow automation.</li>
          </ul>

          <div className="flex flex-wrap gap-3 pt-2">
            {/* Fill these in when ready */}
            <a
              className="rounded-full border border-white/15 bg-white/5 px-4 py-2 text-sm hover:bg-white/10"
              href="/resume.pdf"
            >
              Resume (PDF)
            </a>
            <a
              className="rounded-full border border-white/15 bg-white/5 px-4 py-2 text-sm hover:bg-white/10"
              href="#"
            >
              GitHub
            </a>
            <a
              className="rounded-full border border-white/15 bg-white/5 px-4 py-2 text-sm hover:bg-white/10"
              href="#"
            >
              LinkedIn
            </a>
            <a
              className="rounded-full border border-white/15 bg-white/5 px-4 py-2 text-sm hover:bg-white/10"
              href="mailto:art@artturner.io"
            >
              Email
            </a>
          </div>
        </header>

        {/* Projects */}
        <section className="mt-16">
          <div className="mb-6 flex items-end justify-between gap-4">
            <h2 className="text-2xl font-semibold tracking-tight">Projects</h2>
            <p className="text-sm text-white/60">Selected work (problem → approach → result).</p>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {featured.map((p) => (
              <ProjectCard key={p.slug} project={p} />
            ))}
          </div>
        </section>

        {/* Skills */}
        <section className="mt-16">
          <h2 className="text-2xl font-semibold tracking-tight">Skills</h2>
          <div className="mt-6 grid gap-6 md:grid-cols-3">
            <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6">
              <h3 className="font-semibold">Languages</h3>
              <p className="mt-2 text-sm text-white/75">Python, SQL, TypeScript/JavaScript</p>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6">
              <h3 className="font-semibold">ML / AI</h3>
              <p className="mt-2 text-sm text-white/75">
                scikit-learn, PyTorch, forecasting, NLP/LLMs, evaluation, feature engineering
              </p>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6">
              <h3 className="font-semibold">Cloud / Delivery</h3>
              <p className="mt-2 text-sm text-white/75">
                AWS, Docker, Git, CI/CD, APIs (FastAPI), Streamlit/Gradio
              </p>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="mt-16 border-t border-white/10 pt-8 text-sm text-white/60">
          © {new Date().getFullYear()} Art Turner
        </footer>
      </div>
    </main>
  );
}
