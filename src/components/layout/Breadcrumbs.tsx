import React from "react";
import { Link, useLocation } from "react-router-dom";
import { ChevronRight, Home } from "lucide-react";
import { SchemaOrg } from "@/components/seo/SchemaOrg";

interface BreadcrumbsProps {
  customItems?: { name: string; path: string }[];
}

export const Breadcrumbs: React.FC<BreadcrumbsProps> = ({ customItems }) => {
  const location = useLocation();

  // If on home page, do not render breadcrumbs
  if (location.pathname === "/") {
    return null;
  }

  // Format pathname into readable items if custom items not provided
  let items = customItems;
  if (!items) {
    const segments = location.pathname.split("/").filter(Boolean);
    let accumPath = "";
    items = segments.map((seg) => {
      accumPath += `/${seg}`;
      const name = seg
        .replace(/-/g, " ")
        .replace(/\b\w/g, (c) => c.toUpperCase());
      return { name, path: accumPath };
    });
  }

  const allCrumbs = [{ name: "Home", path: "/" }, ...items];

  return (
    <div className="bg-muted/40 border-b border-border/50 py-2.5">
      <div className="container mx-auto">
        <nav aria-label="Breadcrumb">
          <ol className="flex items-center flex-wrap gap-1.5 text-xs text-muted-foreground">
            {allCrumbs.map((crumb, idx) => {
              const isLast = idx === allCrumbs.length - 1;
              return (
                <li key={crumb.path} className="flex items-center gap-1.5">
                  {idx > 0 && <ChevronRight className="h-3 w-3 text-muted-foreground/60" />}
                  {isLast ? (
                    <span
                      className="font-semibold text-foreground truncate max-w-[200px] sm:max-w-none"
                      aria-current="page"
                    >
                      {crumb.name}
                    </span>
                  ) : (
                    <Link
                      to={crumb.path}
                      className="hover:text-primary transition-colors flex items-center gap-1"
                    >
                      {idx === 0 && <Home className="h-3 w-3" />}
                      <span>{crumb.name}</span>
                    </Link>
                  )}
                </li>
              );
            })}
          </ol>
        </nav>
      </div>

      {/* JSON-LD Structured Data for Breadcrumbs */}
      <SchemaOrg schemaType="BreadcrumbList" breadcrumbs={allCrumbs} />
    </div>
  );
};
