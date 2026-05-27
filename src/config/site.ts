export const siteConfig = {
  name: "GUNDYNASTY",
  shortName: "GUNDYNASTY",
  tagline: "Equipo profesional de E-sports · México 🇲🇽",
  description:
    "GUNDYNASTY — Equipo profesional mexicano de Free Fire E-sports. Desde 2022 compitiendo al más alto nivel en @ffesportslatam. Roster, partidos, eventos, ranking y comunidad.",
  url: "https://gundynasty.com",
  locale: "es",
  founded: 2022,
  hq: "México",
  league: "@ffesportslatam",
  flag: "🇲🇽",
  ogImage: "/og/default.png",
  links: {
    twitter: "https://twitter.com/ffesportslatam",
    discord: "https://discord.gg/",
    youtube: "https://youtube.com/",
    twitch: "https://twitch.tv/",
    instagram: "https://instagram.com/",
    tiktok: "https://tiktok.com/",
  },
  creators: {
    company: "GUNDYNASTY",
    disclaimer:
      "GUNDYNASTY · Equipo profesional de E-sports · Since 2022 · Con sede en México 🇲🇽 · Compitiendo en @ffesportslatam",
  },
} as const;

export type SiteConfig = typeof siteConfig;
