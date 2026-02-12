import { Project } from "@/lib/data";

interface ProjectFeaturesProps {
  project: Project;
}

export function ProjectFeatures({ project }: ProjectFeaturesProps) {
  if (!project.features || project.features.length === 0) {
    return null;
  }

  return (
    <div className="max-w-5xl mx-auto px-4 py-16">
      <h2 className="text-2xl font-bold text-white mb-8">Features</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {project.features.map((feature, i) => (
          <div
            key={i}
            className="flex items-start gap-3 p-4 rounded-xl bg-zinc-900/50 border border-white/10"
          >
            <div className="flex-shrink-0 w-6 h-6 rounded-full bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-emerald-400"
              >
                <polyline points="20 6 9 17 4 12" />
              </svg>
            </div>
            <span className="text-zinc-300">{feature}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
