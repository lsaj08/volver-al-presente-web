import { TERMS_CONTENT } from "../data/content.js";
import usePageMeta from "../hooks/usePageMeta.js";
import "../styles/internal.css";

export default function TerminosCondiciones() {
  usePageMeta(
    `${TERMS_CONTENT.title} | Volver al Presente`,
    TERMS_CONTENT.description,
    { canonicalPath: "/terminos-y-condiciones" }
  );

  return (
    <main className="section">
      <section className="container singleColumn">
        <article className="card sectionCard legalCard">
          <h1>{TERMS_CONTENT.title}</h1>
          {TERMS_CONTENT.sections.map(({ title, paragraphs, items }) => (
            <section key={title}>
              <h2>{title}</h2>
              {paragraphs?.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
              {items && <ul>{items.map((item) => <li key={item}>{item}</li>)}</ul>}
            </section>
          ))}
        </article>
      </section>
    </main>
  );
}
