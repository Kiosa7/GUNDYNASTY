import { cn } from "@/lib/utils/cn";

interface AnimatedGridProps {
  variant?: "default" | "fine";
  animated?: boolean;
  className?: string;
}

export function AnimatedGrid({
  variant = "default",
  animated = true,
  className,
}: AnimatedGridProps) {
  return (
    <div
      aria-hidden
      className={cn(
        "pointer-events-none absolute inset-0",
        variant === "fine" ? "hud-grid-fine" : "hud-grid",
        animated && "ff-grid-pan",
        className,
      )}
    />
  );
}
