import React, { useState } from "react";

function CheckIcon() {
  return (
    <svg className="icon" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M5 12.5 9.2 17 19 7.5"
        stroke="currentColor"
        strokeWidth="2.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function ChevronIcon({ isOpen }) {
  return (
    <svg
      className={`chev ${isOpen ? "is-open" : ""}`}
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="m7 10 5 5 5-5"
        stroke="currentColor"
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function Item({ q, a, isOpen, onToggle }) {
  return (
    <div className="faqItem">
      <button type="button" className="faqQ" onClick={onToggle} aria-expanded={isOpen}>
        <span className="faqDot" aria-hidden="true">
          <CheckIcon />
        </span>
        <span>{q}</span>
        <ChevronIcon isOpen={isOpen} />
      </button>
      {isOpen && <div className="faqA">{a}</div>}
    </div>
  );
}

export default function FAQ() {
  const [open, setOpen] = useState(0);

  const items = [
    {
      q: "¿Cómo agendar terapia con Marcela Zamora?",
      a: "Podés escribir por WhatsApp o reservar en agenda online. Si tenés dudas sobre qué servicio elegir, podés iniciar con un mensaje breve y lo orientamos juntas.",
    },
    {
      q: "¿La terapia es virtual, presencial o ambas?",
      a: "Se ofrece modalidad online y presencial. En el primer contacto te indico qué opciones están habilitadas y cuál puede ajustarse mejor a tu momento.",
    },
    {
      q: "¿Cuánto dura una sesión psicológica?",
      a: "Generalmente la sesión dura alrededor de 50 minutos. La frecuencia se acuerda según tus objetivos y momento terapéutico.",
    },
    {
      q: "¿En qué situaciones conviene consultar?",
      a: "Si hay ansiedad, estrés, tristeza persistente, trauma, conflictos de autoestima, límites o relación con la comida y el cuerpo, consultar puede ayudarte a recuperar claridad y recursos.",
    },
    {
      q: "¿Cuánto tiempo dura un proceso terapéutico?",
      a: "No hay una duración única. Depende de tu motivo de consulta, objetivos y ritmo. Se revisan avances periódicamente para que el proceso tenga dirección.",
    },
    {
      q: "¿Cómo saber si este espacio es para mí?",
      a: "Si buscás un espacio cálido, ético y basado en evidencia para entender lo que te pasa y trabajar cambios concretos, es un buen punto de partida.",
    },
  ];

  return (
    <div className="faq">
      {items.map((it, idx) => (
        <Item
          key={it.q}
          q={it.q}
          a={it.a}
          isOpen={open === idx}
          onToggle={() => setOpen(open === idx ? -1 : idx)}
        />
      ))}
    </div>
  );
}
