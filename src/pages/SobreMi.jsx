import React, { useMemo } from "react";
import usePageMeta from "../hooks/usePageMeta.js";
import { breadcrumbSchema } from "../data/seo.js";
import marcelaPhoto from "../assets/marcela-retrato.jpg";
import {
  ABOUT_CONTENT,
  APPROACH_POINTS,
  BRAND_VALUES_DETAIL,
  ENABLEMENTS,
  FIRST_SESSION_POINTS,
  MISSION,
  TRAINING_POINTS,
  VISION,
  VOLVER_AL_PRESENTE,
  WHATSAPP_DEFAULT_TEXT,
} from "../data/content.js";
import { buildWhatsAppLink, EXTERNAL_LINKS } from "../data/externalLinks.js";
import "../styles/internal.css";

export default function SobreMi() {
  const waLink = useMemo(
    () => buildWhatsAppLink(`${WHATSAPP_DEFAULT_TEXT} Quiero conocer más sobre tu enfoque terapéutico.`),
    []
  );

  usePageMeta(
    "Marcela Zamora, psicóloga | Volver al Presente",
    "Conocé a la Psicóloga Marcela Zamora, su enfoque terapéutico, misión, visión, valores y experiencia profesional.",
    { schemas: [breadcrumbSchema([{ name: "Sobre mí", path: "/sobre-mi" }])] }
  );

  return (
    <main>
      <section className="innerHero">
        <div className="container aboutHero">
          <div className="innerHero__content">
            <span className="sub">Sobre mí</span>
            <h1>{ABOUT_CONTENT.title}</h1>
            {ABOUT_CONTENT.paragraphs.map((paragraph) => (
              <p className="aboutLead" key={paragraph}>
                {paragraph}
              </p>
            ))}
            <div className="innerHero__cta">
              <a className="btn btn-primary" href={waLink} target="_blank" rel="noopener noreferrer">
                Escribir por WhatsApp
              </a>
              <a
                className="btn btn-secondary"
                href={EXTERNAL_LINKS.booking}
                target="_blank"
                rel="noopener noreferrer"
              >
                Agendar sesión
              </a>
            </div>
          </div>
          {/* Dimensiones intrínsecas para que el navegador reserve el espacio y no haya salto de layout. */}
          <img
            className="aboutHero__photo"
            src={marcelaPhoto}
            width="899"
            height="1600"
            alt="Psicóloga Marcela Zamora"
          />
        </div>
      </section>

      <section className="section">
        <div className="container singleColumn">
          <article className="card sectionCard sectionCard--soft">
            <h2>Volver al Presente</h2>
            {VOLVER_AL_PRESENTE.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </article>
        </div>
      </section>

      <section className="section mutedSection">
        <div className="container infoGrid">
          <article className="card sectionCard">
            <h2>Mi forma de trabajar</h2>
            <ul>
              {APPROACH_POINTS.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </article>

          <article className="card sectionCard">
            <h2>¿Qué puedes esperar en tu primera sesión?</h2>
            <ul>
              {FIRST_SESSION_POINTS.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </article>
        </div>
      </section>

      <section className="section">
        <div className="container infoGrid">
          <article className="card sectionCard">
            <h2>Misión y visión</h2>
            <p>
              <strong>Misión:</strong> {MISSION}
            </p>
            <p>
              <strong>Visión:</strong> {VISION}
            </p>
          </article>

          <article className="card sectionCard">
            <h2>Valores</h2>
            <p>
              Estos valores orientan la manera en que acompaño cada proceso, desde el vínculo
              terapéutico hasta las herramientas que elegimos trabajar.
            </p>
            <ul>
              {BRAND_VALUES_DETAIL.map((value) => (
                <li key={value.title}>
                  <strong>{value.title}:</strong> {value.description}
                </li>
              ))}
            </ul>
          </article>
        </div>
      </section>

      <section className="section mutedSection">
        <div className="container infoGrid">
          <article className="card sectionCard">
            <h2>Formación y habilitaciones</h2>
            <p>
              Mi práctica se apoya en formación continua y en un compromiso constante con el estudio
              y la actualización clínica.
            </p>
            <ul>
              {TRAINING_POINTS.map((item) => (
                <li key={item}>{item}</li>
              ))}
              {ENABLEMENTS.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </article>

          <article className="card sectionCard">
            <h2>El tipo de espacio que quiero ofrecerte</h2>
            <p>
              Un espacio donde puedas llegar con ansiedad, cansancio, vergüenza, tristeza o
              confusión sin sentir que tenés que explicarte de una manera perfecta para ser
              comprendida.
            </p>
            <p>
              Mi intención es acompañarte con sensibilidad y criterio clínico, para que tu proceso
              no se sienta como una plantilla, sino como un trabajo cuidado y profundamente humano.
            </p>
          </article>
        </div>
      </section>

      <section className="section">
        <div className="container singleColumn">
          <article className="card sectionCard ctaCard">
            <h2>¿Damos el primer paso?</h2>
            <p>
              Si algo de lo que leíste resuena contigo, podemos trabajarlo juntas/os. Agenda tu
              primera sesión o escríbeme por WhatsApp; será un gusto acompañarte.
            </p>
            <div className="innerHero__cta">
              <a className="btn btn-primary" href={waLink} target="_blank" rel="noopener noreferrer">
                Escribir por WhatsApp
              </a>
              <a
                className="btn btn-secondary"
                href={EXTERNAL_LINKS.booking}
                target="_blank"
                rel="noopener noreferrer"
              >
                Agendar sesión
              </a>
            </div>
          </article>
        </div>
      </section>
    </main>
  );
}
