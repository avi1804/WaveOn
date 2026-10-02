import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-full text-sm font-bold tracking-tight transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 select-none active:scale-[0.97]",
  {
    variants: {
      variant: {
        default:
          "bg-primary text-primary-foreground hover:bg-celtic-hover hover:-translate-y-0.5 shadow-md shadow-primary/25",
        destructive:
          "bg-destructive text-destructive-foreground hover:bg-destructive/90 shadow-sm",
        outline:
          "border-2 border-border bg-card text-foreground hover:bg-teagreen-light hover:border-teagreen hover:-translate-y-0.5",
        secondary:
          "border-2 border-primary/25 bg-background text-primary hover:bg-teagreen-light hover:border-primary hover:-translate-y-0.5",
        ghost: "hover:bg-muted hover:text-foreground",
        link: "text-primary underline-offset-4 hover:underline",
        subtle: "bg-primary-subtle text-primary hover:bg-celtic-subtle hover:-translate-y-0.5",
        vanilla: "bg-vanilla text-deepolive hover:bg-vanilla-hover hover:-translate-y-0.5 shadow-sm",
        teagreen: "bg-teagreen text-deepolive hover:bg-teagreen-hover hover:-translate-y-0.5 shadow-sm",
      },
      size: {
        default: "h-11 px-6 py-2.5 rounded-full",
        sm: "h-9 px-4 text-xs rounded-full",
        lg: "h-12 px-8 text-base rounded-full shadow-md shadow-primary/20",
        icon: "h-10 w-10 rounded-full",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
