import React, { useMemo } from "react";
import { Link } from "react-router-dom";
import usePageMeta from "../hooks/usePageMeta.js";
import { CONTACT, SERVICE_AREAS, WHATSAPP_DEFAULT_TEXT } from "../data/content.js";
import "../styles/internal.css";

export default function Servicios() {
  const waLink = useMemo(() => {
    const text = encodeURIComponent(`${WHATSAPP_DEFAULT_TEXT} Quiero información sobre servicios.`);
    return `https://wa.me/${CONTACT.waNumber}?text=${text}`;
  }, []);

  usePageMeta(
    "Servicios | Volver al Presente",
    "Conocé las áreas de acompañamiento psicológico de Marcela Zamora: ansiedad, trauma, autoestima, estrés, depresión e imagen corporal."
  );

  return (
    <main>
      <section className="innerHero">
        <div className="container innerHero__content">
          <span className="sub">Servicios</span>
          <h1>Áreas de acompañamiento terapéutico</h1>
          <p>
            Cada proceso es personalizado. Estas son las principales áreas en las
            que te puedo acompañar desde una mirada cálida, profesional y centrada
            en tu bienestar emocional.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container cardGrid">
          {SERVICE_AREAS.map((service) => (
            <article className="card serviceCard" key={service.slug}>
              <h2>{service.shortTitle}</h2>
              <p>{service.subtitle}</p>
              <Link className="btn btn-secondary" to={`/${service.slug}`}>
                Ver servicio
              </Link>
            </article>
          ))}
        </div>
      </section>

      <section className="section mutedSection">
        <div className="container singleColumn">
          <article className="card sectionCard ctaCard">
            <h2>¿No sabés por dónde empezar?</h2>
            <p>
              Podemos conversar primero por WhatsApp para identificar cuál de estas
              áreas se ajusta mejor a lo que estás viviendo hoy.
            </p>
            <a className="btn btn-primary" href={waLink} target="_blank" rel="noreferrer">
              Escribir por WhatsApp
            </a>
          </article>
        </div>
      </section>
    </main>
  );
}
