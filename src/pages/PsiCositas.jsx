import React from "react";
import usePageMeta from "../hooks/usePageMeta.js";
import { EXTERNAL_LINKS, isPlaceholderUrl } from "../data/externalLinks.js";
import "../styles/internal.css";

export default function PsiCositas() {
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
              href={EXTERNAL_LINKS.canvaCatalog}
              target="_blank"
              rel="noopener noreferrer"
            >
              Ver catálogo en Canva
            </a>
          </div>
          {isPlaceholderUrl(EXTERNAL_LINKS.canvaCatalog) && (
            <p className="muted">
              Pendiente: agregar el enlace final del catálogo de Canva en <code>CANVA_CATALOG_URL</code>.
            </p>
          )}
        </div>
      </section>
    </main>
  );
}
