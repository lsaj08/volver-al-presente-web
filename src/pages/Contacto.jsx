import React, { useEffect, useMemo, useRef, useState } from "react";
import FAQ from "../components/FAQ.jsx";
import usePageMeta from "../hooks/usePageMeta.js";
import { breadcrumbSchema } from "../data/seo.js";
import { LOCATIONS, WHATSAPP_DEFAULT_TEXT } from "../data/content.js";
import { buildWhatsAppLink, EXTERNAL_LINKS } from "../data/externalLinks.js";
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

function CalendarIcon() {
  return (
    <svg className="icon" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <rect x="4" y="5" width="16" height="15" rx="2" stroke="currentColor" strokeWidth="2" />
      <path d="M8 3v4M16 3v4M4 10h16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <path d="m9 15 2 2 4-4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function MapsIcon() {
  return (
    <svg className="icon" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M12 21s7-4.6 7-11a7 7 0 1 0-14 0c0 6.4 7 11 7 11Z" stroke="currentColor" strokeWidth="2" />
      <circle cx="12" cy="10" r="2.2" fill="currentColor" />
    </svg>
  );
}

function WazeIcon() {
  return (
    <svg className="icon" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M18.5 15.5c1.4-1.1 2.2-2.7 2.2-4.6 0-3.7-3.4-6.7-7.6-6.7-4.4 0-7.8 2.8-7.8 6.6 0 2.2 1.2 4.1 3.2 5.2v2.1h8.7l1.3-2.6Z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
      <circle cx="10" cy="10" r="1" fill="currentColor" /><circle cx="15" cy="10" r="1" fill="currentColor" />
      <path d="M10 13.5c1.6 1.1 3.4 1.1 5 0" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  );
}

export default function Contacto() {
  const waLink = useMemo(() => buildWhatsAppLink(WHATSAPP_DEFAULT_TEXT), []);
  const [activeBooking, setActiveBooking] = useState(null);
  const closeBookingButton = useRef(null);

  useEffect(() => {
    if (!activeBooking) return undefined;

    const closeOnEscape = (event) => {
      if (event.key === "Escape") setActiveBooking(null);
    };
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    document.addEventListener("keydown", closeOnEscape);
    closeBookingButton.current?.focus();

    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", closeOnEscape);
    };
  }, [activeBooking]);

  usePageMeta(
    "Agendar terapia en Costa Rica | Marcela Zamora",
    "Contacto para agendar cita psicológica en Costa Rica con Marcela Zamora. WhatsApp y agenda online para iniciar terapia.",
    { canonicalPath: "/contacto" },
    { schemas: [breadcrumbSchema([{ name: "Contacto", path: "/contacto" }])] }
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
              online o Presencial, escribiendo algo tan sencillo como “quiero empezar terapia”.
            </p>

            <div className="hero__cta">
              <a className="btn channelWhatsApp" href={waLink} target="_blank" rel="noopener noreferrer">
                <WhatsIcon /> Escribir por WhatsApp
              </a>

              <a className="btn btn-secondary" href={EXTERNAL_LINKS.booking} target="_blank" rel="noopener noreferrer">
                <CalendarIcon /> Agendar sesión
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
        <div className="container contactContent">
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
                  <button
                    className="btn btn-primary small"
                    type="button"
                    onClick={() => setActiveBooking({
                      title: "Agendar sesión online",
                      url: EXTERNAL_LINKS.bookingWidgets.online,
                    })}
                  >
                    <CalendarIcon /> Agendar
                  </button>
                </div>
              </div>
            </div>

            <div className="sectionLabel">Atención Presencial</div>

            <div className="cards2">
              <div className="card locationCard">
                <div className="locationCard__info">
                  <div className="locationTitle">{LOCATIONS[0].heading}</div>
                  <div className="locationSub">
                    <span>{LOCATIONS[0].addressLine}</span>
                    <span>{LOCATIONS[0].venue}</span>
                  </div>
                  <div className="locationActions">
                    <button
                      className="btn btn-primary small"
                      type="button"
                      aria-expanded={activeBooking?.url === EXTERNAL_LINKS.bookingWidgets.heredia}
                      onClick={() => setActiveBooking({
                        title: "Agendar atención presencial en Tree Cowork, Heredia",
                        url: EXTERNAL_LINKS.bookingWidgets.heredia,
                      })}
                    >
                      <CalendarIcon /> Agendar
                    </button>
                  </div>
                  <div className="locationSub">¿Cómo llegar?</div>
                  <div className="locationActions">
                    <a
                      className="btn btn-ghost small"
                      href={EXTERNAL_LINKS.maps.heredia}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <MapsIcon /> Maps
                    </a>
                    <a
                      className="btn btn-ghost small"
                      href={EXTERNAL_LINKS.waze.heredia}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <WazeIcon /> Waze
                    </a>
                  </div>
                </div>
              </div>

              <div className="card locationCard">
                <div className="locationCard__info">
                  <div className="locationTitle">{LOCATIONS[1].heading}</div>
                  <div className="locationSub">
                    <span>{LOCATIONS[1].addressLine}</span>
                    <span>{LOCATIONS[1].venue}</span>
                  </div>
                  <div className="locationActions">
                    <button
                      className="btn btn-primary small"
                      type="button"
                      aria-expanded={activeBooking?.url === EXTERNAL_LINKS.bookingWidgets.sanJose}
                      onClick={() => setActiveBooking({
                        title: "Agendar atención presencial en Tree Armonioso, San José",
                        url: EXTERNAL_LINKS.bookingWidgets.sanJose,
                      })}
                    >
                      <CalendarIcon /> Agendar
                    </button>
                  </div>
                  <div className="locationSub">¿Cómo llegar?</div>
                  <div className="locationActions">
                    <a
                      className="btn btn-ghost small"
                      href={EXTERNAL_LINKS.maps.sanJose}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <MapsIcon /> Maps
                    </a>
                    <a
                      className="btn btn-ghost small"
                      href={EXTERNAL_LINKS.waze.sanJose}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <WazeIcon /> Waze
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

        </div>
      </section>

      {activeBooking && (
        <div
          className="bookingModal"
          role="presentation"
          onMouseDown={(event) => {
            if (event.target === event.currentTarget) setActiveBooking(null);
          }}
        >
          <div
            className="bookingModal__dialog"
            role="dialog"
            aria-modal="true"
            aria-label={activeBooking.title}
          >
            <button
              ref={closeBookingButton}
              className="bookingModal__close"
              type="button"
              aria-label="Cerrar agenda"
              onClick={() => setActiveBooking(null)}
            >
              ×
            </button>
            <iframe
              src={activeBooking.url}
              title={activeBooking.title}
              allow="payment"
              className="bookingModal__iframe"
              scrolling="auto"
              id="booking-widget-frame"
            />
            <script src={EXTERNAL_LINKS.herediaBookingWidgetScript} type="text/javascript" />
          </div>
        </div>
      )}

      <a className="waFloat" href={waLink} target="_blank" rel="noopener noreferrer" aria-label="WhatsApp">
        <WhatsIcon />
      </a>
    </main>
  );
}
