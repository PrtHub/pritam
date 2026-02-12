import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { BentoCard } from "./bento-grid";
import { siteConfig } from "@/lib/data";

export function HeroCard() {
  return (
    <BentoCard
      colSpan={2}
      rowSpan={2}
      hover={false}
      className="relative flex flex-col justify-between min-h-[400px] overflow-hidden bg-zinc-900 border-zinc-800"
    >
      {/* Subtle noise texture */}
      <div
        className="absolute inset-0 opacity-[0.015]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
        }}
      />

      {/* Subtle gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-white/[0.03] to-transparent" />

      <div className="relative z-10">
        <Badge
          variant="secondary"
          className="gap-2 px-4 py-2 bg-white/10 text-white/80 border-white/10 backdrop-blur-sm"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
          </span>
          Shipping...
        </Badge>
      </div>

      <div className="relative z-10 space-y-4">
        <div className="w-20 h-20 rounded-2xl overflow-hidden bg-zinc-800 ring-2 ring-white/10">
          <Image
            src="https://unavatar.io/twitter/iPritamX"
            alt={siteConfig.name}
            width={80}
            height={80}
            className="w-full h-full object-cover"
            priority
          />
        </div>
        <div>
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight mb-3 text-white">
            {siteConfig.name}
          </h1>
          <p className="text-lg text-zinc-400 max-w-md leading-relaxed">
            Indie hacker crafting{" "}
            <span className="text-white">SaaS products</span> and{" "}
            <span className="text-white">iOS apps</span> that solve real
            problems and delight users.
          </p>
        </div>
      </div>
    </BentoCard>
  );
}
