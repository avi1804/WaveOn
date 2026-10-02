import React, { lazy, Suspense } from "react";
import { createBrowserRouter } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { Skeleton } from "@/components/ui/skeleton";

// Lazy-load page components for code splitting & optimal performance (File 08 §5)
const HomePage = lazy(() => import("@/pages/HomePage"));
const ServicesPage = lazy(() => import("@/pages/ServicesPage"));
const ServiceDetailPage = lazy(() => import("@/pages/ServiceDetailPage"));
const ProcessPage = lazy(() => import("@/pages/ProcessPage"));
const PricingPage = lazy(() => import("@/pages/PricingPage"));
const IndustriesPage = lazy(() => import("@/pages/IndustriesPage"));
const HireDevelopersPage = lazy(() => import("@/pages/HireDevelopersPage"));
const RoleDetailPage = lazy(() => import("@/pages/RoleDetailPage"));
const CaseStudiesPage = lazy(() => import("@/pages/CaseStudiesPage"));
const CaseStudyDetailPage = lazy(() => import("@/pages/CaseStudyDetailPage"));
const AboutPage = lazy(() => import("@/pages/AboutPage"));
const BlogPage = lazy(() => import("@/pages/BlogPage"));
const BlogPostPage = lazy(() => import("@/pages/BlogPostPage"));
const ContactPage = lazy(() => import("@/pages/ContactPage"));
const LegalPage = lazy(() => import("@/pages/LegalPage"));
const NotFoundPage = lazy(() => import("@/pages/NotFoundPage"));

// Suspense Fallback Skeleton
const PageSkeleton = () => (
  <div className="container mx-auto py-20 space-y-8 animate-pulse max-w-4xl" role="status" aria-label="Loading page content">
    <Skeleton className="h-12 w-3/4 mx-auto rounded-xl" />
    <Skeleton className="h-6 w-1/2 mx-auto rounded-lg" />
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-10">
      <Skeleton className="h-64 rounded-2xl" />
      <Skeleton className="h-64 rounded-2xl" />
      <Skeleton className="h-64 rounded-2xl" />
    </div>
  </div>
);

const withSuspense = (Component: React.ComponentType) => (
  <Suspense fallback={<PageSkeleton />}>
    <Component />
  </Suspense>
);

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: withSuspense(HomePage),
      },
      {
        path: "services",
        element: withSuspense(ServicesPage),
      },
      {
        path: "services/:slug",
        element: withSuspense(ServiceDetailPage),
      },
      {
        path: "process",
        element: withSuspense(ProcessPage),
      },
      {
        path: "pricing",
        element: withSuspense(PricingPage),
      },
      {
        path: "industries",
        element: withSuspense(IndustriesPage),
      },
      {
        path: "hire-developers",
        element: withSuspense(HireDevelopersPage),
      },
      {
        path: "hire-developers/:slug",
        element: withSuspense(RoleDetailPage),
      },
      {
        path: "case-studies",
        element: withSuspense(CaseStudiesPage),
      },
      {
        path: "case-studies/:slug",
        element: withSuspense(CaseStudyDetailPage),
      },
      {
        path: "about",
        element: withSuspense(AboutPage),
      },
      {
        path: "blog",
        element: withSuspense(BlogPage),
      },
      {
        path: "blog/:slug",
        element: withSuspense(BlogPostPage),
      },
      {
        path: "contact",
        element: withSuspense(ContactPage),
      },
      {
        path: "privacy-policy",
        element: withSuspense(LegalPage),
      },
      {
        path: "terms-of-service",
        element: withSuspense(LegalPage),
      },
      {
        path: "accessibility",
        element: withSuspense(LegalPage),
      },
      {
        path: "*",
        element: withSuspense(NotFoundPage),
      },
    ],
  },
]);
