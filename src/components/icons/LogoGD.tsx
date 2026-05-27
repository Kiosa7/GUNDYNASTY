import Image from "next/image";
import { cn } from "@/lib/utils/cn";

interface LogoGDProps {
  className?: string;
  title?: string;
  /** Override priority loading (true for above-the-fold placements like Header/Hero). */
  priority?: boolean;
}

export function LogoGD({
  className,
  title = "GUN DYNASTY",
  priority = false,
}: LogoGDProps) {
  return (
    <Image
      src="/images/logo-gd.png"
      alt={title}
      width={910}
      height={1059}
      priority={priority}
      className={cn("h-auto w-auto select-none", className)}
    />
  );
}
