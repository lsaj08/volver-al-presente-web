import { StyleSheet, Text, View } from "react-native";
import InfoCard from "../components/cards/InfoCard";
import Screen from "../components/layout/Screen";
import Button from "../components/ui/Button";
import SectionHeader from "../components/ui/SectionHeader";
import { services } from "../data/services";
import useResponsive from "../hooks/useResponsive";
import { colors } from "../theme/colors";
import { spacing } from "../theme/spacing";
import { typography } from "../theme/typography";
import { externalLinks, openExternalUrl } from "../utils/links";

export default function ServiceDetailScreen({ navigation, route }) {
  const service = services.find((item) => item.slug === route.params?.slug) ?? services[0];
  const { isTablet } = useResponsive();

  return (
    <Screen navigation={navigation} routeName="Services">
      <SectionHeader eyebrow="Servicio" title={service.title} body={service.subtitle} />
      <InfoCard title={service.metaphor} accentColor={colors.secondary}>
        {service.intro.map((paragraph) => (
          <Text key={paragraph} style={styles.body}>{paragraph}</Text>
        ))}
      </InfoCard>
      <View style={[styles.grid, isTablet && styles.gridWide]}>
        <InfoCard title="¿Es para vos?" accentColor={colors.primary} style={styles.flexCard}>
          {service.isForYou.map((item) => <Text key={item} style={styles.body}>• {item}</Text>)}
        </InfoCard>
        <InfoCard title="Cómo puede afectarte" accentColor={colors.accent} style={styles.flexCard}>
          {service.impact.map((item) => <Text key={item} style={styles.body}>• {item}</Text>)}
        </InfoCard>
      </View>
      <View style={[styles.grid, isTablet && styles.gridWide]}>
        <InfoCard title="Cómo lo trabajamos" accentColor={colors.deepPurple} style={styles.flexCard}>
          {service.howWeWork.map((item) => <Text key={item} style={styles.body}>• {item}</Text>)}
        </InfoCard>
        <InfoCard title="Qué te llevás" accentColor={colors.turquoise} style={styles.flexCard}>
          {service.outcomes.map((item) => <Text key={item} style={styles.body}>• {item}</Text>)}
        </InfoCard>
      </View>
      <InfoCard title="FAQs rápidas" accentColor={colors.secondary}>
        {service.faqs.map((faq) => (
          <View key={faq.question} style={styles.faq}>
            <Text style={styles.question}>{faq.question}</Text>
            <Text style={styles.body}>{faq.answer}</Text>
          </View>
        ))}
      </InfoCard>
      <Button
        label={service.cta}
        onPress={() => openExternalUrl(externalLinks.whatsapp(service.cta))}
      />
    </Screen>
  );
}

const styles = StyleSheet.create({
  grid: {
    gap: spacing.lg,
  },
  gridWide: {
    flexDirection: "row",
  },
  flexCard: {
    flex: 1,
  },
  body: {
    color: colors.textMuted,
    fontFamily: typography.body,
    fontSize: 17,
    lineHeight: 25,
  },
  faq: {
    gap: spacing.xs,
  },
  question: {
    color: colors.text,
    fontFamily: typography.titleMedium,
    fontSize: 16,
    lineHeight: 22,
  },
});
