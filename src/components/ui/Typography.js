import { StyleSheet, Text } from "react-native";
import { colors } from "../../theme/colors";
import { typography } from "../../theme/typography";

export function Title({ children, style }) {
  return <Text style={[styles.title, style]}>{children}</Text>;
}

export function Subtitle({ children, style }) {
  return <Text style={[styles.subtitle, style]}>{children}</Text>;
}

export function Body({ children, style }) {
  return <Text style={[styles.body, style]}>{children}</Text>;
}

const styles = StyleSheet.create({
  title: {
    color: colors.text,
    fontFamily: typography.title,
    fontSize: 30,
    lineHeight: 37,
  },
  subtitle: {
    color: colors.secondary,
    fontFamily: typography.subtitle,
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
