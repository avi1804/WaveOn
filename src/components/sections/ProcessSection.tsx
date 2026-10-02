import React from "react";
import { Link } from "react-router-dom";
import { processStagesData } from "@/data/process";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, CheckCircle2 } from "lucide-react";

export const ProcessSection: React.FC = () => {
  return (
    <section className="py-20 lg:py-28 border-b border-border/60 bg-background">
      <div className="container mx-auto">
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
          <Badge variant="vanilla" className="text-xs uppercase tracking-wider">
            Our Delivery Framework
          </Badge>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-foreground">
            Six Stages to Reliable, Predictable Delivery
          </h2>
          <p className="text-muted-foreground text-sm sm:text-base leading-relaxed">
            We operate through a battle-tested agile engineering framework that eliminates scope ambiguity, guarantees transparent velocity, and ensures zero-downtime launches.
          </p>
        </div>

        {/* 6 Numbered Stages Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {processStagesData.map((stage) => (
            <div
              key={stage.number}
              className="relative rounded-3xl border border-border/80 bg-card p-8 sm:p-9 shadow-soft hover:border-celtic/40 hover:shadow-hover transition-all duration-300 flex flex-col justify-between hover:-translate-y-1.5"
            >
              <div>
                <div className="flex items-center justify-between mb-5">
                  <span className="font-mono text-4xl font-black text-celtic">
                    {stage.number}
                  </span>
                  <Badge variant="teagreen" className="text-xs font-bold font-mono">
                    {stage.duration}
                  </Badge>
                </div>

                <h3 className="text-xl font-bold text-foreground mb-1">
                  {stage.title}
                </h3>
                <h4 className="text-xs font-bold text-celtic mb-3">
                  {stage.subtitle}
                </h4>

                <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed mb-6">
                  {stage.description}
                </p>

                {/* Key Deliverables */}
                <div className="space-y-2 border-t border-border/60 pt-4">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-muted-foreground block mb-2">
                    Key Outputs:
                  </span>
                  {stage.deliverables.slice(0, 2).map((del, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-xs text-foreground font-medium">
                      <CheckCircle2 className="h-3.5 w-3.5 text-teagreen-hover shrink-0 mt-0.5" />
                      <span>{del}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-border/60 text-xs font-semibold text-muted-foreground">
                Phase {stage.number} of 06
              </div>
            </div>
          ))}
        </div>

        {/* Full Process Link */}
        <div className="mt-12 text-center">
          <Link
            to="/process"
            className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:underline"
          >
            <span>Explore our complete engineering and QA methodology</span>
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
};
