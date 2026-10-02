import React from "react";
import { testimonialsData } from "@/data/testimonials";
import { Badge } from "@/components/ui/badge";
import { Star, Quote, CheckCircle } from "lucide-react";

export const TestimonialsSection: React.FC = () => {
  return (
    <section className="py-20 lg:py-28 border-b border-border/60 bg-muted/20">
      <div className="container mx-auto">
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
          <Badge variant="vanilla" className="text-xs uppercase tracking-wider">
            Client Voices
          </Badge>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-foreground">
            What Engineering Leaders Say
          </h2>
          <p className="text-muted-foreground text-sm sm:text-base leading-relaxed">
            Real feedback from CTOs, product founders, and digital directors who trust WaveOn with their mission-critical applications.
          </p>
        </div>

        {/* Testimonials Grid (Desktop 3-col, Mobile scroll-snap carousel) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonialsData.map((item) => (
            <div
              key={item.id}
              className="rounded-3xl border border-border/80 bg-card p-8 sm:p-9 shadow-soft hover:shadow-hover hover:border-celtic/40 transition-all duration-300 flex flex-col justify-between hover:-translate-y-1.5"
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  {/* Star Rating */}
                  <div className="flex items-center gap-1 text-amber-400">
                    {[...Array(item.rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-amber-400" />
                    ))}
                  </div>
                  {item.highlightStat && (
                    <Badge variant="teagreen" className="text-xs font-bold font-mono">
                      {item.highlightStat}
                    </Badge>
                  )}
                </div>

                <Quote className="h-8 w-8 text-celtic/20 mb-3" />

                <p className="text-sm sm:text-base text-foreground/90 italic leading-relaxed mb-6">
                  "{item.quote}"
                </p>
              </div>

              <div className="pt-6 border-t border-border/60 flex items-center justify-between">
                <div>
                  <h4 className="text-sm font-bold text-foreground">
                    {item.author}
                  </h4>
                  <p className="text-xs text-muted-foreground">
                    {item.role}, {item.company}
                  </p>
                </div>

                <div className="flex items-center gap-1 text-[11px] font-bold text-deepolive bg-teagreen/25 px-2.5 py-1 rounded-full">
                  <CheckCircle className="h-3.5 w-3.5 text-deepolive" />
                  <span>Verified</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
