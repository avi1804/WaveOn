import React from "react";
import { SeoHead } from "@/components/seo/SeoHead";
import { Badge } from "@/components/ui/badge";
import { CtaBandSection } from "@/components/sections/CtaBandSection";
import CountUp from "@/components/ui/CountUp";
import {
  ShieldCheck,
  Zap,
  Target,
  HeartHandshake,
} from "lucide-react";
import { siteConfig } from "@/config/site";

export const AboutPage: React.FC = () => {
  const leadership = [
    {
      name: "Marcus Vance",
      role: "Founder & Chief Technology Officer",
      bio: "Former Principal Architect at tier-1 fintech firms. 14+ years designing high-frequency, low-latency distributed systems.",
      initials: "MV",
    },
    {
      name: "Sarah Chen",
      role: "Head of Design & UI/UX",
      bio: "Award-winning product designer specialized in atomic design systems, WCAG 2.2 AA accessibility, and conversion mechanics.",
      initials: "SC",
    },
    {
      name: "Camille Laurent",
      role: "VP of Digital Engineering",
      bio: "10+ years leading cross-functional full-stack engineering squads across North America and Europe.",
      initials: "CL",
    },
  ];

  const values = [
    {
      icon: ShieldCheck,
      title: "Radical Engineering Transparency",
      description:
        "No opaque markups or hand-waving estimates. You get direct access to our Git repositories, daily burndown charts, and honest technical guidance.",
    },
    {
      icon: Zap,
      title: "Sub-Second Performance Standard",
      description:
        "We consider sluggish websites a defect. Every application we ship is profiled against strict Core Web Vitals budgets to ensure instant responsiveness.",
    },
    {
      icon: Target,
      title: "Outcome-Driven Accountability",
      description:
        "We are measured by your business metrics: conversion lifts, transaction volume handled, and reduced operating costs—never lines of code.",
    },
    {
      icon: HeartHandshake,
      title: "100% IP & Client Ownership",
      description:
        "You own everything we build from day one. No proprietary vendor entrapments, no recurring licensing locks.",
    },
  ];

  return (
    <>
      <SeoHead
        title="About WaveOn — Engineering High-Performance Digital Experiences"
        description="Learn about WaveOn's engineering philosophy, senior leadership, core values, and mission to build software that scales."
        canonicalPath="/about"
      />

      {/* Hero Header */}
      <section className="py-16 md:py-24 border-b border-border/60 bg-gradient-to-b from-muted/30 to-background">
        <div className="container mx-auto text-center max-w-3xl space-y-4">
          <Badge variant="subtle" className="text-xs uppercase tracking-wider">
            About {siteConfig.brandName}
          </Badge>
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-foreground">
            We Build Digital Products With Engineering Rigor
          </h1>
          <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
            Founded by senior software engineers who were tired of agency fluff, WaveOn was built to deliver enterprise-grade engineering, transparent pricing, and verifiable business outcomes.
          </p>
        </div>
      </section>

      {/* Mission & Story */}
      <section className="py-20 border-b border-border/60 bg-background">
        <div className="container mx-auto max-w-4xl space-y-8">
          <div className="space-y-4">
            <Badge variant="secondary" className="text-xs uppercase tracking-wider">
              Our Story
            </Badge>
            <h2 className="text-3xl font-extrabold text-foreground">
              Rejecting the Traditional Agency Playbook
            </h2>
            <p className="text-base text-muted-foreground leading-relaxed">
              Traditional digital agencies pitch clients with senior partners, only to quietly hand off execution to junior developers or overseas third parties once the contract is signed. The result? Bloated codebases, missed launch deadlines, and technical debt that costs fortunes to fix.
            </p>
            <p className="text-base text-muted-foreground leading-relaxed">
              WaveOn was founded on a simple principle: <strong>hire only senior engineers</strong>, keep teams small and focused, and maintain complete operational transparency. Today, our distributed teams across North America and Europe build mission-critical web applications for category-leading brands.
            </p>
          </div>

          {/* Key Stats Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 py-8 border-y border-border/60">
            <div>
              <div className="text-3xl sm:text-4xl font-black text-primary">
                <CountUp from={0} to={250} separator="," duration={2} />+
              </div>
              <div className="text-xs text-muted-foreground font-medium mt-1">
                Completed Deployments
              </div>
            </div>
            <div>
              <div className="text-3xl sm:text-4xl font-black text-foreground">
                <CountUp from={0} to={10} duration={2} />+
              </div>
              <div className="text-xs text-muted-foreground font-medium mt-1">
                Years Operating
              </div>
            </div>
            <div>
              <div className="text-3xl sm:text-4xl font-black text-foreground">
                <CountUp from={0} to={98} duration={2} />%
              </div>
              <div className="text-xs text-muted-foreground font-medium mt-1">
                Client Retention
              </div>
            </div>
            <div>
              <div className="text-3xl sm:text-4xl font-black text-primary">0</div>
              <div className="text-xs text-muted-foreground font-medium mt-1">
                Proprietary Vendor Locks
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 border-b border-border/60 bg-muted/20">
        <div className="container mx-auto max-w-5xl">
          <div className="text-center space-y-3 mb-14">
            <Badge variant="subtle" className="text-xs uppercase tracking-wider">
              Guiding Principles
            </Badge>
            <h2 className="text-3xl font-extrabold text-foreground">
              What We Stand For
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {values.map((v) => {
              const Icon = v.icon;
              return (
                <div
                  key={v.title}
                  className="rounded-2xl border border-border/80 bg-card p-8 shadow-sm"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary mb-5">
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-2">
                    {v.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {v.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Leadership */}
      <section className="py-20 border-b border-border/60 bg-background">
        <div className="container mx-auto max-w-5xl">
          <div className="text-center space-y-3 mb-14">
            <Badge variant="subtle" className="text-xs uppercase tracking-wider">
              Engineering Leadership
            </Badge>
            <h2 className="text-3xl font-extrabold text-foreground">
              Led by Practitioners
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {leadership.map((lead) => (
              <div
                key={lead.name}
                className="rounded-2xl border border-border/80 bg-card p-6 shadow-sm flex flex-col justify-between"
              >
                <div>
                  <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/10 text-primary font-black text-xl mb-4">
                    {lead.initials}
                  </div>
                  <h3 className="text-lg font-bold text-foreground mb-1">
                    {lead.name}
                  </h3>
                  <p className="text-xs text-primary font-semibold mb-3">
                    {lead.role}
                  </p>
                  <p className="text-xs text-muted-foreground leading-relaxed">
                    {lead.bio}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA Band */}
      <CtaBandSection />
    </>
  );
};

export default AboutPage;
