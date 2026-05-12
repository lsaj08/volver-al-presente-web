import { StyleSheet, Text, View } from "react-native";
import { contact } from "../../data/siteContent";
import { colors } from "../../theme/colors";
import { spacing } from "../../theme/spacing";
import { typography } from "../../theme/typography";

export default function Footer() {
  return (
    <View style={styles.footer}>
      <Text style={styles.brand}>Volver al Presente</Text>
      <Text style={styles.text}>Psicóloga Marcela Zamora · {contact.phoneDisplay}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  footer: {
    borderTopColor: colors.border,
    borderTopWidth: 1,
    gap: spacing.xs,
    paddingVertical: spacing.xl,
  },
  brand: {
    color: colors.primary,
    fontFamily: typography.titleMedium,
    fontSize: 16,
    textAlign: "center",
  },
  text: {
    color: colors.textMuted,
    fontFamily: typography.body,
    fontSize: 15,
    textAlign: "center",
  },
});
