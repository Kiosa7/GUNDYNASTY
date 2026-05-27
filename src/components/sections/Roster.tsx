"use client";

import { motion } from "framer-motion";
import { ArrowDown, Crosshair, Swords, User } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils/cn";
import { AnimatedGrid } from "@/components/effects/AnimatedGrid";

const ease = [0.22, 1, 0.36, 1] as const;

interface Player {
  nick: string;
  name: string;
  country: string;
  flag: string;
  role: "TITULAR" | "SUPLENTE";
  maps: number;
  kills: number;
  headshots: number;
  damage: number;
}

const roster: Player[] = [
  {
    nick: "SHYROO094",
    name: "Juan Esteban Pelaez Pico",
    country: "Colombia",
    flag: "🇨🇴",
    role: "TITULAR",
    maps: 64,
    kills: 187,
    headshots: 125,
    damage: 93_447,
  },
  {
    nick: "DAVID444",
    name: "José David Cabrera Rodríguez",
    country: "Rep. Dominicana",
    flag: "🇩🇴",
    role: "TITULAR",
    maps: 47,
    kills: 141,
    headshots: 74,
    damage: 78_829,
  },
  {
    nick: "VENETHK",
    name: "Alexis Emir Pulido Magello",
    country: "Venezuela",
    flag: "🇻🇪",
    role: "TITULAR",
    maps: 44,
    kills: 89,
    headshots: 115,
    damage: 59_719,
  },
  {
    nick: "STU",
    name: "Stewart Jose Zegarra Baños",
    country: "Perú",
    flag: "🇵🇪",
    role: "TITULAR",
    maps: 13,
    kills: 22,
    headshots: 17,
    damage: 20_804,
  },
  {
    nick: "VEGATHK",
    name: "Jesus Daniel Vence Vega",
    country: "Colombia",
    flag: "🇨🇴",
    role: "TITULAR",
    maps: 32,
    kills: 82,
    headshots: 58,
    damage: 50_695,
  },
  {
    nick: "BNLXYY",
    name: "Agustin Moroni",
    country: "Argentina",
    flag: "🇦🇷",
    role: "TITULAR",
    maps: 56,
    kills: 256,
    headshots: 80,
    damage: 172_937,
  },
];

const fmt = new Intl.NumberFormat("es-MX");

interface StatProps {
  icon: LucideIcon;
  label: string;
  value: string;
}

function Stat({ icon: Icon, label, value }: StatProps) {
  return (
    <div className="flex items-center gap-2.5">
      <Icon className="size-4 shrink-0 text-ff-cyan/70" strokeWidth={2} />
      <div>
        <p className="text-[0.6rem] font-heading uppercase tracking-[0.18em] text-ff-white/35">
          {label}
        </p>
        <p className="font-display text-sm font-bold leading-none text-ff-white/90">
          {value}
        </p>
      </div>
    </div>
  );
}

interface PlayerCardProps {
  player: Player;
  index: number;
}

function PlayerCard({ player, index }: PlayerCardProps) {
  const initial = player.nick.slice(0, 1);
  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.55, ease, delay: index * 0.06 }}
      className="group relative overflow-hidden rounded-xl glass-card glass-card-hover transition-all duration-500 hover:-translate-y-1"
    >
      <div className="grid grid-cols-[1fr_1.35fr]">
        {/* Photo area */}
        <div className="relative isolate overflow-hidden bg-gradient-to-br from-ff-steel via-ff-graphite to-ff-carbon">
          <div
            aria-hidden
            className="absolute inset-0"
            style={{
              backgroundImage:
                "radial-gradient(circle at 30% 30%, rgba(0,229,199,0.12), transparent 55%), radial-gradient(circle at 70% 80%, rgba(0,109,85,0.18), transparent 55%)",
            }}
          />
          <div
            aria-hidden
            className="absolute inset-0 opacity-20"
            style={{
              backgroundImage:
                "linear-gradient(rgba(0,229,199,0.15) 1px, transparent 1px), linear-gradient(90deg, rgba(0,229,199,0.15) 1px, transparent 1px)",
              backgroundSize: "20px 20px",
            }}
          />
          <div className="absolute inset-0 flex flex-col items-center justify-end gap-1 pb-3">
            <User
              className="size-20 text-ff-cyan/25 transition-transform duration-700 group-hover:scale-105"
              strokeWidth={1.25}
            />
            <span className="font-display text-[0.6rem] font-bold uppercase tracking-[0.35em] text-ff-cyan/40">
              GD · {initial}
            </span>
          </div>
          <div
            aria-hidden
            className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-ff-emerald via-ff-cyan to-ff-mint"
          />
        </div>

        {/* Info area */}
        <div className="relative p-5">
          <span
            className="absolute right-4 top-4 text-lg leading-none"
            title={player.country}
            aria-label={player.country}
          >
            {player.flag}
          </span>

          <h3 className="pr-8 font-display text-xl font-extrabold uppercase tracking-tight text-ff-cyan">
            {player.nick}
          </h3>
          <p className="mt-1 line-clamp-2 font-heading text-[0.75rem] font-medium uppercase tracking-wide text-ff-white/50">
            {player.name}
          </p>

          <div className="mt-3 inline-flex items-center gap-2">
            <span className="size-1.5 rounded-full bg-ff-emerald shadow-[0_0_6px_rgba(0,109,85,0.7)]" />
            <span className="font-heading text-[0.625rem] font-bold uppercase tracking-[0.25em] text-ff-white/70">
              {player.role}
            </span>
          </div>

          <div className="mt-3 h-px w-full bg-gradient-to-r from-ff-emerald via-ff-cyan/50 to-transparent" />

          <p className="mt-3 text-[0.7rem] uppercase tracking-[0.18em] text-ff-white/40">
            Mapas jugados:{" "}
            <span className="font-display text-sm font-bold text-ff-white/80">
              {player.maps}
            </span>
          </p>
        </div>
      </div>

      {/* Stats footer */}
      <footer className="grid grid-cols-3 gap-3 border-t border-ff-cyan/10 bg-ff-graphite/40 px-5 py-4">
        <Stat icon={ArrowDown} label="Bajas" value={fmt.format(player.kills)} />
        <Stat
          icon={Crosshair}
          label="Headshots"
          value={fmt.format(player.headshots)}
        />
        <Stat icon={Swords} label="Daño" value={fmt.format(player.damage)} />
      </footer>
    </motion.article>
  );
}

export function Roster() {
  return (
    <section className="relative overflow-hidden py-24 bg-ff-graphite">
      <AnimatedGrid variant="default" animated={false} />
      <div
        aria-hidden
        className="absolute inset-0"
        style={{ background: "var(--section-top-glow)" }}
      />
      {/* Ambient glow blobs */}
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/4 top-1/3 h-64 w-64 -translate-x-1/2 rounded-full bg-ff-emerald/10 blur-3xl"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute right-1/4 bottom-1/3 h-64 w-64 translate-x-1/2 rounded-full bg-ff-cyan/8 blur-3xl"
      />

      <div className="relative mx-auto max-w-7xl px-6">
        <header className="mb-12 flex flex-col items-center text-center">
          <p className="font-mono text-xs uppercase tracking-[0.4em] text-ff-cyan">
            / squad · roster oficial
          </p>
          <h2 className="mt-4 font-display text-[clamp(2.5rem,6vw,4.5rem)] font-extrabold uppercase leading-[0.95] tracking-tight text-grad-section">
            Plantilla
          </h2>
          <p className="mt-5 max-w-2xl text-sm text-ff-white/55 md:text-base">
            El escuadrón profesional de{" "}
            <span className="font-semibold text-ff-cyan">GUNDYNASTY</span>{" "}
            compitiendo en @ffesportslatam. Seis jugadores · cuatro naciones ·
            una sola dinastía.
          </p>

          <div className="mt-6 flex items-center gap-2 rounded-full border border-ff-cyan/20 bg-ff-graphite/60 px-4 py-1.5 backdrop-blur-sm">
            <span className="size-1.5 rounded-full bg-ff-emerald ff-pulse-live" />
            <span className="font-mono text-[0.625rem] uppercase tracking-[0.3em] text-ff-white/60">
              Roster activo · Temporada 2026
            </span>
          </div>
        </header>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {roster.map((p, i) => (
            <PlayerCard key={p.nick} player={p} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
