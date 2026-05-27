"use client";

import { motion } from "framer-motion";
import {
  ArrowUpRight,
  Calendar,
  Crosshair,
  Megaphone,
  Newspaper,
  Trophy,
  UserPlus,
  Zap,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils/cn";
import { AnimatedGrid } from "@/components/effects/AnimatedGrid";

const ease = [0.22, 1, 0.36, 1] as const;

interface Article {
  category: "Torneo" | "Fichaje" | "Análisis" | "Anuncio" | "Match";
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  icon: LucideIcon;
  accent: string;
  featured?: boolean;
}

const articles: Article[] = [
  {
    category: "Torneo",
    title: "GUNDYNASTY se consolida en el TOP 3 de LATAM tras el split de mayo",
    excerpt:
      "El escuadrón mexicano cerró las 16 rondas con 697 kills y 8 booyahs, asegurando su lugar entre los tres mejores equipos de la región.",
    date: "23 May 2026",
    readTime: "4 min",
    icon: Trophy,
    accent: "from-ff-emerald via-ff-cyan to-ff-mint",
    featured: true,
  },
  {
    category: "Fichaje",
    title: "VEGATHK se une como titular para la temporada 2026",
    excerpt:
      "El jugador colombiano refuerza la línea ofensiva con sus 50K de daño promedio por torneo.",
    date: "20 May 2026",
    readTime: "3 min",
    icon: UserPlus,
    accent: "from-ff-mint to-ff-emerald",
  },
  {
    category: "Anuncio",
    title: "GUNDYNASTY participará en el Esports World Cup 2026",
    excerpt:
      "Confirmada la asistencia del roster mexicano al evento internacional más importante del año.",
    date: "18 May 2026",
    readTime: "2 min",
    icon: Megaphone,
    accent: "from-ff-teal to-ff-cyan",
  },
  {
    category: "Match",
    title: "Resumen Match Day 16: 3 booyahs en una sola jornada histórica",
    excerpt:
      "El equipo logró su mejor noche de la temporada con clutches en Bermuda, Purgatorio y Alpine.",
    date: "15 May 2026",
    readTime: "5 min",
    icon: Zap,
    accent: "from-ff-cyan via-ff-mint to-ff-signal",
  },
  {
    category: "Análisis",
    title: "Cómo SHYROO094 cambió la meta de escopetas en LATAM",
    excerpt:
      "Su técnica con M1887 Hydra ha redefinido el approach competitivo en mapas cerrados.",
    date: "12 May 2026",
    readTime: "6 min",
    icon: Crosshair,
    accent: "from-ff-emerald to-ff-teal",
  },
  {
    category: "Torneo",
    title: "Próximos rivales: análisis de LYON, LEVIATÁN y NOVA LEGION",
    excerpt:
      "Preparación táctica para los enfrentamientos decisivos del split de junio.",
    date: "10 May 2026",
    readTime: "8 min",
    icon: Newspaper,
    accent: "from-ff-teal to-ff-emerald",
  },
];

const categoryStyle: Record<Article["category"], string> = {
  Torneo: "bg-ff-emerald/20 text-ff-cyan border border-ff-emerald/40",
  Fichaje: "bg-ff-cyan/15 text-ff-cyan border border-ff-cyan/30",
  Análisis: "bg-ff-teal/20 text-ff-mint border border-ff-teal/40",
  Anuncio: "bg-ff-mint/15 text-ff-mint border border-ff-mint/30",
  Match: "bg-gradient-to-r from-ff-emerald/20 to-ff-cyan/20 text-ff-cyan border border-ff-cyan/30",
};

interface CardProps {
  article: Article;
  index: number;
}

function ArticleCard({ article, index }: CardProps) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.6, ease, delay: index * 0.06 }}
      className={cn(
        "group relative flex cursor-pointer flex-col overflow-hidden rounded-xl glass-card glass-card-hover transition-all duration-500 hover:-translate-y-1",
        article.featured && "lg:col-span-2 lg:row-span-2",
      )}
    >
      {/* Image / cover */}
      <div
        className={cn(
          "relative isolate overflow-hidden bg-gradient-to-br",
          article.accent,
          article.featured ? "aspect-[16/9]" : "aspect-[16/10]",
        )}
      >
        <div
          aria-hidden
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage:
              "linear-gradient(rgba(0,0,0,0.25) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,0.25) 1px, transparent 1px)",
            backgroundSize: article.featured ? "32px 32px" : "20px 20px",
          }}
        />
        <div
          aria-hidden
          className="absolute inset-0 bg-gradient-to-tr from-ff-black/40 via-transparent to-transparent"
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <article.icon
            className={cn(
              "text-white/20 transition-transform duration-700 group-hover:scale-110",
              article.featured ? "size-32" : "size-16",
            )}
            strokeWidth={1.25}
          />
        </div>
        {/* Category badge */}
        <span
          className={cn(
            "absolute left-4 top-4 inline-flex items-center rounded-sm px-2.5 py-1 font-heading text-[0.625rem] font-bold uppercase tracking-[0.25em] backdrop-blur-sm",
            categoryStyle[article.category],
          )}
        >
          {article.category}
        </span>
        {/* Hover arrow */}
        <div
          className={cn(
            "absolute bottom-4 right-4 grid size-10 place-items-center rounded-full bg-ff-black/70 text-ff-cyan border border-ff-cyan/30 opacity-0 transition-all duration-500 group-hover:opacity-100",
            "group-hover:translate-x-0 -translate-x-2",
          )}
        >
          <ArrowUpRight className="size-5" strokeWidth={2.5} />
        </div>
      </div>

      {/* Body */}
      <div
        className={cn(
          "flex flex-1 flex-col p-6",
          article.featured && "lg:p-8",
        )}
      >
        <div className="flex items-center gap-3 text-[0.625rem] uppercase tracking-[0.25em] text-ff-white/40">
          <span className="flex items-center gap-1">
            <Calendar className="size-3" />
            {article.date}
          </span>
          <span className="size-1 rounded-full bg-ff-cyan/30" />
          <span>{article.readTime}</span>
        </div>

        <h3
          className={cn(
            "mt-3 font-display font-extrabold uppercase leading-[1.1] tracking-tight text-ff-white/90 transition-colors group-hover:text-ff-cyan",
            article.featured
              ? "text-2xl lg:text-3xl xl:text-4xl"
              : "text-lg lg:text-xl",
          )}
        >
          {article.title}
        </h3>

        <p
          className={cn(
            "mt-3 text-sm text-ff-white/50",
            article.featured && "lg:text-base",
          )}
        >
          {article.excerpt}
        </p>

        <div className="mt-auto pt-5">
          <span className="inline-flex items-center gap-1.5 font-heading text-xs font-bold uppercase tracking-[0.25em] text-ff-cyan transition-all group-hover:gap-2.5">
            Leer más
            <ArrowUpRight className="size-3.5" strokeWidth={2.5} />
          </span>
        </div>
      </div>
    </motion.article>
  );
}

export function News() {
  return (
    <section className="relative overflow-hidden py-24 bg-ff-carbon">
      <AnimatedGrid variant="fine" animated={false} />
      <div
        aria-hidden
        className="absolute inset-0"
        style={{ background: "var(--section-top-glow)" }}
      />
      {/* Ambient blobs */}
      <div
        aria-hidden
        className="pointer-events-none absolute right-0 top-1/4 h-96 w-96 rounded-full bg-ff-teal/10 blur-3xl"
      />

      <div className="relative mx-auto max-w-7xl px-6">
        <header className="mb-12 flex flex-col items-center text-center">
          <p className="font-mono text-xs uppercase tracking-[0.4em] text-ff-cyan">
            / news · actualidad del equipo
          </p>
          <h2 className="mt-4 font-display text-[clamp(2.5rem,6vw,4.5rem)] font-extrabold uppercase leading-[0.95] tracking-tight text-grad-section">
            Noticias
          </h2>
          <p className="mt-5 max-w-2xl text-sm text-ff-white/55 md:text-base">
            Cobertura editorial de todo lo que pasa con{" "}
            <span className="font-semibold text-ff-cyan">GUNDYNASTY</span>:
            fichajes, partidos, análisis tácticos y anuncios oficiales.
          </p>
          <div className="mt-6 flex items-center gap-2 rounded-full border border-ff-cyan/20 bg-ff-graphite/60 px-4 py-1.5 backdrop-blur-sm">
            <span className="size-1.5 rounded-full bg-ff-emerald ff-pulse-live" />
            <span className="font-mono text-[0.625rem] uppercase tracking-[0.3em] text-ff-white/55">
              Actualizado hoy · 6 artículos
            </span>
          </div>
        </header>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {articles.map((a, i) => (
            <ArticleCard key={a.title} article={a} index={i} />
          ))}
        </div>

        <div className="mt-12 flex justify-center">
          <a
            href="#"
            className="group inline-flex items-center gap-2 rounded-sm border border-ff-cyan/30 bg-ff-graphite/60 px-6 py-3 font-heading text-xs font-bold uppercase tracking-[0.3em] text-ff-cyan backdrop-blur-sm transition-all hover:-translate-y-0.5 hover:bg-ff-cyan hover:text-ff-black hover:shadow-[var(--shadow-glow-cyan)]"
          >
            Ver todas las noticias
            <ArrowUpRight className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
        </div>
      </div>
    </section>
  );
}
