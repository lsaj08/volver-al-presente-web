import { useContext, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { canonicalUrl, SOCIAL_IMAGE, SITE_SCHEMA } from "../data/seo.js";
import { PageMetaContext } from "./PageMetaContext.js";

// Utilidades SEO para páginas internas.
// Actualizan etiquetas existentes o las crean sin depender de librerías externas.
function upsertMeta(name, content, attribute = "name") {
  if (!content) return;
  let tag = document.querySelector(`meta[${attribute}="${name}"]`);
  if (!tag) {
    tag = document.createElement("meta");
    tag.setAttribute(attribute, name);
    document.head.appendChild(tag);
  }
  tag.setAttribute("content", content);
}

function upsertCanonical(url) {
  if (!url) return;
  let link = document.querySelector('link[rel="canonical"]');
  if (!link) {
    link = document.createElement("link");
    link.setAttribute("rel", "canonical");
    document.head.appendChild(link);
  }
  link.setAttribute("href", url);
}

export default function usePageMeta(title, description, options = {}) {
  const { pathname } = useLocation();
  const collectMeta = useContext(PageMetaContext);
  const {
    canonicalPath = pathname,
    ogTitle = title,
    ogDescription = description,
    ogType = "website",
    noIndex = false,
  } = options;
  const canonical = canonicalUrl(canonicalPath);
  const robots = noIndex ? "noindex, follow" : "index, follow, max-image-preview:large";

  if (import.meta.env.SSR && collectMeta) {
    collectMeta({ title, description, canonical, ogTitle, ogDescription, ogType, robots });
  }

  useEffect(() => {
    document.title = title;

    upsertMeta("description", description);
    upsertMeta("og:title", ogTitle, "property");
    upsertMeta("og:description", ogDescription, "property");
    upsertMeta("og:type", ogType, "property");
    upsertMeta("robots", robots);
    upsertMeta("og:site_name", "Volver al Presente", "property");
    upsertMeta("og:locale", "es_CR", "property");
    upsertMeta("og:image", SOCIAL_IMAGE, "property");
    upsertMeta("og:image:alt", "Psicóloga Marcela Zamora", "property");
    upsertMeta("twitter:card", "summary_large_image");
    upsertMeta("twitter:title", ogTitle);
    upsertMeta("twitter:description", ogDescription);
    upsertMeta("twitter:image", SOCIAL_IMAGE);

    let schema = document.getElementById("site-schema");
    if (!schema) {
      schema = document.createElement("script");
      schema.id = "site-schema";
      schema.type = "application/ld+json";
      document.head.appendChild(schema);
    }
    schema.textContent = JSON.stringify(SITE_SCHEMA);

    upsertCanonical(canonical);
    upsertMeta("og:url", canonical, "property");
  }, [title, description, canonical, ogTitle, ogDescription, ogType, robots]);
}
