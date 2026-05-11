import { StyleSheet, Text, View } from "react-native";
import { colors } from "../../theme/colors";
import { spacing } from "../../theme/spacing";
import { typography } from "../../theme/typography";

export default function SectionHeader({ eyebrow, title, body }) {
  return (
    <View style={styles.container}>
      {eyebrow ? <Text style={styles.eyebrow}>{eyebrow}</Text> : null}
      <Text style={styles.title}>{title}</Text>
      {body ? <Text style={styles.body}>{body}</Text> : null}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    gap: spacing.sm,
    marginBottom: spacing.xl,
  },
  eyebrow: {
    color: colors.magenta,
    fontFamily: typography.subtitle,
    fontSize: 18,
  },
  title: {
    color: colors.text,
    fontFamily: typography.title,
    fontSize: 28,
    lineHeight: 34,
  },
  body: {
    color: colors.textMuted,
    fontFamily: typography.body,
    fontSize: 18,
    lineHeight: 26,
  },
});
