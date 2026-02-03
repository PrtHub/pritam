import { notFound } from "next/navigation";
import Link from "next/link";
import ReactMarkdown from "react-markdown";
import { projects, siteConfig } from "@/lib/data";

interface TermsPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({ params }: TermsPageProps) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    return {
      title: "Terms of Service Not Found",
    };
  }

  return {
    title: `Terms of Service | ${project.title}`,
    description: `Terms of service for ${project.title}`,
    robots: {
      index: false,
      follow: true,
    },
    alternates: {
      canonical: `${siteConfig.url}/projects/${slug}/terms`,
    },
  };
}

export default async function TermsPage({ params }: TermsPageProps) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-background text-foreground">
      <main className="py-16">
        <div className="max-w-3xl mx-auto px-4">
          {/* Back link */}
          <Link
            href={`/projects/${project.slug}`}
            className="inline-flex items-center gap-2 text-zinc-400 hover:text-white transition-colors mb-8"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="m15 18-6-6 6-6"/>
            </svg>
            Back to {project.title}
          </Link>

          <h1 className="text-4xl font-bold text-white mb-2">Terms of Service</h1>
          <p className="text-zinc-400 mb-8">{project.title}</p>

          <div className="prose-custom">
            <ReactMarkdown>
              {project.termsOfService || "Terms of service content not available."}
            </ReactMarkdown>
          </div>
        </div>
      </main>
    </div>
  );
}
