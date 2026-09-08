import { CANVA_CATALOG_URL, CONTACT, WHATSAPP_DEFAULT_TEXT } from "./content.js";

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
  maps: {
    heredia:
      "https://maps.app.goo.gl/6eB9cJSxreBWGnp27",
    sanJose:
      "https://maps.app.goo.gl/S1orV7wxxUjh2RWU9",
  },
  waze: {
    heredia: "https://ul.waze.com/ul?venue_id=180813924.1808073704.16530836&overview=yes&utm_campaign=default&utm_source=waze_website&utm_medium=lm_share_location",
    sanJose: "https://ul.waze.com/ul?venue_id=180813923.1808335841.41790147&overview=yes&utm_campaign=default&utm_source=waze_website&utm_medium=lm_share_location",
  },
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
