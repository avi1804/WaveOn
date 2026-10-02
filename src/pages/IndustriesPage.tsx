import React from "react";
import { Link } from "react-router-dom";
import { industriesData } from "@/data/industries";
import { SeoHead } from "@/components/seo/SeoHead";
import { Badge } from "@/components/ui/badge";
import { CtaBandSection } from "@/components/sections/CtaBandSection";
import {
  ShieldAlert,
  HeartPulse,
  ShoppingBag,
  Cloud,
  GraduationCap,
  Building2,
  Truck,
  Film,
  Briefcase,
  Factory,
  ArrowRight,
  CheckCircle2,
  AlertTriangle,
} from "lucide-react";

const iconMap: Record<string, React.ElementType> = {
  ShieldAlert,
  HeartPulse,
  ShoppingBag,
  Cloud,
  GraduationCap,
  Building2,
  Truck,
  Film,
  Briefcase,
  Factory,
};

export const IndustriesPage: React.FC = () => {
  return (
    <>
      <SeoHead
        title="Industries We Serve — Specialized Domain Engineering"
        description="Explore WaveOn's industry expertise across Fintech, Healthcare, eCommerce, SaaS, EdTech, Real Estate, Logistics, and Media."
        canonicalPath="/industries"
      />

      {/* Hero Header */}
      <section className="py-16 md:py-24 border-b border-border/60 bg-gradient-to-b from-muted/30 to-background">
        <div className="container mx-auto text-center max-w-3xl space-y-4">
          <Badge variant="subtle" className="text-xs uppercase tracking-wider">
            Sector Experience
          </Badge>
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-foreground">
            Domain Expertise Engineered for Your Industry
          </h1>
          <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
            Generic software patterns fail when applied to specialized regulatory requirements and user workflows. We bring deep, proven experience across 10 high-growth sectors.
          </p>
        </div>
      </section>

      {/* 10 Industry Deep-Dives */}
      <section className="py-20 border-b border-border/60 bg-background">
        <div className="container mx-auto max-w-5xl space-y-12">
          {industriesData.map((ind) => {
            const Icon = iconMap[ind.icon] || Building2;

            return (
              <div
                key={ind.id}
                id={ind.slug}
                className="rounded-3xl border border-border/80 bg-card p-8 sm:p-10 shadow-sm hover:shadow-lg transition-all duration-300"
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10 text-primary shrink-0">
                    <Icon className="h-7 w-7" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-foreground">
                      {ind.title}
                    </h2>
                    <p className="text-xs text-muted-foreground font-mono">
                      Domain Sector #{ind.id}
                    </p>
                  </div>
                </div>

                <p className="text-sm sm:text-base text-muted-foreground leading-relaxed mb-8">
                  {ind.overview}
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 py-6 border-y border-border/60">
                  {/* Pain Points */}
                  <div className="space-y-3">
                    <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-rose-600">
                      <AlertTriangle className="h-4 w-4" />
                      <span>Industry Pain Points We Solve:</span>
                    </div>
                    <ul className="space-y-2">
                      {ind.painPointsSolved.map((pt, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-xs text-muted-foreground">
                          <span className="text-rose-500 font-bold">•</span>
                          <span>{pt}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Key Solutions */}
                  <div className="space-y-3">
                    <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-primary">
                      <CheckCircle2 className="h-4 w-4" />
                      <span>Our Architectural Solutions:</span>
                    </div>
                    <ul className="space-y-2">
                      {ind.keySolutions.map((sol, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-xs text-foreground/90 font-medium">
                          <CheckCircle2 className="h-3.5 w-3.5 text-primary shrink-0 mt-0.5" />
                          <span>{sol}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
                  {ind.caseStudyRef ? (
                    <Link
                      to={`/case-studies/${ind.caseStudyRef}`}
                      className="text-xs font-bold text-primary hover:underline flex items-center gap-1.5"
                    >
                      <span>Read {ind.title} Client Case Study</span>
                      <ArrowRight className="h-3.5 w-3.5" />
                    </Link>
                  ) : (
                    <span className="text-xs text-muted-foreground">
                      Multi-client engagements delivered
                    </span>
                  )}

                  <Link
                    to="/contact"
                    className="inline-flex items-center gap-2 rounded-xl bg-muted px-4 py-2 text-xs font-semibold text-foreground hover:bg-primary hover:text-primary-foreground transition-all"
                  >
                    <span>Discuss Your Industry Project</span>
                    <ArrowRight className="h-3 w-3" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Final CTA Band */}
      <CtaBandSection />
    </>
  );
};

export default IndustriesPage;
