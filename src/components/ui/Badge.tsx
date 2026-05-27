import { cva, type VariantProps } from "class-variance-authority";
import type { HTMLAttributes } from "react";
import { cn } from "@/lib/utils/cn";

const badgeVariants = cva(
  "inline-flex items-center gap-1.5 px-2.5 py-0.5 text-[0.625rem] font-heading uppercase tracking-[0.2em] rounded-sm",
  {
    variants: {
      variant: {
        live: "bg-ff-cyan text-ff-black ff-pulse-live",
        new: "bg-ff-emerald text-ff-white",
        hot: "bg-ff-mint text-ff-black",
        premium:
          "bg-gradient-to-r from-ff-cyan via-ff-mint to-ff-cyan bg-[length:200%_100%] text-ff-black ff-shimmer",
        verified: "bg-ff-cyan/15 text-ff-cyan border border-ff-cyan/40",
        outline: "border border-ff-fog text-ff-white/70",
      },
    },
    defaultVariants: { variant: "outline" },
  },
);

interface BadgeProps
  extends HTMLAttributes<HTMLSpanElement>,
    VariantProps<typeof badgeVariants> {}

export function Badge({ className, variant, ...props }: BadgeProps) {
  return (
    <span className={cn(badgeVariants({ variant }), className)} {...props} />
  );
}
