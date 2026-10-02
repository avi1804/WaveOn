import React from "react";
import { Link } from "react-router-dom";
import { industriesData } from "@/data/industries";
import { Badge } from "@/components/ui/badge";
import {
  ShieldAlert,
  HeartPulse,
  ShoppingBag,
  Cloud,
  GraduationCap,
  Building2,
  Truck,
  Film,
  Briefcase,
  Factory,
  ArrowRight,
} from "lucide-react";

const iconMap: Record<string, React.ElementType> = {
  ShieldAlert,
  HeartPulse,
  ShoppingBag,
  Cloud,
  GraduationCap,
  Building2,
  Truck,
  Film,
  Briefcase,
  Factory,
};

export const IndustriesSection: React.FC = () => {
  return (
    <section className="py-20 lg:py-28 border-b border-border/60 bg-background">
      <div className="container mx-auto">
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
          <Badge variant="vanilla" className="text-xs uppercase tracking-wider">
            Domain Expertise
          </Badge>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-foreground">
            Industries We Transform
          </h2>
          <p className="text-muted-foreground text-sm sm:text-base leading-relaxed">
            Every industry has unique compliance mandates, customer behaviors, and technical boundaries. We bring specialized domain expertise to every engagement.
          </p>
        </div>

        {/* 10 Industry Cards in a Responsive 3-4 Column Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {industriesData.map((ind) => {
            const Icon = iconMap[ind.icon] || Building2;
            return (
              <div
                key={ind.id}
                className="group rounded-3xl border border-border/80 bg-card p-7 shadow-soft hover:border-celtic/40 hover:shadow-hover transition-all duration-300 flex flex-col justify-between hover:-translate-y-1.5"
              >
                <div>
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-teagreen/25 text-deepolive group-hover:bg-celtic group-hover:text-white group-hover:scale-105 transition-all duration-300 mb-5">
                    <Icon className="h-6 w-6" />
                  </div>

                  <h3 className="text-lg font-bold text-foreground group-hover:text-celtic transition-colors mb-2">
                    {ind.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                    {ind.shortDesc}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-border/60">
                  <Link
                    to={`/industries`}
                    className="text-xs font-bold text-celtic hover:underline flex items-center justify-between"
                  >
                    <span>View industry solutions</span>
                    <ArrowRight className="h-3.5 w-3.5" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
