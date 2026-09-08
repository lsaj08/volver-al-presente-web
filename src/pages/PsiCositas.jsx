import React from "react";
import usePageMeta from "../hooks/usePageMeta.js";
import { buildWhatsAppLink, EXTERNAL_LINKS, isPlaceholderUrl } from "../data/externalLinks.js";
import { SITE_MESSAGES } from "../data/content.js";
import "../styles/internal.css";

export default function PsiCositas() {
  const catalogAvailable = !isPlaceholderUrl(EXTERNAL_LINKS.canvaCatalog);
  usePageMeta(
    "Psicositas | Volver al Presente",
    "Materiales físicos, recursos especiales y productos vinculados al bienestar emocional."
  );

  return (
    <main>
      <section className="innerHero">
        <div className="container innerHero__content">
          <span className="sub">Psicositas</span>
          <h1>Psicositas</h1>
          <p>
            Un espacio para encontrar materiales físicos, recursos especiales y productos vinculados
            al bienestar emocional.
          </p>
          <div className="innerHero__cta">
            <a
              className="btn btn-primary"
              href={catalogAvailable ? EXTERNAL_LINKS.canvaCatalog : buildWhatsAppLink("Hola, me gustaría consultar sobre los materiales de Psicositas.")}
              target="_blank"
              rel="noopener noreferrer"
            >
              {catalogAvailable ? "Ver catálogo en Canva" : SITE_MESSAGES.catalogContact}
            </a>
          </div>
          {!catalogAvailable && (
            <p className="muted">
              {SITE_MESSAGES.catalogPending}
            </p>
          )}
        </div>
      </section>
    </main>
  );
}
