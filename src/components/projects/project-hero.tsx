import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
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
          className="inline-flex items-center gap-2 text-zinc-400 hover:text-white transition-colors mb-8 "
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="m15 18-6-6 6-6" />
          </svg>
          Back to projects
        </Link>
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

        {/* CTA Buttons */}
        <div className="flex flex-wrap gap-3 mb-8">
          {project.appStoreUrl && (
            <a
              href={project.appStoreUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button className="gap-2 bg-white text-zinc-900 hover:bg-zinc-200">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
                </svg>
                Download on App Store
              </Button>
            </a>
          )}
          {project.playStoreUrl && (
            <a
              href={project.playStoreUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button className="gap-2 bg-white text-zinc-900 hover:bg-zinc-200">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M3 20.5v-17c0-.59.34-1.11.84-1.35L13.69 12l-9.85 9.85c-.5-.24-.84-.76-.84-1.35zm13.81-5.38L6.05 21.34l8.49-8.49 2.27 2.27zm3.35-4.31c.34.27.54.68.54 1.19 0 .51-.2.92-.54 1.19l-2.01 1.17-2.5-2.5 2.5-2.5 2.01 1.17zM6.05 2.66l10.76 6.22-2.27 2.27-8.49-8.49z" />
                </svg>
                Get on Google Play
              </Button>
            </a>
          )}
          {project.websiteUrl && (
            <a
              href={project.websiteUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                variant="outline"
                className="gap-2 border-white/20 text-white hover:bg-white/10"
              >
                Visit Website
              </Button>
            </a>
          )}
        </div>

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
