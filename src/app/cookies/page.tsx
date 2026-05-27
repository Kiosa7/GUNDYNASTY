import type { Metadata } from "next";
import { LegalLayout } from "@/components/layout/LegalLayout";

export const metadata: Metadata = {
  title: "Política de Cookies",
  description: "Política de cookies de GUNDYNASTY.",
};

export default function CookiesPage() {
  return (
    <LegalLayout
      title="Política de Cookies"
      subtitle="Última actualización: mayo 2026"
    >
      <h2>¿Qué son las cookies?</h2>
      <p>
        Las cookies son pequeños archivos de texto que los sitios web almacenan
        en tu dispositivo para recordar preferencias y mejorar la experiencia
        de navegación.
      </p>

      <h2>Cookies que utilizamos</h2>
      <p>Este sitio utiliza únicamente cookies técnicas esenciales:</p>
      <ul>
        <li>
          <strong style={{ color: "rgba(255,255,255,0.8)" }}>
            Preferencia de idioma
          </strong>{" "}
          — Recuerda si elegiste español o inglés durante tu sesión.
        </li>
        <li>
          <strong style={{ color: "rgba(255,255,255,0.8)" }}>
            Sesión de navegación
          </strong>{" "}
          — Cookies técnicas necesarias para el funcionamiento del sitio.
        </li>
      </ul>

      <h2>Cookies de terceros</h2>
      <p>
        Al acceder a enlaces externos (Instagram, YouTube, Twitch), esas
        plataformas pueden instalar sus propias cookies. No tenemos control
        sobre dichas cookies y te recomendamos consultar sus respectivas
        políticas.
      </p>

      <h2>Cómo gestionar las cookies</h2>
      <p>
        Puedes configurar tu navegador para bloquear o eliminar cookies. Ten
        en cuenta que bloquear cookies técnicas puede afectar el
        funcionamiento del sitio. Consulta la ayuda de tu navegador para más
        información.
      </p>

      <h2>Más información</h2>
      <p>
        Si tienes preguntas sobre nuestra política de cookies, contáctanos en
        @gundynasty.gg. Consulta también nuestra{" "}
        <a href="/privacidad">Política de Privacidad</a>.
      </p>
    </LegalLayout>
  );
}
