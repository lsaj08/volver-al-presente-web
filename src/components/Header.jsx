import React, { useEffect, useRef, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import logo from "../assets/logo-header.png";
import "../styles/contacto.css";

const mainLinks = [
  { to: "/", label: "Inicio", end: true },
  { to: "/servicios", label: "Servicios" },
  { to: "/sobre-mi", label: "Sobre mí" },
  { to: "/recursos", label: "Recursos" },
  { to: "/psi-cositas", label: "Psicositas" },
  { to: "/talleres", label: "Talleres" },
  { to: "/contacto", label: "Contacto" },
];

export default function Header() {
  const { key } = useLocation();
  const [openKey, setOpenKey] = useState(null);
  const isOpen = openKey === key;
  const menuButton = useRef(null);
  const navigation = useRef(null);
  const closeMenu = () => setOpenKey(null);

  useEffect(() => {
    if (isOpen) navigation.current?.querySelector("a")?.focus();
  }, [isOpen]);

  return (
    <header
      className="topbar"
      onKeyDown={(event) => {
        if (event.key === "Escape" && isOpen) {
          event.preventDefault();
          closeMenu();
          menuButton.current?.focus();
        }
      }}
      onBlur={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget)) closeMenu();
      }}
    >
      <div className="container topbar__inner">
        <NavLink className="brand" to="/" onClick={closeMenu}>
          <img
            className="brand__logo"
            src={logo}
            width="50"
            height="50"
            alt="Volver al Presente - Psicóloga Marcela Zamora"
          />
          <div className="brand__text">
            <div className="brand__name h3">Volver al Presente</div>
            <div className="brand__sub sub">Psicóloga Marcela Zamora</div>
          </div>
        </NavLink>

        <nav ref={navigation} aria-label="Navegación principal" id="site-navigation" className={`nav ${isOpen ? "is-open" : ""}`}>
          {/* Navegación principal.
              Mantener etiquetas y rutas sincronizadas con App.jsx. */}
          {mainLinks.map((item) => (
            <NavLink
              key={item.to}
              className={({ isActive }) => `nav__link ${isActive ? "is-active" : ""}`}
              to={item.to}
              end={item.end}
              onClick={closeMenu}
            >
              {item.label}
            </NavLink>
          ))}
        </nav>

        <div className="topbar__actions">
          <button
            ref={menuButton}
            type="button"
            className="pill topIconBtn"
            aria-label={isOpen ? "Cerrar menú" : "Abrir menú"}
            aria-controls="site-navigation"
            aria-expanded={isOpen}
            onClick={() => setOpenKey(isOpen ? null : key)}
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
