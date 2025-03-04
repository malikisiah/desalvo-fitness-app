import { Stack } from "expo-router";
import queryClient from "@/utils/query-client";
import { QueryClientProvider } from "@tanstack/react-query";
import { PaperProvider } from "react-native-paper";

import { StatusBar } from "expo-status-bar";

export default function RootLayout() {
  return (
    <QueryClientProvider client={queryClient}>
      <PaperProvider>
        <Stack
          screenOptions={{
            headerShown: false,
            animation: "fade_from_bottom",
          }}
        >
          <Stack.Screen name="index" />
        </Stack>

        <StatusBar style="dark" />
      </PaperProvider>
    </QueryClientProvider>
  );
}
