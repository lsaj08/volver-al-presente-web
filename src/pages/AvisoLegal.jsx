import React from "react";
import usePageMeta from "../hooks/usePageMeta.js";
import "../styles/internal.css";

export default function AvisoLegal() {
  usePageMeta(
    "Aviso Legal | Volver al Presente",
    "Aviso legal y alcance informativo del sitio Volver al Presente.",
    { canonicalPath: "/aviso-legal" }
  );

  return (
    <main className="section">
      <section className="container singleColumn">
        <article className="card sectionCard legalCard">
          <h1>Aviso Legal</h1>
          <p>
            El contenido de este sitio tiene carácter informativo y educativo en
            salud mental. No sustituye evaluación, diagnóstico ni tratamiento
            psicológico individual.
          </p>
          <p>
            Si estás atravesando malestar emocional importante o una situación de
            riesgo, se recomienda buscar atención profesional inmediata por los
            canales de salud correspondientes en Costa Rica.
          </p>
          <p>
            Toda intervención clínica se define de forma personalizada en sesión,
            respetando criterios éticos y técnicos del ejercicio profesional.
          </p>
        </article>
      </section>
    </main>
  );
}
