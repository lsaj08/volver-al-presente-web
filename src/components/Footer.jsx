import React from "react";
import { NavLink } from "react-router-dom";
import { CONTACT } from "../data/content.js";
import { buildWhatsAppLink, EXTERNAL_LINKS } from "../data/externalLinks.js";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__inner">
        <div className="footer__left">
          <a className="footerTel" href={EXTERNAL_LINKS.phone}>
            {CONTACT.phoneDisplay}
          </a>
        </div>

        <div className="footer__center">
          <NavLink className="footerLink" to="/contacto">
            Contacto
          </NavLink>
          <span className="footerSep">•</span>
          <NavLink className="footerLink" to="/politica-de-privacidad">
            Política de Privacidad
          </NavLink>
          <span className="footerSep">•</span>
          <NavLink className="footerLink" to="/aviso-legal">
            Aviso Legal
          </NavLink>
        </div>

        <div className="footer__right">
          <a
            className="btn btn-secondary small"
            href={buildWhatsAppLink()}
            target="_blank"
            rel="noopener noreferrer"
          >
            WhatsApp
          </a>
        </div>
      </div>
    </footer>
  );
}
