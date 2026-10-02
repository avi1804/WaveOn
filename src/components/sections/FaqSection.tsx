import React from "react";
import { homeFaqsData } from "@/data/faqs";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import { SchemaOrg } from "@/components/seo/SchemaOrg";
import { HelpCircle } from "lucide-react";

export const FaqSection: React.FC = () => {
  return (
    <section className="py-20 lg:py-28 border-b border-border/60 bg-background">
      <div className="container mx-auto">
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
          <Badge variant="vanilla" className="text-xs uppercase tracking-wider">
            Clear Answers
          </Badge>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-foreground">
            Frequently Asked Questions
          </h2>
          <p className="text-muted-foreground text-sm sm:text-base leading-relaxed">
            Everything you need to know about our engagement models, billing, timelines, and technical standards before we begin.
          </p>
        </div>

        {/* 8-Question Accessible Accordion */}
        <div className="max-w-3xl mx-auto rounded-3xl border border-border/80 bg-card p-6 sm:p-10 shadow-soft">
          <Accordion type="single" collapsible className="w-full">
            {homeFaqsData.map((faq, index) => (
              <AccordionItem key={faq.id} value={faq.id}>
                <AccordionTrigger className="text-base sm:text-lg font-bold text-foreground hover:text-celtic text-left py-5 transition-colors">
                  <span className="flex items-center gap-3">
                    <span className="text-xs font-mono font-bold text-celtic">
                      {String(index + 1).padStart(2, "0")}.
                    </span>
                    <span>{faq.question}</span>
                  </span>
                </AccordionTrigger>
                <AccordionContent className="text-sm sm:text-base text-muted-foreground leading-relaxed pl-7 pb-6">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        {/* Still have questions hint */}
        <div className="mt-10 text-center flex items-center justify-center gap-2 text-xs text-muted-foreground">
          <HelpCircle className="h-4 w-4 text-primary" />
          <span>Have a unique technical question? Email our team directly at{" "}
            <a href="mailto:hello@waveon.agency" className="text-primary font-semibold hover:underline">
              hello@waveon.agency
            </a>
          </span>
        </div>
      </div>

      {/* JSON-LD Structured Data for FAQ */}
      <SchemaOrg schemaType="FAQPage" faqs={homeFaqsData} />
    </section>
  );
};
