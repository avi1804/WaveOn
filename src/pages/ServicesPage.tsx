import React from "react";
import { Link } from "react-router-dom";
import { servicesData } from "@/data/services";
import { SeoHead } from "@/components/seo/SeoHead";
import { Badge } from "@/components/ui/badge";
import { CtaBandSection } from "@/components/sections/CtaBandSection";
import {
  ArrowRight,
  Code,
  Palette,
  ShoppingBag,
  Smartphone,
  Layers,
  Cpu,
  Search,
  TrendingUp,
  ShieldCheck,
  CheckCircle2,
} from "lucide-react";

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

export const ServicesPage: React.FC = () => {
  const buildServices = servicesData.filter((s) => s.category === "Build");
  const growServices = servicesData.filter((s) => s.category === "Grow");

  return (
    <>
      <SeoHead
        title="Full-Cycle Engineering & Growth Services"
        description="Explore WaveOn's comprehensive digital services: Custom Web Development, UI/UX Design, eCommerce, Mobile Apps, WordPress, SaaS, SEO, Marketing, and Support."
        canonicalPath="/services"
      />

      {/* Hero Header */}
      <section className="py-16 md:py-24 border-b border-border/60 bg-gradient-to-b from-muted/30 to-background">
        <div className="container mx-auto text-center max-w-3xl space-y-4">
          <Badge variant="subtle" className="text-xs uppercase tracking-wider">
            All Services
          </Badge>
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-foreground">
            Digital Engineering & Growth Capabilities
          </h1>
          <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
            We operate in two core disciplines: <strong className="text-foreground">Build</strong> to engineer world-class digital products from the ground up, and <strong className="text-foreground">Grow</strong> to scale traffic, optimize conversions, and maintain peak uptime.
          </p>
        </div>
      </section>

      {/* Build Services Group */}
      <section className="py-16 lg:py-20 border-b border-border/60 bg-background">
        <div className="container mx-auto">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-12">
            <div>
              <div className="flex items-center gap-2 mb-1">
                <span className="h-2 w-2 rounded-full bg-primary" />
                <span className="text-xs font-bold uppercase tracking-wider text-primary">
                  Phase 1 · Build
                </span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-foreground">
                Software Architecture & Product Engineering
              </h2>
            </div>
            <p className="text-xs sm:text-sm text-muted-foreground max-w-md">
              From MVP prototyping to complex enterprise platforms, built with modern TypeScript and responsive frameworks.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {buildServices.map((service) => {
              const Icon = iconMap[service.icon] || Code;
              return (
                <div
                  key={service.id}
                  className="rounded-2xl border border-border/80 bg-card p-8 shadow-sm hover:border-primary/50 hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between mb-5">
                      <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
                        <Icon className="h-6 w-6" />
                      </div>
                      <Badge variant="subtle" className="text-xs">
                        Build
                      </Badge>
                    </div>

                    <h3 className="text-xl font-bold text-foreground mb-2">
                      {service.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed mb-6">
                      {service.shortDescription}
                    </p>

                    {/* What's included preview */}
                    <div className="space-y-2 mb-6 border-t border-border/50 pt-4">
                      <span className="text-[11px] font-bold uppercase tracking-wider text-muted-foreground block">
                        Included Deliverables:
                      </span>
                      {service.deliverables.slice(0, 3).map((item, idx) => (
                        <div key={idx} className="flex items-start gap-2 text-xs text-foreground/80">
                          <CheckCircle2 className="h-3.5 w-3.5 text-primary shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="pt-4 border-t border-border/60">
                    <Link
                      to={`/services/${service.slug}`}
                      className="inline-flex w-full items-center justify-between rounded-lg bg-muted/60 px-4 py-2.5 text-xs font-semibold text-foreground hover:bg-primary hover:text-primary-foreground transition-all"
                    >
                      <span>Explore Service Details</span>
                      <ArrowRight className="h-3.5 w-3.5" />
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Grow Services Group */}
      <section className="py-16 lg:py-20 border-b border-border/60 bg-muted/20">
        <div className="container mx-auto">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-12">
            <div>
              <div className="flex items-center gap-2 mb-1">
                <span className="h-2 w-2 rounded-full bg-emerald-500" />
                <span className="text-xs font-bold uppercase tracking-wider text-emerald-600">
                  Phase 2 · Grow
                </span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-foreground">
                Search Dominance, Conversion & Continuous Care
              </h2>
            </div>
            <p className="text-xs sm:text-sm text-muted-foreground max-w-md">
              Targeted customer acquisition, Core Web Vitals optimization, and 24/7 proactive security monitoring.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {growServices.map((service) => {
              const Icon = iconMap[service.icon] || Code;
              return (
                <div
                  key={service.id}
                  className="rounded-2xl border border-border/80 bg-card p-8 shadow-sm hover:border-emerald-500/50 hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between mb-5">
                      <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-500/10 text-emerald-600">
                        <Icon className="h-6 w-6" />
                      </div>
                      <Badge variant="success" className="text-xs">
                        Grow
                      </Badge>
                    </div>

                    <h3 className="text-xl font-bold text-foreground mb-2">
                      {service.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed mb-6">
                      {service.shortDescription}
                    </p>

                    {/* What's included preview */}
                    <div className="space-y-2 mb-6 border-t border-border/50 pt-4">
                      <span className="text-[11px] font-bold uppercase tracking-wider text-muted-foreground block">
                        Included Deliverables:
                      </span>
                      {service.deliverables.slice(0, 3).map((item, idx) => (
                        <div key={idx} className="flex items-start gap-2 text-xs text-foreground/80">
                          <CheckCircle2 className="h-3.5 w-3.5 text-emerald-500 shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="pt-4 border-t border-border/60">
                    <Link
                      to={`/services/${service.slug}`}
                      className="inline-flex w-full items-center justify-between rounded-lg bg-muted/60 px-4 py-2.5 text-xs font-semibold text-foreground hover:bg-primary hover:text-primary-foreground transition-all"
                    >
                      <span>Explore Service Details</span>
                      <ArrowRight className="h-3.5 w-3.5" />
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Final CTA Band */}
      <CtaBandSection />
    </>
  );
};

export default ServicesPage;
