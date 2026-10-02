import React from "react";
import { processStagesData } from "@/data/process";
import { SeoHead } from "@/components/seo/SeoHead";
import { Badge } from "@/components/ui/badge";
import { CtaBandSection } from "@/components/sections/CtaBandSection";
import { CheckCircle2, ShieldCheck, Clock, GitPullRequest, CodeXml } from "lucide-react";

export const ProcessPage: React.FC = () => {
  return (
    <>
      <SeoHead
        title="Our 6-Stage Delivery Process — Predictable Software Delivery"
        description="Discover WaveOn's disciplined 6-stage engineering and design methodology: Discover, Define, Design, Build, Launch, and Grow."
        canonicalPath="/process"
      />

      {/* Hero Header */}
      <section className="py-16 md:py-24 border-b border-border/60 bg-gradient-to-b from-muted/30 to-background">
        <div className="container mx-auto text-center max-w-3xl space-y-4">
          <Badge variant="subtle" className="text-xs uppercase tracking-wider">
            Our Delivery Framework
          </Badge>
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-foreground">
            Six Stages From Concept to High-Growth Production
          </h1>
          <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
            We replaced agency chaos with software engineering rigor. Our structured 6-stage delivery methodology guarantees predictable milestone schedules, continuous visibility, and zero-downtime cutovers.
          </p>
        </div>
      </section>

      {/* Process Stages In-Depth */}
      <section className="py-20 border-b border-border/60 bg-background">
        <div className="container mx-auto max-w-5xl space-y-16">
          {processStagesData.map((stage) => {
            return (
              <div
                key={stage.number}
                className="rounded-3xl border border-border/80 bg-card p-8 sm:p-12 shadow-sm hover:shadow-lg transition-all duration-300"
              >
                <div className="flex flex-col lg:flex-row gap-8 items-start justify-between">
                  <div className="space-y-4 max-w-xl">
                    <div className="flex items-center gap-3">
                      <span className="font-mono text-4xl font-black text-primary">
                        {stage.number}
                      </span>
                      <div className="flex items-center gap-2">
                        <Badge variant="secondary" className="font-mono text-xs">
                          {stage.duration}
                        </Badge>
                        <Badge variant="subtle" className="text-xs">
                          Phase {stage.number} of 06
                        </Badge>
                      </div>
                    </div>

                    <h2 className="text-2xl sm:text-3xl font-extrabold text-foreground">
                      {stage.title}:{" "}
                      <span className="text-primary font-bold">{stage.subtitle}</span>
                    </h2>

                    <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                      {stage.description}
                    </p>

                    <div className="pt-2">
                      <span className="text-xs font-bold uppercase tracking-wider text-foreground block mb-3">
                        Sprint Activities:
                      </span>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                        {stage.activities.map((act, idx) => (
                          <div key={idx} className="flex items-start gap-2 text-xs text-muted-foreground">
                            <span className="h-1.5 w-1.5 rounded-full bg-primary shrink-0 mt-1.5" />
                            <span>{act}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Concrete Deliverables Box */}
                  <div className="w-full lg:w-80 rounded-2xl bg-muted/50 border border-border/80 p-6 shrink-0 space-y-3">
                    <span className="text-xs font-bold uppercase tracking-wider text-primary block">
                      Guaranteed Deliverables:
                    </span>
                    <div className="space-y-2.5">
                      {stage.deliverables.map((del, idx) => (
                        <div key={idx} className="flex items-start gap-2 text-xs font-medium text-foreground">
                          <CheckCircle2 className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                          <span>{del}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Engineering Quality Gates */}
      <section className="py-20 border-b border-border/60 bg-muted/20">
        <div className="container mx-auto max-w-5xl">
          <div className="text-center space-y-3 mb-12">
            <Badge variant="subtle" className="text-xs uppercase tracking-wider">
              Engineering Quality Gates
            </Badge>
            <h2 className="text-3xl font-extrabold text-foreground">
              Built In, Not Bolted On
            </h2>
            <p className="text-sm sm:text-base text-muted-foreground max-w-2xl mx-auto">
              Every pull request passes through automated linting, security audits, unit test validation, and peer code review before reaching staging.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="rounded-2xl border border-border/80 bg-card p-6 shadow-sm">
              <CodeXml className="h-8 w-8 text-primary mb-3" />
              <h3 className="text-base font-bold text-foreground mb-1">
                Strict TypeScript
              </h3>
              <p className="text-xs text-muted-foreground leading-relaxed">
                Zero `any` escapes. Strictly validated schemas across frontend and backend boundaries.
              </p>
            </div>

            <div className="rounded-2xl border border-border/80 bg-card p-6 shadow-sm">
              <GitPullRequest className="h-8 w-8 text-primary mb-3" />
              <h3 className="text-base font-bold text-foreground mb-1">
                Peer Code Reviews
              </h3>
              <p className="text-xs text-muted-foreground leading-relaxed">
                Mandatory dual-engineer sign-off on all branch merges ensuring consistent architectural hygiene.
              </p>
            </div>

            <div className="rounded-2xl border border-border/80 bg-card p-6 shadow-sm">
              <ShieldCheck className="h-8 w-8 text-primary mb-3" />
              <h3 className="text-base font-bold text-foreground mb-1">
                Automated QA Tests
              </h3>
              <p className="text-xs text-muted-foreground leading-relaxed">
                Unit and integration test suites executed in CI/CD before any deployment cutover.
              </p>
            </div>

            <div className="rounded-2xl border border-border/80 bg-card p-6 shadow-sm">
              <Clock className="h-8 w-8 text-primary mb-3" />
              <h3 className="text-base font-bold text-foreground mb-1">
                Sub-2s Web Vitals
              </h3>
              <p className="text-xs text-muted-foreground leading-relaxed">
                Continuous performance budgets preventing asset bloat and safeguarding SEO rankings.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Band */}
      <CtaBandSection />
    </>
  );
};

export default ProcessPage;
