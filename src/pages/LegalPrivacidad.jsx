import React from "react";
import usePageMeta from "../hooks/usePageMeta.js";
import "../styles/internal.css";

export default function LegalPrivacidad() {
  usePageMeta(
    "Política de Privacidad | Volver al Presente",
    "Política de privacidad de la consulta psicológica Volver al Presente.",
    { canonicalPath: "/politica-de-privacidad" }
  );

  return (
    <main className="section">
      <section className="container singleColumn">
        <article className="card sectionCard legalCard">
          <h1>Política de Privacidad</h1>
          <p>
            En Volver al Presente, la información que compartís por WhatsApp,
            agenda online o cualquier canal de contacto se utiliza únicamente para
            responder tu consulta, orientar el proceso de agendado y coordinar
            atención psicológica.
          </p>
          <p>
            No se venden ni se ceden datos personales a terceros para fines
            comerciales. El manejo de información se realiza con criterios de
            confidencialidad, ética profesional y respeto.
          </p>
          <p>
            Si necesitás actualizar o solicitar la eliminación de datos enviados por
            canales digitales, podés pedirlo por escrito a través de WhatsApp.
          </p>
        </article>
      </section>
    </main>
  );
}
