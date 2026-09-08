import React from "react";
import { renderToString } from "react-dom/server";
import { StaticRouter } from "react-router-dom/server.js";
import { AppContent } from "./App.jsx";
import { PageMetaContext } from "./hooks/PageMetaContext.js";
export { SITE_PATHS, SOCIAL_IMAGE, SITE_SCHEMA } from "./data/seo.js";

// Se ejecuta únicamente al compilar; no hay servidor React ni datos privados en producción.
export function render(path) {
  let meta;
  const html = renderToString(
    <React.StrictMode>
      <StaticRouter location={path}>
        <PageMetaContext.Provider value={(value) => { meta = value; }}>
          <AppContent />
        </PageMetaContext.Provider>
      </StaticRouter>
    </React.StrictMode>
  );
  if (!meta) throw new Error(`Faltan metadatos para ${path}`);
  return { html, meta };
}
