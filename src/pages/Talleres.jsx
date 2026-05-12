import React, { useMemo } from "react";
import usePageMeta from "../hooks/usePageMeta.js";
import { WHATSAPP_DEFAULT_TEXT } from "../data/content.js";
import { buildWhatsAppLink } from "../data/externalLinks.js";
import "../styles/internal.css";

// Talleres visibles actualmente.
// Si se agregan talleres futuros, mantener aquí solo los que deban mostrarse en la UI.
const WORKSHOPS = [
  {
    title: "Taller de Límites",
    objective: "Fortalecer herramientas para poner límites con claridad, respeto y menos culpa.",
    modality: "Virtual o Presencial (según convocatoria)",
    duration: "Formato breve de 2 a 3 horas",
    audience: "Personas, equipos o grupos interesados en bienestar relacional.",
  },
  {
    title: "BIP (Body Image Positive)",
    objective: "Promover una relación más amable con el cuerpo y estrategias de autocuidado sin exigencia extrema.",
    modality: "Virtual o Presencial (según convocatoria)",
    duration: "Formato breve de 2 a 3 horas",
    audience: "Personas que desean trabajar imagen corporal y hábitos con enfoque compasivo.",
  },
];

export default function Talleres() {
  const waLink = useMemo(
    () => buildWhatsAppLink(`${WHATSAPP_DEFAULT_TEXT} Quiero información sobre talleres.`),
    []
  );

  usePageMeta(
    "Talleres | Volver al Presente",
    "Talleres de bienestar emocional: límites e imagen corporal positiva."
  );

  return (
    <main>
      <section className="innerHero">
        <div className="container innerHero__content">
          <span className="sub">Talleres</span>
          <h1>Talleres de bienestar emocional</h1>
          <p>
            Esta sección presenta una oferta general inicial de talleres. Si te
            interesa una propuesta para tu grupo, institución o equipo, podés
            solicitar información.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container cardGrid">
          {WORKSHOPS.map((workshop) => (
            <article className="card serviceCard" key={workshop.title}>
              <h2>{workshop.title}</h2>
              <p><strong>Objetivo:</strong> {workshop.objective}</p>
              <p><strong>Modalidad:</strong> {workshop.modality}</p>
              <p><strong>Duración estimada:</strong> {workshop.duration}</p>
              <p><strong>Dirigido a:</strong> {workshop.audience}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section mutedSection">
        <div className="container singleColumn">
          <article className="card sectionCard ctaCard">
            <h2>Solicitar información de talleres</h2>
            <p>
              Escribime por WhatsApp para conocer disponibilidad, formato y
              enfoque según las necesidades de tu grupo.
            </p>
            <a className="btn btn-primary" href={waLink} target="_blank" rel="noopener noreferrer">
              Consultar por WhatsApp
            </a>
          </article>
        </div>
      </section>
    </main>
  );
}
