import { ScrollView, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Footer from "./Footer";
import Header from "./Header";
import useResponsive from "../../hooks/useResponsive";
import { colors } from "../../theme/colors";
import { spacing } from "../../theme/spacing";

export default function Screen({ children, navigation, routeName }) {
  const { isWide } = useResponsive();

  return (
    <SafeAreaView style={styles.safeArea} edges={["top", "left", "right"]}>
      <Header navigation={navigation} currentRoute={routeName} />
      <ScrollView
        contentContainerStyle={[styles.content, isWide && styles.contentWide]}
        showsVerticalScrollIndicator={false}
      >
        {children}
        <Footer />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    backgroundColor: colors.background,
    flex: 1,
  },
  content: {
    alignSelf: "center",
    gap: spacing.xl,
    maxWidth: 1120,
    paddingBottom: spacing.xxxl,
    paddingHorizontal: spacing.xl,
    paddingTop: spacing.xl,
    width: "100%",
  },
  contentWide: {
    paddingHorizontal: spacing.xxxl,
  },
});
