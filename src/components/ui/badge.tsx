import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const badgeVariants = cva(
  "inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
  {
    variants: {
      variant: {
        default:
          "border-transparent bg-primary text-primary-foreground hover:bg-primary/90",
        secondary:
          "border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80",
        destructive:
          "border-transparent bg-destructive text-destructive-foreground hover:bg-destructive/80",
        outline: "text-foreground border-border",
        subtle: "border-primary/20 bg-primary/10 text-primary font-semibold",
        success: "border-teagreen/40 bg-teagreen/25 text-deepolive font-semibold",
        muted: "border-border bg-muted text-muted-foreground",
        vanilla: "border-transparent bg-vanilla text-deepolive font-bold shadow-sm",
        teagreen: "border-transparent bg-teagreen text-deepolive font-bold shadow-sm",
        celtic: "border-transparent bg-celtic text-white font-bold shadow-sm",
        pill: "border border-border/70 bg-card/90 text-foreground font-semibold px-3 py-1 shadow-sm",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
  return (
    <div className={cn(badgeVariants({ variant }), className)} {...props} />
  );
}

export { Badge, badgeVariants };
