import { StyleSheet, Text, View } from "react-native";
import InfoCard from "../components/cards/InfoCard";
import Screen from "../components/layout/Screen";
import Button from "../components/ui/Button";
import SectionHeader from "../components/ui/SectionHeader";
import { workshops } from "../data/siteContent";
import { colors } from "../theme/colors";
import { spacing } from "../theme/spacing";
import { typography } from "../theme/typography";
import { buildWhatsAppUrl, openUrl } from "../utils/contact";

export default function WorkshopsScreen() {
  return (
    <Screen>
      <SectionHeader
        eyebrow="Talleres"
        title="Talleres de bienestar emocional"
        body="Propuestas iniciales para grupos, instituciones o equipos que quieran trabajar recursos emocionales con un enfoque claro y cercano."
      />
      <View style={styles.list}>
        {workshops.map((workshop, index) => (
          <InfoCard key={workshop.title} title={workshop.title} accentColor={palette[index % palette.length]}>
            <Text style={styles.detail}>Objetivo: {workshop.objective}</Text>
            <Text style={styles.detail}>Modalidad: {workshop.modality}</Text>
            <Text style={styles.detail}>Duración: {workshop.duration}</Text>
            <Text style={styles.detail}>Dirigido a: {workshop.audience}</Text>
          </InfoCard>
        ))}
      </View>
      <Button
        label="Solicitar información"
        onPress={() => openUrl(buildWhatsAppUrl("Quiero información sobre talleres."))}
      />
    </Screen>
  );
}

const palette = [colors.teal, colors.magenta, colors.deepPurple];

const styles = StyleSheet.create({
  list: {
    gap: spacing.lg,
  },
  detail: {
    color: colors.textMuted,
    fontFamily: typography.body,
    fontSize: 17,
    lineHeight: 24,
  },
});
