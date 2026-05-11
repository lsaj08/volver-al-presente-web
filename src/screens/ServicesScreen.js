import { StyleSheet, View } from "react-native";
import ServiceCard from "../components/cards/ServiceCard";
import Screen from "../components/layout/Screen";
import Button from "../components/ui/Button";
import SectionHeader from "../components/ui/SectionHeader";
import { SERVICE_AREAS } from "../data/content";
import { colors } from "../theme/colors";
import { spacing } from "../theme/spacing";
import { buildWhatsAppUrl, openUrl } from "../utils/contact";

export default function ServicesScreen() {
  return (
    <Screen>
      <SectionHeader
        eyebrow="Servicios"
        title="Áreas de acompañamiento terapéutico"
        body="Estas son las principales áreas en las que te puedo acompañar desde una mirada profesional, humana y centrada en tu bienestar emocional."
      />
      <View style={styles.list}>
        {SERVICE_AREAS.map((service, index) => (
          <ServiceCard
            key={service.slug}
            service={service}
            accentColor={palette[index % palette.length]}
          />
        ))}
      </View>
      <Button
        label="Consultar por WhatsApp"
        onPress={() => openUrl(buildWhatsAppUrl("Quiero información sobre servicios."))}
      />
    </Screen>
  );
}

const palette = [colors.teal, colors.magenta, colors.purple, colors.deepPurple, colors.aqua];

const styles = StyleSheet.create({
  list: {
    gap: spacing.lg,
  },
});
