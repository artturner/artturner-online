import type { Project } from "@/data/projects";

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 shadow-sm">
      <div className="flex items-start justify-between gap-4">
        <div>
          <h3 className="text-lg font-semibold tracking-tight">{project.title}</h3>
          <p className="mt-2 text-sm text-white/70">{project.oneLiner}</p>
        </div>
      </div>

      <ul className="mt-4 space-y-2 text-sm text-white/80">
        {project.highlights.slice(0, 3).map((h) => (
          <li key={h} className="flex gap-2">
            <span className="mt-[6px] h-1.5 w-1.5 shrink-0 rounded-full bg-white/40" />
            <span>{h}</span>
          </li>
        ))}
      </ul>

      <div className="mt-4 flex flex-wrap gap-2">
        {project.tech.slice(0, 10).map((t) => (
          <span
            key={t}
            className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-xs text-white/70"
          >
            {t}
          </span>
        ))}
      </div>

      <div className="mt-5 flex flex-wrap gap-3">
        {project.links
          .filter((l) => l.href && l.href.trim().length > 0)
          .map((l) => (
            <a
              key={l.label}
              href={l.href}
              className="text-sm text-white/80 underline decoration-white/20 underline-offset-4 hover:text-white"
              target="_blank"
              rel="noreferrer"
            >
              {l.label}
            </a>
          ))}
      </div>
    </div>
  );
}
