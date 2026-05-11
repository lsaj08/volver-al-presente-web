import { Linking } from "react-native";
import { CONTACT, WHATSAPP_DEFAULT_TEXT } from "../data/content";

export function buildWhatsAppUrl(extraText = "") {
  const text = encodeURIComponent(`${WHATSAPP_DEFAULT_TEXT}${extraText ? ` ${extraText}` : ""}`);
  return `https://wa.me/${CONTACT.waNumber}?text=${text}`;
}

export function openUrl(url) {
  Linking.openURL(url);
}
