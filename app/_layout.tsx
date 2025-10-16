import { Stack, useRouter, useSegments } from "expo-router";
import queryClient from "@/utils/query-client";
import { QueryClientProvider } from "@tanstack/react-query";
import { ThemeProvider } from "@shopify/restyle";
import { useFonts } from "@expo-google-fonts/inter";
import theme from "@/utils/theme";
import * as SplashScreen from "expo-splash-screen";
import * as Notifications from "expo-notifications";

import { StatusBar } from "expo-status-bar";
import { useEffect } from "react";
import { NotificationProvider } from "@/context/NotificationContext";
import { useAuthStore } from "@/utils/authStore";

SplashScreen.preventAutoHideAsync();

Notifications.setNotificationHandler({
  handleNotification: async () => {
    // This sets how the notification should behave when it is received
    return {
      shouldShowAlert: true, // Show an alert
      shouldPlaySound: false, // Don't play a sound
      shouldSetBadge: false, // Don't set the badge on the app icon
    };
  },
});

function RootLayoutNav() {
  const segments = useSegments();
  const router = useRouter();
  const { session } = useAuthStore();

  useEffect(() => {
    const inAuthGroup = segments[0] === "(tabs)";
    const onSignIn = segments[0] === "sign-in";

    if (!session && inAuthGroup) {
      // Redirect to sign-in if not authenticated and trying to access tabs
      router.replace("/sign-in");
    } else if (session && onSignIn) {
      // Redirect to tabs if authenticated and on sign-in page
      router.replace("/(tabs)");
    }
  }, [session, segments, router]);

  return (
    <Stack
      screenOptions={{
        headerShown: false,
        animation: "fade_from_bottom",
      }}
    >
      <Stack.Screen name="index" />
      <Stack.Screen name="sign-in" />
      <Stack.Screen name="(tabs)" />
    </Stack>
  );
}

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
    <NotificationProvider>
      <QueryClientProvider client={queryClient}>
        <ThemeProvider theme={theme}>
          <RootLayoutNav />
          <StatusBar style="dark" />
        </ThemeProvider>
      </QueryClientProvider>
    </NotificationProvider>
  );
}
