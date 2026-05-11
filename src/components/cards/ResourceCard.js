import { StyleSheet, Text, View } from "react-native";
import { colors } from "../../theme/colors";
import { shadows } from "../../theme/shadows";
import { spacing } from "../../theme/spacing";
import { typography } from "../../theme/typography";

export default function ResourceCard({ item }) {
  return (
    <View style={styles.card}>
      <View style={[styles.cover, { backgroundColor: item.color }]}>
        <Text style={styles.coverText}>{item.format}</Text>
      </View>
      <View style={styles.body}>
        <Text style={styles.tag}>{item.tag}</Text>
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.summary}>{item.summary}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: colors.surface,
    borderColor: colors.border,
    borderRadius: 8,
    borderWidth: 1,
    overflow: "hidden",
    ...shadows.card,
  },
  cover: {
    minHeight: 96,
    justifyContent: "flex-end",
    padding: spacing.lg,
  },
  coverText: {
    color: colors.white,
    fontFamily: typography.titleMedium,
    fontSize: 22,
  },
  body: {
    gap: spacing.sm,
    padding: spacing.xl,
  },
  tag: {
    color: colors.magenta,
    fontFamily: typography.subtitle,
    fontSize: 17,
  },
  title: {
    color: colors.text,
    fontFamily: typography.titleMedium,
    fontSize: 19,
    lineHeight: 25,
  },
  summary: {
    color: colors.textMuted,
    fontFamily: typography.body,
    fontSize: 17,
    lineHeight: 24,
  },
});
