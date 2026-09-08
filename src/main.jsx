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

// El HTML prerenderizado queda disponible para buscadores y se reemplaza al iniciar React.
// Así evitamos que diferencias de atributos propios de la navegación SPA provoquen errores de hidratación.
ReactDOM.createRoot(root).render(app);
