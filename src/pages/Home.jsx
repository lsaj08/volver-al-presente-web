import React, { useMemo } from "react";
import { Link } from "react-router-dom";
import usePageMeta from "../hooks/usePageMeta.js";
import FAQ from "../components/FAQ.jsx";
import {
  BRAND_VALUES,
  CONTACT,
  SERVICE_AREAS,
  WHATSAPP_DEFAULT_TEXT,
} from "../data/content.js";
import "../styles/home.css";
import "../styles/internal.css";
import heroPic from "../assets/banner.jpeg";

function WhatsIcon({ className }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M12 21a9 9 0 0 1-4.3-1.1L3 21l1.2-4.6A9 9 0 1 1 12 21Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinejoin="round"
      />
      <path
        d="M8.5 8.8c.3-.7.6-.8 1.1-.8h.4c.3 0 .6 0 .8.6l.5 1.3c.1.3.1.6-.1.8l-.4.5c-.1.2-.2.3 0 .6.3.6 1.2 1.8 2.7 2.4.3.1.5.1.6-.1l.6-.7c.2-.2.5-.3.8-.2l1.4.5c.5.2.6.5.6.8 0 .3-.1.9-.6 1.3-.6.6-1.4.7-2 .6-1.2-.2-2.6-.9-3.8-2.1-1.2-1.2-2-2.6-2.2-3.8-.1-.6 0-1.4.5-2Z"
        fill="currentColor"
        opacity=".9"
      />
    </svg>
  );
}

function PhoneIcon({ className }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M8 3h3l1.5 5-2 1.2c1 2.3 2.8 4.2 5.3 5.3L17 13l4 1.5V18c0 1.1-.9 2-2 2h-1C9.7 20 4 14.3 4 7V6c0-1.1.9-2 2-2Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function HeadIcon({ className }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <circle cx="12" cy="7" r="4" fill="currentColor" />
      <path d="M8 12c0 3 8 3 8 0v5H8v-5Z" fill="currentColor" />
    </svg>
  );
}

function HeartIcon({ className }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M12 21s-7-4.5-7-10a5 5 0 0 1 10 0 5 5 0 0 1 10 0c0 5.5-7 10-7 10Z"
        fill="currentColor"
      />
    </svg>
  );
}

function TopicCard({ topic, index }) {
  const colours = ["var(--teal)", "var(--magenta)", "var(--purple)"];
  const Icon = index % 2 === 0 ? HeadIcon : HeartIcon;

  return (
    <Link className="topicCard topicCard--link" to={`/${topic.slug}`}>
      <div className="topicCard__iconWrapper" style={{ backgroundColor: colours[index % 3] }}>
        <Icon className="topicCard__icon" />
      </div>
      <span className="topicCard__label">{topic.shortTitle}</span>
    </Link>
  );
}

export default function Home() {
  const waLink = useMemo(() => {
    const text = encodeURIComponent(WHATSAPP_DEFAULT_TEXT);
    return `https://wa.me/${CONTACT.waNumber}?text=${text}`;
  }, []);

  usePageMeta(
    "Volver al Presente | Psicóloga Marcela Zamora",
    "Espacio de acompañamiento psicológico para ansiedad, autoestima, trauma, depresión y bienestar emocional."
  );

  return (
    <main>
      <section className="heroHome">
        <div className="container heroHome__inner">
          <div className="heroHome__copy">
            <div className="heroHome__titleWrapper">
              <span className="heroHome__eyebrow sub">Psicoterapia cálida y basada en evidencia</span>
              <h1 className="heroHome__brand">Volver al Presente</h1>
              <p className="heroHome__title">
                Un espacio terapéutico para volver a tu centro con más calma, claridad y bienestar
                emocional.
              </p>
              <p className="heroHome__subtitle">Psicóloga Marcela Zamora</p>
              <p className="heroHome__note">
                Atención online y presencial para procesos de ansiedad, autoestima, trauma,
                depresión y relación con la comida o el cuerpo.
              </p>
            </div>
            <div className="heroHome__cta">
              <a className="btn btn-primary" href={waLink} target="_blank" rel="noreferrer">
                <WhatsIcon className="icon" /> Escribir por WhatsApp
              </a>
              <a className="btn btn-secondary" href={CONTACT.bookingUrl} target="_blank" rel="noreferrer">
                <PhoneIcon className="icon" /> Agendar sesión
              </a>
            </div>
          </div>

          <div className="heroHome__art" aria-hidden="true">
            <div className="heroHome__image" style={{ backgroundImage: `url(${heroPic})` }} />
          </div>
        </div>
      </section>

      <section className="topics">
        <div className="container topics__inner">
          <div className="topics__list">
            {SERVICE_AREAS.map((topic, idx) => (
              <TopicCard key={topic.slug} topic={topic} index={idx} />
            ))}
          </div>
        </div>
      </section>

      <section className="section recognitionSection">
        <div className="container">
          <article className="card recognitionCard">
            <div className="recognitionCard__copy">
              <span className="recognitionCard__eyebrow sub">Tal vez te estás preguntando...</span>
              <h2>¿Te está pesando la relación con la comida, con tu cuerpo o con tu mundo emocional?</h2>
              <p>
                A veces aparece como ansiedad. Otras veces se siente como culpa al comer,
                desconexión, autoexigencia o una incomodidad constante con vos misma. No tenés que
                tenerlo todo claro para pedir ayuda.
              </p>
            </div>

            <ul className="recognitionCard__list">
              <li>Te cuesta habitar tu cuerpo con calma o dejar de compararte.</li>
              <li>La comida se mezcla con culpa, control o demasiadas reglas.</li>
              <li>Vivís sobrepensando, tensándote o sintiendo que nunca es suficiente.</li>
              <li>Querés entender lo que te pasa con más compasión y menos juicio.</li>
            </ul>

            <div className="recognitionCard__actions">
              <Link className="btn btn-secondary" to="/imagen-corporal-conducta-alimentaria">
                Ver acompañamiento en comida y cuerpo
              </Link>
              <Link className="btn btn-ghost" to="/contacto">
                Encontrar una modalidad para empezar
              </Link>
            </div>
          </article>
        </div>
      </section>

      <section className="section brandSection">
        <div className="container infoGrid">
          <article className="card sectionCard">
            <h2>Una terapia centrada en vos</h2>
            <p>
              Volver al Presente no se trata de exigirte estar bien rápido, sino de acompañarte a
              entender lo que estás viviendo, regular lo que hoy pesa y construir recursos que sí
              te sirvan en la vida cotidiana.
            </p>
            <Link className="btn btn-secondary" to="/sobre-mi">
              Conocer enfoque terapéutico
            </Link>
          </article>

          <article className="card sectionCard">
            <h2>Valores que guían el proceso</h2>
            <ul>
              {BRAND_VALUES.map((value) => (
                <li key={value}>{value}</li>
              ))}
            </ul>
          </article>
        </div>
      </section>

      <section className="section lists">
        <div className="container lists__inner">
          <div className="listSection">
            <h3>Cómo trabajo</h3>
            <ul>
              <li>Escucha empática, confidencial y sin juicios.</li>
              <li>Objetivos claros, ritmo humano y proceso personalizado.</li>
              <li>Herramientas aplicables a tu vida diaria y a tus vínculos.</li>
            </ul>
          </div>
          <div className="listSection">
            <h3>Qué esperar en la primera sesión</h3>
            <ul>
              <li>Explorar tu motivo de consulta, contexto y necesidades.</li>
              <li>Definir prioridades terapéuticas y primeros pasos posibles.</li>
              <li>Salir con más claridad, contención y dirección.</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="section faqWrapper">
        <div className="container">
          <h2 className="sectionTitle">Preguntas Frecuentes</h2>
          <FAQ />
        </div>
      </section>
    </main>
  );
}
