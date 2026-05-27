"use client";

import { useLanguage } from "@/stores/language";

export function LanguageToggle() {
  const { lang, toggle } = useLanguage();

  return (
    <button
      onClick={toggle}
      aria-label={lang === "es" ? "Switch to English" : "Cambiar a Español"}
      className="flex items-center gap-1.5 rounded-sm border border-ff-cyan/20 px-3 py-2 font-mono text-[0.625rem] uppercase tracking-[0.2em] text-ff-white/60 transition-all hover:border-ff-cyan/50 hover:text-ff-cyan"
    >
      <span className={lang === "es" ? "text-ff-cyan" : "text-ff-white/35"}>
        ES
      </span>
      <span className="text-ff-white/20">/</span>
      <span className={lang === "en" ? "text-ff-cyan" : "text-ff-white/35"}>
        EN
      </span>
    </button>
  );
}
