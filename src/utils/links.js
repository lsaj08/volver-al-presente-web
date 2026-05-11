import { Linking } from "react-native";
import { contact, whatsappDefaultText } from "../data/siteContent";

export const externalLinks = {
  whatsapp(extraText = "") {
    const text = encodeURIComponent(`${whatsappDefaultText}${extraText ? ` ${extraText}` : ""}`);
    return `https://wa.me/${contact.waNumber}?text=${text}`;
  },
  booking: contact.bookingUrl,
  phone: `tel:${contact.phoneTel}`,
};

export function openExternalUrl(url) {
  return Linking.openURL(url);
}
