import type { Metadata } from "next";
import { LegalLayout } from "@/components/layout/LegalLayout";

export const metadata: Metadata = {
  title: "Términos de Uso",
  description: "Términos y condiciones de uso de GUNDYNASTY.",
};

export default function TerminosPage() {
  return (
    <LegalLayout
      title="Términos de Uso"
      subtitle="Última actualización: mayo 2026"
    >
      <h2>1. Aceptación de los términos</h2>
      <p>
        Al acceder y utilizar gundynasty.gg ("el Sitio"), aceptas cumplir con
        estos Términos de Uso. Si no estás de acuerdo, te pedimos que no
        utilices el Sitio.
      </p>

      <h2>2. Naturaleza del sitio</h2>
      <p>
        GUNDYNASTY es un sitio informativo fan-made dedicado a la comunidad de
        Free Fire E-sports. No está afiliado, patrocinado ni respaldado por
        Garena International o 111 Dots Studio.
      </p>

      <h2>3. Propiedad intelectual</h2>
      <p>
        El contenido original del Sitio (textos, diseños, gráficos) es
        propiedad de GUNDYNASTY. Las marcas, logos y contenido relacionado con
        Free Fire son propiedad de sus respectivos titulares. Cualquier uso no
        autorizado queda expresamente prohibido.
      </p>

      <h2>4. Uso permitido</h2>
      <p>Puedes utilizar el Sitio para:</p>
      <ul>
        <li>Consultar información sobre el equipo y sus resultados.</li>
        <li>Compartir contenido del sitio citando la fuente.</li>
        <li>Acceder a enlaces a plataformas externas.</li>
      </ul>

      <h2>5. Limitación de responsabilidad</h2>
      <p>
        La información del Sitio se proporciona "tal cual". GUNDYNASTY no
        garantiza la exactitud o completitud de la información y no se hace
        responsable de daños derivados del uso del Sitio.
      </p>

      <h2>6. Modificaciones</h2>
      <p>
        Podemos modificar estos términos en cualquier momento. El uso
        continuado del Sitio tras los cambios implica la aceptación de los
        nuevos términos.
      </p>

      <h2>7. Contacto</h2>
      <p>
        Para consultas sobre estos términos, contáctanos en nuestras redes
        sociales oficiales en @gundynasty.gg.
      </p>
    </LegalLayout>
  );
}
