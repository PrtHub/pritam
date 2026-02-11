import { BentoCard } from "./bento-grid";

interface StatCardProps {
  value: string;
  label: string;
  icon?: React.ReactNode;
  highlight?: boolean;
}

export function StatCard({ value, label, icon, highlight = false }: StatCardProps) {
  // Auto-highlight if it's revenue related
  const isRevenue = label.toLowerCase().includes("revenue");
  const shouldHighlight = highlight || isRevenue;

  return (
    <BentoCard className="flex flex-col justify-between min-h-[140px] group">
      {icon && (
        <div className={`w-10 h-10 rounded-xl border flex items-center justify-center transition-all ${
          shouldHighlight
            ? "bg-emerald-500/10 border-emerald-500/20 text-emerald-400 group-hover:bg-emerald-500/20"
            : "bg-white/5 border-white/10 text-zinc-400 group-hover:bg-white/10 group-hover:text-white"
        }`}>
          {icon}
        </div>
      )}
      <div>
        <div className={`text-3xl font-bold tracking-tight ${
          shouldHighlight ? "text-emerald-400" : "text-white"
        }`}>
          {value}
        </div>
        <div className="text-sm text-zinc-500">{label}</div>
      </div>
    </BentoCard>
  );
}
