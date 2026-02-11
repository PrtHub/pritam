import { notFound } from "next/navigation";
import { ProjectJsonLd } from "@/components/json-ld";
import { ProjectHero } from "@/components/projects/project-hero";
import { ProjectFeatures } from "@/components/projects/project-features";
import { HowItWorks } from "@/components/projects/how-it-works";
import { ProjectHighlights } from "@/components/projects/project-highlights";
import { TargetAudience } from "@/components/projects/target-audience";
import { ProjectFaq } from "@/components/projects/project-faq";
import { ProjectPricing } from "@/components/projects/project-pricing";
import { ProjectCta } from "@/components/projects/project-cta";
import { SupportContact } from "@/components/projects/support-contact";
import { getProject } from "@/lib/project-helpers";

export function ProjectPageContent({ slug }: { slug: string }) {
  const project = getProject(slug);
  if (!project) notFound();

  return (
    <>
      <ProjectJsonLd slug={slug} />
      <div className="min-h-screen bg-background text-foreground">
        <main>
          <ProjectHero project={project} />
          <HowItWorks project={project} />
          <ProjectFeatures project={project} />
          <ProjectHighlights project={project} />
          <TargetAudience project={project} />
          <ProjectFaq project={project} />
          <ProjectPricing project={project} />
          <ProjectCta project={project} />
          <SupportContact project={project} />
        </main>
      </div>
    </>
  );
}
