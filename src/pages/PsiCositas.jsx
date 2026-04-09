import React, { useMemo } from "react";
import usePageMeta from "../hooks/usePageMeta.js";
import { CONTACT, WHATSAPP_DEFAULT_TEXT } from "../data/content.js";
import "../styles/internal.css";

const RESOURCES = [
  {
    title: "Respiración breve para momentos de ansiedad",
    summary: "Una pausa guiada de 2 minutos para volver al presente cuando sentís sobrecarga.",
    tag: "Ansiedad",
  },
  {
    title: "Chequeo de autocuidado semanal",
    summary: "Preguntas simples para revisar cómo está tu energía y qué necesitás ajustar.",
    tag: "Autocuidado",
  },
  {
    title: "Guía para poner límites sin culpa",
    summary: "Ideas prácticas para comunicar límites de forma clara y respetuosa.",
    tag: "Límites",
  },
  {
    title: "Relación amable con el cuerpo",
    summary: "Recordatorios para reducir autocrítica y fortalecer una mirada más compasiva.",
    tag: "Imagen corporal",
  },
  {
    title: "Pausa anti-rumia",
    summary: "Ejercicio breve para cortar bucles de sobrepensamiento y recuperar foco.",
    tag: "Estrés",
  },
  {
    title: "Microhábitos de bienestar emocional",
    summary: "Pequeñas acciones diarias para sostener equilibrio emocional con menos exigencia.",
    tag: "Bienestar",
  },
];

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
            Esta sección reúne contenidos cortos y prácticos para acompañarte en
            el día a día. Es una versión editorial inicial pensada para crecer con
            más materiales.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container cardGrid">
          {RESOURCES.map((item) => (
            <article className="card serviceCard" key={item.title}>
              <span className="tag">{item.tag}</span>
              <h2>{item.title}</h2>
              <p>{item.summary}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section mutedSection">
        <div className="container singleColumn">
          <article className="card sectionCard ctaCard">
            <h2>¿Querés acompañamiento personalizado?</h2>
            <p>
              Si necesitás apoyo más profundo para lo que estás viviendo, podés
              escribirme y coordinamos una primera sesión.
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
