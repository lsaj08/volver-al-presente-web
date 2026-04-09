import React, { useMemo } from "react";

// The home page component for Volver al Presente.
//
// This file defines the structure and behaviour of the home page shown in the
// reference mock‑up. It reuses the existing Header, Footer and FAQ
// components (which you should have in your project from the contact page) and
// introduces additional UI elements: a hero section with a call‑to‑action,
// a scrollable row of therapeutic topic cards, explanatory lists describing
// how the therapist works and what to expect from a first session, a set of
// location cards and a FAQ. To keep things modular the icons used in this
// file live next to the components that require them.

// NOTE: You may need to adjust import paths depending on where you place
// this file relative to your components. In a typical React+Vite project
// these would live under src/components or src/pages.
import Footer from "../components/Footer.jsx";
import FAQ from "../components/FAQ.jsx";

// Import the styles for this page. When you integrate this file into a
// React+Vite project place home.css next to this component and adjust
// the path accordingly if needed.
import "../styles/home.css";
import heroPic from "../assets/banner.jpeg";

// Constants for phone numbers and WhatsApp configuration. Feel free to
// customise these values to match your real contact information.
const PHONE_DISPLAY = "+506 8565 0659";
const PHONE_TEL = "50685650659";
const WA_NUMBER = "50685650659";

// WhatsApp icon. Drawn with simple shapes to avoid external dependencies.
function WhatsIcon({ className }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
    >
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

// Phone icon used on call buttons.
function PhoneIcon({ className }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M8 3h3l1.5 5-2 1.2c1 2.3 2.8 4.2 5.3 5.3L17 13l4 1.5V18c0 1.1-.9 2-2 2h-1C9.7 20 4 14.3 4 7V6c0-1.1.9-2 2-2Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinejoin="round"
      />
    </svg>
  );
}

// Tick icon used in lists.
function CheckIcon({ className }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M20 6 9 17l-5-5"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

// A simple head silhouette icon. Used for several of the topic cards.
function HeadIcon({ className }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
    >
      <circle cx="12" cy="7" r="4" fill="currentColor" />
      <path
        d="M8 12c0 3 8 3 8 0v5H8v-5Z"
        fill="currentColor"
      />
    </svg>
  );
}

// A simple heart icon. Used on some topic cards.
function HeartIcon({ className }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M12 21s-7-4.5-7-10a5 5 0 0 1 10 0 5 5 0 0 1 10 0c0 5.5-7 10-7 10Z"
        fill="currentColor"
      />
    </svg>
  );
}

// A self‑esteem icon: a head with a small heart.
function SelfIcon({ className }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
    >
      <circle cx="12" cy="7" r="4" fill="currentColor" />
      <path
        d="M8 12c0 3 8 3 8 0v5H8v-5Z"
        fill="currentColor"
      />
      <path
        d="M16.5 5.5a1.7 1.7 0 1 0-3.4 0c0 .9.7 1.6 1.7 2.4.9-.8 1.7-1.5 1.7-2.4Z"
        fill="currentColor"
      />
    </svg>
  );
}

// Data describing each therapeutic topic card. Each entry defines a
// label and an associated icon component. Feel free to expand or modify
// this list to cover other areas of your practice.
const TOPICS = [
  { id: "ansiedad", label: "Ansiedad", icon: HeadIcon },
  { id: "imagen-corporal", label: "Imagen Corporal", icon: HeartIcon },
  { id: "trauma-duelo", label: "Trauma y Duelo", icon: HeartIcon },
  { id: "autoestima-limites", label: "Autoestima y Límites", icon: SelfIcon },
  { id: "estres", label: "Estrés y Perfeccionismo", icon: HeartIcon },
  { id: "depresion", label: "Depresión", icon: HeadIcon },
];

// A single card in the topics row. Displays an icon inside a coloured
// circle and a label below. Colours alternate based on the card index
// using CSS variables defined in your global stylesheet.
function TopicCard({ label, Icon, index }) {
  // Determine a background colour for the icon based on index
  const colours = ["var(--teal)", "var(--magenta)", "var(--purple)"];
  const bg = colours[index % colours.length];
  return (
    <div className="topicCard" role="button" tabIndex={0}>
      <div
        className="topicCard__iconWrapper"
        style={{ backgroundColor: bg }}
      >
        <Icon className="topicCard__icon" />
      </div>
      <span className="topicCard__label">{label}</span>
    </div>
  );
}

// A single location card. It shows a small photo, title, subtitle and a
// button linking to Google Maps. For now we use placeholder images via CSS
// backgrounds; supply your own images via the `image` prop.
function LocationCard({ title, subtitle, mapsQuery, image }) {
  // Build a Google Maps link using the API query. When the user clicks
  // it they will be taken to a map with directions to the address.
  const mapsLink = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
    mapsQuery
  )}`;
  return (
    <div className="locationCard">
      <div
        className="locationCard__image"
        style={{ backgroundImage: `url(${image})` }}
      />
      <div className="locationCard__info">
        <div className="locationCard__title">{title}</div>
        <div className="locationCard__subtitle">{subtitle}</div>
        <a
          className="btn btn-secondary btnMap"
          href={mapsLink}
          target="_blank"
          rel="noreferrer"
        >
          <PinIcon className="icon" /> Cómo llegar
        </a>
      </div>
    </div>
  );
}

// Pin icon used inside location cards.
function PinIcon({ className }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M12 21s7-4.6 7-11a7 7 0 1 0-14 0c0 6.4 7 11 7 11Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinejoin="round"
      />
      <circle cx="12" cy="9" r="2.2" fill="currentColor" />
    </svg>
  );
}

export default function Home() {
  // Compute the WhatsApp link. Use the official wa.me URL scheme and
  // include a default message for convenience.
  const waLink = useMemo(() => {
    const text = encodeURIComponent(
      "Hola, me gustaría agendar una sesión. ¿Qué horarios tenés disponibles?"
    );
    return `https://wa.me/${WA_NUMBER}?text=${text}`;
  }, []);

  return (
    <div className="page">
      <main>
        {/* Hero section */}
        <section className="heroHome">
          <div className="container heroHome__inner">
            {/* Left side: heading and buttons */}
            <div className="heroHome__copy">
              <div className="heroHome__titleWrapper">
                <h1 className="heroHome__title">
                  Te acompaño a vivir en bienestar emocional
                </h1>
                <p className="heroHome__subtitle">
                  Volver al Presente con Psicóloga Marcela Zamora
                </p>
              </div>
              <div className="heroHome__cta">
                <a
                  className="btn btn-primary"
                  href={waLink}
                  target="_blank"
                  rel="noreferrer"
                >
                  <WhatsIcon className="icon" /> Escribir por WhatsApp
                </a>
                <a
                className="btn btn-secondary"
                href="https://app.hulivida.com/citas/marcela-zamora-arrieta"
                target="_blank"
                rel="noopener noreferrer"
                >
                  <PhoneIcon className="icon" /> Agendar sesión
                </a>
              </div>
            </div>
            {/* Right side: image of the therapist. Replace the URL with your own photo */}
            <div className="heroHome__art">
              <div
                className="heroHome__image"
                style={{
                  backgroundImage:
                    `url(${heroPic})`,
                }}
              />
            </div>
          </div>
        </section>

        {/* Topics row */}
        <section className="topics">
          <div className="container topics__inner">
            <div className="topics__list">
              {TOPICS.map((topic, idx) => (
                <TopicCard
                  key={topic.id}
                  label={topic.label}
                  Icon={topic.icon}
                  index={idx}
                />
              ))}
            </div>
          </div>
        </section>

        {/* Lists: How I work / What to expect */}
        <section className="section lists">
          <div className="container lists__inner">
            <div className="listSection">
              <h3>Cómo trabajo</h3>
              <ul>
                <li>
                  <CheckIcon className="listIcon" />
                  Escucha empática
                </li>
                <li>
                  <CheckIcon className="listIcon" />
                  Técnicas personalizadas
                </li>
                <li>
                  <CheckIcon className="listIcon" />
                  Espacio seguro y confidencial
                </li>
              </ul>
            </div>
            <div className="listSection">
              <h3>Qué esperar en la primera sesión</h3>
              <ul>
                <li>
                  <CheckIcon className="listIcon" />
                  Conocernos y explorar tu historia
                </li>
                <li>
                  <CheckIcon className="listIcon" />
                  Establecer objetivos
                </li>
                <li>
                  <CheckIcon className="listIcon" />
                  Plan de acción inicial
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Locations */}
        <section className="section locations">
          <div className="container locations__inner">
            <LocationCard
              title="Barrio Corazón de Jesús, Heredia"
              subtitle="Heredia, Heredia, Costa Rica"
              mapsQuery="Barrio Corazón de Jesús, Heredia, Costa Rica"
              // Replace the placeholder with a real photo of this location
              image="https://images.pexels.com/photos/462331/pexels-photo-462331.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
            />
            <LocationCard
              title="Barrio González Lahman, San José"
              subtitle="Catedral, San José, Costa Rica"
              mapsQuery="Barrio González Lahman, San José, Costa Rica"
              image="https://images.pexels.com/photos/2102587/pexels-photo-2102587.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
            />
          </div>
        </section>

        {/* FAQ */}
        <section className="section faqWrapper">
          <div className="container">
            <h2 className="sectionTitle">Preguntas Frecuentes</h2>
            <FAQ />
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}