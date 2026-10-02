import React from "react";
import { Link } from "react-router-dom";
import { caseStudiesData } from "@/data/caseStudies";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, ArrowUpRight } from "lucide-react";

export const FeaturedWorkSection: React.FC = () => {
  const featuredStudies = caseStudiesData.filter((s) => s.featured).slice(0, 5);

  return (
    <section className="py-20 lg:py-28 border-b border-border/60 bg-muted/20">
      <div className="container mx-auto">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div className="space-y-3 max-w-xl">
            <Badge variant="vanilla" className="text-xs uppercase tracking-wider">
              Selected Work
            </Badge>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-foreground">
              Proven Outcomes That Fuel Growth
            </h2>
            <p className="text-muted-foreground text-sm sm:text-base leading-relaxed">
              We do not measure our work in lines of code. We measure our impact in conversion lifts, sub-second latency, and scalable revenue.
            </p>
          </div>

          <Link
            to="/case-studies"
            className="inline-flex items-center gap-2 rounded-full border-2 border-primary/20 bg-card px-6 py-3 text-sm font-bold text-primary hover:bg-teagreen-light hover:border-teagreen transition-all shadow-sm shrink-0 self-start md:self-auto"
          >
            <span>View All 8 Case Studies</span>
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        {/* 5 Featured Cards */}
        <div className="space-y-10">
          {featuredStudies.map((study, index) => {
            const isReversed = index % 2 === 1;

            return (
              <div
                key={study.id}
                className="group rounded-3xl border border-border/80 bg-card p-6 sm:p-8 lg:p-10 shadow-soft hover:shadow-hover hover:border-celtic/40 transition-all duration-300"
              >
                <div
                  className={`grid grid-cols-1 lg:grid-cols-12 gap-8 items-center ${
                    isReversed ? "lg:flex-row-reverse" : ""
                  }`}
                >
                  {/* Content Column (5 cols) */}
                  <div
                    className={`lg:col-span-6 space-y-6 ${
                      isReversed ? "lg:order-2" : "lg:order-1"
                    }`}
                  >
                    <div className="flex flex-wrap items-center gap-2">
                      <Badge variant="celtic" className="text-xs font-bold">
                        {study.industry}
                      </Badge>
                      <span className="text-xs text-muted-foreground">·</span>
                      <span className="text-xs font-semibold text-muted-foreground">
                        {study.client}
                      </span>
                    </div>

                    <h3 className="text-2xl sm:text-3xl font-extrabold text-foreground leading-snug group-hover:text-celtic transition-colors">
                      {study.title}
                    </h3>

                    <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                      {study.summary}
                    </p>

                    {/* Result Stats Callouts */}
                    <div className="grid grid-cols-2 gap-4 py-4 border-y border-border/60">
                      <div>
                        <div className="text-2xl sm:text-3xl font-extrabold text-celtic">
                          {study.stats[0].value}
                        </div>
                        <div className="text-xs text-muted-foreground font-semibold mt-0.5">
                          {study.stats[0].label}
                        </div>
                      </div>

                      <div>
                        <div className="text-2xl sm:text-3xl font-extrabold text-foreground">
                          {study.stats[1].value}
                        </div>
                        <div className="text-xs text-muted-foreground font-semibold mt-0.5">
                          {study.stats[1].label}
                        </div>
                      </div>
                    </div>

                    {/* Tech Badges */}
                    <div className="flex flex-wrap gap-2">
                      {study.technologies.slice(0, 4).map((tech) => (
                        <span
                          key={tech}
                          className="rounded-full bg-muted/80 border border-border/70 px-3 py-1 text-xs font-semibold text-deepolive"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    <Link
                      to={`/case-studies/${study.slug}`}
                      className="inline-flex items-center gap-2 text-sm font-bold text-celtic group-hover:underline"
                    >
                      <span>Read Full Architecture & Case Study</span>
                      <ArrowUpRight className="h-4 w-4" />
                    </Link>
                  </div>

                  {/* Device Mockup Frame Column (6 cols) */}
                  <div
                    className={`lg:col-span-6 ${
                      isReversed ? "lg:order-1" : "lg:order-2"
                    }`}
                  >
                    <div className="relative overflow-hidden rounded-3xl border border-[#343B1B]/30 bg-[#242A12] p-4 sm:p-6 shadow-2xl aspect-[16/10] flex flex-col justify-between">
                      {/* Browser Mockup Top Bar */}
                      <div className="flex items-center justify-between border-b border-[#343B1B] pb-3 mb-4">
                        <div className="flex items-center gap-2">
                          <span className="h-3 w-3 rounded-full bg-rose-400" />
                          <span className="h-3 w-3 rounded-full bg-vanilla" />
                          <span className="h-3 w-3 rounded-full bg-teagreen" />
                        </div>
                        <div className="rounded-full bg-[#1E230E] border border-[#343B1B] px-3.5 py-1 text-[11px] font-mono text-[#D8DEBF]">
                          https://app.{study.slug}.com/overview
                        </div>
                        <div className="h-2 w-2 rounded-full bg-teagreen animate-pulse" />
                      </div>

                      {/* Mockup Body Graphic */}
                      <div className="flex-1 flex flex-col justify-center space-y-4">
                        <div className="grid grid-cols-3 gap-3">
                          <div className="rounded-2xl bg-[#343B1B] border border-[#4B5527] p-3">
                            <span className="text-[10px] text-[#A6B386] uppercase block font-semibold">Live Metric</span>
                            <span className="text-lg font-bold text-white">{study.stats[0].value}</span>
                          </div>
                          <div className="rounded-2xl bg-[#343B1B] border border-[#4B5527] p-3">
                            <span className="text-[10px] text-[#A6B386] uppercase block font-semibold">Efficiency</span>
                            <span className="text-lg font-bold text-vanilla">{study.stats[1].value}</span>
                          </div>
                          <div className="rounded-2xl bg-[#343B1B] border border-[#4B5527] p-3">
                            <span className="text-[10px] text-[#A6B386] uppercase block font-semibold">Status</span>
                            <span className="text-lg font-bold text-teagreen">100% OK</span>
                          </div>
                        </div>

                        {/* Visual Waveform / Bar Simulation */}
                        <div className="rounded-2xl bg-[#343B1B]/70 border border-[#4B5527]/70 p-4">
                          <div className="flex items-end gap-2 h-20 w-full pt-4">
                            {[40, 65, 55, 80, 70, 95, 85, 100, 90, 75, 85, 95].map((val, i) => (
                              <div
                                key={i}
                                className="flex-1 rounded-t-full bg-gradient-to-t from-celtic/40 to-celtic transition-all duration-500 group-hover:brightness-125"
                                style={{ height: `${val}%` }}
                              />
                            ))}
                          </div>
                        </div>
                      </div>

                      {/* Mockup Footer Caption */}
                      <div className="pt-3 border-t border-[#343B1B] flex items-center justify-between text-[11px] text-[#A6B386]">
                        <span className="font-mono text-[#D8DEBF]">{study.client} Telemetry</span>
                        <span className="text-vanilla font-semibold">Active Production Cluster</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
