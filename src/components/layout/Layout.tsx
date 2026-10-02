import React from "react";
import { Outlet } from "react-router-dom";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { Breadcrumbs } from "./Breadcrumbs";
import { ScrollToTop } from "./ScrollToTop";
import { Toaster } from "@/components/ui/sonner";
import { SchemaOrg } from "@/components/seo/SchemaOrg";

export const Layout: React.FC = () => {
  return (
    <div className="flex min-h-screen flex-col bg-background font-sans antialiased text-foreground">
      {/* Scroll to top listener */}
      <ScrollToTop />

      {/* Global Organization Structured Data Schema */}
      <SchemaOrg schemaType="Organization" />

      {/* Sticky Global Navigation Header */}
      <Header />

      {/* Breadcrumb Bar on Inner Pages */}
      <Breadcrumbs />

      {/* Main Content Area */}
      <main id="main-content" className="flex-1 focus:outline-none">
        <Outlet />
      </main>

      {/* Global 4-Column Footer */}
      <Footer />

      {/* Global Toast Provider */}
      <Toaster position="top-right" richColors closeButton />
    </div>
  );
};
