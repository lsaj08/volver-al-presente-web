import React, { useMemo } from "react";
import usePageMeta from "../hooks/usePageMeta.js";
import { BRAND_VALUES, CONTACT, WHATSAPP_DEFAULT_TEXT } from "../data/content.js";
import "../styles/internal.css";

const APPROACH_POINTS = [
  "Escucha empática, ética y sin juicios para que puedas hablar con libertad.",
  "Un proceso colaborativo que se adapta a tu historia, tu momento y tu ritmo.",
  "Herramientas para regular emociones, comprender patrones y sostener cambios reales.",
];

const FIRST_SESSION_POINTS = [
  "Un espacio donde no tenés que llegar con todo ordenado para empezar.",
  "Una primera conversación para entender qué te está pasando y qué necesitás hoy.",
  "Más claridad sobre por dónde podría ir el proceso y cómo acompañarte de la mejor manera.",
];

const TRAINING_POINTS = [
  "Psicóloga en ejercicio profesional, con práctica clínica centrada en bienestar emocional.",
  "Formación continua en salud mental, regulación emocional y acompañamiento psicoterapéutico.",
  "Trabajo con procesos de ansiedad, autoestima, trauma, depresión, autocuidado e imagen corporal.",
];

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
          <h1>Soy Marcela Zamora, psicóloga y creadora de Volver al Presente.</h1>
          <p className="aboutLead">
            Creé este espacio para ofrecer una terapia que se sienta humana, clara y profundamente
            respetuosa. A veces lo que más necesitamos no es que nos empujen, sino un lugar seguro
            donde bajar el ruido, entender lo que estamos viviendo y volver a escucharnos.
          </p>
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
        </div>
      </section>

      <section className="section">
        <div className="container singleColumn">
          <article className="card sectionCard sectionCard--soft">
            <h2>Volver al Presente</h2>
            <p>
              Para mí, volver al presente no significa negar el dolor ni pedirte que te tranquilicés
              de inmediato. Significa ayudarte a regresar a vos, a tu cuerpo, a tu historia y a tus
              recursos para mirar lo que hoy duele con más claridad, compasión y sostén.
            </p>
            <p>
              Es una invitación a dejar de vivir únicamente desde la alarma, la exigencia o la culpa,
              y empezar a construir una relación más amable con lo que sentís.
            </p>
          </article>
        </div>
      </section>

      <section className="section mutedSection">
        <div className="container infoGrid">
          <article className="card sectionCard">
            <h2>Cómo acompaño</h2>
            <p>
              Mi enfoque terapéutico combina calidez, presencia clínica y herramientas basadas en
              evidencia. Busco que la terapia sea un lugar donde puedas entender lo que te pasa sin
              sentirte juzgada, y donde los cambios se construyan de forma gradual, posible y
              sostenida.
            </p>
            <ul>
              {APPROACH_POINTS.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </article>

          <article className="card sectionCard">
            <h2>Qué puede pasar en la primera sesión</h2>
            <p>
              La primera sesión no es un examen ni tenés que llegar con respuestas perfectas. Es un
              primer encuentro para conocernos, comprender tu motivo de consulta y empezar a darle
              dirección a lo que hoy te pesa.
            </p>
            <ul>
              {FIRST_SESSION_POINTS.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </article>
        </div>
      </section>

      <section className="section">
        <div className="container infoGrid">
          <article className="card sectionCard">
            <h2>Misión y visión</h2>
            <p>
              <strong>Misión:</strong> brindar acompañamiento psicológico cálido, ético y
              profesional para que cada persona pueda comprender lo que vive, fortalecer sus
              recursos y construir mayor bienestar emocional.
            </p>
            <p>
              <strong>Visión:</strong> sostener una práctica terapéutica cercana y accesible, donde
              pedir ayuda se sienta posible y donde volver al presente se convierta en una
              experiencia de reconexión, no de exigencia.
            </p>
          </article>

          <article className="card sectionCard">
            <h2>Valores</h2>
            <p>
              Estos valores orientan la manera en que acompaño cada proceso, desde el vínculo
              terapéutico hasta las herramientas que elegimos trabajar.
            </p>
            <ul>
              {BRAND_VALUES.map((value) => (
                <li key={value}>{value}</li>
              ))}
            </ul>
          </article>
        </div>
      </section>

      <section className="section mutedSection">
        <div className="container infoGrid">
          <article className="card sectionCard">
            <h2>Formación y habilitaciones</h2>
            <p>
              Mi práctica se apoya en formación continua y en un compromiso constante con el estudio
              y la actualización clínica.
            </p>
            <ul>
              {TRAINING_POINTS.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <p>
              Si necesitás más detalle sobre acreditaciones específicas, puedo compartirlo durante
              el proceso de agendado.
            </p>
          </article>

          <article className="card sectionCard">
            <h2>El tipo de espacio que quiero ofrecerte</h2>
            <p>
              Un espacio donde puedas llegar con ansiedad, cansancio, vergüenza, tristeza o
              confusión sin sentir que tenés que explicarte de una manera perfecta para ser
              comprendida.
            </p>
            <p>
              Mi intención es acompañarte con sensibilidad y criterio clínico, para que tu proceso
              no se sienta como una plantilla, sino como un trabajo cuidado y profundamente humano.
            </p>
          </article>
        </div>
      </section>

      <section className="section">
        <div className="container singleColumn">
          <article className="card sectionCard ctaCard">
            <h2>¿Te gustaría iniciar tu proceso?</h2>
            <p>
              Podés escribirme por WhatsApp o reservar una sesión directamente. Si todavía no tenés
              claro por dónde empezar, lo vemos juntas.
            </p>
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
