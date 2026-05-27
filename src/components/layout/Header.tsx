import Link from "next/link";
import { primaryNav } from "@/config/nav";
import { siteConfig } from "@/config/site";
import { Badge } from "@/components/ui/Badge";
import { LogoGD } from "@/components/icons/LogoGD";
import { MobileNav } from "@/components/layout/MobileNav";

export function Header() {
  return (
    <header className="fixed left-0 right-0 top-0 z-40 border-b border-ff-cyan/10 bg-ff-black/70 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
        {/* Logo */}
        <Link
          href="/"
          aria-label={siteConfig.name}
          className="group flex items-center gap-2.5"
        >
          <LogoGD
            priority
            className="h-9 w-auto transition-all duration-500 group-hover:brightness-125 group-hover:drop-shadow-[0_0_14px_rgba(0,229,199,0.55)]"
          />
          <span className="font-display text-lg font-extrabold tracking-[0.22em] text-ff-white">
            GUN<span className="text-ff-cyan/40">·</span>
            <span className="text-grad-neon">DYNASTY</span>
          </span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-1 lg:flex" aria-label="Principal">
          {primaryNav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="group relative px-3 py-2 font-heading text-xs uppercase tracking-widest text-ff-white/65 transition-colors hover:text-ff-cyan"
            >
              <span className="flex items-center gap-2">
                {item.label}
                {item.badge === "LIVE" && <Badge variant="live">LIVE</Badge>}
                {item.badge === "HOT" && <Badge variant="hot">HOT</Badge>}
                {item.badge === "NUEVO" && <Badge variant="new">NUEVO</Badge>}
              </span>
              <span className="absolute inset-x-3 -bottom-px h-px scale-x-0 bg-ff-cyan transition-transform duration-300 group-hover:scale-x-100" />
            </Link>
          ))}
        </nav>

        {/* Desktop CTA + Mobile hamburger */}
        <div className="flex items-center gap-3">
          <Link
            href="/comunidad"
            className="hidden h-9 items-center rounded-sm border border-ff-cyan/40 px-4 font-heading text-xs uppercase tracking-widest text-ff-cyan transition-all hover:bg-ff-cyan hover:text-ff-black hover:shadow-[var(--shadow-glow-cyan)] md:inline-flex"
          >
            Únete a la dinastía
          </Link>
          <MobileNav />
        </div>
      </div>
    </header>
  );
}
