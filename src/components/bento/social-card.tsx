"use client";

import { BentoCard } from "./bento-grid";
import { XIcon, LinkedInIcon, GithubIcon } from "@/components/icons";
import { siteConfig } from "@/lib/data";

const socials = [
  {
    icon: XIcon,
    href: siteConfig.links.x,
    label: "X",
    hoverClass: "hover:bg-white hover:text-black",
  },
  {
    icon: LinkedInIcon,
    href: siteConfig.links.linkedin,
    label: "LinkedIn",
    hoverClass: "hover:bg-[#0077b5] hover:text-white hover:border-[#0077b5]",
  },
  {
    icon: GithubIcon,
    href: siteConfig.links.github,
    label: "GitHub",
    hoverClass: "hover:bg-white hover:text-black",
  },
];

export function SocialCard() {
  return (
    <BentoCard className="flex flex-col justify-between min-h-[140px]">
      <span className="text-xs font-medium text-zinc-500 uppercase tracking-wider">
        Connect
      </span>
      <div className="flex gap-2">
        {socials.map((social, i) => (
          <a
            key={i}
            href={social.href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={social.label}
            className={`p-3 rounded-xl bg-white/5 border border-white/10 transition-all duration-300 ${social.hoverClass}`}
          >
            <social.icon className="w-5 h-5" />
          </a>
        ))}
      </div>
    </BentoCard>
  );
}
