"use client";

import { Badge } from "@/components/ui/badge";
import { BentoCard } from "./bento-grid";
import { skills } from "@/lib/data";

export function SkillsCard() {
  return (
    <BentoCard colSpan={2} className="min-h-[200px]">
      <div className="space-y-4">
        <div className="space-y-1">
          <span className="text-xs font-medium text-zinc-500 uppercase tracking-wider">
            Tech Stack
          </span>
          <h3 className="text-lg font-semibold text-white">
            Tools I work with daily
          </h3>
        </div>

        <div className="flex flex-wrap gap-2">
          {skills.map((skill, i) => (
            <Badge
              key={i}
              variant="secondary"
              className="px-4 py-2 text-sm font-medium bg-white/5 text-zinc-300 border border-white/10 hover:bg-white/10 hover:text-white transition-all cursor-default"
            >
              {skill}
            </Badge>
          ))}
        </div>
      </div>
    </BentoCard>
  );
}
