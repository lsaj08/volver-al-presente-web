import { useEffect } from "react";

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
  useEffect(() => {
    document.title = title;

    upsertMeta("description", description);
    upsertMeta("og:title", options.ogTitle || title, "property");
    upsertMeta("og:description", options.ogDescription || description, "property");
    upsertMeta("og:type", options.ogType || "website", "property");

    const baseUrl = options.baseUrl || "https://volveralpresente.cr";
    const canonical = options.canonicalPath
      ? `${baseUrl}${options.canonicalPath}`
      : null;

    if (canonical) {
      upsertCanonical(canonical);
      upsertMeta("og:url", canonical, "property");
    }
  }, [title, description, options]);
}
