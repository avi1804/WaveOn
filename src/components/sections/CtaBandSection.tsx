import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight, MessageCircle, CheckCircle2 } from "lucide-react";
import { siteConfig } from "@/config/site";

export const CtaBandSection: React.FC = () => {
  return (
    <section className="py-20 lg:py-28 bg-[#242A12] text-[#FBFCEE] relative overflow-hidden border-t border-[#343B1B]">
      {/* Background ambient glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-celtic/20 blur-[150px] rounded-full pointer-events-none" />
      <div className="absolute top-0 right-0 w-80 h-80 bg-teagreen/10 blur-[120px] rounded-full pointer-events-none" />

      <div className="container mx-auto relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-7">
          <div className="inline-flex items-center gap-2 rounded-full bg-vanilla px-4 py-1.5 text-xs font-bold text-deepolive shadow-sm">
            <span>Ready To Accelerate Your Roadmap?</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight">
            Book a Free 30-Minute Scoping Call.
          </h2>

          <p className="text-base sm:text-lg text-[#D8DEBF] max-w-2xl mx-auto leading-relaxed">
            Let's evaluate your technical bottlenecks, discuss architectural tradeoffs, and map out a concrete sprint plan. No sales fluff, no obligation.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <Link
              to="/contact"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 rounded-full bg-celtic px-9 py-4 text-base font-bold text-white shadow-celtic hover:bg-celtic-hover hover:-translate-y-0.5 active:scale-[0.98] transition-all"
            >
              <span>Book a Free Scoping Call</span>
              <ArrowRight className="h-4 w-4" />
            </Link>

            <a
              href={siteConfig.contact.whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 rounded-full border border-[#4B5527] bg-[#343B1B] px-8 py-4 text-base font-bold text-[#FBFCEE] hover:bg-[#434c22] hover:-translate-y-0.5 active:scale-[0.98] transition-all shadow-sm"
            >
              <MessageCircle className="h-5 w-5 text-teagreen" />
              <span>Chat on WhatsApp</span>
            </a>
          </div>

          {/* Micro trust indicators */}
          <div className="pt-6 flex flex-wrap items-center justify-center gap-6 text-xs text-[#C8D69B] font-semibold">
            <div className="flex items-center gap-1.5">
              <CheckCircle2 className="h-4 w-4 text-teagreen" />
              <span>Direct call with senior architect</span>
            </div>
            <div className="flex items-center gap-1.5">
              <CheckCircle2 className="h-4 w-4 text-teagreen" />
              <span>Custom ballpark estimate in 24 hours</span>
            </div>
            <div className="flex items-center gap-1.5">
              <CheckCircle2 className="h-4 w-4 text-teagreen" />
              <span>Mutual NDA honored upfront</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
