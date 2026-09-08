import { CANVA_CATALOG_URL, CONTACT, LOCATIONS, WHATSAPP_DEFAULT_TEXT } from "./content.js";

// Los mapas se derivan de LOCATIONS para no repetir URLs en dos archivos.
const byId = (key) => Object.fromEntries(LOCATIONS.map((location) => [location.id, location[key]]));

// Enlaces externos del sitio.
// Se centralizan para evitar URLs repetidas y asegurar que los mensajes dinámicos se codifiquen.
export const EXTERNAL_LINKS = {
  booking: CONTACT.bookingUrl,
  bookingWidgets: {
    online: "https://api.psicoceo.com/widget/booking/nVePfb8Wdjz9JIAvkXO7",
    heredia: "https://api.psicoceo.com/widget/booking/IJxymokUAyRDjO6Y6dqs",
    sanJose: "https://api.psicoceo.com/widget/booking/rCB1nrytTHxwk9G9Rrvf",
  },
  herediaBookingWidgetScript: "https://api.psicoceo.com/js/form_embed.js",
  canvaCatalog: import.meta.env.VITE_CANVA_CATALOG_URL || CANVA_CATALOG_URL,
  phone: `tel:${CONTACT.phoneTel}`,
  maps: byId("mapsUrl"),
  waze: byId("wazeUrl"),
};

export function buildWhatsAppLink(message = WHATSAPP_DEFAULT_TEXT) {
  return `https://wa.me/${CONTACT.waNumber}?text=${encodeURIComponent(message)}`;
}

export function isPlaceholderUrl(url) {
  try {
    const parsed = new URL(url);
    return parsed.protocol !== "https:" || Boolean(parsed.username || parsed.password);
  } catch {
    return true;
  }
}
