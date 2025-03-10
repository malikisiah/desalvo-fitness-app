import { Stack } from "expo-router";
import queryClient from "@/utils/query-client";
import { QueryClientProvider } from "@tanstack/react-query";
import { ThemeProvider } from "@shopify/restyle";
import theme from "@/utils/theme";

import { StatusBar } from "expo-status-bar";

export default function RootLayout() {
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
