import { Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "../screens/HomeScreen";
import PsiCositasScreen from "../screens/PsiCositasScreen";
import ServicesScreen from "../screens/ServicesScreen";
import WorkshopsScreen from "../screens/WorkshopsScreen";
import { colors } from "../theme/colors";
import { typography } from "../theme/typography";

const Tab = createBottomTabNavigator();

const icons = {
  Inicio: "⌂",
  Servicios: "✦",
  "Psi-Cositas": "◇",
  Talleres: "◎",
};

export default function AppNavigator() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          headerShown: false,
          tabBarActiveTintColor: colors.magenta,
          tabBarInactiveTintColor: colors.textMuted,
          tabBarLabelStyle: {
            fontFamily: typography.bodyStrong,
            fontSize: 11,
          },
          tabBarStyle: {
            backgroundColor: colors.surface,
            borderTopColor: colors.border,
            minHeight: 68,
            paddingBottom: 10,
            paddingTop: 8,
          },
          tabBarIcon: ({ color }) => (
            <Text style={{ color, fontSize: 20, lineHeight: 22 }}>{icons[route.name]}</Text>
          ),
        })}
      >
        <Tab.Screen name="Inicio" component={HomeScreen} />
        <Tab.Screen name="Servicios" component={ServicesScreen} />
        <Tab.Screen name="Psi-Cositas" component={PsiCositasScreen} />
        <Tab.Screen name="Talleres" component={WorkshopsScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
