import React from "react";
import usePageMeta from "../hooks/usePageMeta.js";
import "../styles/internal.css";

export default function LegalPrivacidad() {
  usePageMeta(
    "Política de Privacidad | Volver al Presente",
    "Política de privacidad del sitio Volver al Presente."
  );

  return (
    <main className="section">
      <section className="container singleColumn">
        <article className="card sectionCard legalCard">
          <h1>Política de Privacidad</h1>
          <p>
            La información que compartís por formularios o canales de contacto se
            utiliza únicamente para responder tu consulta y coordinar servicios.
          </p>
          <p>
            No se comercializan datos personales. Si querés actualizar o eliminar
            información enviada, podés solicitarlo por WhatsApp.
          </p>
        </article>
      </section>
    </main>
  );
}
