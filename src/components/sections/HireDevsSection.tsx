import React from "react";
import { Link } from "react-router-dom";
import { rolesData } from "@/data/roles";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, CheckCircle2 } from "lucide-react";

export const HireDevsSection: React.FC = () => {
  // Show 6 highlighted roles
  const highlightedRoles = rolesData.slice(0, 6);

  return (
    <section className="py-20 lg:py-28 border-b border-border/60 bg-muted/20">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div className="space-y-3 max-w-xl">
            <Badge variant="vanilla" className="text-xs uppercase tracking-wider">
              Staff Augmentation
            </Badge>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-foreground">
              Hire Dedicated Senior Developers
            </h2>
            <p className="text-muted-foreground text-sm sm:text-base leading-relaxed">
              Integrate vetted software engineers into your team within 48 hours. Transparent hourly rates, zero recruiting friction, and a 2-week risk-free trial.
            </p>
          </div>

          <Link
            to="/hire-developers"
            className="inline-flex items-center gap-2 rounded-full bg-primary px-7 py-3.5 text-sm font-bold text-primary-foreground shadow-celtic hover:bg-celtic-hover active:scale-[0.98] transition-all self-start md:self-auto shrink-0"
          >
            <span>See All 12 Roles & Rates</span>
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        {/* 6 Role Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {highlightedRoles.map((role) => (
            <Link
              key={role.id}
              to={`/hire-developers/${role.slug}`}
              className="group relative flex flex-col justify-between rounded-3xl border border-border/80 bg-card p-7 shadow-soft hover:border-celtic/40 hover:shadow-hover transition-all duration-300 hover:-translate-y-1.5"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <Badge variant="teagreen" className="text-xs font-bold">
                    {role.category}
                  </Badge>
                  <div className="font-mono text-xs font-extrabold text-deepolive bg-vanilla px-3 py-1 rounded-full shadow-sm">
                    {role.hourlyRate}
                  </div>
                </div>

                <h3 className="text-xl font-bold text-foreground group-hover:text-celtic transition-colors mb-2">
                  {role.title}
                </h3>

                <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed mb-5">
                  {role.shortSummary}
                </p>

                {/* Core Proficiencies list */}
                <div className="space-y-2 mb-6">
                  {role.skills.slice(0, 3).map((skill) => (
                    <div key={skill} className="flex items-center gap-2 text-xs font-medium text-foreground">
                      <CheckCircle2 className="h-3.5 w-3.5 text-teagreen-hover shrink-0" />
                      <span>{skill}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-4 border-t border-border/60 flex items-center justify-between text-xs font-bold text-celtic">
                <span>View Full Skill Profile</span>
                <ArrowRight className="h-4 w-4 -translate-x-1 group-hover:translate-x-0 transition-transform" />
              </div>
            </Link>
          ))}
        </div>

        {/* Bottom Trust Guarantee Strip in Tea Green */}
        <div className="mt-12 rounded-3xl border border-teagreen/40 bg-teagreen/15 p-6 sm:p-7 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left shadow-soft">
          <div className="space-y-1">
            <h4 className="text-sm font-bold text-deepolive">
              Guaranteed Satisfaction: 14-Day Risk-Free Evaluation Period
            </h4>
            <p className="text-xs text-muted-foreground">
              If an engineer isn't the perfect fit within the first two weeks, you owe nothing or we swap them immediately.
            </p>
          </div>
          <Link
            to="/hire-developers"
            className="text-xs font-bold text-celtic hover:underline flex items-center gap-1 shrink-0"
          >
            <span>Learn How Hiring Works</span>
            <ArrowRight className="h-3.5 w-3.5" />
          </Link>
        </div>
      </div>
    </section>
  );
};
