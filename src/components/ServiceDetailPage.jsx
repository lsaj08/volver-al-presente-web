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

  const relatedServices = SERVICE_AREAS.filter((item) =>
    service.relatedSlugs?.includes(item.slug)
  );

  return (
    <main>
      <section className="innerHero">
        <div className="container innerHero__content">
          <span className="sub">Psicoterapia en Costa Rica</span>
          <h1>{service.title}</h1>
          <p>{service.subtitle}</p>
          <p className="innerHero__intro">{service.intro}</p>
          <div className="innerHero__cta">
            <a className="btn btn-primary" href={waLink} target="_blank" rel="noreferrer">
              {service.ctaLabel}
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

      <section className="section mutedSection">
        <div className="container singleColumn">
          <article className="card sectionCard quoteCard">
            <h2>Una imagen para entender lo que te pasa</h2>
            <p>{service.metaphor}</p>
          </article>
        </div>
      </section>

      <section className="section">
        <div className="container infoGrid">
          <article className="card sectionCard">
            <h2>¿Es para vos esta terapia?</h2>
            <ul>
              {service.isForYou.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </article>

          <article className="card sectionCard">
            <h2>¿Cómo impacta en tu vida?</h2>
            <p>{service.impact}</p>
          </article>
        </div>
      </section>

      <section className="section">
        <div className="container infoGrid">
          <article className="card sectionCard">
            <h2>Cómo se trabaja en sesión</h2>
            <ul>
              {service.howWeWork.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </article>

          <article className="card sectionCard">
            <h2>Qué te podés llevar del proceso</h2>
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
          <article className="card sectionCard ctaCard">
            <h2>Podés dar el primer paso hoy</h2>
            <p>
              Si este servicio se parece a lo que estás viviendo, coordinemos una
              primera cita. No necesitás llegar con todo resuelto para comenzar.
            </p>
            <div className="innerHero__cta">
              <a className="btn btn-primary" href={waLink} target="_blank" rel="noreferrer">
                Escribir por WhatsApp
              </a>
              <Link className="btn btn-secondary" to="/contacto">
                Ver canales de contacto
              </Link>
            </div>
          </article>
        </div>
      </section>

      <section className="section">
        <div className="container singleColumn">
          <article className="card sectionCard">
            <h2>Preguntas frecuentes</h2>
            <div className="faqSimple">
              {service.faq.map((item) => (
                <div key={item.q}>
                  <h3>{item.q}</h3>
                  <p>{item.a}</p>
                </div>
              ))}
            </div>
          </article>

          <article className="card sectionCard relatedCard">
            <h2>Enlaces útiles para continuar</h2>
            <div className="relatedLinks">
              <Link className="btn btn-ghost" to="/servicios">
                Ver todos los servicios
              </Link>
              <Link className="btn btn-ghost" to="/contacto">
                Ir a contacto
              </Link>
              {relatedServices.map((item) => (
                <Link key={item.slug} className="btn btn-ghost" to={`/${item.slug}`}>
                  {item.shortTitle}
                </Link>
              ))}
            </div>
          </article>

          <article className="card sectionCard ctaCard">
            <h2>¿Querés iniciar este proceso terapéutico?</h2>
            <p>
              Estoy para acompañarte con calidez humana, ética profesional y
              herramientas basadas en evidencia.
            </p>
            <div className="innerHero__cta">
              <a className="btn btn-primary" href={waLink} target="_blank" rel="noreferrer">
                {service.ctaLabel}
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
