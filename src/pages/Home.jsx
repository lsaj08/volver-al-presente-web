import React, { useMemo } from "react";
import { Link } from "react-router-dom";
import usePageMeta from "../hooks/usePageMeta.js";
import FAQ from "../components/FAQ.jsx";
import {
  BRAND_VALUES,
  CONTACT,
  HOME_CONTENT,
  SERVICE_AREAS,
  WHATSAPP_DEFAULT_TEXT,
} from "../data/content.js";
import "../styles/home.css";
import "../styles/internal.css";
import heroPic from "../assets/banner.jpeg";

function WhatsIcon({ className }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M12 21a9 9 0 0 1-4.3-1.1L3 21l1.2-4.6A9 9 0 1 1 12 21Z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
      <path d="M8.5 8.8c.3-.7.6-.8 1.1-.8h.4c.3 0 .6 0 .8.6l.5 1.3c.1.3.1.6-.1.8l-.4.5c-.1.2-.2.3 0 .6.3.6 1.2 1.8 2.7 2.4.3.1.5.1.6-.1l.6-.7c.2-.2.5-.3.8-.2l1.4.5c.5.2.6.5.6.8 0 .3-.1.9-.6 1.3-.6.6-1.4.7-2 .6-1.2-.2-2.6-.9-3.8-2.1-1.2-1.2-2-2.6-2.2-3.8-.1-.6 0-1.4.5-2Z" fill="currentColor" opacity=".9" />
    </svg>
  );
}

function PhoneIcon({ className }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M8 3h3l1.5 5-2 1.2c1 2.3 2.8 4.2 5.3 5.3L17 13l4 1.5V18c0 1.1-.9 2-2 2h-1C9.7 20 4 14.3 4 7V6c0-1.1.9-2 2-2Z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
    </svg>
  );
}

function TopicCard({ topic }) {
  return (
    <Link className="topicCard topicCard--link" to={`/${topic.slug}`}>
      <div className="topicCard__iconWrapper">
        <span className="topicCard__chip">{topic.primaryKeyword}</span>
      </div>
      <span className="topicCard__label">{topic.shortTitle}</span>
      <small>{topic.subtitle}</small>
    </Link>
  );
}

export default function Home() {
  const waLink = useMemo(() => {
    const text = encodeURIComponent(WHATSAPP_DEFAULT_TEXT);
    return `https://wa.me/${CONTACT.waNumber}?text=${text}`;
  }, []);

  usePageMeta(HOME_CONTENT.seoTitle, HOME_CONTENT.seoDescription, {
    canonicalPath: "/",
    ogTitle: "Volver al Presente | Psicóloga Marcela Zamora",
    ogDescription:
      "Psicoterapia cálida y profesional para ansiedad, trauma, depresión, autoestima, imagen corporal y estrés.",
  });

  return (
    <main>
      <section className="heroHome">
        <div className="container heroHome__inner">
          <div className="heroHome__copy">
            <span className="brandKicker sub">Volver al Presente · Psicóloga Marcela Zamora</span>
            <div className="heroHome__titleWrapper">
              <h1 className="heroHome__title">{HOME_CONTENT.heroTitle}</h1>
              <p className="heroHome__subtitle">{HOME_CONTENT.heroSubtitle}</p>
            </div>
            <div className="heroHome__cta">
              <a className="btn btn-primary" href={waLink} target="_blank" rel="noopener noreferrer">
                <WhatsIcon className="icon" /> Escribir por WhatsApp
              </a>
              <a className="btn btn-secondary" href={CONTACT.bookingUrl} target="_blank" rel="noopener noreferrer">
                <PhoneIcon className="icon" /> Agendar sesión
              </a>
              <Link className="btn btn-ghost" to="/servicios">Ver servicios</Link>
            </div>
          </div>

          <div className="heroHome__art" aria-hidden="true">
            <div className="heroHome__image" style={{ backgroundImage: `url(${heroPic})` }} />
          </div>
        </div>
      </section>

      <section className="section brandSection">
        <div className="container infoGrid">
          <article className="card sectionCard">
            <h2>{HOME_CONTENT.valueTitle}</h2>
            <p>{HOME_CONTENT.valueText}</p>
            <ul className="valuesListInline">
              {BRAND_VALUES.map((value) => (
                <li key={value}>{value}</li>
              ))}
            </ul>
            <div className="inlineLinks">
              <Link to="/sobre-mi">Conocer a Marcela</Link>
              <Link to="/contacto">Agendar terapia</Link>
            </div>
          </article>

          <article className="card sectionCard">
            <h2>Áreas de acompañamiento</h2>
            <p>{HOME_CONTENT.areasIntro}</p>
            <ul>
              {SERVICE_AREAS.map((service) => (
                <li key={service.slug}>
                  <Link to={`/${service.slug}`}>{service.title}</Link>
                </li>
              ))}
            </ul>
          </article>
        </div>
      </section>

      <section className="section mutedSection">
        <div className="container singleColumn">
          <article className="card sectionCard foodBodyCard">
            <h2>{HOME_CONTENT.bodyFoodTitle}</h2>
            <p>{HOME_CONTENT.bodyFoodText}</p>
            <Link className="btn btn-secondary" to="/imagen-corporal-conducta-alimentaria">
              Ver área de imagen corporal y conducta alimentaria
            </Link>
          </article>
        </div>
      </section>

      <section className="topics">
        <div className="container topics__inner">
          <div className="topics__list topics__list--cards">
            {SERVICE_AREAS.map((topic) => (
              <TopicCard key={topic.slug} topic={topic} />
            ))}
          </div>
        </div>
      </section>

      <section className="section lists">
        <div className="container infoGrid">
          <article className="card sectionCard">
            <h2>Cómo trabajo en psicoterapia</h2>
            <ul>
              <li>Calidez primero: vínculo terapéutico seguro y cercano.</li>
              <li>Enfoque basado en evidencia con herramientas aplicables.</li>
              <li>Objetivos claros para ordenar el proceso terapéutico.</li>
              <li>Espacio sin juicios para avanzar paso a paso.</li>
            </ul>
          </article>
          <article className="card sectionCard">
            <h2>Qué podés esperar al empezar</h2>
            <p>
              En la primera sesión exploramos tu motivo de consulta y definimos una
              hoja de ruta inicial. No necesitás llegar con todo claro.
            </p>
            <p>
              Si venís por ansiedad, trauma, depresión, autoestima o estrés,
              trabajamos con recursos concretos para recuperar presencia y bienestar emocional.
            </p>
          </article>
        </div>
      </section>

      <section className="section faqWrapper">
        <div className="container">
          <h2 className="sectionTitle">Preguntas frecuentes sobre terapia psicológica</h2>
          <FAQ />
        </div>
      </section>

      <section className="section mutedSection">
        <div className="container singleColumn">
          <article className="card sectionCard ctaCard">
            <h2>{HOME_CONTENT.finalCtaTitle}</h2>
            <p>{HOME_CONTENT.finalCtaText}</p>
            <div className="innerHero__cta">
              <a className="btn btn-primary" href={waLink} target="_blank" rel="noopener noreferrer">
                Escribir por WhatsApp
              </a>
              <Link className="btn btn-secondary" to="/contacto">Ver contacto</Link>
            </div>
          </article>
        </div>
      </section>
    </main>
  );
}
