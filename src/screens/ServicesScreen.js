import { View } from "react-native";
import ServiceCard from "../components/cards/ServiceCard";
import Screen from "../components/layout/Screen";
import Button from "../components/ui/Button";
import SectionHeader from "../components/ui/SectionHeader";
import { services } from "../data/services";
import useResponsive from "../hooks/useResponsive";
import { colors } from "../theme/colors";
import { spacing } from "../theme/spacing";
import { externalLinks, openExternalUrl } from "../utils/links";

export default function ServicesScreen({ navigation, route }) {
  const { columns } = useResponsive();

  return (
    <Screen navigation={navigation} routeName={route.name}>
      <SectionHeader
        eyebrow="Servicios"
        title="Áreas de acompañamiento terapéutico"
        body="Cada servicio retoma el enfoque del documento base: claridad, metáforas accesibles, cuidado clínico y pasos concretos."
      />
      <View style={gridStyle(columns)}>
        {services.map((service, index) => (
          <View key={service.slug} style={cardColumnStyle(columns)}>
            <ServiceCard
              service={service}
              accentColor={palette[index % palette.length]}
              onPress={() => navigation.navigate("ServiceDetail", { slug: service.slug })}
            />
          </View>
        ))}
      </View>
      <Button
        label="Consultar por WhatsApp"
        onPress={() => openExternalUrl(externalLinks.whatsapp("Quiero información sobre servicios."))}
      />
    </Screen>
  );
}

const palette = [colors.primary, colors.secondary, colors.accent, colors.deepPurple, colors.turquoise];

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
