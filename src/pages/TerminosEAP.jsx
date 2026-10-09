import { EAP_TERMS_CONTENT } from "../data/content.js";
import usePageMeta from "../hooks/usePageMeta.js";
import "../styles/terms.css";

export default function TerminosEAP() {
  usePageMeta(
    `${EAP_TERMS_CONTENT.title} | Volver al Presente`,
    EAP_TERMS_CONTENT.description,
    { canonicalPath: "/terminos-y-condiciones-eap" }
  );

  return (
    <main className="termsPage">
      <article className="termsSheet">
        <header className="termsHeading">
          <h1>{EAP_TERMS_CONTENT.title}</h1>
          <p>{EAP_TERMS_CONTENT.subtitle}</p>
        </header>
        <div className="termsPolicies">
          {EAP_TERMS_CONTENT.sections.map(({ title, paragraphs, items }) => (
            <section className="termsPolicy termsPolicy--plain" key={title}>
              <div className="termsPolicy__content">
                <h2>{title}</h2>
                {paragraphs?.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
                {items && <ul>{items.map((item) => <li key={item}>{item}</li>)}</ul>}
              </div>
            </section>
          ))}
        </div>
      </article>
    </main>
  );
}
