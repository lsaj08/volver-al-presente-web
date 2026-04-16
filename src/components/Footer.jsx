import React from "react";
import { NavLink } from "react-router-dom";
import { CONTACT } from "../data/content.js";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__inner">
        <div className="footer__left">
          <a className="footerTel" href={`tel:${CONTACT.phoneTel}`}>
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
            href={`https://wa.me/${CONTACT.waNumber}`}
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
