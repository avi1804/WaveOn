import React from "react";
import { useParams, Link, Navigate } from "react-router-dom";
import { rolesData } from "@/data/roles";
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
  Clock,
  ShieldCheck,
  UserCheck,
  Code2,
} from "lucide-react";

export const RoleDetailPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const role = rolesData.find((r) => r.slug === slug);

  if (!role) {
    return <Navigate to="/404" replace />;
  }

  return (
    <>
      <SeoHead
        title={`Hire Senior ${role.title} (${role.hourlyRate}) — WaveOn`}
        description={role.shortSummary}
        canonicalPath={`/hire-developers/${role.slug}`}
      />

      {/* Structured data for FAQ */}
      {role.faqs && <SchemaOrg schemaType="FAQPage" faqs={role.faqs} />}

      {/* 1. Hero with Hourly Rate & CTA */}
      <section className="py-16 md:py-24 border-b border-border/60 bg-gradient-to-b from-muted/30 via-background to-background">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 text-xs font-semibold text-primary">
              <Code2 className="h-3.5 w-3.5" />
              <span>{role.category} · Dedicated Engineering Talent</span>
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-foreground leading-tight">
              Hire Senior {role.title}
            </h1>

            <div className="inline-flex items-center gap-3 rounded-2xl bg-muted/80 border border-border px-6 py-2.5">
              <span className="text-xs text-muted-foreground uppercase font-bold tracking-wider">
                Transparent Rate:
              </span>
              <span className="font-mono text-2xl font-black text-primary">
                {role.hourlyRate}
              </span>
            </div>

            <p className="text-base sm:text-lg text-muted-foreground leading-relaxed max-w-3xl mx-auto">
              {role.fullOverview}
            </p>

            <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                to="/contact"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-xl bg-primary px-8 py-4 text-base font-bold text-primary-foreground shadow-md hover:bg-primary-hover active:scale-[0.98] transition-all"
              >
                <span>Hire {role.title} Now</span>
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                to="/hire-developers"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-xl border border-border bg-card px-8 py-4 text-base font-semibold text-foreground hover:bg-muted/70 transition-all"
              >
                <span>View All Developer Roles</span>
              </Link>
            </div>

            {/* Micro Trust Indicators */}
            <div className="pt-4 flex flex-wrap items-center justify-center gap-6 text-xs text-muted-foreground font-medium">
              <div className="flex items-center gap-1.5">
                <UserCheck className="h-4 w-4 text-primary" />
                <span>{role.experienceLevel}</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Clock className="h-4 w-4 text-primary" />
                <span>Guaranteed Timezone Overlap</span>
              </div>
              <div className="flex items-center gap-1.5">
                <ShieldCheck className="h-4 w-4 text-primary" />
                <span>14-Day Risk-Free Evaluation</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Skills & Core Proficiencies */}
      <section className="py-20 border-b border-border/60 bg-background">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 max-w-5xl mx-auto items-start">
            {/* Core Proficiencies (7 cols) */}
            <div className="lg:col-span-7 space-y-6">
              <Badge variant="subtle" className="text-xs uppercase tracking-wider">
                Technical Mastery
              </Badge>
              <h2 className="text-3xl font-extrabold text-foreground">
                What Our {role.title} Excel At
              </h2>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Our engineers are vetted through multi-stage coding challenges and system architecture reviews.
              </p>

              <div className="space-y-4 pt-2">
                {role.coreProficiencies.map((prof, idx) => (
                  <div
                    key={idx}
                    className="flex items-start gap-3 rounded-2xl border border-border/70 bg-card p-5 shadow-sm"
                  >
                    <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                    <span className="text-sm font-medium text-foreground leading-relaxed">
                      {prof}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Skills & Tools (5 cols) */}
            <div className="lg:col-span-5 space-y-6">
              <Badge variant="subtle" className="text-xs uppercase tracking-wider">
                Tech Stack
              </Badge>
              <h3 className="text-2xl font-bold text-foreground">
                Key Technologies & Tools
              </h3>
              <p className="text-xs text-muted-foreground leading-relaxed">
                Proficient with the modern ecosystem and latest framework updates.
              </p>

              <div className="flex flex-wrap gap-2.5 pt-2">
                {role.skills.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-xl border border-border bg-muted/60 px-4 py-2 text-xs font-bold text-foreground shadow-sm"
                  >
                    {skill}
                  </span>
                ))}
              </div>

              {/* Tangible Sprint Deliverables */}
              <div className="rounded-2xl border border-border bg-muted/30 p-6 space-y-3 mt-6">
                <span className="text-xs font-bold uppercase tracking-wider text-primary block">
                  Weekly Sprint Deliverables:
                </span>
                <ul className="space-y-2">
                  {role.deliverables.map((del, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-xs text-muted-foreground">
                      <span className="text-primary font-bold">•</span>
                      <span>{del}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Engagement Flow (4 steps) */}
      <section className="py-20 border-b border-border/60 bg-muted/20">
        <div className="container mx-auto max-w-5xl">
          <div className="text-center space-y-3 mb-14">
            <Badge variant="subtle" className="text-xs uppercase tracking-wider">
              Onboarding Process
            </Badge>
            <h2 className="text-3xl font-extrabold text-foreground">
              How You Hire & Onboard {role.title}
            </h2>
            <p className="text-sm text-muted-foreground max-w-xl mx-auto">
              From initial technical briefing to active sprint coding in your repository in under 5 business days.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {role.engagementFlow.map((flow) => (
              <div
                key={flow.step}
                className="rounded-2xl border border-border/80 bg-card p-6 shadow-sm flex flex-col justify-between"
              >
                <div>
                  <span className="font-mono text-3xl font-black text-primary block mb-3">
                    0{flow.step}
                  </span>
                  <h3 className="text-base font-bold text-foreground mb-2">
                    {flow.title}
                  </h3>
                  <p className="text-xs text-muted-foreground leading-relaxed">
                    {flow.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. FAQ Accordion */}
      {role.faqs && role.faqs.length > 0 && (
        <section className="py-20 border-b border-border/60 bg-background">
          <div className="container mx-auto">
            <div className="max-w-3xl mx-auto space-y-4 mb-12 text-center">
              <Badge variant="subtle" className="text-xs uppercase tracking-wider">
                Role FAQs
              </Badge>
              <h2 className="text-3xl font-extrabold text-foreground">
                Hiring {role.title}: Common Questions
              </h2>
            </div>

            <div className="max-w-3xl mx-auto rounded-2xl border border-border/80 bg-card p-6 sm:p-8 shadow-sm">
              <Accordion type="single" collapsible className="w-full">
                {role.faqs.map((faq, idx) => (
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

      {/* 5. Final CTA Band */}
      <CtaBandSection />
    </>
  );
};

export default RoleDetailPage;
