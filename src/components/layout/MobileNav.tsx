import React from "react";
import { Link } from "react-router-dom";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { servicesData } from "@/data/services";
import { rolesData } from "@/data/roles";
import { ArrowRight, Phone, Mail } from "lucide-react";
import { siteConfig } from "@/config/site";
import { Badge } from "@/components/ui/badge";

interface MobileNavProps {
  isOpen: boolean;
  onClose: () => void;
}

export const MobileNav: React.FC<MobileNavProps> = ({ isOpen, onClose }) => {
  return (
    <Sheet open={isOpen} onOpenChange={(open) => !open && onClose()}>
      <SheetContent side="right" className="flex flex-col h-full overflow-y-auto w-full sm:max-w-md p-6">
        <SheetHeader className="text-left border-b border-border/60 pb-4">
          <SheetTitle className="flex items-center gap-3 text-xl font-bold">
            <img
              src="/Logo.png"
              alt="WaveOn Logo"
              className="h-10 w-10 object-contain shrink-0"
              width={40}
              height={40}
            />
            <span>{siteConfig.brandName}</span>
          </SheetTitle>
        </SheetHeader>

        <div className="py-4 flex-1">
          <Accordion type="single" collapsible className="w-full">
            {/* Services */}
            <AccordionItem value="services">
              <AccordionTrigger className="text-base font-semibold py-3">
                Services
              </AccordionTrigger>
              <AccordionContent className="space-y-3 pt-1">
                <div>
                  <span className="text-[11px] font-bold uppercase tracking-wider text-primary block mb-2">
                    Build Services
                  </span>
                  <div className="space-y-1.5 pl-2 border-l-2 border-primary/20">
                    {servicesData
                      .filter((s) => s.category === "Build")
                      .map((service) => (
                        <Link
                          key={service.id}
                          to={`/services/${service.slug}`}
                          onClick={onClose}
                          className="block py-1.5 text-sm font-medium text-muted-foreground hover:text-foreground"
                        >
                          {service.title}
                        </Link>
                      ))}
                  </div>
                </div>

                <div className="pt-2">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-emerald-600 block mb-2">
                    Grow Services
                  </span>
                  <div className="space-y-1.5 pl-2 border-l-2 border-emerald-500/20">
                    {servicesData
                      .filter((s) => s.category === "Grow")
                      .map((service) => (
                        <Link
                          key={service.id}
                          to={`/services/${service.slug}`}
                          onClick={onClose}
                          className="block py-1.5 text-sm font-medium text-muted-foreground hover:text-foreground"
                        >
                          {service.title}
                        </Link>
                      ))}
                  </div>
                </div>

                <Link
                  to="/services"
                  onClick={onClose}
                  className="flex items-center gap-1.5 text-xs font-semibold text-primary pt-2"
                >
                  <span>View All Services</span>
                  <ArrowRight className="h-3 w-3" />
                </Link>
              </AccordionContent>
            </AccordionItem>

            {/* Hire Developers */}
            <AccordionItem value="hire-developers">
              <AccordionTrigger className="text-base font-semibold py-3">
                Hire Developers
              </AccordionTrigger>
              <AccordionContent className="space-y-2 pt-1">
                <div className="space-y-1.5 pl-2 border-l-2 border-primary/20">
                  {rolesData.map((role) => (
                    <Link
                      key={role.id}
                      to={`/hire-developers/${role.slug}`}
                      onClick={onClose}
                      className="flex items-center justify-between py-1.5 text-sm font-medium text-muted-foreground hover:text-foreground"
                    >
                      <span>{role.title}</span>
                      <Badge variant="subtle" className="text-[10px] py-0 px-1.5">
                        {role.hourlyRate.split("–")[0].trim()}/hr
                      </Badge>
                    </Link>
                  ))}
                </div>
                <Link
                  to="/hire-developers"
                  onClick={onClose}
                  className="flex items-center gap-1.5 text-xs font-semibold text-primary pt-2"
                >
                  <span>View All Developer Roles</span>
                  <ArrowRight className="h-3 w-3" />
                </Link>
              </AccordionContent>
            </AccordionItem>

            {/* Case Studies */}
            <AccordionItem value="case-studies">
              <AccordionTrigger className="text-base font-semibold py-3">
                Case Studies
              </AccordionTrigger>
              <AccordionContent className="space-y-2 pt-1 pl-2 border-l-2 border-primary/20">
                <Link
                  to="/case-studies"
                  onClick={onClose}
                  className="block py-1.5 text-sm font-medium text-foreground"
                >
                  All 8 Case Studies
                </Link>
                <Link
                  to="/case-studies?industry=Fintech"
                  onClick={onClose}
                  className="block py-1.5 text-sm text-muted-foreground hover:text-foreground"
                >
                  Fintech Solutions
                </Link>
                <Link
                  to="/case-studies?industry=Healthcare"
                  onClick={onClose}
                  className="block py-1.5 text-sm text-muted-foreground hover:text-foreground"
                >
                  Healthcare Portals
                </Link>
                <Link
                  to="/case-studies?industry=eCommerce+%26+Retail"
                  onClick={onClose}
                  className="block py-1.5 text-sm text-muted-foreground hover:text-foreground"
                >
                  eCommerce Flagships
                </Link>
                <Link
                  to="/case-studies?industry=SaaS+%26+Tech"
                  onClick={onClose}
                  className="block py-1.5 text-sm text-muted-foreground hover:text-foreground"
                >
                  SaaS Platforms
                </Link>
              </AccordionContent>
            </AccordionItem>

            {/* Company */}
            <AccordionItem value="company">
              <AccordionTrigger className="text-base font-semibold py-3">
                Company & Resources
              </AccordionTrigger>
              <AccordionContent className="space-y-2 pt-1 pl-2 border-l-2 border-primary/20">
                <Link to="/about" onClick={onClose} className="block py-1.5 text-sm text-muted-foreground hover:text-foreground">
                  About Us
                </Link>
                <Link to="/process" onClick={onClose} className="block py-1.5 text-sm text-muted-foreground hover:text-foreground">
                  Our Process
                </Link>
                <Link to="/pricing" onClick={onClose} className="block py-1.5 text-sm text-muted-foreground hover:text-foreground">
                  Pricing Models
                </Link>
                <Link to="/industries" onClick={onClose} className="block py-1.5 text-sm text-muted-foreground hover:text-foreground">
                  Industries We Serve
                </Link>
                <Link to="/blog" onClick={onClose} className="block py-1.5 text-sm text-muted-foreground hover:text-foreground">
                  Insights & Articles
                </Link>
                <Link to="/contact" onClick={onClose} className="block py-1.5 text-sm text-muted-foreground hover:text-foreground">
                  Contact Office
                </Link>
              </AccordionContent>
            </AccordionItem>
          </Accordion>

          <div className="mt-4 pt-4 border-t border-border/60 flex flex-col space-y-2">
            <Link
              to="/contact"
              onClick={onClose}
              className="py-2 text-base font-semibold text-foreground hover:text-primary transition-colors flex items-center justify-between"
            >
              <span>Contact WaveOn</span>
              <ArrowRight className="h-4 w-4 text-muted-foreground" />
            </Link>
          </div>
        </div>

        {/* Bottom CTA Block */}
        <div className="pt-4 border-t border-border/60 space-y-4">
          <Link
            to="/contact"
            onClick={onClose}
            className="flex w-full items-center justify-center gap-2 rounded-xl bg-primary py-3.5 text-sm font-bold text-primary-foreground shadow-sm hover:bg-primary-hover transition-colors"
          >
            <span>Get a Free Quote</span>
            <ArrowRight className="h-4 w-4" />
          </Link>

          <div className="space-y-1.5 text-xs text-muted-foreground pt-1">
            <div className="flex items-center gap-2">
              <Phone className="h-3.5 w-3.5 text-primary" />
              <span>{siteConfig.contact.phone}</span>
            </div>
            <div className="flex items-center gap-2">
              <Mail className="h-3.5 w-3.5 text-primary" />
              <span>{siteConfig.contact.email}</span>
            </div>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
};
