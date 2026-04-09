import React, { useMemo } from "react";
import { Link } from "react-router-dom";
import usePageMeta from "../hooks/usePageMeta.js";
import { CONTACT, WHATSAPP_DEFAULT_TEXT } from "../data/content.js";
import "../styles/internal.css";

const WORKSHOPS = [
  {
    title: "Ansiedad y regulación emocional",
    objective:
      "Aprender herramientas prácticas para identificar señales de ansiedad y regular activación.",
    modality: "Virtual o presencial (según convocatoria)",
    duration: "Formato breve de 2 a 3 horas",
    audience:
      "Personas adultas que buscan recursos iniciales de gestión emocional.",
  },
  {
    title: "Autocuidado y límites saludables",
    objective:
      "Fortalecer hábitos de autocuidado y comunicación asertiva en vínculos cotidianos.",
    modality: "Virtual o presencial (según convocatoria)",
    duration: "Formato breve de 2 a 3 horas",
    audience: "Personas, equipos o grupos interesados en bienestar relacional.",
  },
  {
    title: "Relación con el cuerpo y la comida",
    objective:
      "Promover una mirada más amable del cuerpo y estrategias de autocuidado sin exigencia extrema.",
    modality: "Virtual o presencial (según convocatoria)",
    duration: "Formato breve de 2 a 3 horas",
    audience:
      "Personas que desean trabajar imagen corporal y hábitos con enfoque compasivo.",
  },
];

export default function Talleres() {
  const waLink = useMemo(() => {
    const text = encodeURIComponent(
      `${WHATSAPP_DEFAULT_TEXT} Quiero información sobre talleres.`
    );
    return `https://wa.me/${CONTACT.waNumber}?text=${text}`;
  }, []);

  usePageMeta(
    "Talleres de bienestar emocional | Volver al Presente",
    "Catálogo provisional de talleres en Costa Rica sobre ansiedad, autocuidado, límites y relación con el cuerpo.",
    { canonicalPath: "/talleres" }
  );

  return (
    <main>
      <section className="innerHero">
        <div className="container innerHero__content">
          <span className="sub">Talleres</span>
          <h1>Talleres de bienestar emocional para grupos e instituciones</h1>
          <p>
            Esta sección presenta una oferta general inicial. Si buscás una
            propuesta para colegio, universidad, empresa o grupo comunitario,
            podemos adaptar contenidos a tu población.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container cardGrid">
          {WORKSHOPS.map((workshop) => (
            <article className="card serviceCard" key={workshop.title}>
              <h2>{workshop.title}</h2>
              <p>
                <strong>Objetivo:</strong> {workshop.objective}
              </p>
              <p>
                <strong>Modalidad:</strong> {workshop.modality}
              </p>
              <p>
                <strong>Duración estimada:</strong> {workshop.duration}
              </p>
              <p>
                <strong>Dirigido a:</strong> {workshop.audience}
              </p>
            </article>
          ))}
        </div>
      </section>

      <section className="section mutedSection">
        <div className="container singleColumn">
          <article className="card sectionCard ctaCard">
            <h2>Solicitar información de talleres</h2>
            <p>
              Escribime por WhatsApp para conocer disponibilidad y alcances.
              También podés revisar los <Link to="/servicios">servicios</Link> si
              buscás acompañamiento individual.
            </p>
            <a className="btn btn-primary" href={waLink} target="_blank" rel="noreferrer">
              Consultar por WhatsApp
            </a>
          </article>
        </div>
      </section>
    </main>
  );
}
