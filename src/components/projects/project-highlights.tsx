import { Project } from "@/lib/data";

interface ProjectHighlightsProps {
  project: Project;
}

export function ProjectHighlights({ project }: ProjectHighlightsProps) {
  if (!project.highlights || project.highlights.length === 0) return null;

  return (
    <section className="max-w-4xl mx-auto px-4 py-16 border-t border-white/10">
      <h2 className="text-2xl font-bold text-white mb-2">
        Why {project.title}?
      </h2>
      <p className="text-zinc-400 mb-10">
        What makes {project.title} different from everything else.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        {project.highlights.map((item, i) => (
          <div
            key={i}
            className="p-6 rounded-2xl bg-zinc-900/50 border border-white/10"
          >
            <h3 className="text-lg font-semibold text-white mb-2">
              {item.title}
            </h3>
            <p className="text-sm text-zinc-400 leading-relaxed">
              {item.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
