import type { Lang } from "@/stores/language";

const translations = {
  es: {
    hero: {
      line1: "Forja una",
      line2: "DINASTÍA",
      line3: "en el campo de batalla.",
      desc: "GUNDYNASTY es un equipo profesional mexicano de Free Fire E-sports. Desde 2022 compitiendo, entrenando y construyendo una comunidad gamer al más alto nivel.",
      btnRoster: "Ver roster",
      btnStandings: "Clasificación",
      btnNews: "Noticias",
      stat1: "Años compitiendo",
      stat2: "Clasificación LATAM",
      stat3: "Rondas disputadas",
      emblem: "◆ Emblema Oficial ◆",
      scroll: "Scroll",
    },
    standings: {
      label: "/ @ffesportslatam · temporada 2026",
      title: "Clasificación",
      subtitle: "Tabla oficial · 16 rondas disputadas · GUN DYNASTY #3",
      hudLabel: "BOOYAH! TRANSMISIÓN ENTRANTE",
      colTeam: "Equipo",
      colRounds: "Rondas",
      colPoints: "Puntos",
      legendActive: "Jugando ronda actual",
      legendBreak: "En descanso",
    },
    roster: {
      label: "/ squad · roster oficial",
      title: "Plantilla",
      desc: "El escuadrón profesional de GUNDYNASTY compitiendo en @ffesportslatam. Seis jugadores · cuatro naciones · una sola dinastía.",
      status: "Roster activo · Temporada 2026",
      maps: "Mapas jugados",
      statKills: "Bajas",
      statHeadshots: "Headshots",
      statDamage: "Daño",
    },
    news: {
      label: "/ news · actualidad del equipo",
      title: "Noticias",
      desc: "Cobertura editorial de todo lo que pasa con GUNDYNASTY: fichajes, partidos, análisis tácticos y anuncios oficiales.",
      status: "Actualizado hoy · 6 artículos",
      readMore: "Leer más",
      viewAll: "Ver todas las noticias",
      categories: {
        Torneo: "Torneo",
        Fichaje: "Fichaje",
        Análisis: "Análisis",
        Anuncio: "Anuncio",
        Match: "Match",
      },
      articles: [
        {
          title: "GUNDYNASTY se consolida en el TOP 3 de LATAM tras el split de mayo",
          excerpt: "El escuadrón mexicano cerró las 16 rondas con 697 kills y 8 booyahs, asegurando su lugar entre los tres mejores equipos de la región.",
        },
        {
          title: "VEGATHK se une como titular para la temporada 2026",
          excerpt: "El jugador colombiano refuerza la línea ofensiva con sus 50K de daño promedio por torneo.",
        },
        {
          title: "GUNDYNASTY participará en el Esports World Cup 2026",
          excerpt: "Confirmada la asistencia del roster mexicano al evento internacional más importante del año.",
        },
        {
          title: "Resumen Match Day 16: 3 booyahs en una sola jornada histórica",
          excerpt: "El equipo logró su mejor noche de la temporada con clutches en Bermuda, Purgatorio y Alpine.",
        },
        {
          title: "Cómo SHYROO094 cambió la meta de escopetas en LATAM",
          excerpt: "Su técnica con M1887 Hydra ha redefinido el approach competitivo en mapas cerrados.",
        },
        {
          title: "Próximos rivales: análisis de LYON, LEVIATÁN y NOVA LEGION",
          excerpt: "Preparación táctica para los enfrentamientos decisivos del split de junio.",
        },
      ],
    },
    footer: {
      desc: "Equipo profesional de E-sports · México. Compitiendo al más alto nivel en Free Fire E-sports y construyendo una de las comunidades gamer más activas de Latinoamérica.",
      copyright: "E-sports Organization",
    },
  },

  en: {
    hero: {
      line1: "Forge a",
      line2: "DYNASTY",
      line3: "on the battlefield.",
      desc: "GUNDYNASTY is a professional Mexican Free Fire E-sports team. Since 2022 competing, training and building a top-level gaming community.",
      btnRoster: "View roster",
      btnStandings: "Standings",
      btnNews: "News",
      stat1: "Years competing",
      stat2: "LATAM Ranking",
      stat3: "Rounds played",
      emblem: "◆ Official Emblem ◆",
      scroll: "Scroll",
    },
    standings: {
      label: "/ @ffesportslatam · season 2026",
      title: "Standings",
      subtitle: "Official table · 16 rounds played · GUN DYNASTY #3",
      hudLabel: "BOOYAH! INCOMING BROADCAST",
      colTeam: "Team",
      colRounds: "Rounds",
      colPoints: "Points",
      legendActive: "Playing current round",
      legendBreak: "On break",
    },
    roster: {
      label: "/ squad · official roster",
      title: "Roster",
      desc: "The professional squad of GUNDYNASTY competing in @ffesportslatam. Six players · four nations · one dynasty.",
      status: "Active roster · Season 2026",
      maps: "Maps played",
      statKills: "Kills",
      statHeadshots: "Headshots",
      statDamage: "Damage",
    },
    news: {
      label: "/ news · team updates",
      title: "News",
      desc: "Editorial coverage of everything happening with GUNDYNASTY: signings, matches, tactical analysis and official announcements.",
      status: "Updated today · 6 articles",
      readMore: "Read more",
      viewAll: "See all news",
      categories: {
        Torneo: "Tournament",
        Fichaje: "Signing",
        Análisis: "Analysis",
        Anuncio: "Announcement",
        Match: "Match",
      },
      articles: [
        {
          title: "GUNDYNASTY consolidates in TOP 3 of LATAM after the May split",
          excerpt: "The Mexican squad closed 16 rounds with 697 kills and 8 booyahs, securing their spot among the top three teams in the region.",
        },
        {
          title: "VEGATHK joins as starter for the 2026 season",
          excerpt: "The Colombian player strengthens the offensive line with his average 50K damage per tournament.",
        },
        {
          title: "GUNDYNASTY will compete in the Esports World Cup 2026",
          excerpt: "Confirmed: the Mexican roster will attend the most important international event of the year.",
        },
        {
          title: "Match Day 16 recap: 3 booyahs in a single historic night",
          excerpt: "The team achieved their best night of the season with clutches on Bermuda, Purgatory and Alpine.",
        },
        {
          title: "How SHYROO094 changed the shotgun meta in LATAM",
          excerpt: "His M1887 Hydra technique has redefined the competitive approach on close-range maps.",
        },
        {
          title: "Upcoming rivals: analysis of LYON, LEVIATÁN and NOVA LEGION",
          excerpt: "Tactical preparation for the decisive matchups of the June split.",
        },
      ],
    },
    footer: {
      desc: "Professional E-sports team · Mexico. Competing at the highest level in Free Fire E-sports and building one of the most active gaming communities in Latin America.",
      copyright: "E-sports Organization",
    },
  },
} as const;

export type Translations = (typeof translations)["es"];

export function getT(lang: Lang): Translations {
  return translations[lang] as Translations;
}
