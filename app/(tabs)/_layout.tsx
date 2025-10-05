import { Tabs } from "expo-router";
import Ionicons from "@expo/vector-icons/Ionicons";

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color, size }) => {
          const map: Record<string, keyof typeof Ionicons.glyphMap> = {
            index: "home",
            explore: "compass",
            conversor: "cash",
          };
          const icon = map[route.name] ?? "ellipse";
          return <Ionicons name={icon} color={color} size={size} />;
        },
        headerShown: true,
      })}
    >
      <Tabs.Screen name="index" options={{ title: "Home" }} />
      <Tabs.Screen name="explore" options={{ title: "Explore" }} />
      <Tabs.Screen name="conversor" options={{ title: "Conversor" }} />
    </Tabs>
  );
}