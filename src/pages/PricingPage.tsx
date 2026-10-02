import React from "react";
import { Link } from "react-router-dom";
import { pricingModelsData } from "@/data/pricing";
import { SeoHead } from "@/components/seo/SeoHead";
import { Badge } from "@/components/ui/badge";
import { CtaBandSection } from "@/components/sections/CtaBandSection";
import { CheckCircle2, ArrowRight, ShieldCheck, HelpCircle } from "lucide-react";

export const PricingPage: React.FC = () => {
  return (
    <>
      <SeoHead
        title="Transparent Pricing & Engagement Models"
        description="Predictable, transparent pricing for digital engineering: Fixed-Price projects, Dedicated Senior Teams, Hourly Sprints, and Maintenance Retainers."
        canonicalPath="/pricing"
      />

      {/* Hero Header */}
      <section className="py-16 md:py-24 border-b border-border/60 bg-gradient-to-b from-muted/30 to-background">
        <div className="container mx-auto text-center max-w-3xl space-y-4">
          <Badge variant="subtle" className="text-xs uppercase tracking-wider">
            Clear Pricing
          </Badge>
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-foreground">
            Transparent Pricing Built on Honest Value
          </h1>
          <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
            No hidden setup fees. No surprise change requests. We offer four transparent engagement models tailored to your stage, budget, and engineering velocity.
          </p>
        </div>
      </section>

      {/* 4 Pricing Models Grid */}
      <section className="py-20 border-b border-border/60 bg-background">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {pricingModelsData.map((tier) => (
              <div
                key={tier.id}
                className={`relative rounded-3xl border p-8 flex flex-col justify-between transition-all duration-300 ${
                  tier.popular
                    ? "border-primary bg-card shadow-xl ring-2 ring-primary/20"
                    : "border-border/80 bg-card/60 shadow-sm hover:border-primary/50 hover:shadow-md"
                }`}
              >
                {tier.popular && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
                    <Badge variant="default" className="shadow-sm font-bold uppercase tracking-wider text-[10px]">
                      Most Popular
                    </Badge>
                  </div>
                )}

                <div>
                  <div className="mb-4">
                    <h2 className="text-xl font-bold text-foreground mb-1">
                      {tier.title}
                    </h2>
                    <p className="text-xs text-muted-foreground leading-relaxed">
                      {tier.tagline}
                    </p>
                  </div>

                  <div className="py-4 border-y border-border/60 mb-6">
                    <div className="text-2xl font-black text-foreground">
                      {tier.rateDescription}
                    </div>
                    <span className="text-[11px] font-mono text-primary font-semibold block mt-1">
                      {tier.billingCadence}
                    </span>
                  </div>

                  <div className="space-y-3 mb-6">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-muted-foreground block">
                      What's Included:
                    </span>
                    {tier.features.map((feat, idx) => (
                      <div key={idx} className="flex items-start gap-2.5 text-xs text-foreground/80">
                        <CheckCircle2 className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-6 border-t border-border/60">
                  <Link
                    to="/contact"
                    className={`inline-flex w-full items-center justify-center gap-2 rounded-xl py-3 text-xs font-bold transition-all ${
                      tier.popular
                        ? "bg-primary text-primary-foreground shadow-md hover:bg-primary-hover"
                        : "bg-muted text-foreground hover:bg-primary hover:text-primary-foreground"
                    }`}
                  >
                    <span>Request Scoping & Quote</span>
                    <ArrowRight className="h-3.5 w-3.5" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Guarantees */}
      <section className="py-16 border-b border-border/60 bg-muted/20">
        <div className="container mx-auto max-w-4xl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center sm:text-left">
            <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4">
              <div className="h-10 w-10 rounded-xl bg-primary/10 text-primary flex items-center justify-center shrink-0">
                <ShieldCheck className="h-5 w-5" />
              </div>
              <div>
                <h3 className="text-sm font-bold text-foreground mb-1">
                  100% Code Ownership
                </h3>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  You own all source code and intellectual property unconditionally.
                </p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4">
              <div className="h-10 w-10 rounded-xl bg-primary/10 text-primary flex items-center justify-center shrink-0">
                <CheckCircle2 className="h-5 w-5" />
              </div>
              <div>
                <h3 className="text-sm font-bold text-foreground mb-1">
                  14-Day Risk-Free Trial
                </h3>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  Evaluate dedicated developer chemistry with zero risk for two full weeks.
                </p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4">
              <div className="h-10 w-10 rounded-xl bg-primary/10 text-primary flex items-center justify-center shrink-0">
                <HelpCircle className="h-5 w-5" />
              </div>
              <div>
                <h3 className="text-sm font-bold text-foreground mb-1">
                  Free Scoping Sessions
                </h3>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  Get an honest, written technical estimate before committing any budget.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Band */}
      <CtaBandSection />
    </>
  );
};

export default PricingPage;
