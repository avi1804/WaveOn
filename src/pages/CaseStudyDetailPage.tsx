import React from "react";
import { useParams, Link, Navigate } from "react-router-dom";
import { caseStudiesData } from "@/data/caseStudies";
import { SeoHead } from "@/components/seo/SeoHead";
import { Badge } from "@/components/ui/badge";
import { CtaBandSection } from "@/components/sections/CtaBandSection";
import {
  ArrowRight,
  CheckCircle2,
  Quote,
  Star,
} from "lucide-react";

export const CaseStudyDetailPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const study = caseStudiesData.find((cs) => cs.slug === slug);

  if (!study) {
    return <Navigate to="/404" replace />;
  }

  const nextStudy = caseStudiesData.find(
    (cs) => cs.slug === study.nextCaseStudySlug
  );

  return (
    <>
      <SeoHead
        title={`${study.title} — ${study.client} Case Study`}
        description={study.summary}
        canonicalPath={`/case-studies/${study.slug}`}
      />

      {/* Hero Header */}
      <section className="py-16 md:py-24 border-b border-border/60 bg-gradient-to-b from-muted/30 via-background to-background">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto space-y-6">
            <div className="flex flex-wrap items-center gap-3">
              <Badge variant="subtle" className="text-xs font-semibold">
                {study.industry}
              </Badge>
              <span className="text-muted-foreground text-xs">·</span>
              <span className="text-xs font-medium text-muted-foreground">
                Client: {study.client}
              </span>
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-foreground leading-tight">
              {study.title}
            </h1>

            <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
              {study.summary}
            </p>

            {/* 2 Result Stats Callouts */}
            <div className="grid grid-cols-2 gap-6 p-6 rounded-2xl bg-card border border-border/80 shadow-sm max-w-xl">
              <div>
                <div className="text-3xl sm:text-4xl font-black text-primary">
                  {study.stats[0].value}
                </div>
                <div className="text-xs sm:text-sm text-muted-foreground font-semibold mt-1">
                  {study.stats[0].label}
                </div>
              </div>
              <div>
                <div className="text-3xl sm:text-4xl font-black text-foreground">
                  {study.stats[1].value}
                </div>
                <div className="text-xs sm:text-sm text-muted-foreground font-semibold mt-1">
                  {study.stats[1].label}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Challenge & Solution Sections */}
      <section className="py-20 border-b border-border/60 bg-background">
        <div className="container mx-auto max-w-4xl space-y-16">
          {/* The Challenge */}
          <div className="space-y-4">
            <Badge variant="secondary" className="text-xs uppercase tracking-wider">
              The Challenge
            </Badge>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-foreground">
              What Was Holding {study.client} Back
            </h2>
            <p className="text-base text-muted-foreground leading-relaxed">
              {study.challenge}
            </p>
          </div>

          {/* The Solution */}
          <div className="space-y-4">
            <Badge variant="subtle" className="text-xs uppercase tracking-wider">
              The Architecture
            </Badge>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-foreground">
              Our Technical & Design Solution
            </h2>
            <p className="text-base text-muted-foreground leading-relaxed">
              {study.solution}
            </p>

            <div className="space-y-3 pt-4">
              <span className="text-xs font-bold uppercase tracking-wider text-foreground block">
                Key Architectural Implementations:
              </span>
              {study.architectureDetails.map((detail, idx) => (
                <div
                  key={idx}
                  className="flex items-start gap-3 rounded-xl border border-border/80 bg-muted/30 p-4"
                >
                  <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                  <span className="text-sm text-foreground/90 font-medium">
                    {detail}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Tech Stack Used */}
          <div className="space-y-4 pt-4 border-t border-border/60">
            <Badge variant="secondary" className="text-xs uppercase tracking-wider">
              Tooling
            </Badge>
            <h3 className="text-xl font-bold text-foreground">
              Technologies & Infrastructure Deployed
            </h3>
            <div className="flex flex-wrap gap-2.5">
              {study.technologies.map((tech) => (
                <span
                  key={tech}
                  className="rounded-xl border border-border bg-card px-4 py-2 text-xs font-bold text-foreground shadow-sm"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Client Testimonial */}
          <div className="rounded-3xl border border-primary/20 bg-primary/5 p-8 sm:p-10 shadow-sm relative">
            <Quote className="h-10 w-10 text-primary/30 mb-4" />
            <p className="text-base sm:text-lg text-foreground italic leading-relaxed mb-6">
              "{study.testimonial.quote}"
            </p>
            <div className="flex items-center justify-between border-t border-primary/20 pt-4">
              <div>
                <h4 className="text-sm font-bold text-foreground">
                  {study.testimonial.author}
                </h4>
                <p className="text-xs text-muted-foreground">
                  {study.testimonial.role}, {study.testimonial.company}
                </p>
              </div>
              <div className="flex text-amber-500">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-amber-500" />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Next Case Study Carousel / Link */}
      {nextStudy && (
        <section className="py-16 border-b border-border/60 bg-muted/20">
          <div className="container mx-auto max-w-4xl">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-6 rounded-3xl border border-border/80 bg-card p-8 shadow-sm">
              <div className="space-y-2">
                <span className="text-xs font-bold uppercase tracking-wider text-muted-foreground">
                  Next Case Study
                </span>
                <h3 className="text-xl font-bold text-foreground">
                  {nextStudy.title}
                </h3>
                <p className="text-xs text-muted-foreground">
                  Industry: {nextStudy.industry} · Client: {nextStudy.client}
                </p>
              </div>
              <Link
                to={`/case-studies/${nextStudy.slug}`}
                className="inline-flex items-center gap-2 rounded-xl bg-primary px-6 py-3 text-xs font-bold text-primary-foreground hover:bg-primary-hover shrink-0"
              >
                <span>Read Next Case Study</span>
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </section>
      )}

      {/* Final CTA Band */}
      <CtaBandSection />
    </>
  );
};

export default CaseStudyDetailPage;
