import React from "react";
import usePageMeta from "../hooks/usePageMeta.js";
import "../styles/internal.css";

export default function AvisoLegal() {
  usePageMeta("Aviso Legal | Volver al Presente", "Aviso legal del sitio Volver al Presente.");

  return (
    <main className="section">
      <section className="container singleColumn">
        <article className="card sectionCard legalCard">
          <h1>Aviso Legal</h1>
          <p>
            El contenido de este sitio tiene fines informativos y no reemplaza la
            evaluación profesional individual.
          </p>
          <p>
            Para recibir acompañamiento terapéutico, se recomienda agendar una
            sesión donde pueda valorarse cada caso de forma personalizada.
          </p>
        </article>
      </section>
    </main>
  );
}
