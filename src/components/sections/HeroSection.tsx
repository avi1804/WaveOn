import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle2, Star, Sparkles, Code2 } from "lucide-react";
import CountUp from "@/components/ui/CountUp";
import TechText from "@/components/ui/TechText";

export const HeroSection: React.FC = () => {
  return (
    <section className="relative overflow-hidden pt-12 pb-20 md:pt-20 md:pb-28 border-b border-border/60 bg-gradient-to-b from-background via-ivory-warm/40 to-background">
      {/* Decorative organic brand wave glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[380px] bg-primary/10 blur-[140px] rounded-full pointer-events-none -z-10" />
      <div className="absolute top-10 right-10 w-64 h-64 bg-teagreen/15 blur-[100px] rounded-full pointer-events-none -z-10" />
      <div className="absolute bottom-10 left-10 w-72 h-72 bg-vanilla/25 blur-[110px] rounded-full pointer-events-none -z-10" />

      {/* Subtle organic decorative wave SVG motif */}
      <div className="absolute -right-20 top-20 opacity-20 pointer-events-none -z-10 hidden lg:block">
        <svg width="340" height="340" viewBox="0 0 340 340" fill="none">
          <circle cx="170" cy="170" r="160" stroke="#3971B8" strokeWidth="2" strokeDasharray="8 8" />
          <circle cx="170" cy="170" r="120" stroke="#C8D69B" strokeWidth="3" />
          <path d="M70 170 Q 120 120, 170 170 T 270 170" stroke="#3971B8" strokeWidth="4" strokeLinecap="round" />
        </svg>
      </div>

      <div className="container mx-auto relative">
        <div className="max-w-4xl mx-auto text-center space-y-7">
          {/* Eyebrow badge in Vanilla pill */}
          <div className="inline-flex items-center gap-2 rounded-full bg-vanilla px-4 py-1.5 text-xs font-bold text-deepolive shadow-sm">
            <Sparkles className="h-3.5 w-3.5 text-deepolive" />
            <span>High-Velocity Web Engineering & Digital Growth</span>
          </div>

          {/* H1 Heading with TechText applied ONLY to 'Outperform & Scale.' */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-foreground text-balance leading-[1.08]">
            <span className="block">We Engineer Digital Products That</span>
            <span className="block w-full h-[52px] sm:h-[68px] md:h-[84px] lg:h-[98px] xl:h-[110px] relative mt-1 sm:mt-2">
              <TechText
                text="Outperform & Scale."
                color="#3971B8"
                accentColor="#3971B8"
                fontWeight={800}
                fontSize={110}
                letterSpacing={-0.03}
                reveal="letter"
                dashLength={4}
                dashGap={2}
                specks={15}
                selection={true}
                labels={true}
                draggable={true}
                sweep={true}
                speed={1}
              />
              <span className="sr-only">Outperform & Scale.</span>
            </span>
          </h1>

          {/* Supporting paragraph */}
          <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            WaveOn designs, develops, and scales custom web applications, eCommerce flagships, and dedicated developer teams for ambitious tech companies.
          </p>

          {/* Primary & Secondary Pill CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-3">
            <Link
              to="/contact"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 rounded-full bg-primary px-8 py-4 text-base font-bold text-primary-foreground shadow-celtic hover:bg-celtic-hover hover:-translate-y-0.5 active:scale-[0.98] transition-all"
            >
              <span>Get a Free Quote</span>
              <ArrowRight className="h-4 w-4" />
            </Link>

            <Link
              to="/case-studies"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-full border-2 border-primary/20 bg-card px-8 py-4 text-base font-bold text-primary hover:bg-teagreen-light hover:border-teagreen hover:-translate-y-0.5 active:scale-[0.98] transition-all shadow-sm"
            >
              <span>See Our Work</span>
              <Code2 className="h-4 w-4 text-primary" />
            </Link>
          </div>

          {/* Three micro trust chips with tea green icons */}
          <div className="pt-4 flex flex-wrap items-center justify-center gap-4 sm:gap-6 text-xs text-foreground font-semibold">
            <div className="flex items-center gap-1.5 bg-card/70 border border-border/80 px-3.5 py-1.5 rounded-full shadow-sm">
              <CheckCircle2 className="h-4 w-4 text-teagreen-hover shrink-0" />
              <span>Free 30-min scoping call</span>
            </div>
            <div className="flex items-center gap-1.5 bg-card/70 border border-border/80 px-3.5 py-1.5 rounded-full shadow-sm">
              <CheckCircle2 className="h-4 w-4 text-teagreen-hover shrink-0" />
              <span>You own 100% of all code</span>
            </div>
            <div className="flex items-center gap-1.5 bg-card/70 border border-border/80 px-3.5 py-1.5 rounded-full shadow-sm">
              <CheckCircle2 className="h-4 w-4 text-teagreen-hover shrink-0" />
              <span>No long-term lock-in</span>
            </div>
          </div>
        </div>

        {/* 4-Stat Row in Tactile Rounded Container */}
        <div className="mt-16 pt-10 pb-10 px-8 rounded-3xl bg-card/90 border border-border/80 shadow-soft max-w-5xl mx-auto backdrop-blur-sm">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center divide-y lg:divide-y-0 lg:divide-x divide-border/60">
            <div className="space-y-1 pt-2 lg:pt-0">
              <div className="text-3xl sm:text-4xl font-extrabold text-foreground tracking-tight">
                <CountUp from={0} to={250} separator="," duration={2} />
                <span className="text-primary">+</span>
              </div>
              <p className="text-xs sm:text-sm text-muted-foreground font-medium">
                Projects Shipped Worldwide
              </p>
            </div>

            <div className="space-y-1 pt-4 lg:pt-0">
              <div className="text-3xl sm:text-4xl font-extrabold text-foreground tracking-tight">
                <CountUp from={0} to={10} duration={2} />
                <span className="text-primary">+</span>
              </div>
              <p className="text-xs sm:text-sm text-muted-foreground font-medium">
                Years of Engineering Excellence
              </p>
            </div>

            <div className="space-y-1 pt-4 lg:pt-0">
              <div className="text-3xl sm:text-4xl font-extrabold text-foreground tracking-tight">
                <CountUp from={0} to={98} duration={2} />
                <span className="text-primary">%</span>
              </div>
              <p className="text-xs sm:text-sm text-muted-foreground font-medium">
                Client Retention Rate
              </p>
            </div>

            <div className="space-y-1 pt-4 lg:pt-0">
              <div className="text-3xl sm:text-4xl font-extrabold text-foreground tracking-tight flex items-center justify-center gap-1">
                <CountUp from={0.0} to={4.9} duration={2} />
                <span className="text-vanilla-hover flex text-2xl">
                  <Star className="h-6 w-6 fill-amber-400 text-amber-400" />
                </span>
              </div>
              <p className="text-xs sm:text-sm text-muted-foreground font-medium">
                Rating Across Clutch & Google
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
