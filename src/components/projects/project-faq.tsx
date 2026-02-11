import { Project } from "@/lib/data";

interface ProjectFaqProps {
  project: Project;
}

export function ProjectFaq({ project }: ProjectFaqProps) {
  if (!project.faq || project.faq.length === 0) return null;

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: project.faq.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };

  return (
    <section className="max-w-4xl mx-auto px-4 py-16 border-t border-white/10">
      {/* FAQ JSON-LD for Google rich results */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      <h2 className="text-2xl font-bold text-white mb-2">
        Frequently Asked Questions
      </h2>
      <p className="text-zinc-400 mb-10">
        Everything you need to know about {project.title}.
      </p>

      <div className="space-y-4">
        {project.faq.map((item, i) => (
          <details
            key={i}
            className="group rounded-2xl bg-zinc-900/50 border border-white/10 overflow-hidden"
          >
            <summary className="flex items-center justify-between cursor-pointer p-6 text-white font-medium hover:bg-zinc-900/80 transition-colors">
              <span>{item.question}</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="flex-shrink-0 ml-4 text-zinc-500 transition-transform group-open:rotate-180"
              >
                <path d="m6 9 6 6 6-6" />
              </svg>
            </summary>
            <div className="px-6 pb-6 text-sm text-zinc-400 leading-relaxed">
              {item.answer}
            </div>
          </details>
        ))}
      </div>
    </section>
  );
}
