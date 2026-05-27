import { create } from "zustand";

export type Lang = "es" | "en";

interface LanguageStore {
  lang: Lang;
  toggle: () => void;
}

export const useLanguage = create<LanguageStore>()((set, get) => ({
  lang: "es",
  toggle: () => set({ lang: get().lang === "es" ? "en" : "es" }),
}));
