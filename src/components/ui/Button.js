import { Pressable, StyleSheet, Text } from "react-native";
import { colors } from "../../theme/colors";
import { spacing } from "../../theme/spacing";
import { typography } from "../../theme/typography";

export default function Button({ label, onPress, variant = "primary" }) {
  const isPrimary = variant === "primary";

  return (
    <Pressable
      accessibilityRole="button"
      onPress={onPress}
      style={({ pressed }) => [
        styles.base,
        isPrimary ? styles.primary : styles.secondary,
        pressed && styles.pressed,
      ]}
    >
      <Text style={[styles.label, isPrimary ? styles.primaryLabel : styles.secondaryLabel]}>
        {label}
      </Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  base: {
    alignItems: "center",
    borderRadius: 8,
    justifyContent: "center",
    minHeight: 48,
    paddingHorizontal: spacing.xl,
    paddingVertical: spacing.md,
  },
  primary: {
    backgroundColor: colors.magenta,
  },
  secondary: {
    backgroundColor: colors.surface,
    borderColor: colors.teal,
    borderWidth: 1,
  },
  pressed: {
    opacity: 0.82,
  },
  label: {
    fontFamily: typography.titleMedium,
    fontSize: 14,
    textAlign: "center",
  },
  primaryLabel: {
    color: colors.white,
  },
  secondaryLabel: {
    color: colors.teal,
  },
});
