import type { Metadata } from "next";
import { LegalLayout } from "@/components/layout/LegalLayout";

export const metadata: Metadata = {
  title: "Política de Privacidad",
  description: "Política de privacidad de GUNDYNASTY.",
};

export default function PrivacidadPage() {
  return (
    <LegalLayout
      title="Política de Privacidad"
      subtitle="Última actualización: mayo 2026"
    >
      <h2>1. Información que recopilamos</h2>
      <p>
        GUNDYNASTY es un sitio informativo de carácter fan-made. No recopilamos
        datos personales de forma activa. Al visitar este sitio, tu navegador
        puede transmitir información técnica estándar (dirección IP, tipo de
        navegador, páginas visitadas) que se procesa de forma anónima con fines
        estadísticos.
      </p>

      <h2>2. Uso de la información</h2>
      <p>La información técnica recopilada se utiliza exclusivamente para:</p>
      <ul>
        <li>Analizar el tráfico y mejorar la experiencia del usuario.</li>
        <li>Garantizar la seguridad y el correcto funcionamiento del sitio.</li>
        <li>Generar estadísticas de uso agregadas y anónimas.</li>
      </ul>

      <h2>3. Cookies</h2>
      <p>
        Este sitio puede utilizar cookies técnicas necesarias para su
        funcionamiento. Consulta nuestra{" "}
        <a href="/cookies">Política de Cookies</a> para más información.
      </p>

      <h2>4. Servicios de terceros</h2>
      <p>
        Podemos enlazar a plataformas externas como Instagram, YouTube y
        Twitch. Estas plataformas tienen sus propias políticas de privacidad,
        que te recomendamos consultar.
      </p>

      <h2>5. Tus derechos</h2>
      <p>
        Si tienes preguntas sobre el tratamiento de tu información, puedes
        contactarnos a través de nuestras redes sociales oficiales en
        @gundynasty.gg.
      </p>

      <h2>6. Cambios en esta política</h2>
      <p>
        Nos reservamos el derecho de actualizar esta política en cualquier
        momento. Los cambios serán publicados en esta misma página.
      </p>
    </LegalLayout>
  );
}
