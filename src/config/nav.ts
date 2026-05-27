import type { Route } from "next";

export type NavItem = {
  label: string;
  href: Route;
  description?: string;
  badge?: "LIVE" | "NUEVO" | "HOT";
};

export const primaryNav: NavItem[] = [
  { label: "Noticias", href: "/noticias", description: "Lo último del universo Free Fire" },
  { label: "Eventos", href: "/eventos", description: "Calendario y eventos especiales" },
  { label: "Torneos", href: "/torneos", description: "Brackets, partidas y resultados", badge: "LIVE" },
  { label: "Ranking", href: "/ranking", description: "Top global y por región" },
  { label: "Guías", href: "/guias", description: "Personajes, armas, mapas, sensibilidad" },
  { label: "Recompensas", href: "/recompensas", description: "Eventos, top-up y daily" },
  { label: "Códigos", href: "/codigos", description: "Códigos activos verificados", badge: "HOT" },
  { label: "Comunidad", href: "/comunidad", description: "Streamers y Discord" },
];

export const footerNav = {
  Plataforma: [
    { label: "Sobre nosotros", href: "/sobre" },
    {
      label: "Comunidad",
      href: "https://www.instagram.com/gundynasty.gg?igsh=bXpyNzk3ZnhzdG5z&utm_source=qr",
    },
  ],
  Legal: [
    { label: "Privacidad", href: "/privacidad" },
    { label: "Términos", href: "/terminos" },
    { label: "Cookies", href: "/cookies" },
  ],
} satisfies Record<string, { label: string; href: string }[]>;
