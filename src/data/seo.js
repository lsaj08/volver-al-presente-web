import { CONTACT, SERVICE_AREAS, SITE_URL } from "./content.js";
import portrait from "../assets/banner.jpeg";
import logo from "../assets/logo-marcela.png";

export const SITE_PATHS = [
  "/", "/servicios", "/sobre-mi", "/recursos", "/psi-cositas", "/talleres", "/contacto",
  ...SERVICE_AREAS.map(({ slug }) => `/${slug}`),
  "/politica-de-privacidad", "/aviso-legal",
];

export const SOCIAL_IMAGE = new URL(portrait, SITE_URL).href;

export function canonicalUrl(path) {
  const url = new URL(path, SITE_URL);
  const pathname = url.pathname.replace(/\/index\.html$/, "/").replace(/\/+$/, "") || "/";
  return new URL(pathname, SITE_URL).href;
}

// Solo identidad y contacto ya publicados; sin direcciones, reseñas ni precios supuestos.
export const SITE_SCHEMA = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization", "@id": `${SITE_URL}/#clinica`,
      name: "Volver al Presente", url: SITE_URL,
      logo: new URL(logo, SITE_URL).href, telephone: CONTACT.phoneTel,
    },
    {
      "@type": "Person", "@id": `${SITE_URL}/#marcela-zamora`,
      name: "Marcela Zamora", jobTitle: "Psicóloga",
      url: `${SITE_URL}/sobre-mi`, image: SOCIAL_IMAGE,
      worksFor: { "@id": `${SITE_URL}/#clinica` },
    },
    {
      "@type": "WebSite", "@id": `${SITE_URL}/#sitio`,
      name: "Volver al Presente", alternateName: "Psicóloga Marcela Zamora",
      url: SITE_URL, inLanguage: "es-CR", publisher: { "@id": `${SITE_URL}/#clinica` },
    },
  ],
};
