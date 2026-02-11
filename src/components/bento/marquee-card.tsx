"use client";

const words = ["Builder", "Creator", "Indie Hacker", "Developer", "Designer"];

export function MarqueeCard() {
  return (
    <div className="overflow-hidden py-8 bg-zinc-900/30 border-y border-white/5">
      <div className="flex animate-marquee whitespace-nowrap">
        {[...words, ...words, ...words, ...words].map((word, i) => (
          <span
            key={i}
            className="mx-8 text-4xl sm:text-5xl lg:text-6xl font-bold text-zinc-800"
          >
            {word}
          </span>
        ))}
      </div>
    </div>
  );
}
