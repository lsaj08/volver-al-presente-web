import { StatusBar } from "expo-status-bar";
import { useFonts } from "expo-font";
import {
  Atma_400Regular,
  Atma_600SemiBold,
} from "@expo-google-fonts/atma";
import {
  Montserrat_500Medium,
  Montserrat_600SemiBold,
  Montserrat_700Bold,
} from "@expo-google-fonts/montserrat";
import AppNavigator from "./navigation/AppNavigator";
import { colors } from "./theme/colors";

export default function App() {
  const [fontsLoaded] = useFonts({
    Atma_400Regular,
    Atma_600SemiBold,
    Montserrat_500Medium,
    Montserrat_600SemiBold,
    Montserrat_700Bold,
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <>
      <StatusBar style="dark" backgroundColor={colors.background} />
      <AppNavigator />
    </>
  );
}
