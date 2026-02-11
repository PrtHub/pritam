import { cn } from "@/lib/utils";

interface BentoGridProps {
  children: React.ReactNode;
  className?: string;
}

export function BentoGrid({ children, className }: BentoGridProps) {
  return (
    <div
      className={cn(
        "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 p-4 max-w-7xl mx-auto",
        className
      )}
    >
      {children}
    </div>
  );
}

interface BentoCardProps {
  children: React.ReactNode;
  className?: string;
  colSpan?: 1 | 2 | 3 | 4;
  rowSpan?: 1 | 2 | 3;
  hover?: boolean;
}

export function BentoCard({
  children,
  className,
  colSpan = 1,
  rowSpan = 1,
  hover = true,
}: BentoCardProps) {
  const colSpanClasses = {
    1: "md:col-span-1",
    2: "md:col-span-2",
    3: "md:col-span-3 lg:col-span-3",
    4: "md:col-span-2 lg:col-span-4",
  };

  const rowSpanClasses = {
    1: "row-span-1",
    2: "row-span-2",
    3: "row-span-3",
  };

  return (
    <div
      className={cn(
        "rounded-3xl p-6 transition-all duration-300",
        "bg-zinc-900/50 border border-white/[0.08]",
        "backdrop-blur-sm",
        colSpanClasses[colSpan],
        rowSpanClasses[rowSpan],
        hover && "hover:bg-zinc-900/80 hover:border-white/[0.12] hover:shadow-xl hover:shadow-black/20",
        className
      )}
    >
      {children}
    </div>
  );
}
