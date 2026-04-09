import React, { useMemo } from "react";
import { Link } from "react-router-dom";
import usePageMeta from "../hooks/usePageMeta.js";
import { CONTACT, SERVICE_AREAS, WHATSAPP_DEFAULT_TEXT } from "../data/content.js";
import "../styles/internal.css";

export default function Servicios() {
  const waLink = useMemo(() => {
    const text = encodeURIComponent(
      `${WHATSAPP_DEFAULT_TEXT} Quiero información sobre servicios de psicología.`
    );
    return `https://wa.me/${CONTACT.waNumber}?text=${text}`;
  }, []);

  usePageMeta(
    "Servicios de psicología | Terapia para ansiedad, trauma y depresión en Costa Rica",
    "Servicios de psicología en Costa Rica: terapia para ansiedad, depresión, trauma, autoestima, imagen corporal y estrés con Psicóloga Marcela Zamora.",
    { canonicalPath: "/servicios" }
  );

  return (
    <main>
      <section className="innerHero">
        <div className="container innerHero__content">
          <span className="sub">Servicios</span>
          <h1>Servicios de psicología para bienestar emocional en Costa Rica</h1>
          <p>
            Cada proceso terapéutico es personalizado. En Volver al Presente,
            combinamos calidez humana y terapia basada en evidencia para que puedas
            comprender lo que te pasa y construir cambios sostenibles.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container singleColumn">
          <article className="card sectionCard">
            <h2>¿Qué áreas trabajamos en terapia?</h2>
            <p>
              Acompaño procesos vinculados con ansiedad, trauma psicológico,
              depresión, autoestima y límites, estrés y perfeccionismo, e imagen
              corporal y conducta alimentaria. El objetivo no es encajar en una
              etiqueta, sino entender tu experiencia y diseñar un plan de trabajo
              realista para tu contexto.
            </p>
          </article>
        </div>
      </section>

      <section className="section mutedSection">
        <div className="container cardGrid">
          {SERVICE_AREAS.map((service) => (
            <article className="card serviceCard" key={service.slug}>
              <h2>{service.title}</h2>
              <p>{service.intro}</p>
              <p className="muted">Keyword principal: {service.primaryKeyword}</p>
              <Link className="btn btn-secondary" to={`/${service.slug}`}>
                Ver servicio
              </Link>
            </article>
          ))}
        </div>
      </section>

      <section className="section">
        <div className="container infoGrid">
          <article className="card sectionCard">
            <h2>¿Cómo saber por dónde empezar?</h2>
            <p>
              Si no sabés qué servicio encaja mejor con lo que estás viviendo, es
              totalmente normal. Podemos hacer una primera conversación de
              orientación para clarificar objetivos terapéuticos y elegir juntas el
              mejor punto de partida.
            </p>
            <ul>
              <li>Si predomina la alerta constante: terapia para ansiedad.</li>
              <li>Si hay agotamiento y vacío persistente: terapia para depresión.</li>
              <li>Si hay huellas de experiencias difíciles: terapia para trauma.</li>
            </ul>
          </article>

          <article className="card sectionCard ctaCard">
            <h2>Coordinemos tu primera sesión</h2>
            <p>
              Escribime por WhatsApp o reservá directamente en agenda online. Si
              llegás con dudas o vergüenza, podemos empezar con un mensaje simple:
              “Quiero iniciar terapia”.
            </p>
            <div className="innerHero__cta">
              <a className="btn btn-primary" href={waLink} target="_blank" rel="noreferrer">
                Escribir por WhatsApp
              </a>
              <Link className="btn btn-secondary" to="/contacto">
                Ver contacto
              </Link>
            </div>
          </article>
        </div>
      </section>
    </main>
  );
}
