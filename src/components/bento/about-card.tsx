import { BentoCard } from "./bento-grid";

export function AboutCard() {
  return (
    <BentoCard
      colSpan={2}
      rowSpan={1}
      className="flex flex-col justify-between min-h-[200px]"
    >
      <div className="space-y-1">
        <span className="text-xs font-medium text-zinc-500 uppercase tracking-wider">
          About
        </span>
        <h2 className="text-2xl font-bold tracking-tight text-white">
          Building products that matter
        </h2>
      </div>

      <p className="text-zinc-400 leading-relaxed">
        I&apos;m a builder at heart with a passion for turning ideas into reality.
        I believe in shipping fast, iterating based on feedback, and creating
        delightful user experiences. When I&apos;m not coding, I&apos;m sharing my
        journey building in public.
      </p>
    </BentoCard>
  );
}
