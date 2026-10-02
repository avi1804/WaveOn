import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { toast } from "sonner";
import { SeoHead } from "@/components/seo/SeoHead";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/config/site";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  MessageCircle,
  CheckCircle2,
  Send,
  Loader2,
  ShieldCheck,
} from "lucide-react";

// Form Validation Schema per File 12 specifications
const quoteFormSchema = z.object({
  fullName: z
    .string()
    .min(2, { message: "Full name must be at least 2 characters." }),
  workEmail: z
    .string()
    .email({ message: "Please provide a valid business email." }),
  companyName: z
    .string()
    .min(2, { message: "Company name must be at least 2 characters." }),
  serviceCategory: z.string().min(1, { message: "Please select a service category." }),
  budgetRange: z.string().min(1, { message: "Please select an estimated budget range." }),
  timeline: z.string().min(1, { message: "Please select an intended start timeline." }),
  projectDetails: z
    .string()
    .min(10, { message: "Please share at least a short description of your project." }),
});

type QuoteFormValues = z.infer<typeof quoteFormSchema>;

/**
 * Clearly demarcated submitForm() stub for future backend integration.
 * In this frontend-only build, it logs payload to console and returns simulated success.
 */
export async function submitForm(data: QuoteFormValues): Promise<{ success: boolean; id: string }> {
  // Simulate network delay of 750ms without making actual HTTP requests
  await new Promise((resolve) => setTimeout(resolve, 750));
  
  // Log payload to browser console
  console.log("[WaveOn Backend Stub] Form submission received:", {
    timestamp: new Date().toISOString(),
    payload: data,
  });

  return {
    success: true,
    id: `WO-${Date.now().toString(36).toUpperCase()}`,
  };
}

export const ContactPage: React.FC = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [submissionId, setSubmissionId] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    setValue,
    watch,
    reset,
    formState: { errors },
  } = useForm<QuoteFormValues>({
    resolver: zodResolver(quoteFormSchema),
    defaultValues: {
      fullName: "",
      workEmail: "",
      companyName: "",
      serviceCategory: "Custom Web Development",
      budgetRange: "$10,000 – $25,000",
      timeline: "Within 2–4 Weeks",
      projectDetails: "",
    },
  });

  const selectedCategory = watch("serviceCategory");
  const selectedBudget = watch("budgetRange");

  const categories = [
    "Custom Web Development",
    "Web Design & UI/UX",
    "eCommerce Development",
    "Mobile App Development",
    "Dedicated Developer Staffing",
    "SEO & Digital Marketing",
  ];

  const budgetTiers = [
    "< $10,000",
    "$10,000 – $25,000",
    "$25,000 – $50,000",
    "$50,000+",
  ];

  const onSubmit = async (values: QuoteFormValues) => {
    setIsSubmitting(true);
    try {
      const response = await submitForm(values);
      if (response.success) {
        setIsSuccess(true);
        setSubmissionId(response.id);
        toast.success("Scoping inquiry received! We'll reply within 24 hours.", {
          description: `Reference confirmation ID: ${response.id}`,
        });
      }
    } catch {
      toast.error("Failed to submit inquiry. Please try again or message via WhatsApp.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleResetForm = () => {
    reset();
    setIsSuccess(false);
    setSubmissionId(null);
  };

  return (
    <>
      <SeoHead
        title="Contact & Free Scoping Call — WaveOn Digital"
        description="Book a free 30-minute scoping call or request a project estimate. We evaluate requirements, propose architecture, and provide honest ballpark estimates."
        canonicalPath="/contact"
      />

      {/* Hero Header */}
      <section className="py-16 md:py-20 border-b border-border/60 bg-gradient-to-b from-muted/30 to-background">
        <div className="container mx-auto text-center max-w-3xl space-y-4">
          <Badge variant="subtle" className="text-xs uppercase tracking-wider">
            Start a Conversation
          </Badge>
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-foreground">
            Let's Scope Your Next Digital Breakthrough
          </h1>
          <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
            Fill out the project scope estimator below, or reach out directly for immediate assistance. We reply within one business day with a dedicated senior solutions architect.
          </p>
        </div>
      </section>

      {/* Main Content Area */}
      <section className="py-16 lg:py-24 border-b border-border/60 bg-background">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            {/* Form Column (7 cols) */}
            <div className="lg:col-span-7">
              <div className="rounded-3xl border border-border/80 bg-card p-8 sm:p-10 shadow-sm">
                {isSuccess ? (
                  /* Success State (File 12 §2.4: what happened + what happens next) */
                  <div className="text-center py-10 space-y-5 animate-in fade-in zoom-in-95 duration-300">
                    <div className="h-16 w-16 rounded-full bg-emerald-500/10 text-emerald-600 flex items-center justify-center mx-auto">
                      <CheckCircle2 className="h-10 w-10" />
                    </div>

                    <h2 className="text-2xl font-bold text-foreground">
                      Inquiry Received Successfully!
                    </h2>

                    <div className="rounded-xl bg-muted/50 border border-border/80 p-4 max-w-md mx-auto text-xs space-y-1">
                      <p className="text-muted-foreground font-mono">
                        Confirmation Tracking ID:{" "}
                        <strong className="text-primary font-bold">{submissionId}</strong>
                      </p>
                      <p className="text-muted-foreground">
                        A confirmation notification has been registered in the system.
                      </p>
                    </div>

                    <div className="text-sm text-muted-foreground max-w-md mx-auto leading-relaxed">
                      <strong className="text-foreground">What happens next:</strong> One of our senior solutions architects will review your project parameters and reach out within 24 hours to schedule your free 30-minute scoping session.
                    </div>

                    <div className="pt-4">
                      <Button onClick={handleResetForm} variant="outline" className="text-xs">
                        Submit Another Inquiry
                      </Button>
                    </div>
                  </div>
                ) : (
                  /* Form State */
                  <form onSubmit={handleSubmit(onSubmit)} className="space-y-6" noValidate>
                    <div className="space-y-1">
                      <h2 className="text-2xl font-bold text-foreground">
                        Project Scope Estimator
                      </h2>
                      <p className="text-xs text-muted-foreground">
                        All fields marked are required to prepare an accurate estimate.
                      </p>
                    </div>

                    {/* Service Category Selector */}
                    <div className="space-y-2">
                      <label className="text-xs font-bold uppercase tracking-wider text-foreground block">
                        1. Select Primary Service *
                      </label>
                      <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
                        {categories.map((cat) => (
                          <button
                            key={cat}
                            type="button"
                            onClick={() => setValue("serviceCategory", cat)}
                            className={`rounded-full py-2.5 px-3 text-xs font-bold text-center border-2 transition-all ${
                              selectedCategory === cat
                                ? "border-celtic bg-celtic text-white shadow-sm"
                                : "border-border/80 bg-card text-foreground hover:border-teagreen hover:bg-teagreen-light"
                            }`}
                          >
                            {cat}
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* Budget Selector */}
                    <div className="space-y-2">
                      <label className="text-xs font-bold uppercase tracking-wider text-foreground block">
                        2. Estimated Project Budget *
                      </label>
                      <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
                        {budgetTiers.map((b) => (
                          <button
                            key={b}
                            type="button"
                            onClick={() => setValue("budgetRange", b)}
                            className={`rounded-full py-2.5 px-3 text-xs font-bold text-center border-2 transition-all ${
                              selectedBudget === b
                                ? "border-celtic bg-celtic text-white shadow-sm"
                                : "border-border/80 bg-card text-foreground hover:border-teagreen hover:bg-teagreen-light"
                            }`}
                          >
                            {b}
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* Contact Info Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                      <div className="space-y-1.5">
                        <label
                          htmlFor="fullName"
                          className="text-xs font-semibold text-foreground"
                        >
                          Full Name *
                        </label>
                        <Input
                          id="fullName"
                          placeholder="e.g. Alex Morgan"
                          {...register("fullName")}
                          aria-invalid={!!errors.fullName}
                        />
                        {errors.fullName && (
                          <p className="text-[11px] text-destructive font-medium">
                            {errors.fullName.message}
                          </p>
                        )}
                      </div>

                      <div className="space-y-1.5">
                        <label
                          htmlFor="workEmail"
                          className="text-xs font-semibold text-foreground"
                        >
                          Work Email *
                        </label>
                        <Input
                          id="workEmail"
                          type="email"
                          placeholder="alex@company.com"
                          {...register("workEmail")}
                          aria-invalid={!!errors.workEmail}
                        />
                        {errors.workEmail && (
                          <p className="text-[11px] text-destructive font-medium">
                            {errors.workEmail.message}
                          </p>
                        )}
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="space-y-1.5">
                        <label
                          htmlFor="companyName"
                          className="text-xs font-semibold text-foreground"
                        >
                          Company / Organization *
                        </label>
                        <Input
                          id="companyName"
                          placeholder="Acme Corp"
                          {...register("companyName")}
                          aria-invalid={!!errors.companyName}
                        />
                        {errors.companyName && (
                          <p className="text-[11px] text-destructive font-medium">
                            {errors.companyName.message}
                          </p>
                        )}
                      </div>

                      <div className="space-y-1.5">
                        <label
                          htmlFor="timeline"
                          className="text-xs font-semibold text-foreground"
                        >
                          Start Timeline *
                        </label>
                        <Input
                          id="timeline"
                          placeholder="e.g. Immediately, or next month"
                          {...register("timeline")}
                        />
                      </div>
                    </div>

                    {/* Project Details Textarea */}
                    <div className="space-y-1.5">
                      <label
                        htmlFor="projectDetails"
                        className="text-xs font-semibold text-foreground"
                      >
                        Project Details & Technical Goals *
                      </label>
                      <Textarea
                        id="projectDetails"
                        placeholder="Tell us about what you're building, target audience, timeline, or current technical bottlenecks..."
                        {...register("projectDetails")}
                        aria-invalid={!!errors.projectDetails}
                      />
                      {errors.projectDetails && (
                        <p className="text-[11px] text-destructive font-medium">
                          {errors.projectDetails.message}
                        </p>
                      )}
                    </div>

                    {/* Submit Button */}
                    <Button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full h-12 text-sm font-bold shadow-md shadow-primary/20"
                    >
                      {isSubmitting ? (
                        <>
                          <Loader2 className="h-4 w-4 animate-spin mr-2" />
                          <span>Validating & Submitting...</span>
                        </>
                      ) : (
                        <>
                          <span>Submit Scoping Inquiry</span>
                          <Send className="h-4 w-4 ml-2" />
                        </>
                      )}
                    </Button>

                    <div className="flex items-center justify-center gap-2 text-[11px] text-muted-foreground pt-1">
                      <ShieldCheck className="h-3.5 w-3.5 text-primary" />
                      <span>We respect your privacy. All inquiries protected by mutual NDA.</span>
                    </div>
                  </form>
                )}
              </div>
            </div>

            {/* Direct Contact Details Column (5 cols) */}
            <div className="lg:col-span-5 space-y-8">
              <div className="rounded-3xl border border-border/80 bg-card p-8 space-y-6 shadow-sm">
                <h3 className="text-xl font-bold text-foreground">
                  Direct Office Contacts
                </h3>

                <div className="space-y-4 text-sm text-foreground/90">
                  <div className="flex items-start gap-3">
                    <MapPin className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                    <div>
                      <strong className="block text-foreground text-xs uppercase font-bold tracking-wider">
                        Headquarters
                      </strong>
                      <span className="text-xs text-muted-foreground leading-relaxed">
                        {siteConfig.contact.address}
                      </span>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Phone className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                    <div>
                      <strong className="block text-foreground text-xs uppercase font-bold tracking-wider">
                        Phone
                      </strong>
                      <a
                        href={`tel:${siteConfig.contact.phone.replace(/[^0-9+]/g, "")}`}
                        className="text-xs text-primary font-semibold hover:underline"
                      >
                        {siteConfig.contact.phone}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Mail className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                    <div>
                      <strong className="block text-foreground text-xs uppercase font-bold tracking-wider">
                        Email
                      </strong>
                      <a
                        href={`mailto:${siteConfig.contact.email}`}
                        className="text-xs text-primary font-semibold hover:underline"
                      >
                        {siteConfig.contact.email}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Clock className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                    <div>
                      <strong className="block text-foreground text-xs uppercase font-bold tracking-wider">
                        Office Hours
                      </strong>
                      <span className="text-xs text-muted-foreground">
                        {siteConfig.contact.workingHours}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Direct WhatsApp Action Box */}
                <div className="rounded-2xl border border-emerald-500/30 bg-emerald-500/5 p-5 space-y-3">
                  <div className="flex items-center gap-2">
                    <MessageCircle className="h-5 w-5 text-emerald-500" />
                    <h4 className="text-sm font-bold text-foreground">
                      Need Immediate Answers?
                    </h4>
                  </div>
                  <p className="text-xs text-muted-foreground leading-relaxed">
                    Message our senior engineering team directly on WhatsApp for quick scoping consultations.
                  </p>
                  <a
                    href={siteConfig.contact.whatsappLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-emerald-600 px-4 py-2.5 text-xs font-bold text-white hover:bg-emerald-700 transition-colors"
                  >
                    <span>Open WhatsApp Chat</span>
                  </a>
                </div>
              </div>

              {/* Scoping Promises */}
              <div className="rounded-3xl border border-border/80 bg-muted/30 p-6 space-y-3">
                <span className="text-xs font-bold uppercase tracking-wider text-primary block">
                  The WaveOn Guarantee:
                </span>
                <div className="space-y-2 text-xs text-muted-foreground">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-primary shrink-0" />
                    <span>Free 30-min scoping call with a senior engineer</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-primary shrink-0" />
                    <span>Itemized milestone estimate delivered in 24 hours</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-primary shrink-0" />
                    <span>Strict adherence to client NDAs</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactPage;
