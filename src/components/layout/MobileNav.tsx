"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import { useLanguage } from "@/stores/language";

const ease = [0.22, 1, 0.36, 1] as const;

const INSTAGRAM_URL =
  "https://www.instagram.com/gundynasty.gg?igsh=bXpyNzk3ZnhzdG5z&utm_source=qr";
const YOUTUBE_URL =
  "https://youtube.com/@gundynastyesport?si=RtM7RkIzyPZg3cuid";

function InstagramIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.75} strokeLinecap="round" strokeLinejoin="round" className="size-4 shrink-0" aria-hidden>
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  );
}

function YoutubeIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.75} strokeLinecap="round" strokeLinejoin="round" className="size-4 shrink-0" aria-hidden>
      <path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46A2.78 2.78 0 0 0 1.46 6.42 29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58 2.78 2.78 0 0 0 1.95 1.96C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 0 0 1.95-1.96A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58z" />
      <polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02" />
    </svg>
  );
}

export function MobileNav() {
  const [open, setOpen] = useState(false);
  const { lang, toggle } = useLanguage();
  const close = () => setOpen(false);

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className="grid size-9 place-items-center rounded-sm border border-ff-cyan/20 text-ff-white/70 transition-all hover:border-ff-cyan/50 hover:text-ff-cyan lg:hidden"
        aria-label="Abrir menú"
        aria-expanded={open}
      >
        <Menu className="size-5" />
      </button>

      <AnimatePresence>
        {open && (
          <>
            {/* Backdrop */}
            <motion.div
              key="backdrop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={close}
              className="fixed inset-0 z-50 bg-ff-black/80 backdrop-blur-sm"
            />

            {/* Drawer */}
            <motion.aside
              key="drawer"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.28, ease }}
              className="fixed right-0 top-0 bottom-0 z-50 flex w-72 flex-col bg-ff-graphite border-l border-ff-cyan/15"
            >
              {/* Drawer header */}
              <div className="flex h-16 shrink-0 items-center justify-between border-b border-ff-cyan/10 px-5">
                <span className="font-display text-xs font-bold tracking-widest uppercase text-ff-white/50">
                  Menú
                </span>
                <button
                  onClick={close}
                  className="grid size-9 place-items-center rounded-sm border border-ff-cyan/15 text-ff-white/50 hover:border-ff-cyan/40 hover:text-ff-cyan"
                  aria-label="Cerrar menú"
                >
                  <X className="size-5" />
                </button>
              </div>

              {/* Drawer body */}
              <div className="min-h-0 flex-1 overflow-y-auto">

                {/* Idioma */}
                <div className="border-b border-ff-cyan/10 px-5 py-5">
                  <p className="mb-3 font-mono text-[10px] uppercase tracking-widest text-ff-white/30">
                    Idioma
                  </p>
                  <button
                    onClick={toggle}
                    className="flex items-center gap-2 rounded-sm border border-ff-cyan/20 px-4 py-2 font-mono text-sm"
                  >
                    <span className={lang === "es" ? "font-bold text-ff-cyan" : "text-ff-white/35"}>ES</span>
                    <span className="text-ff-white/20">/</span>
                    <span className={lang === "en" ? "font-bold text-ff-cyan" : "text-ff-white/35"}>EN</span>
                  </button>
                </div>

                {/* Redes */}
                <div className="border-b border-ff-cyan/10 px-5 py-5">
                  <p className="mb-3 font-mono text-[10px] uppercase tracking-widest text-ff-white/30">
                    Redes
                  </p>
                  <div className="flex flex-col gap-2">
                    <a
                      href={INSTAGRAM_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={close}
                      className="flex items-center gap-3 rounded-sm border border-ff-cyan/15 px-4 py-3 text-sm text-ff-white/65 hover:border-ff-cyan/40 hover:text-ff-cyan"
                    >
                      <InstagramIcon />
                      @gundynasty.gg
                    </a>
                    <a
                      href={YOUTUBE_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={close}
                      className="flex items-center gap-3 rounded-sm border border-ff-cyan/15 px-4 py-3 text-sm text-ff-white/65 hover:border-ff-cyan/40 hover:text-ff-cyan"
                    >
                      <YoutubeIcon />
                      YouTube
                    </a>
                  </div>
                </div>

                {/* Secciones */}
                <div className="border-b border-ff-cyan/10 px-5 py-5">
                  <p className="mb-3 font-mono text-[10px] uppercase tracking-widest text-ff-white/30">
                    Secciones
                  </p>
                  <div className="flex flex-col">
                    {[
                      { label: "Ver Roster", href: "#roster" },
                      { label: "Clasificación", href: "#clasificacion" },
                      { label: "Noticias", href: "#noticias" },
                    ].map((item) => (
                      <a
                        key={item.href}
                        href={item.href}
                        onClick={close}
                        className="rounded-sm px-4 py-3 font-heading text-sm font-semibold uppercase tracking-wider text-ff-white/65 transition-colors hover:bg-ff-steel/50 hover:text-ff-cyan"
                      >
                        {item.label}
                      </a>
                    ))}
                  </div>
                </div>

                {/* Páginas */}
                <div className="px-5 py-5">
                  <p className="mb-3 font-mono text-[10px] uppercase tracking-widest text-ff-white/30">
                    Páginas
                  </p>
                  <div className="flex flex-col">
                    {[
                      { label: "Sobre nosotros", href: "/sobre" },
                      { label: "Privacidad", href: "/privacidad" },
                      { label: "Términos", href: "/terminos" },
                      { label: "Cookies", href: "/cookies" },
                    ].map((item) => (
                      <Link
                        key={item.href}
                        href={item.href}
                        onClick={close}
                        className="rounded-sm px-4 py-3 text-sm text-ff-white/50 transition-colors hover:bg-ff-steel/50 hover:text-ff-white/80"
                      >
                        {item.label}
                      </Link>
                    ))}
                  </div>
                </div>

              </div>
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
