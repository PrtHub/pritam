import { Project } from "@/lib/data";

const icons: Record<string, React.ReactNode> = {
  rocket: (
    <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-emerald-400">
      <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z"/>
      <path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z"/>
      <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0"/>
      <path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5"/>
    </svg>
  ),
  pen: (
    <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-emerald-400">
      <path d="M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z"/>
    </svg>
  ),
  heart: (
    <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-emerald-400">
      <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/>
    </svg>
  ),
  laptop: (
    <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-emerald-400">
      <path d="M20 16V7a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v9m16 0H4m16 0 1.28 2.55a1 1 0 0 1-.9 1.45H3.62a1 1 0 0 1-.9-1.45L4 16"/>
    </svg>
  ),
};

interface TargetAudienceProps {
  project: Project;
}

export function TargetAudience({ project }: TargetAudienceProps) {
  if (!project.targetAudience || project.targetAudience.length === 0)
    return null;

  return (
    <section className="max-w-4xl mx-auto px-4 py-16 border-t border-white/10">
      <h2 className="text-2xl font-bold text-white mb-2">
        Who Is {project.title} For?
      </h2>
      <p className="text-zinc-400 mb-10">
        Built for people who take their performance seriously.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        {project.targetAudience.map((audience, i) => (
          <div
            key={i}
            className="flex items-start gap-4 p-6 rounded-2xl bg-zinc-900/50 border border-white/10"
          >
            <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center">
              {icons[audience.icon] || icons.rocket}
            </div>
            <div>
              <h3 className="font-semibold text-white mb-1">
                {audience.title}
              </h3>
              <p className="text-sm text-zinc-400 leading-relaxed">
                {audience.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
