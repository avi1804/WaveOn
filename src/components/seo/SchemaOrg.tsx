import React from "react";
import { Helmet } from "react-helmet-async";
import { siteConfig } from "@/config/site";

interface SchemaOrgProps {
  schemaType?: "Organization" | "BreadcrumbList" | "FAQPage" | "Service";
  data?: Record<string, unknown>;
  breadcrumbs?: { name: string; path: string }[];
  faqs?: { question: string; answer: string }[];
}

export const SchemaOrg: React.FC<SchemaOrgProps> = ({
  schemaType = "Organization",
  breadcrumbs,
  faqs,
}) => {
  const schemas: Record<string, unknown>[] = [];

  // Default Organization & Website Schema
  if (schemaType === "Organization") {
    schemas.push({
      "@context": "https://schema.org",
      "@type": "ProfessionalService",
      name: siteConfig.brandName,
      url: siteConfig.siteUrl,
      logo: `${siteConfig.siteUrl}/Logo.png`,
      description: siteConfig.tagline,
      address: {
        "@type": "PostalAddress",
        streetAddress: "One World Trade Center, Suite 8500",
        addressLocality: "New York",
        addressRegion: "NY",
        postalCode: "10007",
        addressCountry: "US",
      },
      telephone: siteConfig.contact.phone,
      email: siteConfig.contact.email,
      openingHours: "Mo-Fr 08:00-20:00",
      sameAs: [
        siteConfig.social.linkedin,
        siteConfig.social.github,
        siteConfig.social.twitter,
        siteConfig.social.dribbble,
      ],
    });
  }

  // Breadcrumbs Schema
  if (breadcrumbs && breadcrumbs.length > 0) {
    schemas.push({
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: breadcrumbs.map((crumb, index) => ({
        "@type": "ListItem",
        position: index + 1,
        name: crumb.name,
        item: `${siteConfig.siteUrl}${crumb.path.startsWith("/") ? crumb.path : `/${crumb.path}`}`,
      })),
    });
  }

  // FAQ Schema
  if (faqs && faqs.length > 0) {
    schemas.push({
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: faqs.map((faq) => ({
        "@type": "Question",
        name: faq.question,
        acceptedAnswer: {
          "@type": "Answer",
          text: faq.answer,
        },
      })),
    });
  }

  return (
    <Helmet>
      {schemas.map((schema, idx) => (
        <script key={idx} type="application/ld+json">
          {JSON.stringify(schema)}
        </script>
      ))}
    </Helmet>
  );
};
