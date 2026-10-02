import React from "react";
import { techStackData } from "@/data/techStack";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import {
  Atom,
  Layers,
  FileCode,
  Component,
  Shield,
  Sparkles,
  Box,
  Activity,
  Server,
  Cpu,
  Terminal,
  Database,
  Code2,
  HardDrive,
  Zap,
  Network,
  ShoppingBag,
  Globe,
  ShoppingCart,
  FileText,
  CreditCard,
  Store,
  Smartphone,
  Tablet,
  CloudRain,
  Apple,
  Play,
  Flame,
  Cloud,
  Package,
  GitBranch,
  Triangle,
  ShieldCheck,
  Binary,
  Bot,
  Link as LinkIcon,
  Search,
  PieChart,
  Eye,
  BarChart,
  SearchCheck,
  Gauge,
  LineChart,
  Target,
  Share2,
  CodeXml,
} from "lucide-react";

const iconMap: Record<string, React.ElementType> = {
  Atom,
  Layers,
  FileCode,
  Component,
  Shield,
  Sparkles,
  Box,
  Activity,
  Server,
  Cpu,
  Terminal,
  Database,
  Code2,
  HardDrive,
  Zap,
  Network,
  ShoppingBag,
  Globe,
  ShoppingCart,
  FileText,
  CreditCard,
  Store,
  Smartphone,
  Tablet,
  CloudRain,
  Apple,
  Play,
  Flame,
  Cloud,
  Package,
  GitBranch,
  Triangle,
  ShieldCheck,
  Binary,
  Bot,
  Link: LinkIcon,
  Search,
  PieChart,
  Eye,
  BarChart,
  SearchCheck,
  Gauge,
  LineChart,
  Target,
  Share2,
  CodeXml,
};

export const TechStackSection: React.FC = () => {
  return (
    <section className="py-20 lg:py-28 border-b border-border/60 bg-muted/20">
      <div className="container mx-auto">
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-14">
          <Badge variant="vanilla" className="text-xs uppercase tracking-wider">
            Technology Stack
          </Badge>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-foreground">
            Modern, Battle-Tested Engineering Tools
          </h2>
          <p className="text-muted-foreground text-sm sm:text-base leading-relaxed">
            We intentionally choose technologies with thriving ecosystems, rock-solid security postures, and guaranteed longevity.
          </p>
        </div>

        {/* Tabbed Tech Grid */}
        <div className="max-w-5xl mx-auto">
          <Tabs defaultValue="Front End" className="w-full">
            <div className="flex justify-center overflow-x-auto pb-4">
              <TabsList className="h-auto flex-wrap justify-center p-1.5 sm:p-2 gap-1.5 sm:gap-2 bg-card border border-border/80 rounded-full shadow-soft">
                {techStackData.map((category) => (
                  <TabsTrigger
                    key={category.name}
                    value={category.name}
                    className="text-xs sm:text-sm font-bold rounded-full px-4 sm:px-5 py-2 sm:py-2.5 text-foreground/80 hover:text-foreground data-[state=active]:bg-primary data-[state=active]:text-primary-foreground data-[state=active]:shadow-celtic transition-all"
                  >
                    {category.name}
                  </TabsTrigger>
                ))}
              </TabsList>
            </div>

            {techStackData.map((category) => (
              <TabsContent
                key={category.name}
                value={category.name}
                className="mt-8 animate-in fade-in-50 duration-300"
              >
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-5">
                  {category.items.map((item) => {
                    const IconComponent = iconMap[item.icon] || Cpu;
                    return (
                      <div
                        key={item.name}
                        className="group rounded-3xl border border-border/80 bg-card p-6 shadow-soft hover:border-celtic/40 hover:shadow-hover transition-all duration-300 flex flex-col justify-between hover:-translate-y-1.5"
                      >
                        <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-celtic/10 text-celtic mb-4 group-hover:bg-celtic group-hover:text-white group-hover:scale-110 transition-all duration-300">
                          <IconComponent className="h-6 w-6" />
                        </div>
                        <div>
                          <h4 className="text-base font-bold text-foreground group-hover:text-celtic transition-colors mb-1.5">
                            {item.name}
                          </h4>
                          <p className="text-xs text-muted-foreground leading-relaxed">
                            {item.description}
                          </p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </div>
    </section>
  );
};
