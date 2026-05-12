import { StyleSheet, Text, View } from "react-native";
import InfoCard from "../components/cards/InfoCard";
import Screen from "../components/layout/Screen";
import Button from "../components/ui/Button";
import SectionHeader from "../components/ui/SectionHeader";
import { workshops } from "../data/siteContent";
import useResponsive from "../hooks/useResponsive";
import { colors } from "../theme/colors";
import { spacing } from "../theme/spacing";
import { typography } from "../theme/typography";
import { externalLinks, openExternalUrl } from "../utils/links";

export default function WorkshopsScreen({ navigation, route }) {
  const { columns } = useResponsive();

  return (
    <Screen navigation={navigation} routeName={route.name}>
      <SectionHeader
        eyebrow="Talleres"
        title="Talleres de bienestar emocional"
        body="Propuestas para grupos, instituciones o equipos que quieran trabajar recursos emocionales con un enfoque claro y cercano."
      />
      <View style={gridStyle(columns)}>
        {workshops.map((workshop, index) => (
          <View key={workshop.title} style={cardColumnStyle(columns)}>
            <InfoCard title={workshop.title} accentColor={palette[index % palette.length]}>
              <Text style={styles.detail}>Objetivo: {workshop.objective}</Text>
              <Text style={styles.detail}>Modalidad: {workshop.modality}</Text>
              <Text style={styles.detail}>Duración: {workshop.duration}</Text>
              <Text style={styles.detail}>Dirigido a: {workshop.audience}</Text>
            </InfoCard>
          </View>
        ))}
      </View>
      <Button
        label="Solicitar información"
        onPress={() => openExternalUrl(externalLinks.whatsapp("Quiero información sobre talleres."))}
      />
    </Screen>
  );
}

const palette = [colors.primary, colors.secondary, colors.deepPurple];

function gridStyle() {
  return {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: spacing.lg,
  };
}

function cardColumnStyle(columns) {
  return {
    flexBasis: columns === 1 ? "100%" : columns === 2 ? "47%" : "31%",
    flexGrow: 1,
  };
}

const styles = StyleSheet.create({
  detail: {
    color: colors.textMuted,
    fontFamily: typography.body,
    fontSize: 17,
    lineHeight: 24,
  },
});
