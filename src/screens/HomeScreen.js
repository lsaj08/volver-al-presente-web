import { Image, StyleSheet, Text, View } from "react-native";
import banner from "../assets/banner.jpeg";
import logo from "../assets/logo-marcela.png";
import InfoCard from "../components/cards/InfoCard";
import Screen from "../components/layout/Screen";
import Button from "../components/ui/Button";
import SectionHeader from "../components/ui/SectionHeader";
import { BRAND_VALUES, CONTACT, SERVICE_AREAS } from "../data/content";
import { homeContent } from "../data/siteContent";
import { colors } from "../theme/colors";
import { spacing } from "../theme/spacing";
import { typography } from "../theme/typography";
import { buildWhatsAppUrl, openUrl } from "../utils/contact";

export default function HomeScreen() {
  return (
    <Screen>
      <View style={styles.hero}>
        <Image source={banner} style={styles.heroImage} resizeMode="cover" />
        <View style={styles.logoWrap}>
          <Image source={logo} style={styles.logo} resizeMode="contain" />
        </View>
        <Text style={styles.eyebrow}>{homeContent.eyebrow}</Text>
        <Text style={styles.title}>{homeContent.title}</Text>
        <Text style={styles.description}>{homeContent.description}</Text>
        <Text style={styles.subtitle}>{homeContent.subtitle}</Text>
        <Text style={styles.note}>{homeContent.note}</Text>
        <View style={styles.actions}>
          <Button label="Escribir por WhatsApp" onPress={() => openUrl(buildWhatsAppUrl())} />
          <Button label="Agendar sesión" variant="secondary" onPress={() => openUrl(CONTACT.bookingUrl)} />
        </View>
      </View>

      <SectionHeader
        eyebrow="Áreas principales"
        title="Acompañamiento con calidez y criterio clínico"
        body="Cada proceso se adapta a tu momento, tus recursos y lo que necesitás construir en la vida cotidiana."
      />

      <View style={styles.topicGrid}>
        {SERVICE_AREAS.map((service, index) => (
          <View key={service.slug} style={styles.topicPill}>
            <View style={[styles.topicDot, { backgroundColor: palette[index % palette.length] }]} />
            <Text style={styles.topicText}>{service.shortTitle}</Text>
          </View>
        ))}
      </View>

      <InfoCard
        accentColor={colors.magenta}
        title="Tal vez te estás preguntando..."
        body="¿Te está pesando la relación con la comida, con tu cuerpo o con tu mundo emocional? No tenés que tenerlo todo claro para pedir ayuda."
      >
        <Text style={styles.cardText}>Podemos empezar por identificar qué se está sintiendo urgente y cuáles serían los primeros pasos posibles.</Text>
      </InfoCard>

      <InfoCard title="Valores que guían el proceso" accentColor={colors.purple}>
        {BRAND_VALUES.map((value) => (
          <Text key={value} style={styles.cardText}>
            • {value}
          </Text>
        ))}
      </InfoCard>
    </Screen>
  );
}

const palette = [colors.teal, colors.magenta, colors.purple, colors.deepPurple, colors.aqua];

const styles = StyleSheet.create({
  hero: {
    backgroundColor: colors.surface,
    borderColor: colors.border,
    borderRadius: 8,
    borderWidth: 1,
    gap: spacing.md,
    overflow: "hidden",
    paddingBottom: spacing.xl,
  },
  heroImage: {
    height: 190,
    width: "100%",
  },
  logoWrap: {
    alignSelf: "center",
    backgroundColor: colors.surface,
    borderColor: colors.border,
    borderRadius: 8,
    borderWidth: 1,
    marginTop: -42,
    padding: spacing.md,
  },
  logo: {
    height: 72,
    width: 168,
  },
  eyebrow: {
    color: colors.magenta,
    fontFamily: typography.subtitle,
    fontSize: 19,
    paddingHorizontal: spacing.xl,
    textAlign: "center",
  },
  title: {
    color: colors.text,
    fontFamily: typography.title,
    fontSize: 31,
    lineHeight: 38,
    paddingHorizontal: spacing.xl,
    textAlign: "center",
  },
  description: {
    color: colors.text,
    fontFamily: typography.titleMedium,
    fontSize: 18,
    lineHeight: 25,
    paddingHorizontal: spacing.xl,
    textAlign: "center",
  },
  subtitle: {
    color: colors.teal,
    fontFamily: typography.subtitle,
    fontSize: 22,
    paddingHorizontal: spacing.xl,
    textAlign: "center",
  },
  note: {
    color: colors.textMuted,
    fontFamily: typography.body,
    fontSize: 17,
    lineHeight: 24,
    paddingHorizontal: spacing.xl,
    textAlign: "center",
  },
  actions: {
    gap: spacing.md,
    paddingHorizontal: spacing.xl,
    paddingTop: spacing.sm,
  },
  topicGrid: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: spacing.md,
  },
  topicPill: {
    alignItems: "center",
    backgroundColor: colors.surface,
    borderColor: colors.border,
    borderRadius: 8,
    borderWidth: 1,
    flexDirection: "row",
    gap: spacing.sm,
    paddingHorizontal: spacing.md,
    paddingVertical: spacing.sm,
  },
  topicDot: {
    borderRadius: 999,
    height: 10,
    width: 10,
  },
  topicText: {
    color: colors.text,
    fontFamily: typography.bodyStrong,
    fontSize: 13,
  },
  cardText: {
    color: colors.textMuted,
    fontFamily: typography.body,
    fontSize: 17,
    lineHeight: 24,
  },
});
