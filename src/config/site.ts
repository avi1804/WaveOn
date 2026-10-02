import { SiteConfig } from "@/types";

export const siteConfig: SiteConfig = {
  brandName: "WaveOn",
  tagline: "Engineering High-Performance Digital Experiences",
  siteUrl: "https://waveon.agency",
  contact: {
    email: "hello@waveon.agency",
    phone: "+1 (800) 849-2830",
    whatsappNumber: "+18008492830",
    whatsappLink: "https://wa.me/18008492830?text=Hi%20WaveOn%20team,%20I%20would%20like%20to%20discuss%20a%20project.",
    address: "One World Trade Center, Suite 8500, New York, NY 10007",
    workingHours: "Monday – Friday: 8:00 AM – 8:00 PM EST",
  },
  social: {
    linkedin: "https://linkedin.com/company/waveon-digital",
    github: "https://github.com/waveon-digital",
    twitter: "https://twitter.com/waveonagency",
    dribbble: "https://dribbble.com/waveon",
  },
};

export const navigationLinks = [
  { name: "Services", href: "/services", hasMega: true },
  { name: "Hire Developers", href: "/hire-developers", hasMega: true },
  { name: "Case Studies", href: "/case-studies", hasMega: true },
  { name: "Process", href: "/process", hasMega: false },
  { name: "Pricing", href: "/pricing", hasMega: false },
  { name: "Industries", href: "/industries", hasMega: false },
  { name: "Company", href: "/about", hasMega: true },
  { name: "Insights", href: "/blog", hasMega: false },
  { name: "Contact", href: "/contact", hasMega: false },
];
