import React from "react";
import { Link } from "react-router-dom";
import { SeoHead } from "@/components/seo/SeoHead";
import { Home, Compass } from "lucide-react";

export const NotFoundPage: React.FC = () => {
  return (
    <>
      <SeoHead
        title="404 — Page Not Found"
        description="The requested page could not be located on WaveOn. Explore our services, case studies, or contact our engineering team."
        noIndex={true}
      />

      <section className="py-24 md:py-32 border-b border-border/60 bg-gradient-to-b from-muted/20 via-background to-background">
        <div className="container mx-auto text-center max-w-2xl space-y-6">
          <div className="font-mono text-7xl sm:text-8xl font-black text-primary tracking-tight">
            404
          </div>

          <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-foreground">
            Page Not Found
          </h1>

          <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
            The URL you requested could not be located. It may have moved or been updated. Choose one of the popular destinations below to continue.
          </p>

          {/* Action Links Grid */}
          <div className="pt-6 grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-md mx-auto">
            <Link
              to="/"
              className="flex items-center justify-center gap-2 rounded-xl bg-primary px-6 py-3.5 text-xs font-bold text-primary-foreground shadow-sm hover:bg-primary-hover transition-colors"
            >
              <Home className="h-4 w-4" />
              <span>Back to Home Page</span>
            </Link>

            <Link
              to="/services"
              className="flex items-center justify-center gap-2 rounded-xl border border-border bg-card px-6 py-3.5 text-xs font-semibold text-foreground hover:bg-muted transition-colors"
            >
              <Compass className="h-4 w-4 text-muted-foreground" />
              <span>Explore All Services</span>
            </Link>
          </div>

          <div className="pt-8 border-t border-border/60 max-w-md mx-auto space-y-2 text-xs text-muted-foreground">
            <p className="font-semibold text-foreground">Helpful Quick Links:</p>
            <div className="flex flex-wrap justify-center gap-4 text-primary">
              <Link to="/hire-developers" className="hover:underline">
                Hire Developers
              </Link>
              <span>·</span>
              <Link to="/case-studies" className="hover:underline">
                Client Case Studies
              </Link>
              <span>·</span>
              <Link to="/pricing" className="hover:underline">
                Pricing Models
              </Link>
              <span>·</span>
              <Link to="/contact" className="hover:underline">
                Contact Scoping Team
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default NotFoundPage;
