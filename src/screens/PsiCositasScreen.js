import { StyleSheet, View } from "react-native";
import ResourceCard from "../components/cards/ResourceCard";
import Screen from "../components/layout/Screen";
import Button from "../components/ui/Button";
import SectionHeader from "../components/ui/SectionHeader";
import { psiCositas } from "../data/siteContent";
import { spacing } from "../theme/spacing";
import { buildWhatsAppUrl, openUrl } from "../utils/contact";

export default function PsiCositasScreen() {
  return (
    <Screen>
      <SectionHeader
        eyebrow="Psi-Cositas"
        title="Recursos breves para tu bienestar emocional"
        body="Una pequeña biblioteca de contenidos cortos y prácticos para acompañarte en el día a día."
      />
      <View style={styles.list}>
        {psiCositas.map((item) => (
          <ResourceCard key={item.title} item={item} />
        ))}
      </View>
      <Button
        label="Pedir acompañamiento personalizado"
        onPress={() => openUrl(buildWhatsAppUrl("Quiero más información de Psi-Cositas."))}
      />
    </Screen>
  );
}

const styles = StyleSheet.create({
  list: {
    gap: spacing.lg,
  },
});
