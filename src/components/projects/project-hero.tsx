import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Project } from "@/lib/data";

interface ProjectHeroProps {
  project: Project;
}

export function ProjectHero({ project }: ProjectHeroProps) {
  return (
    <div className="relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-zinc-900 to-background" />

      <div className="relative max-w-4xl mx-auto px-4 py-16 sm:py-24">
        {/* Back link */}
        <Link
          href="/#projects"
          className="inline-flex items-center gap-2 text-zinc-400 hover:text-white transition-colors mb-8"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="m15 18-6-6 6-6"/>
          </svg>
          Back to projects
        </Link>

        {/* Featured badge */}
        {project.featured && (
          <Badge className="mb-4 bg-emerald-500/10 text-emerald-400 border-emerald-500/20">
            Featured Project
          </Badge>
        )}

        {/* Title */}
        <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-white mb-4">
          {project.title}
        </h1>

        {/* Description */}
        <p className="text-lg text-zinc-400 mb-8 max-w-2xl">
          {project.fullDescription || project.description}
        </p>

        {/* Metrics */}
        {project.metrics && (
          <div className="flex gap-8 mb-8">
            <div className="p-4 rounded-2xl bg-zinc-900/50 border border-white/10">
              <div className="text-3xl font-bold text-emerald-400">
                {project.metrics.revenue}
              </div>
              <div className="text-sm text-zinc-500 uppercase tracking-wider">
                {project.metrics.revenueLabel}
              </div>
            </div>
            <div className="p-4 rounded-2xl bg-zinc-900/50 border border-white/10">
              <div className="text-3xl font-bold text-white">
                {project.metrics.users}
              </div>
              <div className="text-sm text-zinc-500 uppercase tracking-wider">
                {project.metrics.usersLabel}
              </div>
            </div>
          </div>
        )}

        {/* Tags */}
        <div className="flex flex-wrap gap-2">
          {project.tags.map((tag, i) => (
            <Badge
              key={i}
              variant="outline"
              className="bg-white/5 text-zinc-400 border-white/10"
            >
              {tag}
            </Badge>
          ))}
        </div>
      </div>
    </div>
  );
}
