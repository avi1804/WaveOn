import React from "react";
import { SeoHead } from "@/components/seo/SeoHead";
import { HeroSection } from "@/components/sections/HeroSection";
import { TrustedBySection } from "@/components/sections/TrustedBySection";
import { TechMarqueeSection } from "@/components/sections/TechMarqueeSection";
import { ServicesGridSection } from "@/components/sections/ServicesGridSection";
import { FeaturedWorkSection } from "@/components/sections/FeaturedWorkSection";
import { WhyUsSection } from "@/components/sections/WhyUsSection";
import { HireDevsSection } from "@/components/sections/HireDevsSection";
import { ProcessSection } from "@/components/sections/ProcessSection";
import { TechStackSection } from "@/components/sections/TechStackSection";
import { IndustriesSection } from "@/components/sections/IndustriesSection";
import { TestimonialsSection } from "@/components/sections/TestimonialsSection";
import { FaqSection } from "@/components/sections/FaqSection";
import { CtaBandSection } from "@/components/sections/CtaBandSection";

export const HomePage: React.FC = () => {
  return (
    <>
      <SeoHead
        title="WaveOn — High-Performance Web Development, UI/UX & Marketing"
        description="WaveOn designs, develops, and scales custom web applications, eCommerce flagships, and dedicated developer teams for ambitious tech companies."
        canonicalPath="/"
      />

      {/* Home Page Sections in Exact Required Order (Section 4) */}
      {/* 1. Hero */}
      <HeroSection />

      {/* 2. Trusted By */}
      <TrustedBySection />

      {/* 3. Infinite Tech Marquee */}
      <TechMarqueeSection />

      {/* 4. What We Do (3x3 service card grid) */}
      <ServicesGridSection />

      {/* 5. Selected Work (5 featured case-study cards) */}
      <FeaturedWorkSection />

      {/* 6. Why WaveOn */}
      <WhyUsSection />

      {/* 7. Hire Developers (6 role cards + rates) */}
      <HireDevsSection />

      {/* 8. Our Process (6 numbered stages) */}
      <ProcessSection />

      {/* 9. Tech Stack Tabs */}
      <TechStackSection />

      {/* 10. Industries Grid */}
      <IndustriesSection />

      {/* 11. Testimonials */}
      <TestimonialsSection />

      {/* 12. FAQ Accordion (8 questions) */}
      <FaqSection />

      {/* 13. Final CTA Band */}
      <CtaBandSection />
    </>
  );
};

export default HomePage;
