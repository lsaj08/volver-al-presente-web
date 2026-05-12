import { StyleSheet, View } from "react-native";
import { spacing } from "../../theme/spacing";

export default function Section({ children, style }) {
  return <View style={[styles.section, style]}>{children}</View>;
}

const styles = StyleSheet.create({
  section: {
    gap: spacing.lg,
    width: "100%",
  },
});
