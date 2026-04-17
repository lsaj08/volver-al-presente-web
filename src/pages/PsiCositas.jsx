import React, { useMemo } from "react";
import usePageMeta from "../hooks/usePageMeta.js";
import { CONTACT, WHATSAPP_DEFAULT_TEXT } from "../data/content.js";
import "../styles/internal.css";

const RESOURCES = [
  {
    title: "Respiración breve para momentos de ansiedad",
    summary: "Una pausa guiada de 2 minutos para volver al presente cuando sentís sobrecarga.",
    tag: "Ansiedad",
    format: "Pausa guiada",
    imageAlt: "Portada editorial abstracta para un recurso sobre respiración y ansiedad.",
    palette: ["#26b7c0", "#6A1275", "#f8edf8"],
  },
  {
    title: "Chequeo de autocuidado semanal",
    summary: "Preguntas simples para revisar cómo está tu energía y qué necesitás ajustar.",
    tag: "Autocuidado",
    format: "Checklist",
    imageAlt: "Portada editorial abstracta para un recurso de chequeo de autocuidado.",
    palette: ["#a72261", "#f3c9db", "#fff4f9"],
  },
  {
    title: "Guía para poner límites sin culpa",
    summary: "Ideas prácticas para comunicar límites de forma clara y respetuosa.",
    tag: "Límites",
    format: "Guía breve",
    imageAlt: "Portada editorial abstracta para un recurso sobre límites saludables.",
    palette: ["#6A1275", "#26b7c0", "#f6eef9"],
  },
  {
    title: "Relación amable con el cuerpo",
    summary: "Recordatorios para reducir autocrítica y fortalecer una mirada más compasiva.",
    tag: "Imagen corporal",
    format: "Lectura breve",
    imageAlt: "Portada editorial abstracta para un recurso sobre relación amable con el cuerpo.",
    palette: ["#d67aa5", "#6A1275", "#fff6fa"],
  },
  {
    title: "Pausa anti-rumia",
    summary: "Ejercicio breve para cortar bucles de sobrepensamiento y recuperar foco.",
    tag: "Estrés",
    format: "Ejercicio",
    imageAlt: "Portada editorial abstracta para un recurso sobre pausa anti-rumia.",
    palette: ["#26b7c0", "#c9f1f3", "#f1fcfc"],
  },
  {
    title: "Microhábitos de bienestar emocional",
    summary: "Pequeñas acciones diarias para sostener equilibrio emocional con menos exigencia.",
    tag: "Bienestar",
    format: "Recursos diarios",
    imageAlt: "Portada editorial abstracta para un recurso de microhábitos de bienestar emocional.",
    palette: ["#6A1275", "#a72261", "#f8edf6"],
  },
];

function buildPlaceholderImage({ tag, format, palette }) {
  const [primary, secondary, background] = palette;

  const svg = `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 720 440" role="img" aria-hidden="true">
      <defs>
        <linearGradient id="bg" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="${background}" />
          <stop offset="100%" stop-color="#ffffff" />
        </linearGradient>
        <linearGradient id="wash" x1="0%" y1="20%" x2="100%" y2="80%">
          <stop offset="0%" stop-color="${primary}" stop-opacity="0.92" />
          <stop offset="100%" stop-color="${secondary}" stop-opacity="0.88" />
        </linearGradient>
      </defs>
      <rect width="720" height="440" rx="44" fill="url(#bg)" />
      <circle cx="154" cy="122" r="112" fill="${primary}" fill-opacity="0.16" />
      <circle cx="580" cy="102" r="132" fill="${secondary}" fill-opacity="0.14" />
      <circle cx="534" cy="326" r="154" fill="${primary}" fill-opacity="0.1" />
      <rect x="58" y="56" width="220" height="44" rx="22" fill="#ffffff" fill-opacity="0.82" />
      <text x="88" y="84" fill="${primary}" font-family="Montserrat, Arial, sans-serif" font-size="22" font-weight="700">${tag}</text>
      <rect x="58" y="294" width="604" height="72" rx="36" fill="url(#wash)" />
      <path d="M96 216C176 138 278 118 362 146C446 174 512 240 624 228" fill="none" stroke="${primary}" stroke-opacity="0.32" stroke-width="14" stroke-linecap="round"/>
      <path d="M118 246C190 284 250 304 330 300C410 296 494 262 596 182" fill="none" stroke="${secondary}" stroke-opacity="0.22" stroke-width="18" stroke-linecap="round"/>
      <text x="94" y="339" fill="#ffffff" font-family="Montserrat, Arial, sans-serif" font-size="34" font-weight="700">${format}</text>
      <text x="94" y="380" fill="#ffffff" fill-opacity="0.88" font-family="Arial, sans-serif" font-size="18">Volver al Presente</text>
    </svg>
  `;

  return `data:image/svg+xml;charset=UTF-8,${encodeURIComponent(svg)}`;
}

export default function PsiCositas() {
  const waLink = useMemo(() => {
    const text = encodeURIComponent(`${WHATSAPP_DEFAULT_TEXT} Quiero más información de Psi-Cositas.`);
    return `https://wa.me/${CONTACT.waNumber}?text=${text}`;
  }, []);

  usePageMeta(
    "Psi-Cositas | Volver al Presente",
    "Recursos breves de bienestar emocional sobre ansiedad, autocuidado, límites, imagen corporal y estrés."
  );

  return (
    <main>
      <section className="innerHero">
        <div className="container innerHero__content">
          <span className="sub">Psi-Cositas</span>
          <h1>Recursos breves para tu bienestar emocional</h1>
          <p>
            Esta sección reúne contenidos cortos y prácticos para acompañarte en el día a día.
            Quise que se sintiera más como una pequeña biblioteca editorial que como una lista de
            tarjetas sueltas, para que pueda crecer con nuevos artículos y recursos.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container cardGrid cardGrid--editorial">
          {RESOURCES.map((item) => (
            <article className="card resourceCard" key={item.title}>
              <img
                className="resourceCard__image"
                src={buildPlaceholderImage(item)}
                alt={item.imageAlt}
                loading="lazy"
              />
              <div className="resourceCard__body">
                <div className="resourceCard__meta">
                  <span className="tag">{item.tag}</span>
                  <span className="resourceCard__format">{item.format}</span>
                </div>
                <h2>{item.title}</h2>
                <p>{item.summary}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="section mutedSection">
        <div className="container singleColumn">
          <article className="card sectionCard ctaCard">
            <h2>¿Querés acompañamiento personalizado?</h2>
            <p>
              Si necesitás apoyo más profundo para lo que estás viviendo, podés escribirme y
              coordinamos una primera sesión.
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
