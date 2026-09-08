import React, { useMemo } from "react";
import { Link } from "react-router-dom";
import usePageMeta from "../hooks/usePageMeta.js";
import { SERVICE_AREAS, WHATSAPP_DEFAULT_TEXT } from "../data/content.js";
import { buildWhatsAppLink, EXTERNAL_LINKS } from "../data/externalLinks.js";
import { breadcrumbSchema, serviceSchema } from "../data/seo.js";
import "../styles/internal.css";

export default function ServiceDetailPage({ slug }) {
  const service = SERVICE_AREAS.find((item) => item.slug === slug);

  const waLink = useMemo(() => {
    if (!service) return "#";
    return buildWhatsAppLink(`${WHATSAPP_DEFAULT_TEXT} ${service.ctaLabel}.`);
  }, [service]);

  // Áreas relacionadas declaradas en content.js: dan salida a la página y
  // reparten autoridad entre los servicios en lugar de dejarlos aislados.
  const related = useMemo(
    () =>
      (service?.relatedSlugs ?? [])
        .map((item) => SERVICE_AREAS.find(({ slug: other }) => other === item))
        .filter(Boolean),
    [service]
  );

  const schemas = useMemo(() => {
    if (!service) return [];
    return [
      serviceSchema(service),
      breadcrumbSchema([
        { name: "Servicios", path: "/servicios" },
        { name: service.title, path: `/${service.slug}` },
      ]),
    ];
  }, [service]);

  usePageMeta(
    service ? service.seoTitle : "Servicio | Volver al Presente",
    service
      ? service.seoDescription
      : "Acompañamiento psicológico en Volver al Presente.",
    { canonicalPath: service ? `/${service.slug}` : "/servicios", schemas }
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
          <h1>{service.h1}</h1>
          <p>{service.subtitle}</p>
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
            <a className="btn btn-primary" href={waLink} target="_blank" rel="noopener noreferrer">
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

          {/* Enlaces internos entre áreas relacionadas y regreso al listado.
              Reutiliza las clases existentes: no introduce estilos nuevos. */}
          <article className="card sectionCard">
            <h2>Otras áreas de acompañamiento</h2>
            <div className="innerHero__cta">
              {related.map((item) => (
                <Link className="btn btn-secondary small" key={item.slug} to={`/${item.slug}`}>
                  {item.shortTitle}
                </Link>
              ))}
              <Link className="btn btn-ghost small" to="/servicios">
                Ver todos los servicios
              </Link>
            </div>
          </article>

          <article className="card sectionCard ctaCard">
            <h2>¿Querés empezar este proceso?</h2>
            <p>
              Si sentís que este acompañamiento es para vos, escribime y vemos la
              mejor modalidad para iniciar.
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
