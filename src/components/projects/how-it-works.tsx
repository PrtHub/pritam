import { Project } from "@/lib/data";

interface HowItWorksProps {
  project: Project;
}

export function HowItWorks({ project }: HowItWorksProps) {
  if (!project.howItWorks || project.howItWorks.length === 0) return null;

  return (
    <section className="max-w-4xl mx-auto px-4 py-16 border-t border-white/10">
      <h2 className="text-2xl font-bold text-white mb-2">How It Works</h2>
      <p className="text-zinc-400 mb-10">
        Get started with {project.title} in three simple steps.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {project.howItWorks.map((item, i) => (
          <div
            key={i}
            className="relative p-6 rounded-2xl bg-zinc-900/50 border border-white/10"
          >
            <div className="text-4xl font-bold text-emerald-500/20 mb-3">
              {item.step}
            </div>
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
