import { CANVA_CATALOG_URL, CONTACT, WHATSAPP_DEFAULT_TEXT } from "./content.js";

// Enlaces externos del sitio.
// Se centralizan para evitar URLs repetidas y asegurar que los mensajes dinámicos se codifiquen.
export const EXTERNAL_LINKS = {
  booking: CONTACT.bookingUrl,
  canvaCatalog: import.meta.env.VITE_CANVA_CATALOG_URL || CANVA_CATALOG_URL,
  phone: `tel:${CONTACT.phoneTel}`,
  maps: {
    heredia:
      "https://www.google.com/maps/search/?api=1&query=Barrio%20Coraz%C3%B3n%20de%20Jes%C3%BAs%2C%20Heredia%2C%20Costa%20Rica",
    sanJose:
      "https://www.google.com/maps/search/?api=1&query=Barrio%20Gonz%C3%A1lez%20Lahmann%2C%20San%20Jos%C3%A9%2C%20Costa%20Rica",
  },
};

export function buildWhatsAppLink(message = WHATSAPP_DEFAULT_TEXT) {
  return `https://wa.me/${CONTACT.waNumber}?text=${encodeURIComponent(message)}`;
}

export function isPlaceholderUrl(url) {
  return !url || url.includes("PENDIENTE");
}
