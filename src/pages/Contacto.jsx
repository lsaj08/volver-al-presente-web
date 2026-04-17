import React, { useMemo } from "react";
import FAQ from "../components/FAQ.jsx";
import usePageMeta from "../hooks/usePageMeta.js";
import { CONTACT, WHATSAPP_DEFAULT_TEXT } from "../data/content.js";
import "../styles/contacto.css";

function WhatsIcon() {
  return (
    <svg className="icon" viewBox="0 0 24 24" fill="none" aria-hidden="true">
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

function PhoneIcon() {
  return (
    <svg className="icon" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M8 3h3l1.5 5-2 1.2c1 2.3 2.8 4.2 5.3 5.3L17 13l4 1.5V18c0 1.1-.9 2-2 2h-1C9.7 20 4 14.3 4 7V6c0-1.1.9-2 2-2Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function PinIcon() {
  return (
    <svg className="icon" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M12 21s7-4.6 7-11a7 7 0 1 0-14 0c0 6.4 7 11 7 11Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinejoin="round"
      />
      <path d="M12 11.2a2.2 2.2 0 1 0 0-4.4 2.2 2.2 0 0 0 0 4.4Z" fill="currentColor" opacity=".9" />
    </svg>
  );
}

export default function Contacto() {
  const waLink = useMemo(() => {
    const text = encodeURIComponent(WHATSAPP_DEFAULT_TEXT);
    return `https://wa.me/${CONTACT.waNumber}?text=${text}`;
  }, []);

  usePageMeta(
    "Agendar terapia en Costa Rica | Contacto Psicóloga Marcela Zamora",
    "Contacto para agendar cita psicológica en Costa Rica con Marcela Zamora. WhatsApp y agenda online para iniciar terapia.",
    { canonicalPath: "/contacto" }
  );

  return (
    <main>
      <section className="hero">
        <div className="container hero__inner">
          <div className="hero__copy">
            <div className="hero__kicker sub">Contacto / Agendar terapia</div>
            <h1 className="h1 hero__title">Tu primer paso puede ser un mensaje simple</h1>
            <p className="hero__lead">
              Si llegaste con ansiedad, dudas o vergüenza, está bien. Podés iniciar en modalidad
              online o presencial, escribiendo algo tan sencillo como “quiero empezar terapia”.
            </p>

            <div className="hero__cta">
              <a className="btn btn-primary" href={waLink} target="_blank" rel="noreferrer">
                <WhatsIcon /> Escribir por WhatsApp
              </a>

              <a className="btn btn-secondary" href={CONTACT.bookingUrl} target="_blank" rel="noreferrer">
                <PhoneIcon /> Agendar sesión
              </a>
            </div>
          </div>

          <div className="hero__art" aria-hidden="true">
            <div className="artCard">
              <div className="artHalo" />
              <div className="artFigure">
                <div className="head" />
                <div className="body" />
                <div className="hands" />
              </div>
              <div className="artSpark s1" />
              <div className="artSpark s2" />
              <div className="artSpark s3" />
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container grid2">
          <div className="stack">
            <h2 className="h2 sectionTitle">Elegí la modalidad que mejor se adapte a vos</h2>

            <div className="card virtualCard">
              <div className="virtualCard__art" aria-hidden="true">
                <div className="screen" />
                <div className="bubble b1" />
                <div className="bubble b2" />
              </div>
              <div className="virtualCard__content">
                <span className="contactBadge">Modalidad online</span>
                <div className="locationTitle">Atención online desde donde estés</div>
                <p className="virtualCard__text">
                  Podés llevar tu proceso terapéutico desde casa o desde el lugar donde te sintás
                  más cómoda. Solo necesitás privacidad, conexión estable y un espacio tranquilo.
                </p>
                <div className="locationActions">
                  <a className="btn btn-primary small" href={CONTACT.bookingUrl} target="_blank" rel="noreferrer">
                    <PhoneIcon /> Agendar online
                  </a>
                  <a className="btn btn-secondary small" href={waLink} target="_blank" rel="noreferrer">
                    <WhatsIcon /> Consultar por WhatsApp
                  </a>
                </div>
              </div>
            </div>

            <div className="sectionLabel">Atención presencial</div>

            <div className="cards2">
              <div className="card locationCard">
                <div className="locationCard__info">
                  <div className="locationTitle">Atención presencial en Heredia</div>
                  <div className="locationSub">Barrio Corazón de Jesús, Heredia, Costa Rica</div>
                  <div className="locationActions">
                    <a
                      className="btn btn-ghost small"
                      href="https://www.google.com/maps/search/?api=1&query=Barrio%20Coraz%C3%B3n%20de%20Jes%C3%BAs%2C%20Heredia%2C%20Costa%20Rica"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <PinIcon /> Cómo llegar
                    </a>
                    <a className="locationPhone" href={`tel:${CONTACT.phoneTel}`}>
                      {CONTACT.phoneDisplay}
                    </a>
                  </div>
                </div>
              </div>

              <div className="card locationCard">
                <div className="locationCard__info">
                  <div className="locationTitle">Atención presencial en San José</div>
                  <div className="locationSub">Barrio González Lahmann, Catedral, San José, Costa Rica</div>
                  <div className="locationActions">
                    <a
                      className="btn btn-ghost small"
                      href="https://www.google.com/maps/search/?api=1&query=Barrio%20Gonz%C3%A1lez%20Lahmann%2C%20San%20Jos%C3%A9%2C%20Costa%20Rica"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <PinIcon /> Cómo llegar
                    </a>
                    <a className="locationPhone" href={`tel:${CONTACT.phoneTel}`}>
                      {CONTACT.phoneDisplay}
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="card faqCard">
              <div className="h3">Preguntas Frecuentes</div>
              <div className="hr" />
              <FAQ />
            </div>
          </div>

          <div className="stack">
            <h2 className="h2 sectionTitle">Canales de contacto</h2>

            <div className="card formCard">
              <p className="muted">
                La forma más rápida de iniciar es por WhatsApp o agenda online. Si no sabés qué
                modalidad elegir, podés escribirme y vemos juntas cuál se ajusta mejor a tu momento.
              </p>
              <a className="btn btn-primary formBtn" href={waLink} target="_blank" rel="noreferrer">
                <WhatsIcon /> Escribir por WhatsApp
              </a>
              <a
                className="btn btn-secondary formBtn"
                href={CONTACT.bookingUrl}
                target="_blank"
                rel="noreferrer"
              >
                <PhoneIcon /> Ir a agenda online
              </a>
              <a className="btn btn-ghost formBtn" href={`tel:${CONTACT.phoneTel}`}>
                <PhoneIcon /> {CONTACT.phoneDisplay}
              </a>
            </div>

            <div className="card miniCTA">
              <h3 className="miniCTA__title">¿No sabés si te conviene online o presencial?</h3>
              <p className="muted">
                Ambas modalidades permiten un proceso terapéutico cuidado. La opción online puede
                ser ideal si buscás mayor flexibilidad, mientras que la presencial queda disponible
                si preferís encontrarte en consultorio.
              </p>
            </div>
          </div>
        </div>
      </section>

      <a className="waFloat" href={waLink} target="_blank" rel="noreferrer" aria-label="WhatsApp">
        <WhatsIcon />
      </a>
    </main>
  );
}
