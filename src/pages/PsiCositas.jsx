import React, { useMemo } from "react";
import { Link } from "react-router-dom";
import usePageMeta from "../hooks/usePageMeta.js";
import { CONTACT, WHATSAPP_DEFAULT_TEXT } from "../data/content.js";
import "../styles/internal.css";

const RESOURCES = [
  {
    title: "Respiración breve para momentos de ansiedad",
    summary: "Una pausa guiada de 2 minutos para volver al presente cuando sentís sobrecarga.",
    tag: "Ansiedad",
    image: "https://images.pexels.com/photos/3759657/pexels-photo-3759657.jpeg?auto=compress&cs=tinysrgb&w=800",
  },
  {
    title: "Chequeo de autocuidado semanal",
    summary: "Preguntas simples para revisar cómo está tu energía y qué necesitás ajustar.",
    tag: "Autocuidado",
    image: "https://images.pexels.com/photos/4050315/pexels-photo-4050315.jpeg?auto=compress&cs=tinysrgb&w=800",
  },
  {
    title: "Guía para poner límites sin culpa",
    summary: "Ideas prácticas para comunicar límites de forma clara y respetuosa.",
    tag: "Límites",
    image: "https://images.pexels.com/photos/4050284/pexels-photo-4050284.jpeg?auto=compress&cs=tinysrgb&w=800",
  },
  {
    title: "Relación amable con el cuerpo",
    summary: "Recordatorios para reducir autocrítica y fortalecer una mirada más compasiva.",
    tag: "Imagen corporal",
    image: "https://images.pexels.com/photos/3764538/pexels-photo-3764538.jpeg?auto=compress&cs=tinysrgb&w=800",
  },
  {
    title: "Pausa anti-rumia",
    summary: "Ejercicio breve para cortar bucles de sobrepensamiento y recuperar foco.",
    tag: "Estrés",
    image: "https://images.pexels.com/photos/3759661/pexels-photo-3759661.jpeg?auto=compress&cs=tinysrgb&w=800",
  },
  {
    title: "Microhábitos de bienestar emocional",
    summary: "Pequeñas acciones diarias para sostener equilibrio emocional con menos exigencia.",
    tag: "Bienestar",
    image: "https://images.pexels.com/photos/669578/pexels-photo-669578.jpeg?auto=compress&cs=tinysrgb&w=800",
  },
];

export default function PsiCositas() {
  const waLink = useMemo(() => {
    const text = encodeURIComponent(`${WHATSAPP_DEFAULT_TEXT} Quiero más información de Psi-Cositas.`);
    return `https://wa.me/${CONTACT.waNumber}?text=${text}`;
  }, []);

  usePageMeta(
    "Psi-Cositas | Recursos de bienestar emocional",
    "Recursos breves sobre ansiedad, autocuidado, límites, imagen corporal, estrés y bienestar emocional.",
    {
      canonicalPath: "/psi-cositas",
      ogTitle: "Psi-Cositas | Volver al Presente",
      ogDescription: "Recursos editoriales para acompañar tu bienestar emocional en el día a día.",
    }
  );

  return (
    <main>
      <section className="innerHero">
        <div className="container innerHero__content">
          <span className="sub">Psi-Cositas</span>
          <h1>Recursos breves para volver al presente en el día a día</h1>
          <p>
            Esta sección reúne materiales cortos y útiles. No reemplaza un proceso
            terapéutico, pero puede ayudarte a sostener hábitos de cuidado entre sesiones.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container cardGrid cardGrid--editorial">
          {RESOURCES.map((item) => (
            <article className="card editorialCard" key={item.title}>
              <img className="editorialCard__image" src={item.image} alt={`Imagen de recurso: ${item.title}`} loading="lazy" />
              <div className="editorialCard__content">
                <span className="tag">{item.tag}</span>
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
              Si necesitás apoyo más profundo para ansiedad, autoestima, trauma o depresión,
              podés revisar los <Link to="/servicios">servicios</Link> o escribirme directamente.
            </p>
            <a className="btn btn-primary" href={waLink} target="_blank" rel="noopener noreferrer">
              Escribir por WhatsApp
            </a>
          </article>
        </div>
      </section>
    </main>
  );
}
