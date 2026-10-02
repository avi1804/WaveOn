import React from "react";
import { Link } from "react-router-dom";
import { servicesData } from "@/data/services";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Code, Palette, ShoppingBag, Smartphone, Layers, Cpu, Search, TrendingUp, ShieldCheck } from "lucide-react";

// Map string icon names to Lucide icons
const iconMap: Record<string, React.ElementType> = {
  Code,
  Palette,
  ShoppingBag,
  Smartphone,
  Layers,
  Cpu,
  Search,
  TrendingUp,
  ShieldCheck,
};

export const ServicesGridSection: React.FC = () => {
  return (
    <section className="py-20 lg:py-28 border-b border-border/60 bg-background">
      <div className="container mx-auto">
        {/* Section Header */}
        <div className="max-w-2xl mx-auto text-center space-y-4 mb-16">
          <Badge variant="vanilla" className="text-xs uppercase tracking-wider">
            What We Do
          </Badge>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-foreground">
            End-to-End Capabilities to Build & Scale
          </h2>
          <p className="text-muted-foreground leading-relaxed text-sm sm:text-base">
            From technical discovery and UI/UX design to robust software engineering and ongoing growth optimization, we cover the entire product lifecycle.
          </p>
        </div>

        {/* 3x3 Service Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {servicesData.map((service) => {
            const IconComponent = iconMap[service.icon] || Code;
            const isBuild = service.category === "Build";

            return (
              <Link
                key={service.id}
                to={`/services/${service.slug}`}
                className="group relative flex flex-col justify-between rounded-3xl border border-border/80 bg-card p-8 shadow-soft hover:border-celtic/40 hover:shadow-hover transition-all duration-300 hover:-translate-y-1.5"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-celtic/10 text-celtic group-hover:bg-celtic group-hover:text-white group-hover:scale-105 transition-all duration-300">
                      <IconComponent className="h-7 w-7" />
                    </div>
                    <Badge variant={isBuild ? "celtic" : "teagreen"} className="text-xs font-bold">
                      {service.category}
                    </Badge>
                  </div>

                  <h3 className="text-xl font-bold text-foreground group-hover:text-celtic transition-colors mb-2.5">
                    {service.title}
                  </h3>

                  <p className="text-sm text-muted-foreground leading-relaxed mb-6">
                    {service.shortDescription}
                  </p>
                </div>

                <div className="pt-4 border-t border-border/60 flex items-center justify-between text-xs font-bold text-celtic">
                  <span>Explore Service Scope</span>
                  <ArrowRight className="h-4 w-4 -translate-x-1 group-hover:translate-x-0 transition-transform" />
                </div>
              </Link>
            );
          })}
        </div>

        {/* Bottom Explorer Action */}
        <div className="mt-12 text-center">
          <Link
            to="/services"
            className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:underline"
          >
            <span>View detailed comparisons on our All Services Index</span>
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
};
