import React from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Header from "./components/Header.jsx";
import Home from "./pages/Home.jsx";
import Contacto from "./pages/Contacto.jsx";
import Servicios from "./pages/Servicios.jsx";
import SobreMi from "./pages/SobreMi.jsx";
import PsiCositas from "./pages/PsiCositas.jsx";
import Talleres from "./pages/Talleres.jsx";
import TerapiaAnsiedad from "./pages/TerapiaAnsiedad.jsx";
import ImagenCorporalConductaAlimentaria from "./pages/ImagenCorporalConductaAlimentaria.jsx";
import TerapiaTrauma from "./pages/TerapiaTrauma.jsx";
import AutocuidadoLimitesAutoestima from "./pages/AutocuidadoLimitesAutoestima.jsx";
import EstresPerfeccionismo from "./pages/EstresPerfeccionismo.jsx";
import TerapiaDepresion from "./pages/TerapiaDepresion.jsx";
import LegalPrivacidad from "./pages/LegalPrivacidad.jsx";
import AvisoLegal from "./pages/AvisoLegal.jsx";
import Footer from "./components/Footer.jsx";

export default function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/servicios" element={<Servicios />} />
        <Route path="/sobre-mi" element={<SobreMi />} />
        <Route path="/psi-cositas" element={<PsiCositas />} />
        <Route path="/talleres" element={<Talleres />} />
        <Route path="/contacto" element={<Contacto />} />

        <Route path="/terapia-ansiedad" element={<TerapiaAnsiedad />} />
        <Route
          path="/imagen-corporal-conducta-alimentaria"
          element={<ImagenCorporalConductaAlimentaria />}
        />
        <Route path="/terapia-trauma" element={<TerapiaTrauma />} />
        <Route
          path="/autocuidado-limites-autoestima"
          element={<AutocuidadoLimitesAutoestima />}
        />
        <Route path="/estres-perfeccionismo" element={<EstresPerfeccionismo />} />
        <Route path="/terapia-depresion" element={<TerapiaDepresion />} />

        <Route path="/politica-de-privacidad" element={<LegalPrivacidad />} />
        <Route path="/aviso-legal" element={<AvisoLegal />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}
