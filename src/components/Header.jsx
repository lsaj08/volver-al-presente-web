import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo-marcela.png";
import "../styles/contacto.css";

// Componente opcional para los blobs decorativos (puedes usarlo en lugar del logo)
function LogoMark() {
  return (
    <div className="logoMark" aria-hidden="true">
      <span className="blob b1" />
      <span className="blob b2" />
    </div>
  );
}

// Componente Header
export default function Header() {
  return (
    <header className="topbar">
      <div className="container topbar__inner">
        {/* Marca y logo */}
        <div className="brand">
          {/* Si prefieres los blobs decorativos en lugar del logo, cambia por <LogoMark /> */}
          <img
            className="brand__logo"
            src={logo}
            alt="Volver al Presente — Psicóloga Marcela Zamora"
          />
          <div className="brand__text">
            <div className="brand__name h3">Volver al Presente</div>
            <div className="brand__sub sub">Psicóloga Marcela Zamora</div>
          </div>
        </div>

        {/* Navegación principal */}
        <nav className="nav">
          <Link className="nav__link" to="/">Inicio</Link>
          <Link className="nav__link" to="/servicios">Servicios</Link>
          <Link className="nav__link" to="/sobre-mi">Sobre mí</Link>
          <Link className="nav__link" to="/psi-cositas">Psi-Cositas</Link>
          <Link className="nav__link" to="/talleres">Talleres</Link>
          <Link className="nav__link" to="/contacto">Contacto</Link>
        </nav>

        {/* Acciones opcionales (iconos de búsqueda y menú) */}
        <div className="topbar__actions">
          <button className="pill topIconBtn" aria-label="Buscar">
            <svg className="icon" viewBox="0 0 24 24" fill="none">
              <path d="M10.5 18a7.5 7.5 0 1 1 0-15 7.5 7.5 0 0 1 0 15Z" stroke="currentColor" strokeWidth="2" />
              <path d="M16.3 16.3 21 21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            </svg>
          </button>
          <button className="pill topIconBtn" aria-label="Menú">
            <svg className="icon" viewBox="0 0 24 24" fill="none">
              <path d="M4 7h16M4 12h16M4 17h16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
}