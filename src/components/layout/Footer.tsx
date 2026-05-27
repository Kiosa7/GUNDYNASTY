import Link from "next/link";
import { footerNav } from "@/config/nav";
import { siteConfig } from "@/config/site";
import { LogoGD } from "@/components/icons/LogoGD";

const socialLinks = [
  { label: "Twitter", href: siteConfig.links.twitter, short: "TW" },
  { label: "Discord", href: siteConfig.links.discord, short: "DC" },
  { label: "YouTube", href: siteConfig.links.youtube, short: "YT" },
  { label: "Twitch", href: siteConfig.links.twitch, short: "TV" },
  { label: "Instagram", href: siteConfig.links.instagram, short: "IG" },
  { label: "TikTok", href: siteConfig.links.tiktok, short: "TK" },
];

export function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-ff-cyan/15 bg-ff-graphite/50">
      {/* Animated top border */}
      <div
        aria-hidden
        className="absolute inset-x-0 top-0 h-px ff-border-flow"
      />

      {/* Ambient glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-0 h-64 w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-ff-emerald/8 blur-3xl"
      />

      <div className="relative mx-auto max-w-7xl px-6 pt-14 pb-8">
        <div className="grid gap-10 md:grid-cols-4">
          {/* Brand column */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-3">
              <LogoGD className="h-12 w-auto drop-shadow-[0_0_16px_rgba(0,109,85,0.5)]" />
              <p className="font-display text-xl tracking-[0.22em] text-ff-white">
                GUN<span className="text-ff-cyan/40">·</span>
                <span className="text-grad-neon">DYNASTY</span>
              </p>
            </div>

            <p className="mt-3 font-mono text-[0.625rem] uppercase tracking-[0.3em] text-ff-cyan/60">
              Since {siteConfig.founded} · {siteConfig.hq} {siteConfig.flag} ·{" "}
              {siteConfig.league}
            </p>

            <p className="mt-4 max-w-md text-sm text-ff-white/50">
              {siteConfig.tagline}. Compitiendo al más alto nivel en Free Fire
              E-sports y construyendo una de las comunidades gamer más activas
              de Latinoamérica.
            </p>

            {/* Social links */}
            <div className="mt-6 flex flex-wrap gap-2">
              {socialLinks.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="grid size-9 place-items-center rounded-sm border border-ff-cyan/15 font-mono text-[0.625rem] font-bold tracking-wider text-ff-white/45 transition-all hover:border-ff-cyan/40 hover:text-ff-cyan hover:shadow-[var(--shadow-glow-cyan-sm)]"
                >
                  {s.short}
                </a>
              ))}
            </div>
          </div>

          {/* Nav columns */}
          {Object.entries(footerNav).map(([title, items]) => (
            <div key={title}>
              <h3 className="font-heading text-xs uppercase tracking-[0.3em] text-ff-cyan/80">
                {title}
              </h3>
              <ul className="mt-4 space-y-2.5">
                {items.map((item) => (
                  <li key={item.label}>
                    <Link
                      href={item.href}
                      className="text-sm text-ff-white/55 transition-colors hover:text-ff-cyan"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="mt-12 flex flex-col items-center justify-between gap-3 border-t border-ff-cyan/10 pt-6 sm:flex-row">
          <p className="text-center text-xs text-ff-white/25">
            © {new Date().getFullYear()} {siteConfig.creators.company} ·
            E-sports Organization
          </p>
          <p className="text-center font-mono text-[0.6rem] uppercase tracking-[0.2em] text-ff-white/20">
            {siteConfig.creators.disclaimer}
          </p>
        </div>
      </div>
    </footer>
  );
}
