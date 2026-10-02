import { PricingModel } from "@/types";

export const pricingModelsData: PricingModel[] = [
  {
    id: "fixed-price",
    title: "Fixed Price Project",
    badge: "Well-Defined Scope",
    tagline: "Predictable investment for projects with clear specifications and defined deliverables.",
    rateDescription: "Starting from $12,500",
    idealFor: "MVPs, full website redesigns, eCommerce store launches, and well-scoped standalone applications.",
    features: [
      "100% guaranteed delivery on agreed scope and budget",
      "Fixed milestone payments tied directly to tangible deliverables",
      "Comprehensive Discovery & Architecture phase included",
      "Strict change-order management for budget transparency",
      "30-day post-launch warranty with priority bug fixing",
      "Full IP and 100% source code ownership transfer"
    ],
    notIncluded: [
      "Unbounded scope adjustments without change orders"
    ],
    billingCadence: "Milestone-Based (30% deposit, 40% beta, 30% launch)",
    popular: false
  },
  {
    id: "dedicated-team",
    title: "Dedicated Engineering Team",
    badge: "Most Popular",
    tagline: "A pre-vetted senior development squad dedicated exclusively to your product roadmap.",
    rateDescription: "From $6,500 / month per engineer",
    idealFor: "Funded startups, scale-ups, and enterprise teams needing fast velocity and flexible ongoing development.",
    features: [
      "Full-time (160 hrs/mo) or part-time (80 hrs/mo) senior engineers",
      "Direct integration into your Slack, Jira, GitHub, and daily standups",
      "Guaranteed 4+ hours of live timezone overlap with US / Europe",
      "Seamless scaling: add or swap engineering roles with 2 weeks notice",
      "14-day risk-free evaluation period on all engineers",
      "Technical lead and QA support included in team engagements"
    ],
    billingCadence: "Monthly Retainer (No long-term lock-in)",
    popular: true
  },
  {
    id: "time-and-materials",
    title: "Time & Materials (Hourly Sprints)",
    badge: "Maximum Flexibility",
    tagline: "Pay only for the exact hours worked. Ideal for evolving requirements and dynamic roadmaps.",
    rateDescription: "$45 – $85 / hour",
    idealFor: "Feature backlogs, technical audits, rapid prototyping, and systems requiring dynamic experimentation.",
    features: [
      "Bi-weekly sprint planning with transparent itemized time logs",
      "Zero commitments beyond the active two-week sprint",
      "Pay strictly for validated hours recorded in Clockify / Harvest",
      "Direct access to specialized talent (React, Node, Python, Cloud)",
      "Daily asynchronous updates and weekly working software demos",
      "Instant pause or scale up capability"
    ],
    billingCadence: "Bi-Weekly Invoicing (Net 14)",
    popular: false
  },
  {
    id: "maintenance-retainer",
    title: "Continuous Maintenance Retainer",
    badge: "Proactive Security & Care",
    tagline: "Peace of mind: 24/7 uptime monitoring, security updates, and dedicated monthly development hours.",
    rateDescription: "From $1,800 / month",
    idealFor: "Live web apps, high-traffic eCommerce stores, and corporate websites needing bulletproof reliability.",
    features: [
      "24/7 automated uptime, latency, and error monitoring (Sentry)",
      "Monthly core framework, library, and security patch updates",
      "Automated off-site database backups with regular restore testing",
      "15 to 40 dedicated developer hours included for ongoing tasks",
      "1-hour critical emergency response SLA (Severity 1)",
      "Monthly performance and Core Web Vitals health audits"
    ],
    billingCadence: "Monthly Subscription (Rollover unused hours)",
    popular: false
  }
];
