"use client";

import { motion } from "framer-motion";
import { ArrowDown, Crosshair, Newspaper, Trophy } from "lucide-react";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { Scanlines } from "@/components/effects/Scanlines";
import { Particles } from "@/components/effects/Particles";
import { AnimatedGrid } from "@/components/effects/AnimatedGrid";
import { LogoGD } from "@/components/icons/LogoGD";
import { siteConfig } from "@/config/site";
import { useLanguage } from "@/stores/language";
import { getT } from "@/lib/i18n";

const ease = [0.22, 1, 0.36, 1] as const;

export function HeroCinematic() {
  const { lang } = useLanguage();
  const t = getT(lang).hero;

  return (
    <section className="relative isolate flex min-h-[100dvh] items-center overflow-hidden pt-20">
      <AnimatedGrid />
      <div
        aria-hidden
        className="absolute inset-0 bg-[radial-gradient(ellipse_at_30%_40%,rgba(0,229,199,0.18),transparent_60%),radial-gradient(ellipse_at_70%_60%,rgba(0,109,85,0.30),transparent_60%)]"
      />
      <Particles count={36} />
      <Scanlines />

      {/* Mobile watermark logo — decorative only, behind content */}
      <div
        aria-hidden
        className="pointer-events-none absolute right-[-10%] top-1/2 -translate-y-1/2 opacity-[0.055] lg:hidden"
      >
        <LogoGD className="w-[320px]" />
      </div>

      <div className="relative z-10 mx-auto grid w-full max-w-7xl grid-cols-1 px-6 py-10 lg:grid-cols-12 lg:items-center lg:gap-8 lg:py-16">
        {/* Text column — full width on mobile, half on desktop */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease }}
          className="lg:col-span-6"
        >
          <div className="flex flex-wrap items-center gap-3">
            <Badge variant="live">
              <span className="size-1.5 rounded-full bg-ff-black" /> LIVE
            </Badge>
            <span className="font-mono text-[0.625rem] uppercase tracking-[0.3em] text-ff-cyan/80">
              Since {siteConfig.founded} · {siteConfig.hq} {siteConfig.flag} · {siteConfig.league}
            </span>
          </div>

          <motion.h1
            initial={{ opacity: 0, y: 32 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease, delay: 0.1 }}
            className="mt-4 font-display text-[clamp(2rem,7vw,6rem)] font-extrabold uppercase leading-[0.95] tracking-tight"
          >
            <span className="block">{t.line1}</span>
            <span className="block text-grad-neon">{t.line2}</span>
            <span className="block">{t.line3}</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease, delay: 0.3 }}
            className="mt-4 max-w-xl text-sm text-ff-white/65 md:text-lg"
          >
            {t.desc}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease, delay: 0.45 }}
            className="mt-6 flex flex-col gap-3 sm:flex-row"
          >
            <a href="#roster">
              <Button variant="primary" size="lg">
                <Crosshair className="size-4" /> {t.btnRoster}
              </Button>
            </a>
            <a href="#clasificacion">
              <Button variant="ghost" size="lg">
                <Trophy className="size-4" /> {t.btnStandings}
              </Button>
            </a>
            <a href="#noticias">
              <Button variant="ghost" size="lg">
                <Newspaper className="size-4" /> {t.btnNews}
              </Button>
            </a>
          </motion.div>

          <motion.dl
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, ease, delay: 0.7 }}
            className="mt-8 grid max-w-lg grid-cols-3 gap-6 border-t border-ff-cyan/10 pt-6"
          >
            {(
              [
                { v: "3+", l: t.stat1 },
                { v: "#3", l: t.stat2 },
                { v: "16", l: t.stat3 },
              ] as const
            ).map(({ v, l }) => (
              <div key={l}>
                <dt className="font-display text-2xl font-bold text-ff-cyan md:text-3xl">
                  {v}
                </dt>
                <dd className="mt-1 text-[0.625rem] uppercase tracking-[0.2em] text-ff-white/50">
                  {l}
                </dd>
              </div>
            ))}
          </motion.dl>
        </motion.div>

        {/* Logo column — desktop only */}
        <motion.div
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.4, ease, delay: 0.2 }}
          className="relative hidden lg:block lg:col-span-6"
        >
          <div className="relative mx-auto aspect-square w-full">
            <motion.div
              aria-hidden
              animate={{ opacity: [0.45, 0.85, 0.45], scale: [0.96, 1.04, 0.96] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute inset-0 -m-16 rounded-full bg-[radial-gradient(circle,rgba(0,229,199,0.55),transparent_60%)] blur-3xl"
            />
            <motion.div
              aria-hidden
              animate={{ rotate: 360 }}
              transition={{ duration: 28, repeat: Infinity, ease: "linear" }}
              className="absolute inset-0 -m-6 rounded-full bg-[var(--grad-holo)] opacity-25 blur-2xl"
            />
            <motion.div
              aria-hidden
              animate={{ rotate: 360 }}
              transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
              className="absolute inset-0 -m-4 rounded-full border-2 border-dashed border-ff-cyan/35"
            />
            <motion.div
              aria-hidden
              animate={{ rotate: -360 }}
              transition={{ duration: 35, repeat: Infinity, ease: "linear" }}
              className="absolute inset-8 rounded-full border border-ff-mint/40"
            >
              {[0, 90, 180, 270].map((deg) => (
                <span
                  key={deg}
                  aria-hidden
                  className="absolute left-1/2 top-0 h-2.5 w-0.5 -translate-x-1/2 -translate-y-1 bg-ff-cyan"
                  style={{
                    transformOrigin: "50% calc(50% + 0px)",
                    transform: `translate(-50%, -4px) rotate(${deg}deg)`,
                  }}
                />
              ))}
            </motion.div>
            <motion.div
              aria-hidden
              animate={{ rotate: 360 }}
              transition={{ duration: 22, repeat: Infinity, ease: "linear" }}
              className="absolute inset-16 rounded-full border border-ff-cyan/30"
            />
            <motion.div
              aria-hidden
              animate={{ rotate: 360 }}
              transition={{ duration: 14, repeat: Infinity, ease: "linear" }}
              className="absolute inset-0"
            >
              <span className="absolute left-1/2 top-0 size-2 -translate-x-1/2 rounded-full bg-ff-cyan shadow-[var(--shadow-glow-signal)]" />
              <span className="absolute left-0 top-1/2 size-1.5 -translate-y-1/2 rounded-full bg-ff-mint shadow-[var(--shadow-glow-mint)]" />
              <span className="absolute right-0 top-1/2 size-1.5 -translate-y-1/2 rounded-full bg-ff-mint shadow-[var(--shadow-glow-mint)]" />
            </motion.div>
            <motion.div
              animate={{ scale: [1, 1.035, 1] }}
              transition={{ duration: 3.6, repeat: Infinity, ease: "easeInOut" }}
              className="absolute inset-0 flex items-center justify-center"
            >
              <div className="relative">
                <div
                  aria-hidden
                  className="absolute inset-0 -m-12 rounded-full bg-[radial-gradient(circle,rgba(0,30,49,0.7),transparent_55%)]"
                />
                <LogoGD
                  priority
                  className="relative mx-auto h-auto w-[min(72%,22rem)] brightness-0 invert drop-shadow-[0_0_50px_rgba(0,229,199,0.65)]"
                />
              </div>
            </motion.div>
            <div aria-hidden className="pointer-events-none absolute inset-0 -m-2">
              {[
                { c: "left-0 top-0", l: "border-l-2 border-t-2" },
                { c: "right-0 top-0", l: "border-r-2 border-t-2" },
                { c: "left-0 bottom-0", l: "border-l-2 border-b-2" },
                { c: "right-0 bottom-0", l: "border-r-2 border-b-2" },
              ].map((b, i) => (
                <span
                  key={i}
                  className={`absolute size-8 border-ff-cyan/60 ${b.c} ${b.l}`}
                />
              ))}
            </div>
          </div>

          <div className="mt-6 text-center">
            <p className="font-mono text-[0.625rem] uppercase tracking-[0.45em] text-ff-cyan/70">
              {t.emblem}
            </p>
            <p className="mt-1 font-display text-sm uppercase tracking-[0.35em] text-ff-white/90">
              GUN · DYNASTY
            </p>
          </div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-6 left-1/2 z-10 flex -translate-x-1/2 flex-col items-center gap-2 text-[0.625rem] uppercase tracking-[0.3em] text-ff-cyan/60"
      >
        {t.scroll}
        <ArrowDown className="size-3 animate-bounce" />
      </motion.div>
    </section>
  );
}
