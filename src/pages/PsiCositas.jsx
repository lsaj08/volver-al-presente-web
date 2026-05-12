import React from "react";
import usePageMeta from "../hooks/usePageMeta.js";
import { CANVA_CATALOG_URL } from "../data/content.js";
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
            <a className="btn btn-primary" href={CANVA_CATALOG_URL} target="_blank" rel="noreferrer">
              Ver catálogo en Canva
            </a>
          </div>
          {CANVA_CATALOG_URL.includes("PENDIENTE") && (
            <p className="muted">
              Pendiente: agregar el enlace final del catálogo de Canva en <code>CANVA_CATALOG_URL</code>.
            </p>
          )}
        </div>
      </section>
    </main>
  );
}
