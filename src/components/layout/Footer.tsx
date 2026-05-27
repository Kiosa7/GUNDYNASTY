"use client";

import Link from "next/link";
import { footerNav } from "@/config/nav";
import { siteConfig } from "@/config/site";
import { LogoGD } from "@/components/icons/LogoGD";
import { useLanguage } from "@/stores/language";
import { getT } from "@/lib/i18n";

export function Footer() {
  const { lang } = useLanguage();
  const t = getT(lang).footer;

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
              {t.desc}
            </p>

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
                    {item.href.startsWith("http") ? (
                      <a
                        href={item.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm text-ff-white/55 transition-colors hover:text-ff-cyan"
                      >
                        {item.label}
                      </a>
                    ) : (
                      <Link
                        href={item.href}
                        className="text-sm text-ff-white/55 transition-colors hover:text-ff-cyan"
                      >
                        {item.label}
                      </Link>
                    )}
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
            {t.copyright}
          </p>
          <p className="text-center font-mono text-[0.6rem] uppercase tracking-[0.2em] text-ff-white/20">
            {siteConfig.creators.disclaimer}
          </p>
        </div>
      </div>
    </footer>
  );
}
