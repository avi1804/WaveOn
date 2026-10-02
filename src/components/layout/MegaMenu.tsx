import React from "react";
import { Link } from "react-router-dom";
import { servicesData } from "@/data/services";
import { rolesData } from "@/data/roles";
import { caseStudiesData } from "@/data/caseStudies";
import { ArrowRight, Sparkles, CheckCircle2, ChevronRight, PhoneCall } from "lucide-react";
import { Badge } from "@/components/ui/badge";

interface MegaMenuProps {
  activeMenu: string | null;
  closeMenu: () => void;
}

export const MegaMenu: React.FC<MegaMenuProps> = ({ activeMenu, closeMenu }) => {
  if (!activeMenu) return null;

  const buildServices = servicesData.filter((s) => s.category === "Build");
  const growServices = servicesData.filter((s) => s.category === "Grow");

  const frontEndRoles = rolesData.filter((r) => r.category === "Front End");
  const backEndRoles = rolesData.filter((r) => r.category === "Back End");
  const cmsRoles = rolesData.filter((r) => r.category === "CMS & eCommerce");
  const mobileRoles = rolesData.filter((r) => r.category === "Mobile & Cloud");

  const recentStudies = caseStudiesData.slice(0, 3);
  const industriesList = [
    { name: "Fintech", path: "/case-studies?industry=Fintech" },
    { name: "Healthcare", path: "/case-studies?industry=Healthcare" },
    { name: "eCommerce & Retail", path: "/case-studies?industry=eCommerce+%26+Retail" },
    { name: "SaaS & Tech", path: "/case-studies?industry=SaaS+%26+Tech" },
    { name: "Education", path: "/case-studies?industry=Education+%26+EdTech" },
  ];

  return (
    <div
      className="absolute left-0 right-0 top-full w-full border-b border-border bg-[#FBFCEE] dark:bg-card shadow-2xl transition-all duration-200 z-50"
      onMouseLeave={closeMenu}
    >
      <div className="container mx-auto py-8">
        {/* Services Mega Menu */}
        {activeMenu === "Services" && (
          <div className="grid grid-cols-12 gap-8">
            {/* Build Column */}
            <div className="col-span-4 border-r border-border/60 pr-6">
              <div className="mb-4 flex items-center justify-between">
                <span className="text-xs font-bold uppercase tracking-wider text-primary">
                  Build · Engineering
                </span>
                <span className="text-xs text-muted-foreground">6 Core Services</span>
              </div>
              <ul className="space-y-2">
                {buildServices.map((service) => (
                  <li key={service.id}>
                    <Link
                      to={`/services/${service.slug}`}
                      onClick={closeMenu}
                      className="group flex flex-col rounded-lg p-2.5 transition-colors hover:bg-muted/70"
                    >
                      <span className="text-sm font-semibold text-foreground group-hover:text-primary transition-colors flex items-center gap-1.5">
                        {service.title}
                        <ChevronRight className="h-3.5 w-3.5 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all text-primary" />
                      </span>
                      <span className="text-xs text-muted-foreground line-clamp-1">
                        {service.shortDescription}
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Grow Column */}
            <div className="col-span-4 border-r border-border/60 pr-6">
              <div className="mb-4 flex items-center justify-between">
                <span className="text-xs font-bold uppercase tracking-wider text-emerald-600">
                  Grow · Optimization
                </span>
                <span className="text-xs text-muted-foreground">3 Growth Services</span>
              </div>
              <ul className="space-y-2 mb-6">
                {growServices.map((service) => (
                  <li key={service.id}>
                    <Link
                      to={`/services/${service.slug}`}
                      onClick={closeMenu}
                      className="group flex flex-col rounded-lg p-2.5 transition-colors hover:bg-muted/70"
                    >
                      <span className="text-sm font-semibold text-foreground group-hover:text-primary transition-colors flex items-center gap-1.5">
                        {service.title}
                        <ChevronRight className="h-3.5 w-3.5 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all text-primary" />
                      </span>
                      <span className="text-xs text-muted-foreground line-clamp-1">
                        {service.shortDescription}
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>

              <div className="rounded-lg bg-muted/50 p-4 border border-border/70">
                <h4 className="text-xs font-bold uppercase text-foreground mb-2">Explore Next</h4>
                <div className="flex flex-col space-y-2 text-xs">
                  <Link to="/services" onClick={closeMenu} className="text-muted-foreground hover:text-primary transition-colors flex items-center justify-between">
                    <span>View All Services Directory</span>
                    <ArrowRight className="h-3 w-3" />
                  </Link>
                  <Link to="/process" onClick={closeMenu} className="text-muted-foreground hover:text-primary transition-colors flex items-center justify-between">
                    <span>Our 6-Stage Delivery Process</span>
                    <ArrowRight className="h-3 w-3" />
                  </Link>
                  <Link to="/pricing" onClick={closeMenu} className="text-muted-foreground hover:text-primary transition-colors flex items-center justify-between">
                    <span>Pricing & Engagement Models</span>
                    <ArrowRight className="h-3 w-3" />
                  </Link>
                </div>
              </div>
            </div>

            {/* Explore & Scoping CTA Card */}
            <div className="col-span-4 flex flex-col justify-between">
              <div className="rounded-xl border border-primary/20 bg-gradient-to-br from-primary/10 via-background to-primary/5 p-6 shadow-sm">
                <div className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-primary text-primary-foreground mb-4 shadow-sm shadow-primary/30">
                  <PhoneCall className="h-4 w-4" />
                </div>
                <h4 className="text-base font-bold text-foreground mb-1.5">
                  Not sure where to start?
                </h4>
                <p className="text-xs text-muted-foreground leading-relaxed mb-4">
                  Book a free 30-minute scoping session with our senior solutions architect. We’ll review your goals, recommend the right stack, and give you an honest ballpark estimate.
                </p>
                <div className="space-y-2 mb-5">
                  <div className="flex items-center gap-2 text-xs text-foreground/80">
                    <CheckCircle2 className="h-3.5 w-3.5 text-primary" />
                    <span>No obligation or sales pressure</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-foreground/80">
                    <CheckCircle2 className="h-3.5 w-3.5 text-primary" />
                    <span>Actionable technical roadmap</span>
                  </div>
                </div>
                <Link
                  to="/contact"
                  onClick={closeMenu}
                  className="inline-flex w-full items-center justify-center gap-2 rounded-lg bg-primary px-4 py-2.5 text-xs font-semibold text-primary-foreground hover:bg-primary-hover shadow-sm transition-all"
                >
                  <span>Book Free Scoping Call</span>
                  <ArrowRight className="h-3.5 w-3.5" />
                </Link>
              </div>

              <div className="pt-4 flex items-center justify-between text-xs text-muted-foreground border-t border-border/50">
                <span>Direct inquiry:</span>
                <a href="mailto:hello@waveon.agency" className="font-semibold text-primary hover:underline">
                  hello@waveon.agency
                </a>
              </div>
            </div>
          </div>
        )}

        {/* Hire Developers Mega Menu */}
        {activeMenu === "Hire Developers" && (
          <div>
            <div className="grid grid-cols-4 gap-6 mb-6">
              {/* Front End */}
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-primary block mb-3">
                  Front End
                </span>
                <ul className="space-y-1.5">
                  {frontEndRoles.map((role) => (
                    <li key={role.id}>
                      <Link
                        to={`/hire-developers/${role.slug}`}
                        onClick={closeMenu}
                        className="group flex items-center justify-between rounded-lg p-2 hover:bg-muted/70 transition-colors"
                      >
                        <span className="text-sm font-medium text-foreground group-hover:text-primary transition-colors">
                          {role.title}
                        </span>
                        <Badge variant="subtle" className="text-[11px] py-0 px-2 font-mono">
                          {role.hourlyRate.split("–")[0].trim()}/hr
                        </Badge>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Back End */}
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-primary block mb-3">
                  Back End
                </span>
                <ul className="space-y-1.5">
                  {backEndRoles.map((role) => (
                    <li key={role.id}>
                      <Link
                        to={`/hire-developers/${role.slug}`}
                        onClick={closeMenu}
                        className="group flex items-center justify-between rounded-lg p-2 hover:bg-muted/70 transition-colors"
                      >
                        <span className="text-sm font-medium text-foreground group-hover:text-primary transition-colors">
                          {role.title}
                        </span>
                        <Badge variant="subtle" className="text-[11px] py-0 px-2 font-mono">
                          {role.hourlyRate.split("–")[0].trim()}/hr
                        </Badge>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* CMS & eCommerce */}
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-primary block mb-3">
                  CMS & eCommerce
                </span>
                <ul className="space-y-1.5">
                  {cmsRoles.map((role) => (
                    <li key={role.id}>
                      <Link
                        to={`/hire-developers/${role.slug}`}
                        onClick={closeMenu}
                        className="group flex items-center justify-between rounded-lg p-2 hover:bg-muted/70 transition-colors"
                      >
                        <span className="text-sm font-medium text-foreground group-hover:text-primary transition-colors">
                          {role.title}
                        </span>
                        <Badge variant="subtle" className="text-[11px] py-0 px-2 font-mono">
                          {role.hourlyRate.split("–")[0].trim()}/hr
                        </Badge>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Mobile & Cloud */}
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-primary block mb-3">
                  Mobile & Cloud
                </span>
                <ul className="space-y-1.5">
                  {mobileRoles.map((role) => (
                    <li key={role.id}>
                      <Link
                        to={`/hire-developers/${role.slug}`}
                        onClick={closeMenu}
                        className="group flex items-center justify-between rounded-lg p-2 hover:bg-muted/70 transition-colors"
                      >
                        <span className="text-sm font-medium text-foreground group-hover:text-primary transition-colors">
                          {role.title}
                        </span>
                        <Badge variant="subtle" className="text-[11px] py-0 px-2 font-mono">
                          {role.hourlyRate.split("–")[0].trim()}/hr
                        </Badge>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Note Strip */}
            <div className="rounded-lg bg-primary/5 border border-primary/20 p-3.5 flex items-center justify-between text-xs">
              <div className="flex items-center gap-6">
                <span className="font-semibold text-foreground flex items-center gap-1.5">
                  <Sparkles className="h-4 w-4 text-primary" />
                  Pre-Vetted Senior Engineers Only
                </span>
                <span className="text-muted-foreground">· 2-Week Risk-Free Trial Period</span>
                <span className="text-muted-foreground">· Minimum 4h Overlap With Your Timezone</span>
              </div>
              <Link
                to="/hire-developers"
                onClick={closeMenu}
                className="font-semibold text-primary hover:underline flex items-center gap-1"
              >
                <span>View All Developer Roles & Rates</span>
                <ArrowRight className="h-3.5 w-3.5" />
              </Link>
            </div>
          </div>
        )}

        {/* Case Studies Mega Menu */}
        {activeMenu === "Case Studies" && (
          <div className="grid grid-cols-12 gap-8">
            <div className="col-span-8 border-r border-border/60 pr-6">
              <div className="mb-4 flex items-center justify-between">
                <span className="text-xs font-bold uppercase tracking-wider text-primary">
                  Recent Work & Impact
                </span>
                <Link to="/case-studies" onClick={closeMenu} className="text-xs font-semibold text-primary hover:underline flex items-center gap-1">
                  <span>Browse All 8 Case Studies</span>
                  <ArrowRight className="h-3 w-3" />
                </Link>
              </div>
              <div className="grid grid-cols-3 gap-4">
                {recentStudies.map((study) => (
                  <Link
                    key={study.id}
                    to={`/case-studies/${study.slug}`}
                    onClick={closeMenu}
                    className="group rounded-xl border border-border/70 bg-card p-4 hover:border-primary/40 hover:shadow-md transition-all flex flex-col justify-between"
                  >
                    <div>
                      <div className="flex items-center justify-between mb-2">
                        <Badge variant="subtle" className="text-[10px]">
                          {study.industry}
                        </Badge>
                      </div>
                      <h4 className="text-xs font-bold text-foreground group-hover:text-primary transition-colors line-clamp-2 mb-2">
                        {study.title}
                      </h4>
                      <p className="text-[11px] text-muted-foreground line-clamp-2 mb-3">
                        {study.summary}
                      </p>
                    </div>
                    <div className="pt-2 border-t border-border/50 flex items-center justify-between text-[11px]">
                      <span className="font-bold text-primary">{study.stats[0].value}</span>
                      <span className="text-muted-foreground">{study.stats[0].label}</span>
                    </div>
                  </Link>
                ))}
              </div>
            </div>

            <div className="col-span-4">
              <span className="text-xs font-bold uppercase tracking-wider text-muted-foreground block mb-4">
                Filter Work By Industry
              </span>
              <ul className="space-y-2 mb-6">
                {industriesList.map((ind) => (
                  <li key={ind.name}>
                    <Link
                      to={ind.path}
                      onClick={closeMenu}
                      className="flex items-center justify-between p-2 rounded-lg text-sm font-medium text-foreground hover:bg-muted/70 hover:text-primary transition-colors"
                    >
                      <span>{ind.name}</span>
                      <ArrowRight className="h-3.5 w-3.5 text-muted-foreground" />
                    </Link>
                  </li>
                ))}
              </ul>
              <Link
                to="/case-studies"
                onClick={closeMenu}
                className="inline-flex w-full items-center justify-center gap-2 rounded-lg border border-border bg-background px-4 py-2.5 text-xs font-semibold text-foreground hover:bg-muted transition-all"
              >
                <span>View Full Client Portfolio</span>
                <ArrowRight className="h-3 w-3" />
              </Link>
            </div>
          </div>
        )}

        {/* Company & Insights Mega Menu (Consolidated: Process, Pricing, Industries, About, Insights) */}
        {activeMenu === "Company" && (
          <div className="grid grid-cols-12 gap-8">
            <div className="col-span-7 grid grid-cols-2 gap-4 border-r border-border/60 pr-6">
              {/* Process */}
              <Link
                to="/process"
                onClick={closeMenu}
                className="group rounded-2xl p-4 border border-border/60 bg-card/60 hover:bg-card hover:border-primary/40 hover:shadow-sm transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <div className="h-8 w-8 rounded-xl bg-primary/10 text-primary flex items-center justify-center font-bold text-xs">
                      01
                    </div>
                    <Badge variant="subtle" className="text-[10px] font-medium">
                      6-Stage Framework
                    </Badge>
                  </div>
                  <h4 className="text-sm font-bold text-foreground group-hover:text-primary transition-colors mb-1">
                    Our Process
                  </h4>
                  <p className="text-xs text-muted-foreground leading-relaxed">
                    Discovery, architecture, sprint execution, QA, launch, and SLA maintenance.
                  </p>
                </div>
                <span className="text-[11px] font-semibold text-primary flex items-center gap-1 mt-3 group-hover:translate-x-1 transition-transform">
                  <span>Explore Process</span>
                  <ArrowRight className="h-3 w-3" />
                </span>
              </Link>

              {/* Pricing */}
              <Link
                to="/pricing"
                onClick={closeMenu}
                className="group rounded-2xl p-4 border border-border/60 bg-card/60 hover:bg-card hover:border-primary/40 hover:shadow-sm transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <div className="h-8 w-8 rounded-xl bg-primary/10 text-primary flex items-center justify-center font-bold text-xs">
                      02
                    </div>
                    <Badge variant="subtle" className="text-[10px] font-medium">
                      Transparent
                    </Badge>
                  </div>
                  <h4 className="text-sm font-bold text-foreground group-hover:text-primary transition-colors mb-1">
                    Pricing & Models
                  </h4>
                  <p className="text-xs text-muted-foreground leading-relaxed">
                    Fixed-price projects, dedicated teams, hourly sprints, and SLA retainer tiers.
                  </p>
                </div>
                <span className="text-[11px] font-semibold text-primary flex items-center gap-1 mt-3 group-hover:translate-x-1 transition-transform">
                  <span>View Rates & Plans</span>
                  <ArrowRight className="h-3 w-3" />
                </span>
              </Link>

              {/* Industries */}
              <Link
                to="/industries"
                onClick={closeMenu}
                className="group rounded-2xl p-4 border border-border/60 bg-card/60 hover:bg-card hover:border-primary/40 hover:shadow-sm transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <div className="h-8 w-8 rounded-xl bg-primary/10 text-primary flex items-center justify-center font-bold text-xs">
                      03
                    </div>
                    <Badge variant="subtle" className="text-[10px] font-medium">
                      8+ Sectors
                    </Badge>
                  </div>
                  <h4 className="text-sm font-bold text-foreground group-hover:text-primary transition-colors mb-1">
                    Industries We Serve
                  </h4>
                  <p className="text-xs text-muted-foreground leading-relaxed">
                    Tailored engineering for Fintech, Healthcare, eCommerce, SaaS, and EdTech.
                  </p>
                </div>
                <span className="text-[11px] font-semibold text-primary flex items-center gap-1 mt-3 group-hover:translate-x-1 transition-transform">
                  <span>Explore Sectors</span>
                  <ArrowRight className="h-3 w-3" />
                </span>
              </Link>

              {/* About Us */}
              <Link
                to="/about"
                onClick={closeMenu}
                className="group rounded-2xl p-4 border border-border/60 bg-card/60 hover:bg-card hover:border-primary/40 hover:shadow-sm transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <div className="h-8 w-8 rounded-xl bg-primary/10 text-primary flex items-center justify-center font-bold text-xs">
                      04
                    </div>
                    <Badge variant="subtle" className="text-[10px] font-medium">
                      Our Story
                    </Badge>
                  </div>
                  <h4 className="text-sm font-bold text-foreground group-hover:text-primary transition-colors mb-1">
                    About WaveOn
                  </h4>
                  <p className="text-xs text-muted-foreground leading-relaxed">
                    Our engineering philosophy, senior leadership, core values, and trajectory.
                  </p>
                </div>
                <span className="text-[11px] font-semibold text-primary flex items-center gap-1 mt-3 group-hover:translate-x-1 transition-transform">
                  <span>Learn About Us</span>
                  <ArrowRight className="h-3 w-3" />
                </span>
              </Link>
            </div>

            {/* Right Column: Featured Insights */}
            <div className="col-span-5 flex flex-col justify-between">
              <div className="rounded-2xl border border-primary/20 bg-gradient-to-br from-primary/5 via-background to-primary/10 p-5 shadow-sm">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-primary flex items-center gap-1.5">
                    <Sparkles className="h-3.5 w-3.5" />
                    Featured Insight
                  </span>
                  <Badge variant="vanilla" className="text-[10px]">
                    Article
                  </Badge>
                </div>
                <Link
                  to="/blog/modern-web-development-trends-2025"
                  onClick={closeMenu}
                  className="group block"
                >
                  <h4 className="text-sm font-bold text-foreground group-hover:text-primary transition-colors mb-1.5">
                    Modern Web Development Trends in 2025
                  </h4>
                  <p className="text-xs text-muted-foreground leading-relaxed mb-3">
                    From React Server Components to edge compute: what CTOs and engineering directors need to know to future-proof their stack.
                  </p>
                  <span className="text-xs font-semibold text-primary flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                    <span>Read Full Article</span>
                    <ArrowRight className="h-3.5 w-3.5" />
                  </span>
                </Link>
              </div>

              <div className="pt-4 border-t border-border/60 flex items-center justify-between text-xs">
                <Link to="/contact" onClick={closeMenu} className="font-semibold text-muted-foreground hover:text-foreground">
                  Need custom scoping?
                </Link>
                <Link to="/blog" onClick={closeMenu} className="font-bold text-primary hover:underline flex items-center gap-1">
                  <span>View All Insights & Blog</span>
                  <ArrowRight className="h-3 w-3" />
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
