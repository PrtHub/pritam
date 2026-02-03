import { notFound } from "next/navigation";
import { ProjectHero } from "@/components/projects/project-hero";
import { ProjectFeatures } from "@/components/projects/project-features";
import { ProjectCta } from "@/components/projects/project-cta";
import { SupportContact } from "@/components/projects/support-contact";
import { ProjectJsonLd } from "@/components/json-ld";
import { projects, siteConfig } from "@/lib/data";

interface ProjectPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    return {
      title: "Project Not Found",
    };
  }

  const projectUrl = `${siteConfig.url}/projects/${project.slug}`;

  return {
    title: project.title,
    description: project.fullDescription.slice(0, 160),
    keywords: [...project.tags, "project", siteConfig.name],
    openGraph: {
      title: `${project.title} | ${siteConfig.name}`,
      description: project.description,
      url: projectUrl,
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: `${project.title} | ${siteConfig.name}`,
      description: project.description,
      creator: "@iPritamX",
    },
    alternates: {
      canonical: projectUrl,
    },
  };
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    notFound();
  }

  return (
    <>
      <ProjectJsonLd slug={slug} />
      <div className="min-h-screen bg-background text-foreground">
        <main>
          <ProjectHero project={project} />
          <ProjectFeatures project={project} />
          <ProjectCta project={project} />
          <SupportContact project={project} />
        </main>
      </div>
    </>
  );
}
