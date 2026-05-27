 '"use client";

import { useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { primaryNav } from "@/config/nav";
import { Badge } from "@/components/ui/Badge";

const ease = [0.22, 1, 0.36, 1] as const;

export function MobileNav() {
  const [open, setOpen] = useState(false);

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
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
              onClick={() => setOpen(false)}
              className="fixed inset-0 z-50 bg-ff-black/85 backdrop-blur-sm"
            />

            {/* Drawer */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.35, ease }}
              className="fixed inset-y-0 right-0 z-50 flex w-[min(85vw,380px)] flex-col border-l border-ff-cyan/15 bg-ff-graphite"
            >
              {/* Top bar */}
              <div className="flex items-center justify-between border-b border-ff-cyan/10 px-6 py-5">
                <span className="font-display text-xs font-bold tracking-[0.35em] text-ff-white/60 uppercase">
                  Navegación
                </span>
                <button
                  onClick={() => setOpen(false)}
                  className="grid size-9 place-items-center rounded-sm border border-ff-cyan/20 text-ff-white/60 transition-all hover:border-ff-cyan/50 hover:text-ff-cyan"
                  aria-label="Cerrar menú"
                >
                  <X className="size-5" />
                </button>
              </div>

              {/* Nav links */}
              <nav className="flex-1 overflow-y-auto py-4" aria-label="Menú móvil">
                <ul className="space-y-0.5 px-3">
                  {primaryNav.map((item, i) => (
                    <motion.li
                      key={item.href}
                      initial={{ opacity: 0, x: 16 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.05 + i * 0.04, duration: 0.3, ease }}
                    >
                      <Link
                        href={item.href}
                        onClick={() => setOpen(false)}
                        className="group flex items-center justify-between rounded-sm px-4 py-3.5 font-heading text-sm font-semibold uppercase tracking-widest text-ff-white/65 transition-all hover:bg-ff-steel/40 hover:text-ff-cyan"
                      >
                        <span>{item.label}</span>
                        <div className="flex items-center gap-2">
                          {item.badge === "LIVE" && <Badge variant="live">LIVE</Badge>}
                          {item.badge === "HOT" && <Badge variant="hot">HOT</Badge>}
                          {item.badge === "NUEVO" && <Badge variant="new">NUEVO</Badge>}
                        </div>
                      </Link>
                    </motion.li>
                  ))}
                </ul>
              </nav>

              {/* Bottom CTA */}
              <div className="border-t border-ff-cyan/10 p-5">
                <Link
                  href="/comunidad"
                  onClick={() => setOpen(false)}
                  className="flex h-12 w-full items-center justify-center rounded-sm bg-ff-cyan font-heading text-sm font-bold uppercase tracking-widest text-ff-black transition-all hover:shadow-[var(--shadow-glow-cyan)]"
                >
                  Únete a la dinastía
                </Link>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
