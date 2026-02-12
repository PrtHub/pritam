import { Project } from "@/lib/data";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

interface ProjectPricingProps {
  project: Project;
}

export function ProjectPricing({ project }: ProjectPricingProps) {
  if (!project.pricing) return null;

  return (
    <section className="max-w-5xl mx-auto px-4 py-16 border-t border-white/10">
      <h2 className="text-2xl font-bold text-white mb-2">
        Unlock {project.title} Pro
      </h2>
      <p className="text-zinc-400 mb-2">
        Start with a {project.pricing.trialDays}-day free trial. Cancel anytime.
      </p>
      <p className="text-sm text-zinc-500 mb-10">
        All plans include full access to every Pro feature.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
        {project.pricing.plans.map((plan, i) => (
          <div
            key={i}
            className={`relative p-6 rounded-2xl border transition-all ${
              plan.highlight
                ? "bg-emerald-500/5 border-emerald-500/30 ring-1 ring-emerald-500/20"
                : "bg-zinc-900/50 border-white/10"
            }`}
          >
            {plan.badge && (
              <Badge className="absolute -top-2.5 left-1/2 -translate-x-1/2 bg-emerald-500/20 text-emerald-400 border-emerald-500/30">
                {plan.badge}
              </Badge>
            )}

            <div className="text-sm text-zinc-400 mb-3">{plan.name}</div>
            <div className="flex items-baseline gap-1 mb-1">
              <span
                className={`text-3xl font-bold ${plan.highlight ? "text-emerald-400" : "text-white"}`}
              >
                {plan.price}
              </span>
              <span className="text-sm text-zinc-500">/{plan.period}</span>
            </div>

            {project.appStoreUrl && (
              <a
                href={project.appStoreUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="block mt-4"
              >
                <Button
                  className={`w-full ${
                    plan.highlight
                      ? "bg-emerald-500 text-white hover:bg-emerald-600"
                      : "bg-white/10 text-white hover:bg-white/20"
                  }`}
                  size="sm"
                >
                  Start Free Trial
                </Button>
              </a>
            )}
          </div>
        ))}
      </div>

      {project.pricing.note && (
        <p className="text-xs text-zinc-600 mt-6 max-w-2xl">
          {project.pricing.note}
        </p>
      )}
    </section>
  );
}
