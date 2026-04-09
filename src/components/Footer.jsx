import React from "react";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__inner">
        <div className="footer__left">
          <a className="footerTel" href="tel:+50685650659">+506 8565 0659</a>
        </div>

        <div className="footer__center">
          <a className="footerLink" href="#">Política de Privacidad</a>
          <span className="footerSep">•</span>
          <a className="footerLink" href="#">Aviso Legal</a>
        </div>

        <div className="footer__right">
          <span className="socialDot" title="Facebook" aria-label="Facebook">f</span>
          <span className="socialDot" title="Instagram" aria-label="Instagram">◎</span>
          <span className="socialDot" title="YouTube" aria-label="YouTube">▶</span>
        </div>
      </div>
    </footer>
  );
}