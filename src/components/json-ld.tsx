import { siteConfig, projects } from "@/lib/data";

export function PersonJsonLd() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: siteConfig.name,
    url: siteConfig.url,
    jobTitle: siteConfig.title,
    description: siteConfig.description,
    sameAs: [
      siteConfig.links.x,
      siteConfig.links.linkedin,
      siteConfig.links.github,
    ],
    email: `mailto:${siteConfig.links.email}`,
    knowsAbout: [
      "Software Development",
      "SaaS",
      "Web Development",
      "Mobile Development",
      "Next.js",
      "TypeScript",
      "React",
      "React Native",
      "Expo",
      "Convex",
      "Tailwind CSS",
      "PostgreSQL",
      "Vercel",
      "AI Editors",
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}

export function WebsiteJsonLd() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: `${siteConfig.name} | ${siteConfig.title}`,
    url: siteConfig.url,
    description: siteConfig.description,
    author: {
      "@type": "Person",
      name: siteConfig.name,
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}

interface ProjectJsonLdProps {
  slug: string;
}

export function ProjectJsonLd({ slug }: ProjectJsonLdProps) {
  const project = projects.find((p) => p.slug === slug);
  if (!project) return null;

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: project.title,
    description: project.fullDescription,
    url: `${siteConfig.url}/projects/${project.slug}`,
    applicationCategory: project.tags.includes("iOS")
      ? "FinanceApplication"
      : "BusinessApplication",
    operatingSystem: project.tags.includes("iOS") ? "iOS" : "Web",
    author: {
      "@type": "Person",
      name: siteConfig.name,
      url: siteConfig.url,
    },
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "USD",
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}
