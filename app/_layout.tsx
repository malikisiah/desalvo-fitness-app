import { Stack } from "expo-router";
import queryClient from "@/utils/query-client";
import { QueryClientProvider } from "@tanstack/react-query";
import { ThemeProvider } from "@shopify/restyle";
import { useFonts } from "@expo-google-fonts/inter";
import theme from "@/utils/theme";
import * as SplashScreen from "expo-splash-screen";

import { StatusBar } from "expo-status-bar";
import { useEffect } from "react";

SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [loaded, error] = useFonts({
    Manrope: require("../assets/fonts/Manrope.ttf"),
    BebasNeue: require("../assets/fonts/BebasNeue.ttf"),
    Urbanist: require("../assets/fonts/Urbanist.ttf"),
  });

  useEffect(() => {
    if (loaded || error) {
      SplashScreen.hideAsync();
    }
  }, [loaded, error]);

  if (!loaded && !error) {
    return null;
  }
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={theme}>
        <Stack
          screenOptions={{
            headerShown: false,
            animation: "fade_from_bottom",
          }}
        >
          <Stack.Screen name="index" />
        </Stack>

        <StatusBar style="dark" />
      </ThemeProvider>
    </QueryClientProvider>
  );
}
