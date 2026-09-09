import { TERMS_CONTENT } from "../data/content.js";
import usePageMeta from "../hooks/usePageMeta.js";
import "../styles/terms.css";

function PolicyIcon({ index }) {
  const drawings = [
    <><path d="M7 8h25v18H19l-8 7v-7H7z" /><path d="M23 32h9l6 5v-5h4V18h-5M13 14h13M13 20h9" /></>,
    <><rect x="6" y="12" width="36" height="26" rx="5" /><path d="M6 21h36M12 31h8m5 0h4" /><path d="m30 7 3-3 3 3" /></>,
    <><path d="M9 18a16 16 0 0 1 28-5l3 5M40 9v9h-9M39 30a16 16 0 0 1-28 5l-3-5M8 39v-9h9" /><path d="M28 18h-5a4 4 0 0 0 0 8h2a4 4 0 0 1 0 8h-6M24 14v24" /></>,
    <><circle cx="23" cy="23" r="17" /><path d="M23 12v12h9" /><circle cx="36" cy="36" r="9" fill="white" /><path d="m31 36 3 3 6-7" /></>,
    <><rect x="7" y="10" width="34" height="32" rx="5" /><path d="M15 5v10M33 5v10M7 21h34M18 30a8 8 0 0 1 13 0M31 25v5h-5M30 35a8 8 0 0 1-13 0M17 40v-5h5" /></>,
  ];
  return <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">{drawings[index]}</svg>;
}

export default function TerminosCondiciones() {
  usePageMeta(
    `${TERMS_CONTENT.title} | Volver al Presente`,
    TERMS_CONTENT.description,
    { canonicalPath: "/terminos-y-condiciones" }
  );

  return (
    <main className="termsPage">
      <article className="termsSheet">
        <header className="termsHeading">
          <h1>{TERMS_CONTENT.title}</h1>
        </header>
        <div className="termsPolicies">
          {TERMS_CONTENT.sections.map(({ title, paragraphs, items }, index) => (
            <section className="termsPolicy" key={title}>
              <div className="termsPolicy__icon"><PolicyIcon index={index} /></div>
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
