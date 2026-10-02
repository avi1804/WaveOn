import React from "react";
import { Badge } from "@/components/ui/badge";
import { Users, Clock, ShieldCheck, Target } from "lucide-react";
import { siteConfig } from "@/config/site";

export const WhyUsSection: React.FC = () => {
  const valuePoints = [
    {
      icon: Users,
      title: "Senior Engineers Exclusively",
      description:
        "No junior handoffs or unvetted subcontracting. Every engineer on your project has an average of 5+ years of production experience in high-throughput enterprise systems.",
      highlight: "Top 3% Vetted Talent",
    },
    {
      icon: Clock,
      title: "Guaranteed Timezone Overlap",
      description:
        "We guarantee a minimum of 4 to 6 live working hours overlapping with US Eastern, Pacific, or Central European business hours for synchronous collaboration and instant standup updates.",
      highlight: "Real-Time Collaboration",
    },
    {
      icon: ShieldCheck,
      title: "You Own 100% of Everything",
      description:
        "All source code, Git repositories, architectural blueprints, and Figma design tokens are transferred to your exclusive legal ownership. Zero vendor locks or proprietary entrapments.",
      highlight: "Complete IP Transfer",
    },
    {
      icon: Target,
      title: "Measured on Tangible Outcomes",
      description:
        "We do not bill for time-wasting vanity meetings. Our sprint deliverables are benchmarked against conversion rates, latency metrics, and clear business key performance indicators.",
      highlight: "Business Impact First",
    },
  ];

  return (
    <section className="py-20 lg:py-28 border-b border-border/60 bg-background">
      <div className="container mx-auto">
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
          <Badge variant="vanilla" className="text-xs uppercase tracking-wider">
            Why {siteConfig.brandName}
          </Badge>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-foreground">
            Built Different. Engineered for Accountability.
          </h2>
          <p className="text-muted-foreground text-sm sm:text-base leading-relaxed">
            We built WaveOn to be the agency we always wanted to hire: transparent, senior-led, technically rigorous, and completely devoid of bureaucratic fluff.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {valuePoints.map((point, idx) => {
            const Icon = point.icon;
            const badgeVariant = idx % 2 === 0 ? "teagreen" : "vanilla";

            return (
              <div
                key={point.title}
                className="group relative rounded-3xl border border-border/80 bg-card p-8 sm:p-9 shadow-soft hover:shadow-hover hover:border-celtic/40 transition-all duration-300 hover:-translate-y-1.5 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-teagreen/25 text-deepolive group-hover:bg-celtic group-hover:text-white group-hover:scale-105 transition-all duration-300">
                      <Icon className="h-7 w-7" />
                    </div>
                    <Badge variant={badgeVariant} className="text-xs font-bold">
                      {point.highlight}
                    </Badge>
                  </div>

                  <h3 className="text-xl sm:text-2xl font-bold text-foreground group-hover:text-celtic transition-colors mb-3">
                    {point.title}
                  </h3>

                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {point.description}
                  </p>
                </div>

                <div className="mt-8 pt-4 border-t border-border/60 flex items-center gap-2 text-xs font-bold text-celtic">
                  <span className="h-2 w-2 rounded-full bg-teagreen" />
                  <span>Verified Standard</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
