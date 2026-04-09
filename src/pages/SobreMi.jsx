import React, { useMemo } from "react";
import { Link } from "react-router-dom";
import usePageMeta from "../hooks/usePageMeta.js";
import { ABOUT_CONTENT, CONTACT, WHATSAPP_DEFAULT_TEXT } from "../data/content.js";
import "../styles/internal.css";

export default function SobreMi() {
  const waLink = useMemo(() => {
    const text = encodeURIComponent(
      `${WHATSAPP_DEFAULT_TEXT} Quiero conocer más sobre tu enfoque terapéutico.`
    );
    return `https://wa.me/${CONTACT.waNumber}?text=${text}`;
  }, []);

  usePageMeta(ABOUT_CONTENT.seoTitle, ABOUT_CONTENT.seoDescription, {
    canonicalPath: "/sobre-mi",
  });

  return (
    <main>
      <section className="innerHero">
        <div className="container innerHero__content">
          <span className="sub">Sobre mí</span>
          <h1>Psicóloga Marcela Zamora: calidez humana y terapia basada en evidencia</h1>
          <p>{ABOUT_CONTENT.intro}</p>
          <div className="innerHero__cta">
            <Link className="btn btn-secondary" to="/servicios">
              Ver áreas de acompañamiento
            </Link>
            <a className="btn btn-primary" href={waLink} target="_blank" rel="noopener noreferrer">
              Escribir por WhatsApp
            </a>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container singleColumn">
          <article className="card sectionCard">
            <h2>{ABOUT_CONTENT.whyTitle}</h2>
            {ABOUT_CONTENT.whyParagraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
            <p>
              Volver al Presente también recuerda que el bienestar no es ausencia de
              dolor, sino capacidad de respuesta frente a lo que la vida trae.
            </p>
          </article>
        </div>
      </section>

      <section className="section mutedSection">
        <div className="container infoGrid">
          <article className="card sectionCard">
            <h2>{ABOUT_CONTENT.approachTitle}</h2>
            <p>{ABOUT_CONTENT.approachParagraph}</p>
            <ul>
              {ABOUT_CONTENT.approachBullets.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </article>

          <article className="card sectionCard">
            <h2>{ABOUT_CONTENT.firstSessionTitle}</h2>
            <p>{ABOUT_CONTENT.firstSessionParagraph}</p>
            <p>{ABOUT_CONTENT.midCtaText}</p>
            <div className="inlineLinks">
              <Link to="/servicios">Servicios de psicología</Link>
              <Link to="/contacto">Agendar terapia</Link>
            </div>
          </article>
        </div>
      </section>

      <section className="section">
        <div className="container infoGrid">
          <article className="card sectionCard">
            <h2>Misión y visión</h2>
            <p>
              <strong>Misión:</strong> {ABOUT_CONTENT.mission}
            </p>
            <p>
              <strong>Visión:</strong> {ABOUT_CONTENT.vision}
            </p>
            <h3>Valores</h3>
            <ul>
              {ABOUT_CONTENT.values.map((value) => (
                <li key={value}>{value}</li>
              ))}
            </ul>
          </article>

          <article className="card sectionCard">
            <h2>{ABOUT_CONTENT.trainingTitle}</h2>
            <ul>
              {ABOUT_CONTENT.trainingItems.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <h3>{ABOUT_CONTENT.credentialsTitle}</h3>
            <ul>
              {ABOUT_CONTENT.credentialsItems.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <p>
              Si querés conocer el servicio más adecuado para ansiedad, trauma,
              depresión o autoestima, podés revisarlo en la sección de
              <Link to="/servicios"> servicios</Link>.
            </p>
          </article>
        </div>
      </section>

      <section className="section mutedSection">
        <div className="container singleColumn">
          <article className="card sectionCard ctaCard">
            <h2>Un espacio para volver a sentirte en casa dentro de vos</h2>
            <p>{ABOUT_CONTENT.finalCtaText}</p>
            <div className="innerHero__cta">
              <a className="btn btn-primary" href={waLink} target="_blank" rel="noopener noreferrer">
                Escribir por WhatsApp
              </a>
              <a
                className="btn btn-secondary"
                href={CONTACT.bookingUrl}
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
