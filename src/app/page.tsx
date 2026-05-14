import ProjectCard from "@/components/ProjectCard";
import { projects } from "@/data/projects-capgemini";

export default function Home() {
  const featured = projects.filter((p) => p.featured);

  return (
    <main className="min-h-screen bg-black text-white">
      <div className="mx-auto max-w-5xl px-6 py-16">
        {/* Hero */}
        <header className="space-y-6">
          <div className="flex items-start gap-6">
            <img
              src="/headshot.jpg"
              alt="Art Turner"
              object-[center_20%]
              className="h-28 w-28 shrink-0 rounded-full object-cover border-2 border-white/10"
            />
            <div className="space-y-2">
              <h1 className="text-4xl font-semibold tracking-tight">Art Turner</h1>
              <p className="text-lg text-white/80">
                AI Application Engineer · GenAI / RAG · Python · AWS
              </p>
              <p className="text-white/70 italic">
                Data-driven by default. Relentless by nature.
              </p>
            </div>
          </div>

          <ul className="space-y-2 text-white/80">
            <li>• Design and deploy RAG pipelines, LLM orchestration, and multi-agent workflows end-to-end.</li>
            <li>• Strong Python foundation with a production mindset: containers, APIs, evaluation, CI/CD.</li>
            <li>• AWS-certified across 7 credentials including GenAI Developer (Professional) and ML Specialty.</li>
          </ul>

          <div className="flex flex-wrap gap-3 pt-2">
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
              <h3 className="font-semibold">GenAI / RAG</h3>
              <p className="mt-2 text-sm text-white/75">
                LangGraph, LangChain, RAG pipelines, embeddings, vector search, prompt engineering, hallucination mitigation, multi-agent orchestration
              </p>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6">
              <h3 className="font-semibold">Languages & Frameworks</h3>
              <p className="mt-2 text-sm text-white/75">
                Python, TypeScript, SQL, FastAPI, Next.js, Pydantic v2, PyTorch, scikit-learn
              </p>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6">
              <h3 className="font-semibold">Infrastructure & DevOps</h3>
              <p className="mt-2 text-sm text-white/75">
                AWS (7 certs), Docker, CI/CD, REST APIs, OpenAPI, structured logging, monitoring
              </p>
            </div>
          </div>
        </section>

        {/* Certifications */}
        <section className="mt-16">
          <h2 className="text-2xl font-semibold tracking-tight">Certifications</h2>
          <div className="mt-6 grid gap-4 md:grid-cols-2">
            <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6">
              <h3 className="font-semibold">AI / ML</h3>
              <ul className="mt-2 space-y-1 text-sm text-white/75">
                <li>• AWS Generative AI Developer - Professional</li>
                <li>• AWS Machine Learning - Specialty</li>
                <li>• AWS Machine Learning Engineer - Associate</li>
                <li>• AWS AI Practitioner</li>
              </ul>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6">
              <h3 className="font-semibold">Cloud / Data</h3>
              <ul className="mt-2 space-y-1 text-sm text-white/75">
                <li>• AWS Data Engineer - Associate</li>
                <li>• AWS Solutions Architect - Associate</li>
                <li>• AWS Cloud Practitioner</li>
              </ul>
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
