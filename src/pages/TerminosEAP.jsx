import { EAP_TERMS_CONTENT as EAP } from "../data/content.js";
import usePageMeta from "../hooks/usePageMeta.js";
import eapLogo from "../assets/eap-latina-logo.jpg";
import "../styles/terms.css";

export default function TerminosEAP() {
  usePageMeta(
    `${EAP.title} | Volver al Presente`,
    EAP.description,
    { canonicalPath: "/terminos-y-condiciones-eap" }
  );

  return (
    <main className="termsPage">
      <article className="termsSheet">
        <header className="termsHeading">
          <h1>{EAP.title}</h1>
        </header>
        <section className="termsPolicy eapDoc">
          <h2>{EAP.heading}</h2>
          <p className="eapDoc__note">{EAP.intro}</p>
          <ul className="eapDoc__dashes">
            {EAP.conditions.map((item) => <li key={item}>{item}</li>)}
          </ul>
          <h3>{EAP.procedureTitle}</h3>
          <p>{EAP.procedureIntro}</p>
          <ul>
            {EAP.procedure.map((item) => <li key={item}>{item}</li>)}
          </ul>
          <p className="eapDoc__note">
            {EAP.contactText}{" "}
            <a href={`mailto:${EAP.contactEmail}`}>{EAP.contactEmail}</a>
          </p>
          <p className="eapDoc__note">{EAP.closing}</p>
          <img className="eapDoc__logo" src={eapLogo} alt="EAP LatinA" width="1301" height="308" loading="lazy" />
          <div className="eapDoc__bar" aria-hidden="true" />
        </section>
      </article>
    </main>
  );
}
