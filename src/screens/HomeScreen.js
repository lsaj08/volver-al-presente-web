import { Image, StyleSheet, Text, View } from "react-native";
import banner from "../assets/banner.jpeg";
import InfoCard from "../components/cards/InfoCard";
import ServiceCard from "../components/cards/ServiceCard";
import Screen from "../components/layout/Screen";
import Section from "../components/layout/Section";
import Button from "../components/ui/Button";
import Pill from "../components/ui/Pill";
import SectionHeader from "../components/ui/SectionHeader";
import { services } from "../data/services";
import {
  aboutContent,
  brandValues,
  firstSession,
  homeContent,
  missionVision,
  professionalTraining,
  workStyle,
} from "../data/siteContent";
import useResponsive from "../hooks/useResponsive";
import { colors } from "../theme/colors";
import { spacing } from "../theme/spacing";
import { typography } from "../theme/typography";
import { externalLinks, openExternalUrl } from "../utils/links";

export default function HomeScreen({ navigation, route }) {
  const { isTablet, columns } = useResponsive();

  return (
    <Screen navigation={navigation} routeName={route.name}>
      <View style={[styles.hero, isTablet && styles.heroWide]}>
        <View style={styles.heroCopy}>
          <Text style={styles.eyebrow}>{homeContent.eyebrow}</Text>
          <Text style={styles.title}>{homeContent.title}</Text>
          <Text style={styles.description}>{homeContent.description}</Text>
          <Text style={styles.subtitle}>{homeContent.subtitle}</Text>
          <Text style={styles.note}>{homeContent.note}</Text>
          <View style={[styles.actions, isTablet && styles.actionsWide]}>
            <Button label="Escribir por WhatsApp" onPress={() => openExternalUrl(externalLinks.whatsapp())} />
            <Button label="Agendar sesión" variant="secondary" onPress={() => openExternalUrl(externalLinks.booking)} />
          </View>
        </View>
        <Image source={banner} style={[styles.heroImage, isTablet && styles.heroImageWide]} resizeMode="cover" />
      </View>

      <Section>
        <SectionHeader eyebrow="Servicios" title="Áreas de acompañamiento" body="Procesos personalizados desde una mirada cálida, profesional y centrada en tu bienestar emocional." />
        <View style={styles.pillGrid}>
          {services.map((service, index) => (
            <Pill key={service.slug} label={service.shortTitle} color={palette[index % palette.length]} />
          ))}
        </View>
        <View style={gridStyle(columns)}>
          {services.slice(0, 3).map((service, index) => (
            <View key={service.slug} style={cardColumnStyle(columns)}>
              <ServiceCard
                service={service}
                accentColor={palette[index % palette.length]}
                onPress={() => navigation.navigate("ServiceDetail", { slug: service.slug })}
              />
            </View>
          ))}
        </View>
      </Section>

      <Section>
        <SectionHeader eyebrow={aboutContent.title} title="Un espacio seguro, cercano y sin juicios" />
        <InfoCard accentColor={colors.primary} title={aboutContent.paragraphs[0]}>
          {aboutContent.paragraphs.slice(1).map((paragraph) => (
            <Text key={paragraph} style={styles.bodyText}>{paragraph}</Text>
          ))}
        </InfoCard>
      </Section>

      <Section>
        <SectionHeader eyebrow="Volver al Presente" title={homeContent.whyTitle} />
        <InfoCard accentColor={colors.turquoise} title="Bienestar como capacidad de respuesta">
          {homeContent.whyParagraphs.map((paragraph) => (
            <Text key={paragraph} style={styles.bodyText}>{paragraph}</Text>
          ))}
        </InfoCard>
      </Section>

      <Section>
        <SectionHeader eyebrow="Forma de trabajo" title="Proceso claro, humano y basado en evidencia" />
        <View style={gridStyle(isTablet ? 2 : 1)}>
          {workStyle.map((item, index) => (
            <View key={item.title} style={cardColumnStyle(isTablet ? 2 : 1)}>
              <InfoCard title={item.title} body={item.body} accentColor={palette[index % palette.length]} />
            </View>
          ))}
        </View>
      </Section>

      <Section>
        <SectionHeader eyebrow="Primera sesión" title="Qué puedes esperar al empezar" />
        <InfoCard title="Un primer mapa para orientar el proceso" accentColor={colors.secondary}>
          {firstSession.map((item) => (
            <Text key={item} style={styles.bodyText}>• {item}</Text>
          ))}
        </InfoCard>
      </Section>

      <Section>
        <SectionHeader eyebrow="Identidad" title="Misión, visión y valores" />
        <View style={gridStyle(isTablet ? 2 : 1)}>
          {missionVision.map((item) => (
            <View key={item.title} style={cardColumnStyle(isTablet ? 2 : 1)}>
              <InfoCard title={item.title} body={item.body} accentColor={colors.deepPurple} />
            </View>
          ))}
        </View>
        <View style={gridStyle(columns)}>
          {brandValues.map((value, index) => (
            <View key={value.title} style={cardColumnStyle(columns)}>
              <InfoCard title={value.title} body={value.body} accentColor={palette[index % palette.length]} />
            </View>
          ))}
        </View>
      </Section>

      <Section>
        <SectionHeader eyebrow="Formación profesional" title="Experiencia y actualización clínica" />
        <InfoCard title="Marcela Zamora" accentColor={colors.primary}>
          {professionalTraining.map((item) => (
            <Text key={item} style={styles.bodyText}>• {item}</Text>
          ))}
        </InfoCard>
      </Section>
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

const styles = StyleSheet.create({
  hero: {
    backgroundColor: colors.surface,
    borderColor: colors.border,
    borderRadius: 8,
    borderWidth: 1,
    gap: spacing.lg,
    overflow: "hidden",
  },
  heroWide: {
    flexDirection: "row",
    minHeight: 430,
  },
  heroCopy: {
    flex: 1,
    gap: spacing.md,
    justifyContent: "center",
    padding: spacing.xl,
  },
  heroImage: {
    height: 230,
    width: "100%",
  },
  heroImageWide: {
    height: "auto",
    width: "44%",
  },
  eyebrow: {
    color: colors.secondary,
    fontFamily: typography.subtitle,
    fontSize: 20,
  },
  title: {
    color: colors.text,
    fontFamily: typography.title,
    fontSize: 40,
    lineHeight: 48,
  },
  description: {
    color: colors.text,
    fontFamily: typography.titleMedium,
    fontSize: 20,
    lineHeight: 29,
  },
  subtitle: {
    color: colors.primary,
    fontFamily: typography.subtitle,
    fontSize: 24,
  },
  note: {
    color: colors.textMuted,
    fontFamily: typography.body,
    fontSize: 18,
    lineHeight: 26,
  },
  actions: {
    gap: spacing.md,
    paddingTop: spacing.sm,
  },
  actionsWide: {
    alignItems: "center",
    flexDirection: "row",
  },
  pillGrid: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: spacing.md,
  },
  bodyText: {
    color: colors.textMuted,
    fontFamily: typography.body,
    fontSize: 17,
    lineHeight: 25,
  },
});
