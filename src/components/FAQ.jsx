import React, { useState } from "react";

function Item({ q, a, isOpen, onToggle }) {
  return (
    <div className="faqItem">
      <button className="faqQ" onClick={onToggle} aria-expanded={isOpen}>
        <span className="faqDot" aria-hidden="true">✓</span>
        <span>{q}</span>
        <span className={`chev ${isOpen ? "is-open" : ""}`} aria-hidden="true">▾</span>
      </button>
      {isOpen && <div className="faqA">{a}</div>}
    </div>
  );
}

export default function FAQ() {
  const [open, setOpen] = useState(0);

  const items = [
    {
      q: "¿Cómo agendo una cita?",
      a: "Podés escribir por WhatsApp y coordinamos horario. Si preferís, también podés llamar o dejar un mensaje en el formulario.",
    },
    {
      q: "¿Ofreces terapia solo virtual o también presencial?",
      a: "Ofrezco modalidad virtual y presencial (según disponibilidad de sede). Lo confirmamos al agendar.",
    },
    {
      q: "¿Cuál es el costo de una sesión?",
      a: "El costo puede variar por modalidad y tipo de proceso. Te lo comparto por WhatsApp al confirmar tu cita.",
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