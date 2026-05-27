import type { Metadata } from "next";
import { LegalLayout } from "@/components/layout/LegalLayout";

export const metadata: Metadata = {
  title: "Sobre nosotros",
  description: "Conoce a GUNDYNASTY, el equipo profesional mexicano de Free Fire E-sports.",
};

export default function SobrePage() {
  return (
    <LegalLayout
      title="Sobre nosotros"
      subtitle="Conoce la historia y la visión detrás de GUNDYNASTY."
    >
      <h2>Quiénes somos</h2>
      <p>
        GUNDYNASTY es un equipo profesional de Free Fire E-sports fundado en 2022,
        con sede en México. Competimos al más alto nivel en la liga oficial
        @ffesportslatam, representando a Latinoamérica con jugadores de Colombia,
        Venezuela, Perú, República Dominicana y Argentina.
      </p>
      <p>
        Nuestra misión es consolidarnos como la organización de referencia en el
        Free Fire competitivo de LATAM, combinando talento individual, estrategia
        de equipo y una comunidad apasionada.
      </p>

      <h2>Nuestra historia</h2>
      <p>
        Desde nuestra fundación hemos disputado más de 16 rondas en torneos
        oficiales, alcanzando el Top 3 de la clasificación LATAM en la temporada
        2026. Con 697 kills y 8 booyahs en el split de mayo, el equipo demostró
        que GUNDYNASTY es una fuerza constante en la escena competitiva.
      </p>

      <h2>El escuadrón</h2>
      <p>
        Nuestro roster está formado por seis jugadores titulares de alto rendimiento:
        SHYROO094, DAVID444, VENETHK, STU, VEGATHK y BNLXYY. Cuatro naciones,
        una sola dinastía.
      </p>

      <h2>Contacto</h2>
      <p>
        Para colaboraciones, sponsorships y prensa, contáctanos a través de
        nuestras redes sociales en{" "}
        <a
          href="https://www.instagram.com/gundynasty.gg"
          target="_blank"
          rel="noopener noreferrer"
        >
          @gundynasty.gg
        </a>{" "}
        o en nuestro canal de{" "}
        <a
          href="https://youtube.com/@gundynastyesport"
          target="_blank"
          rel="noopener noreferrer"
        >
          YouTube
        </a>
        .
      </p>
    </LegalLayout>
  );
}
