import React from "react";
import { useParams, Link, Navigate } from "react-router-dom";
import { servicesData } from "@/data/services";
import { caseStudiesData } from "@/data/caseStudies";
import { SeoHead } from "@/components/seo/SeoHead";
import { SchemaOrg } from "@/components/seo/SchemaOrg";
import { Badge } from "@/components/ui/badge";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { CtaBandSection } from "@/components/sections/CtaBandSection";
import {
  ArrowRight,
  CheckCircle2,
  Code,
  Palette,
  ShoppingBag,
  Smartphone,
  Layers,
  Cpu,
  Search,
  TrendingUp,
  ShieldCheck,
  Sparkles,
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

export const ServiceDetailPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const service = servicesData.find((s) => s.slug === slug);

  // If service does not exist, redirect to 404
  if (!service) {
    return <Navigate to="/404" replace />;
  }

  const IconComponent = iconMap[service.icon] || Code;
  const relatedCaseStudy = caseStudiesData.find(
    (cs) => cs.slug === service.relatedCaseStudySlug
  );

  return (
    <>
      <SeoHead
        title={`${service.title} — WaveOn Engineering`}
        description={service.shortDescription}
        canonicalPath={`/services/${service.slug}`}
      />

      {/* Structured data for FAQ */}
      {service.faqs && <SchemaOrg schemaType="FAQPage" faqs={service.faqs} />}

      {/* 1. Hero with CTA */}
      <section className="py-16 md:py-24 border-b border-border/60 bg-gradient-to-b from-muted/30 via-background to-background">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 text-xs font-semibold text-primary">
              <IconComponent className="h-3.5 w-3.5" />
              <span>{service.category} Service</span>
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-foreground leading-tight">
              {service.title}
            </h1>

            <p className="text-lg sm:text-xl text-primary font-medium max-w-2xl mx-auto">
              "{service.heroTagline}"
            </p>

            <p className="text-base sm:text-lg text-muted-foreground leading-relaxed max-w-3xl mx-auto">
              {service.longDescription}
            </p>

            <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                to="/contact"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-xl bg-primary px-8 py-4 text-base font-bold text-primary-foreground shadow-md hover:bg-primary-hover active:scale-[0.98] transition-all"
              >
                <span>Get a Free Scope & Quote</span>
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                to="/pricing"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-xl border border-border bg-card px-8 py-4 text-base font-semibold text-foreground hover:bg-muted/70 transition-all"
              >
                <span>Explore Engagement Rates</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 2. What's Included (Key Features) */}
      <section className="py-20 border-b border-border/60 bg-background">
        <div className="container mx-auto">
          <div className="max-w-3xl mx-auto text-center space-y-3 mb-14">
            <Badge variant="subtle" className="text-xs uppercase tracking-wider">
              Core Architecture
            </Badge>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-foreground">
              What's Included in {service.title}
            </h2>
            <p className="text-muted-foreground text-sm sm:text-base leading-relaxed">
              Every deliverable is engineered to enterprise standards with strict unit testing and zero technical debt.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {service.features.map((feature, idx) => (
              <div
                key={idx}
                className="rounded-2xl border border-border/80 bg-card p-8 shadow-sm hover:border-primary/40 hover:shadow-md transition-all duration-200"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 text-primary mb-4">
                  <Sparkles className="h-5 w-5" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-2">
                  {feature.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Process & Approach */}
      <section className="py-20 border-b border-border/60 bg-muted/20">
        <div className="container mx-auto">
          <div className="max-w-3xl mx-auto text-center space-y-3 mb-14">
            <Badge variant="subtle" className="text-xs uppercase tracking-wider">
              Methodology
            </Badge>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-foreground">
              Our Technical Approach
            </h2>
            <p className="text-muted-foreground text-sm sm:text-base leading-relaxed">
              Transparent, repeatable milestones from initial blueprint to production launch.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {service.approach.map((item) => (
              <div
                key={item.step}
                className="rounded-2xl border border-border/80 bg-card p-6 shadow-sm flex flex-col justify-between"
              >
                <div>
                  <span className="font-mono text-2xl font-black text-primary block mb-3">
                    {item.step}
                  </span>
                  <h3 className="text-base font-bold text-foreground mb-2">
                    {item.title}
                  </h3>
                  <p className="text-xs text-muted-foreground leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Tech / Tools & Deliverables */}
      <section className="py-20 border-b border-border/60 bg-background">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 max-w-5xl mx-auto">
            {/* Deliverables Checklist (7 cols) */}
            <div className="lg:col-span-7 space-y-6">
              <Badge variant="subtle" className="text-xs uppercase tracking-wider">
                Concrete Outputs
              </Badge>
              <h2 className="text-3xl font-extrabold text-foreground">
                Tangible Deliverables
              </h2>
              <p className="text-sm text-muted-foreground leading-relaxed">
                When you partner with WaveOn, there are no vague hand-waving promises. You receive verified production assets.
              </p>

              <div className="space-y-3 pt-2">
                {service.deliverables.map((item, idx) => (
                  <div
                    key={idx}
                    className="flex items-start gap-3 rounded-xl border border-border/70 bg-card p-4 shadow-sm"
                  >
                    <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                    <span className="text-sm font-medium text-foreground">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Technologies Used (5 cols) */}
            <div className="lg:col-span-5 space-y-6">
              <Badge variant="subtle" className="text-xs uppercase tracking-wider">
                Tooling
              </Badge>
              <h3 className="text-2xl font-bold text-foreground">
                Technologies & Frameworks
              </h3>
              <p className="text-xs text-muted-foreground leading-relaxed">
                Curated libraries chosen for speed, security, and developer ergonomics.
              </p>

              <div className="flex flex-wrap gap-2.5 pt-2">
                {service.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-xl border border-border bg-muted/60 px-3.5 py-2 text-xs font-semibold text-foreground shadow-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="rounded-2xl border border-primary/20 bg-primary/5 p-6 space-y-3 mt-6">
                <h4 className="text-sm font-bold text-foreground">
                  Need a specialized framework or custom stack?
                </h4>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  Our senior engineering leads adapt to your existing corporate repository conventions and infrastructure.
                </p>
                <Link
                  to="/contact"
                  className="text-xs font-bold text-primary hover:underline flex items-center gap-1"
                >
                  <span>Discuss Your Stack With Us</span>
                  <ArrowRight className="h-3.5 w-3.5" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Related Case Study */}
      {relatedCaseStudy && (
        <section className="py-20 border-b border-border/60 bg-muted/20">
          <div className="container mx-auto">
            <div className="max-w-4xl mx-auto rounded-3xl border border-border/80 bg-card p-8 sm:p-12 shadow-md">
              <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
                <Badge variant="subtle" className="text-xs font-semibold">
                  Featured Case Study · {relatedCaseStudy.industry}
                </Badge>
                <span className="text-xs text-muted-foreground font-medium">
                  Client: {relatedCaseStudy.client}
                </span>
              </div>

              <h2 className="text-2xl sm:text-3xl font-extrabold text-foreground mb-4">
                {relatedCaseStudy.title}
              </h2>

              <p className="text-sm sm:text-base text-muted-foreground leading-relaxed mb-8">
                {relatedCaseStudy.summary}
              </p>

              <div className="grid grid-cols-2 gap-6 py-6 border-y border-border/60 mb-8">
                <div>
                  <div className="text-3xl font-extrabold text-primary">
                    {relatedCaseStudy.stats[0].value}
                  </div>
                  <div className="text-xs text-muted-foreground font-medium mt-1">
                    {relatedCaseStudy.stats[0].label}
                  </div>
                </div>
                <div>
                  <div className="text-3xl font-extrabold text-foreground">
                    {relatedCaseStudy.stats[1].value}
                  </div>
                  <div className="text-xs text-muted-foreground font-medium mt-1">
                    {relatedCaseStudy.stats[1].label}
                  </div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="italic text-xs text-muted-foreground">
                  "{relatedCaseStudy.testimonial.quote}" — {relatedCaseStudy.testimonial.author}
                </div>
                <Link
                  to={`/case-studies/${relatedCaseStudy.slug}`}
                  className="inline-flex items-center gap-2 rounded-xl bg-primary px-6 py-3 text-xs font-bold text-primary-foreground hover:bg-primary-hover shrink-0"
                >
                  <span>View Case Study</span>
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* 6. FAQ Accordion */}
      {service.faqs && service.faqs.length > 0 && (
        <section className="py-20 border-b border-border/60 bg-background">
          <div className="container mx-auto">
            <div className="max-w-3xl mx-auto space-y-4 mb-12 text-center">
              <Badge variant="subtle" className="text-xs uppercase tracking-wider">
                Common Inquiries
              </Badge>
              <h2 className="text-3xl font-extrabold text-foreground">
                Questions About {service.title}
              </h2>
            </div>

            <div className="max-w-3xl mx-auto rounded-2xl border border-border/80 bg-card p-6 sm:p-8 shadow-sm">
              <Accordion type="single" collapsible className="w-full">
                {service.faqs.map((faq, idx) => (
                  <AccordionItem key={idx} value={`faq-${idx}`}>
                    <AccordionTrigger className="text-base font-bold text-foreground text-left py-4">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-sm text-muted-foreground leading-relaxed pb-4">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </div>
        </section>
      )}

      {/* 7. Final CTA Band */}
      <CtaBandSection />
    </>
  );
};

export default ServiceDetailPage;
