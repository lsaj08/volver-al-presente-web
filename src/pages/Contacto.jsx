import React, { useMemo } from "react";
import Header from "../components/Header.jsx";
import Footer from "../components/Footer.jsx";
import FAQ from "../components/FAQ.jsx";
import "../styles/contacto.css";

const PHONE = "+506 8565 0659";
const PHONE_TEL = "+50685650659";
const WA_NUMBER = "50685650659";

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
      <path
        d="M12 11.2a2.2 2.2 0 1 0 0-4.4 2.2 2.2 0 0 0 0 4.4Z"
        fill="currentColor"
        opacity=".9"
      />
    </svg>
  );
}

function MiniMap() {
  return (
    <div className="miniMap" aria-hidden="true">
      <div className="miniMap__grid" />
      <div className="miniMap__pin">
        <PinIcon />
      </div>
    </div>
  );
}

export default function Contacto() {
  const waLink = useMemo(() => {
    const text = encodeURIComponent("Hola, me gustaría agendar una sesión. ¿Qué horarios tenés disponibles?");
    return `https://wa.me/${WA_NUMBER}?text=${text}`;
  }, []);

  const onSubmit = (e) => {
    e.preventDefault();
    // Maqueta: enviamos por mailto. Si luego usás backend, lo cambiamos.
    const form = new FormData(e.currentTarget);
    const name = (form.get("name") || "").toString();
    const email = (form.get("email") || "").toString();
    const msg = (form.get("message") || "").toString();

    const subject = encodeURIComponent("Contacto desde la web — Volver al Presente");
    const body = encodeURIComponent(`Nombre: ${name}\nCorreo: ${email}\n\nMensaje:\n${msg}`);
    window.location.href = `mailto:contacto@tudominio.com?subject=${subject}&body=${body}`;
  };

  return (
    <div className="page">
      <main>
        {/* HERO */}
        <section className="hero">
          <div className="container hero__inner">
            <div className="hero__copy">
              <div className="hero__kicker sub">Contacto / Agendar</div>
              <h1 className="h1 hero__title">¿Damos el primer paso?</h1>
              <p className="hero__lead">Contactáme y agendemos.</p>

              <div className="hero__cta">
                <a className="btn btn-primary" href={waLink} target="_blank" rel="noreferrer">
                  <WhatsIcon />
                  Escribir por WhatsApp
                </a>

                <a className="btn btn-secondary" href={`tel:${PHONE_TEL}`}>
                  <PhoneIcon />
                  Llamar {PHONE}
                </a>
              </div>

              <div className="chipsRow">
                <span className="chip is-active">Todo</span>
                <span className="chip">Ansiedad</span>
                <span className="chip">Límites</span>
                <span className="chip">Estrés</span>
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

        {/* CONTENT GRID */}
        <section className="section">
          <div className="container grid2">
            {/* LEFT */}
            <div className="stack">
              <h2 className="h2 sectionTitle">Dónde te encuentro</h2>

              <div className="cards2">
                <div className="card locationCard">
                  <div className="locationCard__info">
                    <div className="locationTitle">Barrio Corazón de Jesús</div>
                    <div className="locationSub">Heredia, Heredia, Costa Rica</div>
                    <div className="locationActions">
                      <a
                        className="btn btn-ghost small"
                        href="https://www.google.com/maps/search/?api=1&query=Barrio%20Coraz%C3%B3n%20de%20Jes%C3%BAs%2C%20Heredia%2C%20Costa%20Rica"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <PinIcon /> Cómo llegar
                      </a>
                      <a className="locationPhone" href={`tel:${PHONE_TEL}`}>{PHONE}</a>
                    </div>
                  </div>
                  <div className="locationCard__map">
                    <MiniMap />
                    <a
                      className="btn btn-secondary small"
                      href="https://www.google.com/maps/search/?api=1&query=Barrio%20Coraz%C3%B3n%20de%20Jes%C3%BAs%2C%20Heredia%2C%20Costa%20Rica"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Cómo llegar →
                    </a>
                  </div>
                </div>

                <div className="card locationCard">
                  <div className="locationCard__info">
                    <div className="locationTitle">
                      <span className="pinBadge"><PinIcon /></span>
                      Barrio González Lahmann
                    </div>
                    <div className="locationSub">Catedral, San José, Costa Rica</div>
                    <div className="locationActions">
                      <a className="locationPhone" href={`tel:${PHONE_TEL}`}>{PHONE}</a>
                      <a className="locationPhone" href={`tel:${PHONE_TEL}`}>{PHONE}</a>
                    </div>
                  </div>
                  <div className="locationCard__map">
                    <MiniMap />
                    <a
                      className="btn btn-secondary small"
                      href="https://www.google.com/maps/search/?api=1&query=Barrio%20Gonz%C3%A1lez%20Lahmann%2C%20San%20Jos%C3%A9%2C%20Costa%20Rica"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Cómo llegar →
                    </a>
                  </div>
                </div>
              </div>

              <div className="card virtualCard">
                <div className="virtualCard__art" aria-hidden="true">
                  <div className="screen" />
                  <div className="bubble b1" />
                  <div className="bubble b2" />
                </div>
                <div>
                  <div className="h3">Modalidad Virtual</div>
                  <p className="muted">
                    También ofrezco sesiones online por videollamada para mayor comodidad y flexibilidad,
                    desde donde estés.
                  </p>
                </div>
              </div>

              <div className="card faqCard">
                <div className="h3">Preguntas Frecuentes</div>
                <div className="hr" />
                <FAQ />
              </div>
            </div>

            {/* RIGHT */}
            <div className="stack">
              <h2 className="h2 sectionTitle">Envíame un mensaje</h2>

              <form className="card formCard" onSubmit={onSubmit}>
                <label className="field">
                  <span className="label">Nombre</span>
                  <input name="name" placeholder="Tu nombre" required />
                </label>

                <label className="field">
                  <span className="label">Correo electrónico</span>
                  <input name="email" type="email" placeholder="tucorreo@email.com" required />
                </label>

                <label className="field">
                  <span className="label">Mensaje</span>
                  <textarea name="message" rows="5" placeholder="Contame en qué te puedo acompañar…" required />
                </label>

                <button className="btn btn-primary formBtn" type="submit">
                  Enviar mensaje →
                </button>

                <div className="formHint muted">
                  Al enviar, se abrirá tu app de correo (por ahora es maqueta). Si querés,
                  lo conectamos a un backend más adelante.
                </div>
              </form>

              <div className="card miniCTA">
                <div className="miniCTA__title h3">¿Preferís WhatsApp?</div>
                <p className="muted">Es la forma más rápida para coordinar horario.</p>
                <a className="btn btn-secondary" href={waLink} target="_blank" rel="noreferrer">
                  <WhatsIcon /> Escribir ahora
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Floating WhatsApp */}
        <a className="waFloat" href={waLink} target="_blank" rel="noreferrer" aria-label="WhatsApp">
          <WhatsIcon />
        </a>
      </main>

      <Footer />
    </div>
  );
}