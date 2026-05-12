import { StyleSheet, View } from "react-native";
import { colors } from "../../theme/colors";
import { shadows } from "../../theme/shadows";
import { spacing } from "../../theme/spacing";

export default function Card({ children, style }) {
  return <View style={[styles.card, style]}>{children}</View>;
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
});
