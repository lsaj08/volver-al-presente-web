import { View } from "react-native";
import ResourceCard from "../components/cards/ResourceCard";
import Screen from "../components/layout/Screen";
import Button from "../components/ui/Button";
import SectionHeader from "../components/ui/SectionHeader";
import { psiCositas } from "../data/siteContent";
import useResponsive from "../hooks/useResponsive";
import { spacing } from "../theme/spacing";
import { externalLinks, openExternalUrl } from "../utils/links";

export default function PsiCositasScreen({ navigation, route }) {
  const { columns } = useResponsive();

  return (
    <Screen navigation={navigation} routeName={route.name}>
      <SectionHeader
        eyebrow="Psi-Cositas"
        title="Recursos breves para tu bienestar emocional"
        body="Una biblioteca pequeña de contenidos prácticos que puede crecer sin romper la arquitectura de la app."
      />
      <View style={gridStyle(columns)}>
        {psiCositas.map((item) => (
          <View key={item.title} style={cardColumnStyle(columns)}>
            <ResourceCard item={item} />
          </View>
        ))}
      </View>
      <Button
        label="Pedir acompañamiento personalizado"
        onPress={() => openExternalUrl(externalLinks.whatsapp("Quiero más información de Psi-Cositas."))}
      />
    </Screen>
  );
}

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
