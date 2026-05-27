import { cn } from "@/lib/utils/cn";

export function Scanlines({ className }: { className?: string }) {
  return (
    <div
      aria-hidden
      className={cn(
        "pointer-events-none absolute inset-0 z-[60] opacity-[0.08] mix-blend-overlay",
        className,
      )}
      style={{
        backgroundImage:
          "repeating-linear-gradient(to bottom, transparent 0, transparent 2px, rgba(255,255,255,0.6) 2px, rgba(255,255,255,0.6) 3px)",
      }}
    />
  );
}
