import { Metadata } from "next";
import { projects, siteConfig } from "./data";

export function getProject(slug: string) {
  return projects.find((p) => p.slug === slug);
}

export function getProjectMetadata(slug: string): Metadata {
  const project = getProject(slug);
  if (!project) return { title: "Project Not Found" };

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

export function getPrivacyMetadata(slug: string): Metadata {
  const project = getProject(slug);
  if (!project) return { title: "Privacy Policy Not Found" };

  return {
    title: `Privacy Policy | ${project.title}`,
    description: `Privacy policy for ${project.title}`,
    robots: { index: false, follow: true },
    alternates: {
      canonical: `${siteConfig.url}/projects/${slug}/privacy`,
    },
  };
}

export function getTermsMetadata(slug: string): Metadata {
  const project = getProject(slug);
  if (!project) return { title: "Terms of Service Not Found" };

  return {
    title: `Terms of Service | ${project.title}`,
    description: `Terms of service for ${project.title}`,
    robots: { index: false, follow: true },
    alternates: {
      canonical: `${siteConfig.url}/projects/${slug}/terms`,
    },
  };
}

export function getSupportMetadata(slug: string): Metadata {
  const project = getProject(slug);
  if (!project) return { title: "Support Not Found" };

  return {
    title: `Support | ${project.title}`,
    description: `Get support for ${project.title}. Contact us via email or social media.`,
    alternates: {
      canonical: `${siteConfig.url}/projects/${slug}/support`,
    },
  };
}
