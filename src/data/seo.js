import {
  CONTACT,
  LOCATIONS,
  SERVICE_AREAS,
  SITE_URL,
  SOCIAL_PROFILES,
} from "./content.js";
import ogImage from "../assets/og-image.jpg";
import portrait from "../assets/marcela-retrato.jpg";
import logoMark from "../assets/logo-mark.png";

export const SITE_PATHS = [
  "/", "/servicios", "/sobre-mi", "/recursos", "/psi-cositas", "/talleres", "/contacto",
  ...SERVICE_AREAS.map(({ slug }) => `/${slug}`),
  "/politica-de-privacidad", "/aviso-legal",
];

// Imagen para compartir en redes: 1200x628 (1.91:1), el formato que esperan
// `summary_large_image` y las tarjetas de Facebook/WhatsApp/LinkedIn.
export const SOCIAL_IMAGE = new URL(ogImage, SITE_URL).href;

// Retrato usado en Inicio y Sobre mí. Es el LCP de la portada, por eso se precarga aparte.
export const HERO_IMAGE = new URL(portrait, SITE_URL).href;

export function canonicalUrl(path) {
  const url = new URL(path, SITE_URL);
  const pathname = url.pathname.replace(/\/index\.html$/, "/").replace(/\/+$/, "") || "/";
  return new URL(pathname, SITE_URL).href;
}

const CLINIC_ID = `${SITE_URL}/#clinica`;
const PERSON_ID = `${SITE_URL}/#marcela-zamora`;

// Una entidad LocalBusiness por sede: es lo que permite competir en búsquedas
// locales ("psicólogo en Heredia") y en el paquete de mapas.
// Sin `openingHours` ni `priceRange`: no se inventan datos no publicados.
const locationNodes = LOCATIONS.map((location) => ({
  "@type": ["MedicalBusiness", "Psychologist"],
  "@id": `${SITE_URL}/#sede-${location.id}`,
  name: location.name,
  url: `${SITE_URL}/contacto`,
  telephone: CONTACT.phoneTel,
  image: SOCIAL_IMAGE,
  address: {
    "@type": "PostalAddress",
    streetAddress: `${location.venue}, ${location.neighborhood}`,
    addressLocality: location.city,
    addressRegion: location.region,
    addressCountry: location.country,
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: location.latitude,
    longitude: location.longitude,
  },
  hasMap: location.mapsUrl,
  areaServed: { "@type": "AdministrativeArea", name: location.region },
  parentOrganization: { "@id": CLINIC_ID },
  employee: { "@id": PERSON_ID },
  ...(SOCIAL_PROFILES.length ? { sameAs: SOCIAL_PROFILES } : {}),
}));

// Solo identidad, sedes y contacto ya publicados; sin reseñas ni precios supuestos.
export const SITE_SCHEMA = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization", "@id": CLINIC_ID,
      name: "Volver al Presente", url: SITE_URL,
      logo: new URL(logoMark, SITE_URL).href, image: SOCIAL_IMAGE,
      telephone: CONTACT.phoneTel,
      areaServed: { "@type": "Country", name: "Costa Rica" },
      ...(SOCIAL_PROFILES.length ? { sameAs: SOCIAL_PROFILES } : {}),
    },
    ...locationNodes,
    {
      "@type": "Person", "@id": PERSON_ID,
      name: "Marcela Zamora", jobTitle: "Psicóloga",
      url: `${SITE_URL}/sobre-mi`, image: HERO_IMAGE,
      telephone: CONTACT.phoneTel,
      worksFor: { "@id": CLINIC_ID },
      alumniOf: { "@type": "CollegeOrUniversity", name: "Universidad de Costa Rica" },
      knowsAbout: SERVICE_AREAS.map(({ title }) => title),
      ...(SOCIAL_PROFILES.length ? { sameAs: SOCIAL_PROFILES } : {}),
    },
    {
      "@type": "WebSite", "@id": `${SITE_URL}/#sitio`,
      name: "Volver al Presente", alternateName: "Psicóloga Marcela Zamora",
      url: SITE_URL, inLanguage: "es-CR", publisher: { "@id": CLINIC_ID },
    },
  ],
};

// Migas de pan: orientan a Google sobre la jerarquía y habilitan la ruta
// que aparece bajo el título en los resultados de búsqueda.
export function breadcrumbSchema(trail) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [{ name: "Inicio", path: "/" }, ...trail].map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: canonicalUrl(item.path),
    })),
  };
}

// Ficha de servicio para cada área de acompañamiento.
export function serviceSchema(service) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${canonicalUrl(`/${service.slug}`)}#servicio`,
    name: service.h1,
    description: service.seoDescription,
    serviceType: service.primaryKeyword,
    url: canonicalUrl(`/${service.slug}`),
    provider: { "@id": CLINIC_ID },
    areaServed: { "@type": "Country", name: "Costa Rica" },
    availableChannel: [
      { "@type": "ServiceChannel", name: "Terapia en línea", serviceUrl: CONTACT.bookingUrl },
      ...LOCATIONS.map((location) => ({
        "@type": "ServiceChannel",
        name: location.heading,
        serviceLocation: { "@id": `${SITE_URL}/#sede-${location.id}` },
      })),
    ],
  };
}
