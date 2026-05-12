import React, { useMemo } from "react";
import { Link } from "react-router-dom";
import usePageMeta from "../hooks/usePageMeta.js";
import { CONTACT, SERVICE_AREAS, WHATSAPP_DEFAULT_TEXT } from "../data/content.js";
import "../styles/internal.css";

function buildWhatsAppLink(message) {
  const text = encodeURIComponent(message);
  return `https://wa.me/${CONTACT.waNumber}?text=${text}`;
}

export default function ServiceDetailPage({ slug }) {
  const service = SERVICE_AREAS.find((item) => item.slug === slug);

  const waLink = useMemo(() => {
    if (!service) return "#";
    return buildWhatsAppLink(`${WHATSAPP_DEFAULT_TEXT} ${service.ctaLabel}.`);
  }, [service]);

  usePageMeta(
    service ? service.seoTitle : "Servicio | Volver al Presente",
    service
      ? service.seoDescription
      : "Acompañamiento psicológico en Volver al Presente.",
    { canonicalPath: service ? `/${service.slug}` : "/servicios" }
  );

  if (!service) {
    return (
      <main className="container genericPage">
        <h1>Servicio no encontrado</h1>
        <p>La página solicitada no existe o fue movida.</p>
        <Link className="btn btn-secondary" to="/servicios">
          Volver a servicios
        </Link>
      </main>
    );
  }

  return (
    <main>
      <section className="innerHero">
        <div className="container innerHero__content">
          <span className="sub">Acompañamiento psicológico</span>
          <h1>{service.title}</h1>
          <p>{service.subtitle}</p>
          <div className="innerHero__cta">
            <a className="btn btn-primary" href={waLink} target="_blank" rel="noreferrer">
              Escribir por WhatsApp
            </a>
            <a
              className="btn btn-secondary"
              href={CONTACT.bookingUrl}
              target="_blank"
              rel="noreferrer"
            >
              Agendar sesión
            </a>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container infoGrid">
          <article className="card sectionCard">
            <h2>¿En qué consiste?</h2>
            <p>{service.intro}</p>
          </article>

          <article className="card sectionCard">
            <h2>¿Es para vos?</h2>
            <ul>
              {service.isForYou.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </article>
        </div>
      </section>

      <section className="section mutedSection">
        <div className="container singleColumn">
          <article className="card sectionCard">
            <h2>Impacto en tu bienestar</h2>
            <p>{service.impact}</p>
          </article>

          <div className="centerCta">
            <a className="btn btn-primary" href={waLink} target="_blank" rel="noreferrer">
              Coordinar por WhatsApp
            </a>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container infoGrid">
          <article className="card sectionCard">
            <h2>Cómo se trabaja</h2>
            <ul>
              {service.howWeWork.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </article>

          <article className="card sectionCard">
            <h2>Qué te llevás del proceso</h2>
            <ul>
              {service.outcomes.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </article>
        </div>
      </section>

      <section className="section mutedSection">
        <div className="container singleColumn">
          <article className="card sectionCard">
            <h2>FAQ rápida</h2>
            <div className="faqSimple">
              {service.faq.map((item) => (
                <div key={item.q}>
                  <h3>{item.q}</h3>
                  <p>{item.a}</p>
                </div>
              ))}
            </div>
          </article>

          <article className="card sectionCard ctaCard">
            <h2>¿Querés empezar este proceso?</h2>
            <p>
              Si sentís que este acompañamiento es para vos, escribime y vemos la
              mejor modalidad para iniciar.
            </p>
            <div className="innerHero__cta">
              <a className="btn btn-primary" href={waLink} target="_blank" rel="noreferrer">
                Escribir por WhatsApp
              </a>
              <a
                className="btn btn-secondary"
                href={CONTACT.bookingUrl}
                target="_blank"
                rel="noreferrer"
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
