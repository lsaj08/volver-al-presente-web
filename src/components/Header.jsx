import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import logo from "../assets/logo-marcela.png";
import "../styles/contacto.css";

const mainLinks = [
  { to: "/", label: "Inicio", end: true },
  { to: "/servicios", label: "Servicios" },
  { to: "/sobre-mi", label: "Sobre mí" },
  { to: "/psi-cositas", label: "Psi-Cositas" },
  { to: "/talleres", label: "Talleres" },
  { to: "/contacto", label: "Contacto" },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="topbar">
      <div className="container topbar__inner">
        <NavLink className="brand" to="/" onClick={() => setIsOpen(false)}>
          <img
            className="brand__logo"
            src={logo}
            alt="Volver al Presente - Psicóloga Marcela Zamora"
          />
          <div className="brand__text">
            <div className="brand__name h3">Volver al Presente</div>
            <div className="brand__sub sub">Psicóloga Marcela Zamora</div>
          </div>
        </NavLink>

        <nav id="site-navigation" className={`nav ${isOpen ? "is-open" : ""}`}>
          {mainLinks.map((item) => (
            <NavLink
              key={item.to}
              className={({ isActive }) => `nav__link ${isActive ? "is-active" : ""}`}
              to={item.to}
              end={item.end}
              onClick={() => setIsOpen(false)}
            >
              {item.label}
            </NavLink>
          ))}
        </nav>

        <div className="topbar__actions">
          <button
            type="button"
            className="pill topIconBtn"
            aria-label={isOpen ? "Cerrar menú" : "Abrir menú"}
            aria-controls="site-navigation"
            aria-expanded={isOpen}
            onClick={() => setIsOpen((prev) => !prev)}
          >
            <svg className="icon" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <path d="M4 7h16M4 12h16M4 17h16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
}
