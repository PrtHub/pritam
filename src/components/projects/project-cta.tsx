import { Button } from "@/components/ui/button";
import { ArrowUpRight } from "@/components/icons";
import { Project } from "@/lib/data";

interface ProjectCtaProps {
  project: Project;
}

export function ProjectCta({ project }: ProjectCtaProps) {
  const hasLinks = project.websiteUrl || project.appStoreUrl || project.playStoreUrl || project.githubUrl;

  if (!hasLinks) {
    return null;
  }

  return (
    <div className="max-w-4xl mx-auto px-4 py-16 border-t border-white/10">
      <h2 className="text-2xl font-bold text-white mb-4">Get Started</h2>
      <p className="text-zinc-400 mb-8">
        Ready to try {project.title}? Choose your platform below.
      </p>

      <div className="flex flex-wrap gap-4">
        {project.websiteUrl && (
          <a href={project.websiteUrl} target="_blank" rel="noopener noreferrer">
            <Button className="gap-2 bg-white text-zinc-900 hover:bg-zinc-200">
              Visit Website
              <ArrowUpRight className="w-4 h-4" />
            </Button>
          </a>
        )}

        {project.appStoreUrl && (
          <a href={project.appStoreUrl} target="_blank" rel="noopener noreferrer">
            <Button variant="outline" className="gap-2 border-white/20 text-white hover:bg-white/10">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
              </svg>
              App Store
            </Button>
          </a>
        )}

        {project.playStoreUrl && (
          <a href={project.playStoreUrl} target="_blank" rel="noopener noreferrer">
            <Button variant="outline" className="gap-2 border-white/20 text-white hover:bg-white/10">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                <path d="M3 20.5v-17c0-.59.34-1.11.84-1.35L13.69 12l-9.85 9.85c-.5-.24-.84-.76-.84-1.35zm13.81-5.38L6.05 21.34l8.49-8.49 2.27 2.27zm3.35-4.31c.34.27.54.68.54 1.19 0 .51-.2.92-.54 1.19l-2.01 1.17-2.5-2.5 2.5-2.5 2.01 1.17zM6.05 2.66l10.76 6.22-2.27 2.27-8.49-8.49z"/>
              </svg>
              Play Store
            </Button>
          </a>
        )}

        {project.githubUrl && (
          <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
            <Button variant="outline" className="gap-2 border-white/20 text-white hover:bg-white/10">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
              View on GitHub
            </Button>
          </a>
        )}
      </div>
    </div>
  );
}
