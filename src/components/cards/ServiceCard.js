import { StyleSheet, Text, View } from "react-native";
import { colors } from "../../theme/colors";
import { shadows } from "../../theme/shadows";
import { spacing } from "../../theme/spacing";
import { typography } from "../../theme/typography";

export default function ServiceCard({ service, accentColor }) {
  return (
    <View style={styles.card}>
      <View style={[styles.badge, { backgroundColor: accentColor }]}>
        <Text style={styles.badgeText}>{service.shortTitle.slice(0, 2)}</Text>
      </View>
      <Text style={styles.title}>{service.title}</Text>
      <Text style={styles.subtitle}>{service.subtitle}</Text>
      <View style={styles.list}>
        {service.howWeWork.slice(0, 3).map((item) => (
          <Text key={item} style={styles.listItem}>
            • {item}
          </Text>
        ))}
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
    gap: spacing.md,
    padding: spacing.xl,
    ...shadows.card,
  },
  badge: {
    alignItems: "center",
    borderRadius: 999,
    height: 44,
    justifyContent: "center",
    width: 44,
  },
  badgeText: {
    color: colors.white,
    fontFamily: typography.title,
    fontSize: 13,
  },
  title: {
    color: colors.text,
    fontFamily: typography.titleMedium,
    fontSize: 20,
    lineHeight: 26,
  },
  subtitle: {
    color: colors.textMuted,
    fontFamily: typography.body,
    fontSize: 17,
    lineHeight: 25,
  },
  list: {
    gap: spacing.sm,
  },
  listItem: {
    color: colors.text,
    fontFamily: typography.body,
    fontSize: 16,
    lineHeight: 23,
  },
});
