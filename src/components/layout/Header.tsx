import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { siteConfig } from "@/config/site";
import { MegaMenu } from "./MegaMenu";
import { MobileNav } from "./MobileNav";
import { Button } from "@/components/ui/button";
import { Menu, ChevronDown, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

export const Header: React.FC = () => {
  const [activeMegaMenu, setActiveMegaMenu] = useState<string | null>(null);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  // Close menus on route change
  useEffect(() => {
    setActiveMegaMenu(null);
    setIsMobileOpen(false);
  }, [location.pathname]);

  // Track scroll position for header elevation
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleMouseEnter = (menuName: string) => {
    setActiveMegaMenu(menuName);
  };

  const handleMenuClick = (menuName: string) => {
    setActiveMegaMenu((prev) => (prev === menuName ? null : menuName));
  };

  return (
    <>
      {/* Skip to Content for WCAG 2.2 AA Keyboard Accessibility */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 z-50 rounded-lg bg-primary px-4 py-2 font-bold text-primary-foreground shadow-lg focus:outline-none focus:ring-2 focus:ring-ring"
      >
        Skip to main content
      </a>

      <header
        className={cn(
          "sticky top-0 z-50 w-full transition-all duration-200 border-b",
          activeMegaMenu || isScrolled
            ? "bg-[#FBFCEE] dark:bg-card border-border/80 shadow-md py-3"
            : "bg-[#FBFCEE] dark:bg-card border-transparent py-4"
        )}
      >
        <div className="container mx-auto flex items-center justify-between gap-2 xl:gap-4 px-3 sm:px-6">
          {/* Logo without background wrapper & increased size */}
          <Link
            to="/"
            className="flex items-center gap-2.5 sm:gap-3 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring rounded-lg p-1 shrink-0"
            aria-label={`${siteConfig.brandName} home page`}
          >
            <img
              src="/Logo.png"
              alt="WaveOn Logo"
              className="h-10 w-10 sm:h-12 sm:w-12 xl:h-14 xl:w-14 object-contain group-hover:scale-105 transition-transform shrink-0"
              width={56}
              height={56}
            />
            <div className="flex flex-col shrink-0">
              <span className="text-xl sm:text-2xl font-extrabold tracking-tight text-foreground flex items-center whitespace-nowrap leading-none">
                Wave<span className="text-primary">On</span>
              </span>
              <span className="text-[10px] uppercase tracking-wider font-bold text-muted-foreground mt-0.5 whitespace-nowrap">
                Digital Agency
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav
            className="hidden lg:flex items-center gap-1 xl:gap-2 shrink-0"
            aria-label="Main Navigation"
          >
            {/* Services with MegaMenu */}
            <div
              className="relative shrink-0"
              onMouseEnter={() => handleMouseEnter("Services")}
            >
              <button
                type="button"
                onClick={() => handleMenuClick("Services")}
                className={cn(
                  "flex items-center gap-1 xl:gap-1.5 whitespace-nowrap rounded-full px-2.5 xl:px-3.5 py-1.5 xl:py-2 text-xs xl:text-sm font-semibold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring shrink-0 select-none",
                  activeMegaMenu === "Services" || location.pathname.startsWith("/services")
                    ? "text-primary bg-primary/10 font-bold"
                    : "text-foreground/85 hover:text-primary hover:bg-muted/60"
                )}
                aria-expanded={activeMegaMenu === "Services"}
                aria-haspopup="true"
              >
                <span className="whitespace-nowrap">Services</span>
                <ChevronDown
                  className={cn(
                    "h-3.5 w-3.5 xl:h-4 xl:w-4 shrink-0 transition-transform duration-200",
                    activeMegaMenu === "Services" && "rotate-180 text-primary"
                  )}
                />
              </button>
            </div>

            {/* Hire Developers with MegaMenu */}
            <div
              className="relative shrink-0"
              onMouseEnter={() => handleMouseEnter("Hire Developers")}
            >
              <button
                type="button"
                onClick={() => handleMenuClick("Hire Developers")}
                className={cn(
                  "flex items-center gap-1 xl:gap-1.5 whitespace-nowrap rounded-full px-2.5 xl:px-3.5 py-1.5 xl:py-2 text-xs xl:text-sm font-semibold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring shrink-0 select-none",
                  activeMegaMenu === "Hire Developers" || location.pathname.startsWith("/hire-developers")
                    ? "text-primary bg-primary/10 font-bold"
                    : "text-foreground/85 hover:text-primary hover:bg-muted/60"
                )}
                aria-expanded={activeMegaMenu === "Hire Developers"}
                aria-haspopup="true"
              >
                <span className="whitespace-nowrap">Hire Developers</span>
                <ChevronDown
                  className={cn(
                    "h-3.5 w-3.5 xl:h-4 xl:w-4 shrink-0 transition-transform duration-200",
                    activeMegaMenu === "Hire Developers" && "rotate-180 text-primary"
                  )}
                />
              </button>
            </div>

            {/* Case Studies with MegaMenu */}
            <div
              className="relative shrink-0"
              onMouseEnter={() => handleMouseEnter("Case Studies")}
            >
              <button
                type="button"
                onClick={() => handleMenuClick("Case Studies")}
                className={cn(
                  "flex items-center gap-1 xl:gap-1.5 whitespace-nowrap rounded-full px-2.5 xl:px-3.5 py-1.5 xl:py-2 text-xs xl:text-sm font-semibold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring shrink-0 select-none",
                  activeMegaMenu === "Case Studies" || location.pathname.startsWith("/case-studies")
                    ? "text-primary bg-primary/10 font-bold"
                    : "text-foreground/85 hover:text-primary hover:bg-muted/60"
                )}
                aria-expanded={activeMegaMenu === "Case Studies"}
                aria-haspopup="true"
              >
                <span className="whitespace-nowrap">Case Studies</span>
                <ChevronDown
                  className={cn(
                    "h-3.5 w-3.5 xl:h-4 xl:w-4 shrink-0 transition-transform duration-200",
                    activeMegaMenu === "Case Studies" && "rotate-180 text-primary"
                  )}
                />
              </button>
            </div>

            {/* Company & Insights Consolidated Dropdown (Process, Pricing, Industries, Insights & About) */}
            <div
              className="relative shrink-0"
              onMouseEnter={() => handleMouseEnter("Company")}
            >
              <button
                type="button"
                onClick={() => handleMenuClick("Company")}
                className={cn(
                  "flex items-center gap-1 xl:gap-1.5 whitespace-nowrap rounded-full px-2.5 xl:px-3.5 py-1.5 xl:py-2 text-xs xl:text-sm font-semibold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring shrink-0 select-none",
                  activeMegaMenu === "Company" ||
                    ["/about", "/process", "/pricing", "/industries", "/blog"].some((path) =>
                      location.pathname.startsWith(path)
                    )
                    ? "text-primary bg-primary/10 font-bold"
                    : "text-foreground/85 hover:text-primary hover:bg-muted/60"
                )}
                aria-expanded={activeMegaMenu === "Company"}
                aria-haspopup="true"
              >
                <span className="whitespace-nowrap">Company & Insights</span>
                <ChevronDown
                  className={cn(
                    "h-3.5 w-3.5 xl:h-4 xl:w-4 shrink-0 transition-transform duration-200",
                    activeMegaMenu === "Company" && "rotate-180 text-primary"
                  )}
                />
              </button>
            </div>

            {/* Direct Contact Link */}
            <Link
              to="/contact"
              className={cn(
                "whitespace-nowrap rounded-full px-2.5 xl:px-3.5 py-1.5 xl:py-2 text-xs xl:text-sm font-semibold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring shrink-0 select-none",
                location.pathname === "/contact"
                  ? "text-primary bg-primary/10 font-bold"
                  : "text-foreground/85 hover:text-primary hover:bg-muted/60"
              )}
            >
              <span className="whitespace-nowrap">Contact</span>
            </Link>
          </nav>

          {/* Right Action Buttons */}
          <div className="flex items-center gap-2 xl:gap-3 shrink-0">
            <Link
              to="/contact"
              className="hidden sm:inline-flex items-center justify-center gap-1.5 xl:gap-2 whitespace-nowrap rounded-full bg-primary px-3.5 sm:px-4 xl:px-6 py-2 xl:py-2.5 text-xs xl:text-sm font-bold text-primary-foreground shadow-celtic hover:bg-celtic-hover active:scale-[0.98] transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring shrink-0 select-none"
            >
              <span className="whitespace-nowrap font-bold">Get a Free Quote</span>
              <ArrowRight className="h-3.5 w-3.5 xl:h-4 xl:w-4 shrink-0" />
            </Link>

            {/* Mobile Hamburger Button */}
            <Button
              variant="outline"
              size="icon"
              className="lg:hidden rounded-lg shrink-0"
              onClick={() => setIsMobileOpen(true)}
              aria-label="Open mobile navigation menu"
              aria-expanded={isMobileOpen}
              aria-controls="mobile-nav-panel"
            >
              <Menu className="h-5 w-5" />
            </Button>
          </div>
        </div>

        {/* Mega Menu Dropdown */}
        <MegaMenu
          activeMenu={activeMegaMenu}
          closeMenu={() => setActiveMegaMenu(null)}
        />
      </header>

      {/* Mobile Drawer */}
      <MobileNav
        isOpen={isMobileOpen}
        onClose={() => setIsMobileOpen(false)}
      />
    </>
  );
};
