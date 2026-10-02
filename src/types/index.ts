export interface ServiceItem {
  id: string;
  slug: string;
  category: 'Build' | 'Grow';
  title: string;
  shortDescription: string;
  longDescription: string;
  heroTagline: string;
  icon: string;
  deliverables: string[];
  features: {
    title: string;
    description: string;
  }[];
  approach: {
    step: string;
    title: string;
    description: string;
  }[];
  technologies: string[];
  relatedCaseStudySlug: string;
  faqs: {
    question: string;
    answer: string;
  }[];
}

export interface DeveloperRole {
  id: string;
  slug: string;
  title: string;
  category: 'Front End' | 'Back End' | 'CMS & eCommerce' | 'Mobile & Cloud';
  hourlyRate: string; // e.g. "$45 - $75/hr"
  shortSummary: string;
  fullOverview: string;
  experienceLevel: string;
  skills: string[];
  coreProficiencies: string[];
  deliverables: string[];
  engagementFlow: {
    step: number;
    title: string;
    description: string;
  }[];
  faqs: {
    question: string;
    answer: string;
  }[];
}

export interface CaseStudy {
  id: string;
  slug: string;
  client: string;
  industry: string;
  title: string;
  summary: string;
  challenge: string;
  solution: string;
  architectureDetails: string[];
  stats: [
    { label: string; value: string },
    { label: string; value: string }
  ];
  technologies: string[];
  testimonial: {
    quote: string;
    author: string;
    role: string;
    company: string;
  };
  mockupType: 'web' | 'mobile' | 'dashboard' | 'ecommerce';
  featured: boolean;
  nextCaseStudySlug: string;
}

export interface ProcessStage {
  number: string;
  title: string;
  subtitle: string;
  description: string;
  deliverables: string[];
  duration: string;
  activities: string[];
}

export interface PricingModel {
  id: string;
  title: string;
  badge?: string;
  tagline: string;
  rateDescription: string;
  idealFor: string;
  features: string[];
  notIncluded?: string[];
  billingCadence: string;
  popular?: boolean;
}

export interface IndustryItem {
  id: string;
  slug: string;
  title: string;
  shortDesc: string;
  overview: string;
  painPointsSolved: string[];
  keySolutions: string[];
  caseStudyRef?: string;
  icon: string;
}

export interface TechCategory {
  name: string;
  items: {
    name: string;
    description: string;
    icon: string;
  }[];
}

export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  category: string;
  publishDate: string;
  readingTime: string;
  author: {
    name: string;
    role: string;
    avatarInitials: string;
  };
  summary: string;
  content: string[]; // Structured paragraphs/subheadings
  relatedPostSlugs: string[];
}

export interface TestimonialItem {
  id: string;
  quote: string;
  author: string;
  role: string;
  company: string;
  rating: number;
  highlightStat?: string;
}

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
  category?: string;
}

export interface SiteConfig {
  brandName: string;
  tagline: string;
  siteUrl: string;
  contact: {
    email: string;
    phone: string;
    whatsappNumber: string;
    whatsappLink: string;
    address: string;
    workingHours: string;
  };
  social: {
    linkedin: string;
    github: string;
    twitter: string;
    dribbble: string;
  };
}

export interface QuoteFormData {
  fullName: string;
  workEmail: string;
  companyName: string;
  serviceCategory: string;
  budgetRange: string;
  timeline: string;
  projectDetails: string;
}
