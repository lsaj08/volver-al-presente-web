import { StyleSheet, Text, View } from "react-native";
import { colors } from "../../theme/colors";
import { shadows } from "../../theme/shadows";
import { spacing } from "../../theme/spacing";
import { typography } from "../../theme/typography";

export default function InfoCard({ title, body, children, accentColor = colors.teal }) {
  return (
    <View style={styles.card}>
      <View style={[styles.accent, { backgroundColor: accentColor }]} />
      <Text style={styles.title}>{title}</Text>
      {body ? <Text style={styles.body}>{body}</Text> : null}
      {children}
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: colors.surface,
    borderColor: colors.border,
    borderRadius: 8,
    borderWidth: 1,
    gap: spacing.md,
    padding: spacing.xl,
    ...shadows.card,
  },
  accent: {
    borderRadius: 999,
    height: 6,
    width: 56,
  },
  title: {
    color: colors.text,
    fontFamily: typography.titleMedium,
    fontSize: 19,
    lineHeight: 25,
  },
  body: {
    color: colors.textMuted,
    fontFamily: typography.body,
    fontSize: 17,
    lineHeight: 25,
  },
});
