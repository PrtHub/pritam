import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { BentoCard } from "./bento-grid";
import { ArrowUpRight } from "@/components/icons";
import { projects, Project } from "@/lib/data";

interface ProjectCardProps {
  project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <Link href={project.link} className="block group">
      <BentoCard
        colSpan={2}
        className="flex flex-col justify-between min-h-[280px] relative overflow-hidden"
      >
        {/* Hover overlay */}
        <div className="absolute inset-0 bg-white/0 group-hover:bg-white/[0.02] transition-all duration-500" />

        <div className="relative z-10">
          <div className="flex items-start justify-between mb-4">
            <div className="flex items-center gap-2">
              {project.featured && (
                <Badge className="text-xs bg-emerald-500/10 text-emerald-400 border-emerald-500/20 hover:bg-emerald-500/20">
                  Featured
                </Badge>
              )}
            </div>
            <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-white group-hover:border-white transition-all duration-300">
              <ArrowUpRight className="w-5 h-5 text-zinc-400 group-hover:text-zinc-900 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
            </div>
          </div>

          {/* Revenue & Users Metrics */}
          {project.metrics && (
            <div className="flex gap-6 mb-4">
              <div>
                <div className="font-bold text-emerald-400 text-2xl">
                  {project.metrics.revenue}
                </div>
                <div className="text-xs text-zinc-500 uppercase tracking-wider">
                  {project.metrics.revenueLabel}
                </div>
              </div>
              <div className="w-px bg-white/10" />
              <div>
                <div className="font-bold text-white text-2xl">
                  {project.metrics.users}
                </div>
                <div className="text-xs text-zinc-500 uppercase tracking-wider">
                  {project.metrics.usersLabel}
                </div>
              </div>
            </div>
          )}
        </div>

        <div className="relative z-10 space-y-3">
          <h3 className="font-bold tracking-tight text-white text-xl">
            {project.title}
          </h3>
          <p className="text-zinc-400 text-sm line-clamp-2">
            {project.description}
          </p>
          <div className="flex flex-wrap gap-2 pt-2">
            {project.tags.slice(0, 4).map((tag, i) => (
              <Badge
                key={i}
                variant="outline"
                className="text-xs bg-white/5 text-zinc-400 border-white/10"
              >
                {tag}
              </Badge>
            ))}
          </div>
        </div>
      </BentoCard>
    </Link>
  );
}

export function ProjectsGrid() {
  return (
    <>
      {projects.map((project, i) => (
        <ProjectCard key={i} project={project} />
      ))}
    </>
  );
}
