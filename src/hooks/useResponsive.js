import { useWindowDimensions } from "react-native";
import { breakpoints } from "../theme/breakpoints";

export default function useResponsive() {
  const { width } = useWindowDimensions();
  const isTablet = width >= breakpoints.tablet;
  const isDesktop = width >= breakpoints.desktop;
  const isWide = width >= breakpoints.wide;

  return {
    width,
    isTablet,
    isDesktop,
    isWide,
    columns: isDesktop ? 3 : isTablet ? 2 : 1,
  };
}
