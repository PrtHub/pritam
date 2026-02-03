import { Button } from "@/components/ui/button";
import { BentoCard } from "./bento-grid";
import { MailIcon, XIcon, LinkedInIcon, GithubIcon } from "@/components/icons";
import { siteConfig } from "@/lib/data";

export function ContactCard() {
  return (
    <BentoCard
      colSpan={4}
      className="flex flex-col md:flex-row items-center justify-between gap-8 min-h-[200px] border-dashed"
    >
      <div className="space-y-2 text-center md:text-left">
        <span className="text-xs font-medium text-zinc-500 uppercase tracking-wider">
          Let&apos;s Talk
        </span>
        <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-white">
          Have a project in mind?
        </h2>
        <p className="text-zinc-400 max-w-md">
          I&apos;m always open to discussing new projects, creative ideas, or
          opportunities to collaborate.
        </p>
      </div>

      <div className="flex flex-col sm:flex-row items-center gap-4">
        <Button
          asChild
          size="lg"
          className="rounded-full px-8 bg-white text-zinc-900 hover:bg-zinc-200 border-0"
        >
          <a href={`mailto:${siteConfig.links.email}`}>
            <MailIcon className="mr-2" />
            Get in touch
          </a>
        </Button>
        <div className="flex items-center gap-2">
          <a
            href={siteConfig.links.x}
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-full bg-white/5 border border-white/10 hover:bg-white hover:text-black transition-all"
          >
            <XIcon className="w-5 h-5" />
          </a>
          <a
            href={siteConfig.links.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-full bg-white/5 border border-white/10 hover:bg-white hover:text-black transition-all"
          >
            <LinkedInIcon className="w-5 h-5" />
          </a>
          <a
            href={siteConfig.links.github}
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-full bg-white/5 border border-white/10 hover:bg-white hover:text-black transition-all"
          >
            <GithubIcon className="w-5 h-5" />
          </a>
        </div>
      </div>
    </BentoCard>
  );
}
