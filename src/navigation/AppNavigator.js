import { Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "../screens/HomeScreen";
import PsiCositasScreen from "../screens/PsiCositasScreen";
import ServiceDetailScreen from "../screens/ServiceDetailScreen";
import ServicesScreen from "../screens/ServicesScreen";
import WorkshopsScreen from "../screens/WorkshopsScreen";
import { colors } from "../theme/colors";
import { typography } from "../theme/typography";

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

const icons = {
  Home: "⌂",
  Services: "✦",
  PsiCositas: "◇",
  Workshops: "◎",
};

const labels = {
  Home: "Inicio",
  Services: "Servicios",
  PsiCositas: "Psi-Cositas",
  Workshops: "Talleres",
};

const linking = {
  prefixes: ["/"],
  config: {
    screens: {
      MainTabs: {
        screens: {
          Home: "",
          Services: "servicios",
          PsiCositas: "psi-cositas",
          Workshops: "talleres",
        },
      },
      ServiceDetail: "servicios/:slug",
    },
  },
};

function MainTabs() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarActiveTintColor: colors.secondary,
        tabBarInactiveTintColor: colors.textMuted,
        tabBarLabel: labels[route.name],
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
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Services" component={ServicesScreen} />
      <Tab.Screen name="PsiCositas" component={PsiCositasScreen} />
      <Tab.Screen name="Workshops" component={WorkshopsScreen} />
    </Tab.Navigator>
  );
}

export default function AppNavigator() {
  return (
    <NavigationContainer linking={linking}>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="MainTabs" component={MainTabs} />
        <Stack.Screen name="ServiceDetail" component={ServiceDetailScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
