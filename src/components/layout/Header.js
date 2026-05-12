import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import logo from "../../assets/logo-marcela.png";
import { mainNavigation } from "../../data/navigation";
import useResponsive from "../../hooks/useResponsive";
import { colors } from "../../theme/colors";
import { spacing } from "../../theme/spacing";
import { typography } from "../../theme/typography";

export default function Header({ navigation, currentRoute }) {
  const { isTablet } = useResponsive();
  const rootRoutes = mainNavigation.map((item) => item.route);

  function goTo(routeName) {
    if (rootRoutes.includes(currentRoute)) {
      navigation.navigate(routeName);
      return;
    }
    navigation.navigate("MainTabs", { screen: routeName });
  }

  return (
    <View style={[styles.header, isTablet && styles.headerWide]}>
      <Image source={logo} style={styles.logo} resizeMode="contain" />
      {isTablet ? (
        <View style={styles.nav}>
          {mainNavigation.map((item) => {
            const isActive = item.route === currentRoute;
            return (
              <Pressable key={item.route} onPress={() => goTo(item.route)}>
                <Text style={[styles.navText, isActive && styles.navTextActive]}>{item.label}</Text>
              </Pressable>
            );
          })}
        </View>
      ) : null}
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    alignItems: "center",
    backgroundColor: colors.background,
    borderBottomColor: colors.border,
    borderBottomWidth: 1,
    paddingHorizontal: spacing.xl,
    paddingVertical: spacing.md,
  },
  headerWide: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  logo: {
    height: 54,
    width: 172,
  },
  nav: {
    alignItems: "center",
    flexDirection: "row",
    gap: spacing.xl,
  },
  navText: {
    color: colors.textMuted,
    fontFamily: typography.bodyStrong,
    fontSize: 14,
  },
  navTextActive: {
    color: colors.secondary,
  },
});
