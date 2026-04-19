import "./global.css";

import {useFonts} from "expo-font";
import {Stack} from "expo-router";
import {SafeAreaProvider} from "react-native-safe-area-context";

export default function RooyLayout() {
  const [loaded] = useFonts({
    SoraRegular: require("../assets/fonts/Sora-Regular.ttf"),
    SoraBold: require("../assets/fonts/Sora-Bold.ttf"),
    SoraSemiBold: require("../assets/fonts/Sora-SemiBold.ttf"),
    SoraMedium: require("../assets/fonts/Sora-Medium.ttf"),
  });

  if (!loaded) return null;
  return (
    <SafeAreaProvider>
      <Stack
        screenOptions={{
          headerShown: false,
          statusBarStyle: "light",
          contentStyle: {
            backgroundColor: "black",
          },
        }}>
        <Stack.Screen name="index" />
        <Stack.Screen name="catalog/index" />
        <Stack.Screen name="catalog/[id]" />
        <Stack.Screen
          name="address/index"
          options={{
            contentStyle: {backgroundColor: "#030014"},
          }}
        />
      </Stack>
    </SafeAreaProvider>
  );
}
