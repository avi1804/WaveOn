import React from "react";
import { clientLogos } from "@/data/testimonials";

export const TrustedBySection: React.FC = () => {
  return (
    <section className="py-10 border-b border-border/50 bg-background/50">
      <div className="container mx-auto">
        <p className="text-center text-xs font-bold uppercase tracking-widest text-muted-foreground mb-6">
          Trusted by ambitious scale-ups and established brands worldwide
        </p>

        <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 lg:gap-6">
          {clientLogos.map((client) => (
            <div
              key={client.name}
              className="flex items-center gap-2 group cursor-default px-4 py-2 rounded-full bg-card border border-border/70 shadow-sm hover:border-celtic/40 hover:shadow-soft hover:-translate-y-0.5 transition-all"
            >
              <span className="font-extrabold text-xs sm:text-sm text-foreground tracking-tight group-hover:text-primary transition-colors">
                {client.name}
              </span>
              <span className="text-[10px] font-mono rounded-full bg-teagreen/20 px-2 py-0.5 text-deepolive font-semibold">
                {client.tag}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
