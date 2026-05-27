"use client";

import { motion } from "framer-motion";
import { Crosshair, Skull, Target, Trophy } from "lucide-react";
import { cn } from "@/lib/utils/cn";
import { AnimatedGrid } from "@/components/effects/AnimatedGrid";
import { useLanguage } from "@/stores/language";
import { getT } from "@/lib/i18n";

const ease = [0.22, 1, 0.36, 1] as const;

interface Team {
  pos: number;
  short: string;
  name: string;
  rounds: number;
  kills: number;
  booyahs: number;
  points: number;
  status: "active" | "inactive";
  accent: string;
  monoColor: string;
  highlight?: boolean;
}

const teams: Team[] = [
  {
    pos: 1,
    short: "L",
    name: "LYON",
    rounds: 16,
    kills: 865,
    booyahs: 12,
    points: 1291,
    status: "active",
    accent: "from-amber-400 to-orange-500",
    monoColor: "text-slate-900",
  },
  {
    pos: 2,
    short: "LV",
    name: "LEVIATÁN",
    rounds: 16,
    kills: 719,
    booyahs: 11,
    points: 1089,
    status: "active",
    accent: "from-sky-400 to-blue-600",
    monoColor: "text-white",
  },
  {
    pos: 3,
    short: "GD",
    name: "GUN DYNASTY",
    rounds: 16,
    kills: 697,
    booyahs: 8,
    points: 1081,
    status: "active",
    accent: "from-ff-emerald via-ff-cyan to-ff-mint",
    monoColor: "text-ff-black",
    highlight: true,
  },
  {
    pos: 4,
    short: "NL",
    name: "NOVA LEGION",
    rounds: 16,
    kills: 548,
    booyahs: 8,
    points: 875,
    status: "active",
    accent: "from-violet-500 to-fuchsia-600",
    monoColor: "text-white",
  },
  {
    pos: 5,
    short: "M",
    name: "MOVISTAR KOI",
    rounds: 16,
    kills: 528,
    booyahs: 6,
    points: 845,
    status: "inactive",
    accent: "from-sky-300 to-teal-400",
    monoColor: "text-slate-900",
  },
  {
    pos: 6,
    short: "9Z",
    name: "9Z GLOBANT",
    rounds: 16,
    kills: 532,
    booyahs: 6,
    points: 840,
    status: "inactive",
    accent: "from-slate-600 to-slate-800",
    monoColor: "text-white",
  },
  {
    pos: 7,
    short: "ES",
    name: "ESTORM DRK",
    rounds: 16,
    kills: 506,
    booyahs: 8,
    points: 832,
    status: "inactive",
    accent: "from-amber-400 to-yellow-600",
    monoColor: "text-slate-900",
  },
  {
    pos: 8,
    short: "∞",
    name: "INFINITY E-SPORTS",
    rounds: 16,
    kills: 526,
    booyahs: 5,
    points: 813,
    status: "inactive",
    accent: "from-rose-500 to-red-600",
    monoColor: "text-white",
  },
];

const fmt = new Intl.NumberFormat("es-MX");

function Barcode() {
  return (
    <svg
      aria-hidden
      viewBox="0 0 100 36"
      className="h-7 w-24 text-ff-cyan/50"
      fill="currentColor"
    >
      {[
        2, 5, 8, 12, 13, 17, 20, 24, 25, 26, 30, 34, 38, 42, 43, 47, 51, 55,
        56, 60, 64, 68, 72, 73, 77, 81, 85, 89, 90, 94,
      ].map((x, i) => (
        <rect
          key={i}
          x={x}
          y="0"
          width={i % 3 === 0 ? 2.4 : 1.2}
          height="28"
        />
      ))}
      <text
        x="50"
        y="34"
        textAnchor="middle"
        fontSize="4"
        fontFamily="monospace"
        fill="currentColor"
      >
        FF-ESPORTS-LATAM
      </text>
    </svg>
  );
}

export function Standings() {
  const { lang } = useLanguage();
  const t = getT(lang).standings;

  return (
    <section id="clasificacion" className="relative overflow-hidden py-24 bg-ff-carbon">
      <AnimatedGrid variant="fine" animated={false} />
      <div
        aria-hidden
        className="absolute inset-0"
        style={{ background: "var(--section-top-glow)" }}
      />

      {/* Watermark */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-24 select-none text-center font-display text-[clamp(5rem,16vw,14rem)] font-extrabold uppercase leading-none tracking-tighter text-ff-cyan/[0.04]"
      >
        FF·ESPORTS
      </div>

      <div className="relative mx-auto max-w-7xl px-6">
        {/* HUD strip */}
        <div className="mb-10 flex flex-wrap items-center justify-between gap-4 border-y border-ff-cyan/15 py-4">
          <div className="flex items-center gap-4">
            <Barcode />
            <div className="font-mono text-[0.625rem] uppercase leading-tight text-ff-cyan/60">
              <p className="font-bold text-ff-cyan/80">
                {t.hudLabel}
              </p>
              <p>24.7136° N · 46.6753° E</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <div className="flex h-3 w-40 overflow-hidden rounded-sm">
              <div className="flex-1 bg-ff-emerald" />
              <div className="flex-1 bg-ff-cyan" />
              <div className="flex-1 bg-amber-400" />
              <div className="flex-1 bg-rose-500" />
              <div className="flex-1 bg-violet-500" />
              <div className="flex-1 bg-ff-steel" />
            </div>
          </div>
        </div>

        <header className="mb-10 text-center">
          <p className="font-mono text-xs uppercase tracking-[0.4em] text-ff-cyan">
            {t.label}
          </p>
          <h2 className="mt-3 font-display text-[clamp(2.5rem,7vw,5rem)] font-extrabold uppercase leading-[0.95] tracking-tight text-grad-section">
            {t.title}
          </h2>
          <p className="mt-4 text-sm text-ff-white/50">
            {t.subtitle}
          </p>
        </header>

        {/* Table */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease }}
          className="overflow-hidden rounded-xl glass-card neon-border"
        >
          {/* Column header */}
          <div className="hidden grid-cols-[60px_1fr_50px_80px_80px_90px_90px] items-center gap-4 border-b border-ff-cyan/10 bg-ff-graphite/60 px-6 py-3 font-heading text-[0.625rem] uppercase tracking-[0.25em] text-ff-white/35 md:grid">
            <span>Pos.</span>
            <span>{t.colTeam}</span>
            <span></span>
            <span className="text-right">{t.colRounds}</span>
            <span className="text-right">Kills</span>
            <span className="text-right">Booyahs</span>
            <span className="text-right">{t.colPoints}</span>
          </div>

          <ul className="divide-y divide-ff-cyan/[0.08]">
            {teams.map((t, i) => (
              <motion.li
                key={t.name}
                initial={{ opacity: 0, x: -8 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, ease, delay: i * 0.04 }}
                className={cn(
                  "group relative grid grid-cols-[40px_1fr_24px_70px] items-center gap-3 px-5 py-4 transition-all duration-300 hover:bg-ff-steel/30 md:grid-cols-[60px_1fr_50px_80px_80px_90px_90px] md:gap-4 md:px-6 md:py-5",
                  t.highlight && "neon-row-highlight",
                )}
              >
                {t.highlight && (
                  <span
                    aria-hidden
                    className="absolute inset-y-0 left-0 w-1 bg-gradient-to-b from-ff-emerald via-ff-cyan to-ff-mint"
                  />
                )}

                {/* POS */}
                <span
                  className={cn(
                    "font-display text-xl font-extrabold leading-none md:text-2xl",
                    t.pos === 1 && "text-amber-400",
                    t.pos === 2 && "text-ff-fog",
                    t.pos === 3 && "text-ff-cyan",
                    t.pos > 3 && "text-ff-white/35",
                  )}
                >
                  {t.pos}
                </span>

                {/* LOGO + NAME */}
                <div className="flex items-center gap-3 md:gap-4">
                  <div
                    className={cn(
                      "grid size-10 shrink-0 place-items-center rounded-lg bg-gradient-to-br font-display text-sm font-extrabold uppercase tracking-tight shadow-sm md:size-12 md:text-base",
                      t.accent,
                      t.monoColor,
                      t.highlight &&
                        "ring-2 ring-ff-cyan ring-offset-2 ring-offset-ff-carbon",
                    )}
                  >
                    {t.short}
                  </div>
                  <div className="min-w-0">
                    <p
                      className={cn(
                        "truncate font-display text-sm font-bold uppercase tracking-tight md:text-base",
                        t.highlight ? "text-ff-cyan" : "text-ff-white/90",
                      )}
                    >
                      {t.name}
                    </p>
                    <p className="mt-0.5 text-[0.625rem] uppercase tracking-widest text-ff-white/35 md:hidden">
                      {fmt.format(t.kills)} K · {t.booyahs} B
                    </p>
                  </div>
                </div>

                {/* STATUS dot */}
                <span
                  aria-label={t.status === "active" ? "Jugando" : "Inactivo"}
                  className={cn(
                    "block size-2.5 rounded-full justify-self-center",
                    t.status === "active"
                      ? "bg-ff-emerald shadow-[0_0_10px_rgba(0,109,85,0.6)]"
                      : "bg-ff-steel",
                  )}
                />

                {/* RONDAS */}
                <span className="hidden text-right font-mono text-sm font-semibold text-ff-white/55 md:block">
                  {t.rounds}
                </span>

                {/* KILLS */}
                <span className="hidden text-right font-mono text-sm font-semibold text-ff-white/55 md:block">
                  {fmt.format(t.kills)}
                </span>

                {/* BOOYAHS */}
                <span className="hidden text-right font-mono text-sm font-semibold text-ff-white/55 md:block">
                  {t.booyahs}
                </span>

                {/* PUNTOS */}
                <span
                  className={cn(
                    "text-right font-display text-base font-extrabold md:text-lg",
                    t.highlight ? "text-ff-cyan" : "text-ff-white/80",
                  )}
                >
                  {fmt.format(t.points)}
                </span>
              </motion.li>
            ))}
          </ul>

          {/* Legend footer */}
          <div className="flex flex-wrap items-center justify-between gap-4 border-t border-ff-cyan/10 bg-ff-graphite/40 px-6 py-3 text-[0.625rem] uppercase tracking-widest text-ff-white/35">
            <div className="flex items-center gap-4">
              <span className="flex items-center gap-1.5">
                <span className="size-2 rounded-full bg-ff-emerald" />
                {t.legendActive}
              </span>
              <span className="flex items-center gap-1.5">
                <span className="size-2 rounded-full bg-ff-steel" />
                {t.legendBreak}
              </span>
            </div>
            <div className="flex items-center gap-4">
              <span className="flex items-center gap-1">
                <Skull className="size-3" /> Kills
              </span>
              <span className="flex items-center gap-1">
                <Trophy className="size-3" /> Booyahs
              </span>
              <span className="flex items-center gap-1">
                <Target className="size-3" /> Puntos
              </span>
              <span className="flex items-center gap-1">
                <Crosshair className="size-3" /> Rondas
              </span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
