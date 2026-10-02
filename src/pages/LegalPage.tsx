import React from "react";
import { useLocation } from "react-router-dom";
import { SeoHead } from "@/components/seo/SeoHead";
import { Badge } from "@/components/ui/badge";
import { siteConfig } from "@/config/site";

interface LegalContent {
  title: string;
  lastUpdated: string;
  badge: string;
  sections: { heading: string; paragraphs: string[] }[];
}

const legalContents: Record<string, LegalContent> = {
  "/privacy-policy": {
    title: "Privacy Policy",
    lastUpdated: "January 15, 2025",
    badge: "Data Protection",
    sections: [
      {
        heading: "1. Information We Collect",
        paragraphs: [
          `At ${siteConfig.brandName}, we prioritize user privacy. When you request a quote, book a scoping call, or communicate with our engineering teams, we collect contact information such as your name, corporate email address, company name, and project specifications.`,
          "We do not sell, rent, or trade your personal data with third-party data brokers. All information provided is utilized strictly for technical evaluation, client communication, and service fulfillment.",
        ],
      },
      {
        heading: "2. How We Use Your Information",
        paragraphs: [
          "The information we collect is used to evaluate technical scope, prepare customized proposals, schedule consultation calls, and manage engineering sprint communications.",
          "We may periodically send technical updates, architectural whitepapers, or service announcements to active clients, who may opt out at any time.",
        ],
      },
      {
        heading: "3. Data Security & Storage",
        paragraphs: [
          "We implement enterprise-grade technical and organizational security controls to protect client information against unauthorized access, loss, or alteration. All electronic communications and project records are encrypted in transit using TLS 1.3.",
        ],
      },
      {
        heading: "4. Your Privacy Rights",
        paragraphs: [
          `You have the right to request access to, correction of, or deletion of your personal data held by ${siteConfig.brandName}. To exercise these rights, please contact our privacy compliance team at ${siteConfig.contact.email}.`,
        ],
      },
    ],
  },
  "/terms-of-service": {
    title: "Terms of Service",
    lastUpdated: "January 15, 2025",
    badge: "Service Agreement",
    sections: [
      {
        heading: "1. Agreement to Terms",
        paragraphs: [
          `By accessing our website or engaging ${siteConfig.brandName} for software engineering, design, or marketing services, you agree to be bound by these Terms of Service and all applicable laws and regulations.`,
        ],
      },
      {
        heading: "2. Intellectual Property & Code Ownership",
        paragraphs: [
          "Unless otherwise agreed upon in a custom Statement of Work (SOW), upon full settlement of project milestone invoices, all custom source code, documentation, and design assets engineered specifically for the client are transferred to the exclusive ownership of the client.",
          "WaveOn retains ownership of pre-existing proprietary frameworks, boilerplates, and open-source libraries incorporated into deliverables under standard MIT/Apache licenses.",
        ],
      },
      {
        heading: "3. Scope of Services & Warranty",
        paragraphs: [
          "Services are delivered in accordance with agreed-upon milestone schedules. We provide a 30-day post-launch warranty period for custom builds, during which any reproducible defects deviating from approved specifications are remediated at no additional charge.",
        ],
      },
      {
        heading: "4. Limitation of Liability",
        paragraphs: [
          `${siteConfig.brandName} shall not be liable for any indirect, incidental, or consequential damages resulting from downtime, third-party hosting failures, or external API disruptions beyond our direct control.`,
        ],
      },
    ],
  },
  "/accessibility": {
    title: "Accessibility Statement",
    lastUpdated: "January 15, 2025",
    badge: "WCAG 2.2 AA Standards",
    sections: [
      {
        heading: "1. Our Commitment to Digital Accessibility",
        paragraphs: [
          `${siteConfig.brandName} is committed to ensuring that our digital experiences are accessible to all users, regardless of disability or assistive technology. We actively conform to the Web Content Accessibility Guidelines (WCAG) 2.2 Level AA.`,
        ],
      },
      {
        heading: "2. Accessibility Measures Implemented",
        paragraphs: [
          "Our web platform includes keyboard navigation support, visible focus rings with high contrast, semantic HTML5 landmarks, programmatically associated form labels, text zoom support up to 200%, and screen-reader live regions for dynamic alerts.",
          "We test color pairings rigorously to guarantee a minimum contrast ratio of 4.5:1 for body copy and 3:1 for graphical user interface controls and focus states.",
        ],
      },
      {
        heading: "3. Feedback and Assistance",
        paragraphs: [
          `If you encounter any accessibility barriers on our website, please email us directly at ${siteConfig.contact.email} or call ${siteConfig.contact.phone}. We take feedback seriously and address accessibility remediations with top priority.`,
        ],
      },
    ],
  },
};

export const LegalPage: React.FC = () => {
  const { pathname } = useLocation();
  const content = legalContents[pathname] || legalContents["/privacy-policy"];

  return (
    <>
      <SeoHead
        title={`${content.title} — ${siteConfig.brandName}`}
        description={`Read ${siteConfig.brandName}'s ${content.title}. Last updated ${content.lastUpdated}.`}
        canonicalPath={pathname}
      />

      <section className="py-16 md:py-24 border-b border-border/60 bg-gradient-to-b from-muted/30 to-background">
        <div className="container mx-auto text-center max-w-3xl space-y-4">
          <Badge variant="subtle" className="text-xs uppercase tracking-wider">
            {content.badge}
          </Badge>
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-foreground">
            {content.title}
          </h1>
          <p className="text-xs text-muted-foreground font-mono">
            Last Updated: {content.lastUpdated}
          </p>
        </div>
      </section>

      <section className="py-16 lg:py-20 border-b border-border/60 bg-background">
        <div className="container mx-auto max-w-3xl space-y-10">
          {content.sections.map((section, idx) => (
            <div key={idx} className="space-y-3">
              <h2 className="text-xl font-bold text-foreground">
                {section.heading}
              </h2>
              {section.paragraphs.map((p, pIdx) => (
                <p
                  key={pIdx}
                  className="text-sm sm:text-base text-muted-foreground leading-relaxed"
                >
                  {p}
                </p>
              ))}
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default LegalPage;
