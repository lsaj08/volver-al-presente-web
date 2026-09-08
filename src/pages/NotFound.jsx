import { Link } from "react-router-dom";
import { SITE_MESSAGES } from "../data/content.js";
import usePageMeta from "../hooks/usePageMeta.js";

export default function NotFound() {
  usePageMeta(
    `${SITE_MESSAGES.notFoundTitle} | Volver al Presente`,
    SITE_MESSAGES.notFoundDescription,
    { noIndex: true }
  );

  return (
    <main className="section">
      <section className="container singleColumn">
        <article className="card sectionCard">
          <h1>{SITE_MESSAGES.notFoundTitle}</h1>
          <p>{SITE_MESSAGES.notFoundDescription}</p>
          <Link className="btn btn-primary" to="/">{SITE_MESSAGES.backHome}</Link>
        </article>
      </section>
    </main>
  );
}
