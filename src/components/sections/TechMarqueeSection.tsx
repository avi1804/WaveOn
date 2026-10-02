import React from "react";
import ScrollVelocity from "@/components/ui/ScrollVelocity";
import {
  TypeScriptLogo,
  JavaScriptLogo,
  PythonLogo,
  ReactLogo,
  NextjsLogo,
  NodeLogo,
  TailwindLogo,
  ShopifyLogo,
  WordPressLogo,
  PostgresLogo,
  DockerLogo,
  AwsLogo,
  FlutterLogo,
  SwiftLogo,
  LaravelLogo,
  FigmaLogo,
  GraphQLLogo,
  RedisLogo,
  NestLogo,
} from "@/components/icons/TechLogos";

interface TechItem {
  name: string;
  Icon: React.ComponentType<{ className?: string; size?: number }>;
  category: "frontend" | "backend" | "mobile" | "cms" | "cloud" | "design";
}

const row1Techs: TechItem[] = [
  { name: "TypeScript", Icon: TypeScriptLogo, category: "frontend" },
  { name: "React", Icon: ReactLogo, category: "frontend" },
  { name: "Next.js", Icon: NextjsLogo, category: "frontend" },
  { name: "Node.js", Icon: NodeLogo, category: "backend" },
  { name: "Tailwind CSS", Icon: TailwindLogo, category: "frontend" },
  { name: "Python", Icon: PythonLogo, category: "backend" },
  { name: "PostgreSQL", Icon: PostgresLogo, category: "backend" },
  { name: "AWS", Icon: AwsLogo, category: "cloud" },
  { name: "Docker", Icon: DockerLogo, category: "cloud" },
  { name: "Shopify Plus", Icon: ShopifyLogo, category: "cms" },
];

const row2Techs: TechItem[] = [
  { name: "JavaScript", Icon: JavaScriptLogo, category: "frontend" },
  { name: "Flutter", Icon: FlutterLogo, category: "mobile" },
  { name: "Swift", Icon: SwiftLogo, category: "mobile" },
  { name: "Laravel", Icon: LaravelLogo, category: "backend" },
  { name: "Figma", Icon: FigmaLogo, category: "design" },
  { name: "WordPress", Icon: WordPressLogo, category: "cms" },
  { name: "GraphQL", Icon: GraphQLLogo, category: "backend" },
  { name: "Redis", Icon: RedisLogo, category: "backend" },
  { name: "NestJS", Icon: NestLogo, category: "backend" },
];

const renderTechRow = (techs: TechItem[]) => (
  <div className="flex items-center gap-3 sm:gap-4 py-1.5 pr-3 sm:pr-4">
    {techs.map((tech) => {
      const IconComponent = tech.Icon;
      return (
        <div
          key={tech.name}
          className="flex items-center gap-2.5 rounded-full border border-border/80 bg-card px-3.5 sm:px-4 py-1.5 sm:py-2 shadow-soft hover:shadow-md hover:border-celtic/50 transition-all hover:scale-105 shrink-0 select-none group"
        >
          <div className="flex items-center justify-center shrink-0 group-hover:rotate-6 transition-transform">
            <IconComponent className="h-4 w-4 sm:h-5 sm:w-5" size={20} />
          </div>
          <span className="text-xs sm:text-sm font-bold text-foreground tracking-tight whitespace-nowrap">
            {tech.name}
          </span>
        </div>
      );
    })}
  </div>
);

export const TechMarqueeSection: React.FC = () => {
  return (
    <section className="py-10 sm:py-12 border-b border-border/50 bg-muted/20 overflow-hidden">
      <div className="container mx-auto px-4 mb-6 sm:mb-8 text-center">
        <p className="text-xs sm:text-xs font-bold uppercase tracking-widest text-muted-foreground">
          Technologies We Build With Every Day
        </p>
      </div>

      <div className="relative w-full overflow-hidden">
        {/* Edge Gradient Fades for Smooth Infinite Illusion */}
        <div className="absolute left-0 top-0 bottom-0 w-16 sm:w-28 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-16 sm:w-28 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />

        {/* ScrollVelocity from React Bits */}
        <ScrollVelocity
          texts={[renderTechRow(row1Techs), renderTechRow(row2Techs)]}
          velocity={45}
          numCopies={4}
          damping={45}
          stiffness={350}
        />
      </div>
    </section>
  );
};
