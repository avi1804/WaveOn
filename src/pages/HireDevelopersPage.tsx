import React, { useState } from "react";
import { Link } from "react-router-dom";
import { rolesData } from "@/data/roles";
import { SeoHead } from "@/components/seo/SeoHead";
import { Badge } from "@/components/ui/badge";
import { CtaBandSection } from "@/components/sections/CtaBandSection";
import {
  ArrowRight,
  ShieldCheck,
  Clock,
  UserCheck,
} from "lucide-react";

export const HireDevelopersPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");

  const categories = [
    "All",
    "Front End",
    "Back End",
    "CMS & eCommerce",
    "Mobile & Cloud",
  ];

  const filteredRoles =
    selectedCategory === "All"
      ? rolesData
      : rolesData.filter((r) => r.category === selectedCategory);

  return (
    <>
      <SeoHead
        title="Hire Senior Remote Developers — Transparent Hourly Rates"
        description="Hire pre-vetted senior software engineers in React, Next.js, Node.js, Python, Laravel, Flutter, Shopify, and WordPress. 14-day risk-free trial."
        canonicalPath="/hire-developers"
      />

      {/* Hero Header */}
      <section className="py-16 md:py-24 border-b border-border/60 bg-gradient-to-b from-muted/30 to-background">
        <div className="container mx-auto text-center max-w-3xl space-y-4">
          <Badge variant="subtle" className="text-xs uppercase tracking-wider">
            Staff Augmentation & Dedicated Squads
          </Badge>
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-foreground">
            Hire Pre-Vetted Senior Developers in 48 Hours
          </h1>
          <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
            Skip months of recruiting overhead. Onboard dedicated senior engineers with verified GitHub histories, guaranteed timezone alignment, and a 14-day risk-free evaluation guarantee.
          </p>

          <div className="pt-4 flex flex-wrap items-center justify-center gap-6 text-xs text-muted-foreground font-medium">
            <div className="flex items-center gap-1.5">
              <UserCheck className="h-4 w-4 text-primary" />
              <span>Top 3% Vetted Talent</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Clock className="h-4 w-4 text-primary" />
              <span>Minimum 4h Timezone Overlap</span>
            </div>
            <div className="flex items-center gap-1.5">
              <ShieldCheck className="h-4 w-4 text-primary" />
              <span>14-Day Risk-Free Trial</span>
            </div>
          </div>
        </div>
      </section>

      {/* Roles Listing with Category Filters */}
      <section className="py-16 lg:py-20 border-b border-border/60 bg-background">
        <div className="container mx-auto">
          {/* Category Filter Pills */}
          <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
            {categories.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setSelectedCategory(cat)}
                className={`rounded-full px-5 py-2 text-xs font-semibold transition-all ${
                  selectedCategory === cat
                    ? "bg-primary text-primary-foreground shadow-sm shadow-primary/25"
                    : "bg-muted/70 text-foreground/80 hover:bg-muted"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* 12 Roles Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {filteredRoles.map((role) => (
              <div
                key={role.id}
                className="group relative flex flex-col justify-between rounded-2xl border border-border/80 bg-card p-7 shadow-sm hover:border-primary/50 hover:shadow-xl transition-all duration-300 flex-grow"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <Badge variant="secondary" className="text-xs font-semibold">
                      {role.category}
                    </Badge>
                    <div className="font-mono text-sm font-extrabold text-primary bg-primary/10 px-2.5 py-1 rounded-md">
                      {role.hourlyRate}
                    </div>
                  </div>

                  <h2 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors mb-2">
                    {role.title}
                  </h2>

                  <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed mb-5">
                    {role.shortSummary}
                  </p>

                  <div className="space-y-1.5 mb-6 border-t border-border/50 pt-4">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-muted-foreground block mb-2">
                      Core Skills:
                    </span>
                    <div className="flex flex-wrap gap-1.5">
                      {role.skills.slice(0, 4).map((skill) => (
                        <span
                          key={skill}
                          className="rounded-md bg-muted px-2 py-0.5 text-[11px] font-medium text-foreground/80"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="pt-4 border-t border-border/60 flex items-center justify-between">
                  <Link
                    to={`/hire-developers/${role.slug}`}
                    className="inline-flex w-full items-center justify-between rounded-lg bg-muted/60 px-4 py-2.5 text-xs font-semibold text-foreground hover:bg-primary hover:text-primary-foreground transition-all"
                  >
                    <span>View Role & Engagement Details</span>
                    <ArrowRight className="h-3.5 w-3.5" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How Hiring Works (4-Step Flow) */}
      <section className="py-20 border-b border-border/60 bg-muted/20">
        <div className="container mx-auto max-w-5xl">
          <div className="text-center space-y-3 mb-14">
            <Badge variant="subtle" className="text-xs uppercase tracking-wider">
              Staffing Workflow
            </Badge>
            <h2 className="text-3xl font-extrabold text-foreground">
              How Hiring Works: From Request to Active Sprinting
            </h2>
            <p className="text-sm sm:text-base text-muted-foreground max-w-2xl mx-auto">
              Our 4-step matching pipeline connects your engineering leads directly with senior, vetted developers.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="rounded-2xl border border-border/80 bg-card p-6 shadow-sm">
              <span className="font-mono text-3xl font-black text-primary block mb-3">
                01
              </span>
              <h3 className="text-base font-bold text-foreground mb-2">
                Specify Stack
              </h3>
              <p className="text-xs text-muted-foreground leading-relaxed">
                Tell us your technology stack, seniority requirements, and project milestones.
              </p>
            </div>

            <div className="rounded-2xl border border-border/80 bg-card p-6 shadow-sm">
              <span className="font-mono text-3xl font-black text-primary block mb-3">
                02
              </span>
              <h3 className="text-base font-bold text-foreground mb-2">
                Hand-Pick Vetted Talent
              </h3>
              <p className="text-xs text-muted-foreground leading-relaxed">
                Receive 2–3 pre-screened senior profiles matching your exact criteria within 48 hours.
              </p>
            </div>

            <div className="rounded-2xl border border-border/80 bg-card p-6 shadow-sm">
              <span className="font-mono text-3xl font-black text-primary block mb-3">
                03
              </span>
              <h3 className="text-base font-bold text-foreground mb-2">
                Technical Interview
              </h3>
              <p className="text-xs text-muted-foreground leading-relaxed">
                Meet candidates 1-on-1 for a live system design or technical review with your leads.
              </p>
            </div>

            <div className="rounded-2xl border border-border/80 bg-card p-6 shadow-sm">
              <span className="font-mono text-3xl font-black text-primary block mb-3">
                04
              </span>
              <h3 className="text-base font-bold text-foreground mb-2">
                2-Week Trial Period
              </h3>
              <p className="text-xs text-muted-foreground leading-relaxed">
                Start coding immediately with our 14-day zero-risk satisfaction guarantee.
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

export default HireDevelopersPage;
