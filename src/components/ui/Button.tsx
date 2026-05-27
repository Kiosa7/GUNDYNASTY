import { cva, type VariantProps } from "class-variance-authority";
import { forwardRef, type ButtonHTMLAttributes } from "react";
import { cn } from "@/lib/utils/cn";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 font-heading font-semibold uppercase tracking-wider transition-all duration-300 ease-[var(--ease-out-expo)] disabled:opacity-50 disabled:pointer-events-none relative overflow-hidden",
  {
    variants: {
      variant: {
        primary:
          "bg-ff-cyan text-ff-black hover:shadow-[var(--shadow-glow-cyan)] hover:-translate-y-0.5",
        secondary:
          "bg-ff-emerald text-ff-white hover:shadow-[var(--shadow-glow-emerald)] hover:-translate-y-0.5",
        mint:
          "bg-ff-mint text-ff-black hover:shadow-[var(--shadow-glow-mint)] hover:-translate-y-0.5",
        ghost:
          "bg-transparent text-ff-white border border-ff-fog hover:border-ff-cyan hover:text-ff-cyan",
        glass:
          "bg-glass text-ff-white hover:border-ff-cyan/40 hover:text-ff-cyan",
        outline:
          "bg-transparent text-ff-cyan border border-ff-cyan/60 hover:bg-ff-cyan hover:text-ff-black",
      },
      size: {
        sm: "h-9 px-4 text-xs",
        md: "h-11 px-6 text-sm",
        lg: "h-14 px-8 text-base",
      },
      shape: {
        sharp: "rounded-none",
        rounded: "rounded-md",
        pill: "rounded-full",
        clipped:
          "[clip-path:polygon(8%_0,100%_0,100%_70%,92%_100%,0_100%,0_30%)]",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "md",
      shape: "clipped",
    },
  },
);

export interface ButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, shape, ...props }, ref) => (
    <button
      ref={ref}
      className={cn(buttonVariants({ variant, size, shape }), className)}
      {...props}
    />
  ),
);

Button.displayName = "Button";
