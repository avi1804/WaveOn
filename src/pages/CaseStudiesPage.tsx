import React from "react";
import { Link, useSearchParams } from "react-router-dom";
import { caseStudiesData } from "@/data/caseStudies";
import { SeoHead } from "@/components/seo/SeoHead";
import { Badge } from "@/components/ui/badge";
import { CtaBandSection } from "@/components/sections/CtaBandSection";
import { ArrowRight, X } from "lucide-react";

export const CaseStudiesPage: React.FC = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const currentIndustry = searchParams.get("industry") || "All";

  const industries = [
    "All",
    "Fintech",
    "Healthcare",
    "eCommerce & Retail",
    "SaaS & Tech",
    "Education & EdTech",
    "Real Estate",
    "Logistics & Supply Chain",
    "Media & Entertainment",
  ];

  const filteredStudies =
    currentIndustry === "All"
      ? caseStudiesData
      : caseStudiesData.filter((cs) => cs.industry.toLowerCase() === currentIndustry.toLowerCase());

  const handleFilterChange = (industry: string) => {
    if (industry === "All") {
      searchParams.delete("industry");
      setSearchParams(searchParams, { replace: true });
    } else {
      setSearchParams({ industry }, { replace: true });
    }
  };

  return (
    <>
      <SeoHead
        title="Client Case Studies & Engineering Results — WaveOn"
        description="Explore how WaveOn architects high-performance web applications, headless commerce stores, and SaaS platforms that generate measurable business ROI."
        canonicalPath="/case-studies"
      />

      {/* Hero Header */}
      <section className="py-16 md:py-24 border-b border-border/60 bg-gradient-to-b from-muted/30 to-background">
        <div className="container mx-auto text-center max-w-3xl space-y-4">
          <Badge variant="subtle" className="text-xs uppercase tracking-wider">
            Client Case Studies
          </Badge>
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-foreground">
            Measurable Impact. Verified Technical Outcomes.
          </h1>
          <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
            Real engineering case studies showcasing how we solve high-stakes challenges: from sub-100ms financial trading portals to headless eCommerce flagships.
          </p>
        </div>
      </section>

      {/* Industry Filter Bar */}
      <section className="py-8 border-b border-border/60 bg-background/50 sticky top-[65px] z-20 backdrop-blur-md">
        <div className="container mx-auto flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          {/* Filter Pills */}
          <div className="flex items-center gap-2 overflow-x-auto pb-2 sm:pb-0 scrollbar-none">
            {industries.map((ind) => {
              const isActive =
                ind.toLowerCase() === currentIndustry.toLowerCase();
              return (
                <button
                  key={ind}
                  type="button"
                  onClick={() => handleFilterChange(ind)}
                  className={`rounded-full px-4 py-1.5 text-xs font-semibold whitespace-nowrap transition-all ${
                    isActive
                      ? "bg-primary text-primary-foreground shadow-sm shadow-primary/20"
                      : "bg-muted text-muted-foreground hover:bg-muted/80 hover:text-foreground"
                  }`}
                >
                  {ind}
                </button>
              );
            })}
          </div>

          {/* Active Filter Clear & Result Count */}
          <div className="flex items-center gap-3 text-xs text-muted-foreground shrink-0" aria-live="polite">
            <span>Showing {filteredStudies.length} of {caseStudiesData.length} projects</span>
            {currentIndustry !== "All" && (
              <button
                type="button"
                onClick={() => handleFilterChange("All")}
                className="flex items-center gap-1 font-semibold text-primary hover:underline"
              >
                <span>Clear</span>
                <X className="h-3 w-3" />
              </button>
            )}
          </div>
        </div>
      </section>

      {/* Case Studies Grid */}
      <section className="py-16 lg:py-24 border-b border-border/60 bg-background">
        <div className="container mx-auto">
          {filteredStudies.length === 0 ? (
            <div className="text-center py-20 rounded-2xl border border-dashed border-border bg-card p-12 max-w-lg mx-auto">
              <h3 className="text-lg font-bold text-foreground mb-2">
                No case studies found for "{currentIndustry}"
              </h3>
              <p className="text-xs text-muted-foreground mb-6">
                Try selecting a different industry vertical or clear the active filter to view all projects.
              </p>
              <button
                type="button"
                onClick={() => handleFilterChange("All")}
                className="rounded-xl bg-primary px-6 py-2.5 text-xs font-bold text-primary-foreground"
              >
                View All Case Studies
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
              {filteredStudies.map((study) => (
                <div
                  key={study.id}
                  className="group rounded-3xl border border-border/80 bg-card p-8 shadow-sm hover:border-primary/50 hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
                >
                  <div>
                    {/* Top Meta */}
                    <div className="flex items-center justify-between mb-4">
                      <Badge variant="subtle" className="text-xs font-semibold">
                        {study.industry}
                      </Badge>
                      <span className="text-xs text-muted-foreground font-medium">
                        {study.client}
                      </span>
                    </div>

                    <h2 className="text-2xl font-bold text-foreground group-hover:text-primary transition-colors leading-snug mb-3">
                      {study.title}
                    </h2>

                    <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed mb-6">
                      {study.summary}
                    </p>

                    {/* Stats Row */}
                    <div className="grid grid-cols-2 gap-4 py-4 border-y border-border/60 mb-6 bg-muted/20 rounded-xl px-4">
                      <div>
                        <div className="text-2xl font-extrabold text-primary">
                          {study.stats[0].value}
                        </div>
                        <div className="text-[11px] text-muted-foreground font-medium mt-0.5">
                          {study.stats[0].label}
                        </div>
                      </div>
                      <div>
                        <div className="text-2xl font-extrabold text-foreground">
                          {study.stats[1].value}
                        </div>
                        <div className="text-[11px] text-muted-foreground font-medium mt-0.5">
                          {study.stats[1].label}
                        </div>
                      </div>
                    </div>

                    {/* Tech tags */}
                    <div className="flex flex-wrap gap-1.5 mb-6">
                      {study.technologies.slice(0, 4).map((tech) => (
                        <span
                          key={tech}
                          className="rounded-md bg-muted px-2 py-0.5 text-[11px] font-medium text-foreground/80"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="pt-4 border-t border-border/60">
                    <Link
                      to={`/case-studies/${study.slug}`}
                      className="inline-flex w-full items-center justify-between rounded-xl bg-muted/60 px-4 py-3 text-xs font-bold text-foreground hover:bg-primary hover:text-primary-foreground transition-all"
                    >
                      <span>Read Technical Case Study</span>
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Final CTA Band */}
      <CtaBandSection />
    </>
  );
};

export default CaseStudiesPage;
