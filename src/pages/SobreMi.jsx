import React, { useMemo } from "react";
import usePageMeta from "../hooks/usePageMeta.js";
import { BRAND_VALUES, CONTACT, WHATSAPP_DEFAULT_TEXT } from "../data/content.js";
import "../styles/internal.css";

export default function SobreMi() {
  const waLink = useMemo(() => {
    const text = encodeURIComponent(`${WHATSAPP_DEFAULT_TEXT} Quiero conocer más sobre tu enfoque terapéutico.`);
    return `https://wa.me/${CONTACT.waNumber}?text=${text}`;
  }, []);

  usePageMeta(
    "Sobre mí | Volver al Presente",
    "Conocé a la Psicóloga Marcela Zamora, su enfoque terapéutico, misión, visión, valores y experiencia profesional."
  );

  return (
    <main>
      <section className="innerHero">
        <div className="container innerHero__content">
          <span className="sub">Sobre mí</span>
          <h1>Psicóloga Marcela Zamora</h1>
          <p>
            Acompaño procesos psicoterapéuticos desde una mirada humana,
            respetuosa y centrada en el presente, para que puedas construir mayor
            bienestar emocional en tu vida cotidiana.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container infoGrid">
          <article className="card sectionCard">
            <h2>¿Qué significa “Volver al Presente”?</h2>
            <p>
              Volver al Presente es un recordatorio de que, incluso en momentos de
              ansiedad, dolor o confusión, existe la posibilidad de reconectar con
              vos misma, con tus recursos y con decisiones más conscientes.
            </p>
          </article>

          <article className="card sectionCard">
            <h2>Forma de trabajo</h2>
            <ul>
              <li>Escucha empática y sin juicios.</li>
              <li>Estrategias personalizadas según tu historia y contexto.</li>
              <li>Proceso colaborativo con objetivos claros y realistas.</li>
            </ul>
          </article>
        </div>
      </section>

      <section className="section mutedSection">
        <div className="container infoGrid">
          <article className="card sectionCard">
            <h2>¿Qué esperar en la primera sesión?</h2>
            <ul>
              <li>Un espacio seguro para contar lo que te está pasando.</li>
              <li>Definición inicial de necesidades y objetivos terapéuticos.</li>
              <li>Primeras herramientas para sentir mayor contención.</li>
            </ul>
          </article>

          <article className="card sectionCard">
            <h2>Misión y visión</h2>
            <p>
              <strong>Misión:</strong> brindar acompañamiento psicológico cálido,
              ético y profesional para promover bienestar emocional.
            </p>
            <p>
              <strong>Visión:</strong> construir una práctica terapéutica cercana y
              accesible donde cada persona pueda recuperar su centro y su voz.
            </p>
          </article>
        </div>
      </section>

      <section className="section">
        <div className="container infoGrid">
          <article className="card sectionCard">
            <h2>Valores</h2>
            <ul>
              {BRAND_VALUES.map((value) => (
                <li key={value}>{value}</li>
              ))}
            </ul>
          </article>

          <article className="card sectionCard">
            <h2>Formación y habilitaciones</h2>
            <p>
              Psicóloga en ejercicio profesional, con formación continua en salud
              mental, regulación emocional y acompañamiento de procesos de
              ansiedad, autoestima, trauma y bienestar integral.
            </p>
            <p>
              Si necesitás más detalle sobre acreditaciones específicas, puedo
              compartirlas durante el proceso de agendado.
            </p>
          </article>
        </div>
      </section>

      <section className="section mutedSection">
        <div className="container singleColumn">
          <article className="card sectionCard ctaCard">
            <h2>¿Te gustaría iniciar tu proceso?</h2>
            <p>Podés escribirme por WhatsApp o reservar una sesión directamente.</p>
            <div className="innerHero__cta">
              <a className="btn btn-primary" href={waLink} target="_blank" rel="noreferrer">
                Escribir por WhatsApp
              </a>
              <a
                className="btn btn-secondary"
                href={CONTACT.bookingUrl}
                target="_blank"
                rel="noreferrer"
              >
                Agendar sesión
              </a>
            </div>
          </article>
        </div>
      </section>
    </main>
  );
}
