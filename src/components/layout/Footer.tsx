import React from "react";
import { Link } from "react-router-dom";
import { siteConfig } from "@/config/site";
import { servicesData } from "@/data/services";
import { rolesData } from "@/data/roles";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  MessageCircle,
  Linkedin,
  Github,
  Twitter,
  Dribbble,
  ArrowUpRight,
  ShieldCheck,
} from "lucide-react";

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-[#343B1B] bg-[#242A12] text-[#FBFCEE]" role="contentinfo">
      {/* Upper Main Footer Grid */}
      <div className="container mx-auto py-16 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8">
          {/* Column 1: Brand & Contact Info (4 cols) */}
          <div className="lg:col-span-4 space-y-6">
            <Link
              to="/"
              className="flex items-center gap-3 group"
              aria-label={`${siteConfig.brandName} home page`}
            >
              <img
                src="/Logo.png"
                alt="WaveOn Logo"
                className="h-12 w-12 sm:h-14 sm:w-14 object-contain group-hover:scale-105 transition-transform shrink-0"
                width={56}
                height={56}
              />
              <span className="text-2xl font-extrabold tracking-tight text-[#FBFCEE]">
                Wave<span className="text-vanilla">On</span>
              </span>
            </Link>

            <p className="text-sm text-slate-400 leading-relaxed max-w-sm">
              We design, engineer, and scale high-performance web applications, digital platforms, and marketing systems that turn ambitious brands into category leaders.
            </p>

            {/* Contact details */}
            <div className="space-y-3 pt-2 text-xs text-slate-300">
              <div className="flex items-start gap-2.5">
                <MapPin className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                <span>{siteConfig.contact.address}</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="h-4 w-4 text-primary shrink-0" />
                <a href={`tel:${siteConfig.contact.phone.replace(/[^0-9+]/g, "")}`} className="hover:text-primary transition-colors">
                  {siteConfig.contact.phone}
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="h-4 w-4 text-primary shrink-0" />
                <a href={`mailto:${siteConfig.contact.email}`} className="hover:text-primary transition-colors">
                  {siteConfig.contact.email}
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <MessageCircle className="h-4 w-4 text-emerald-400 shrink-0" />
                <a
                  href={siteConfig.contact.whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-emerald-400 hover:underline font-semibold"
                >
                  Direct WhatsApp Business Chat
                </a>
              </div>
              <div className="flex items-center gap-2.5 text-slate-400">
                <Clock className="h-4 w-4 text-slate-500 shrink-0" />
                <span>{siteConfig.contact.workingHours}</span>
              </div>
            </div>

            {/* Social Icons */}
            <div className="flex items-center gap-3 pt-2">
              <a
                href={siteConfig.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-9 w-9 items-center justify-center rounded-lg bg-slate-900 border border-slate-800 text-slate-400 hover:text-primary hover:border-primary/50 transition-colors"
                aria-label="WaveOn LinkedIn"
              >
                <Linkedin className="h-4 w-4" />
              </a>
              <a
                href={siteConfig.social.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-9 w-9 items-center justify-center rounded-lg bg-slate-900 border border-slate-800 text-slate-400 hover:text-primary hover:border-primary/50 transition-colors"
                aria-label="WaveOn GitHub"
              >
                <Github className="h-4 w-4" />
              </a>
              <a
                href={siteConfig.social.twitter}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-9 w-9 items-center justify-center rounded-lg bg-slate-900 border border-slate-800 text-slate-400 hover:text-primary hover:border-primary/50 transition-colors"
                aria-label="WaveOn Twitter"
              >
                <Twitter className="h-4 w-4" />
              </a>
              <a
                href={siteConfig.social.dribbble}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-9 w-9 items-center justify-center rounded-lg bg-slate-900 border border-slate-800 text-slate-400 hover:text-primary hover:border-primary/50 transition-colors"
                aria-label="WaveOn Dribbble"
              >
                <Dribbble className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* Column 2: Services (3 cols) */}
          <div className="lg:col-span-3 space-y-4">
            <h3 className="text-sm font-bold uppercase tracking-wider text-white">
              Services
            </h3>
            <ul className="space-y-2.5 text-xs text-slate-400">
              {servicesData.map((service) => (
                <li key={service.id}>
                  <Link
                    to={`/services/${service.slug}`}
                    className="hover:text-primary transition-colors flex items-center justify-between group"
                  >
                    <span>{service.title}</span>
                    <ArrowUpRight className="h-3 w-3 opacity-0 group-hover:opacity-100 transition-opacity text-primary" />
                  </Link>
                </li>
              ))}
              <li className="pt-2">
                <Link
                  to="/services"
                  className="font-semibold text-primary hover:underline flex items-center gap-1"
                >
                  <span>All Services Index</span>
                  <ArrowUpRight className="h-3.5 w-3.5" />
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Hire Developers (3 cols) */}
          <div className="lg:col-span-3 space-y-4">
            <h3 className="text-sm font-bold uppercase tracking-wider text-white">
              Hire Developers
            </h3>
            <ul className="space-y-2 text-xs text-slate-400">
              {rolesData.slice(0, 8).map((role) => (
                <li key={role.id}>
                  <Link
                    to={`/hire-developers/${role.slug}`}
                    className="hover:text-primary transition-colors flex items-center justify-between"
                  >
                    <span>{role.title}</span>
                    <span className="font-mono text-[11px] text-slate-500">
                      {role.hourlyRate.split("–")[0].trim()}/hr
                    </span>
                  </Link>
                </li>
              ))}
              <li className="pt-2">
                <Link
                  to="/hire-developers"
                  className="font-semibold text-primary hover:underline flex items-center gap-1"
                >
                  <span>See All 12 Roles & Rates</span>
                  <ArrowUpRight className="h-3.5 w-3.5" />
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Company & Resources (2 cols) */}
          <div className="lg:col-span-2 space-y-4">
            <h3 className="text-sm font-bold uppercase tracking-wider text-white">
              Company
            </h3>
            <ul className="space-y-2.5 text-xs text-slate-400">
              <li>
                <Link to="/about" className="hover:text-primary transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/process" className="hover:text-primary transition-colors">
                  Our Process
                </Link>
              </li>
              <li>
                <Link to="/pricing" className="hover:text-primary transition-colors">
                  Pricing & Models
                </Link>
              </li>
              <li>
                <Link to="/industries" className="hover:text-primary transition-colors">
                  Industries
                </Link>
              </li>
              <li>
                <Link to="/case-studies" className="hover:text-primary transition-colors">
                  Case Studies
                </Link>
              </li>
              <li>
                <Link to="/blog" className="hover:text-primary transition-colors">
                  Insights & Blog
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-primary transition-colors">
                  Contact Office
                </Link>
              </li>
              <li className="pt-3">
                <div className="flex items-center gap-1.5 text-[11px] text-emerald-400 font-semibold">
                  <ShieldCheck className="h-4 w-4" />
                  <span>100% Code Ownership</span>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Global Cities Line */}
        <div className="mt-14 pt-8 border-t border-[#343B1B] text-center">
          <p className="text-xs text-[#D8DEBF]">
            <span className="font-semibold text-vanilla">Serving ambitious businesses across:</span>{" "}
            New York · London · San Francisco · Toronto · Dubai · Berlin · Singapore · Sydney · Austin · Chicago · and worldwide.
          </p>
        </div>
      </div>

      {/* Bottom Bar: Copyright & Legal */}
      <div className="border-t border-[#343B1B] bg-[#1E230E] py-6">
        <div className="container mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#C8D69B]">
          <p>
            © {currentYear} {siteConfig.brandName} Inc. All rights reserved. Built with precision and care.
          </p>

          <div className="flex items-center gap-6">
            <Link to="/privacy-policy" className="hover:text-vanilla transition-colors">
              Privacy Policy
            </Link>
            <Link to="/terms-of-service" className="hover:text-vanilla transition-colors">
              Terms of Service
            </Link>
            <Link to="/accessibility" className="hover:text-vanilla transition-colors">
              Accessibility
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
