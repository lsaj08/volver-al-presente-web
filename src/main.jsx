import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./styles/global.css";

const root = document.getElementById("root");
const app = (
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// El HTML prerenderizado se hidrata en lugar de volver a dibujarse: así el
// contenido que ya pintó el navegador se conserva y no hay repintado inicial.
// En desarrollo (sin prerender) el contenedor llega vacío y se monta normalmente.
if (root.hasChildNodes()) {
  ReactDOM.hydrateRoot(root, app);
} else {
  ReactDOM.createRoot(root).render(app);
}
