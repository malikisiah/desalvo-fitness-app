import { Stack } from "expo-router";
import queryClient from "@/utils/query-client";
import { QueryClientProvider } from "@tanstack/react-query";
import { ThemeProvider, createTheme } from "@rneui/themed";
import { StatusBar } from "expo-status-bar";

export default function RootLayout() {
  const theme = createTheme({
    lightColors: {
      primary: "#008dcf",
      secondary: "#0077b6",
      background: "#ffffff",
      white: "#ffffff",
      black: "#000000",
      grey0: "#f5f5f5",
      grey1: "#e0e0e0",
      grey2: "#bdbdbd",
      grey3: "#9e9e9e",
      grey4: "#757575",
      grey5: "#616161",
      greyOutline: "#d6d6d6",
      searchBg: "#f1f1f1",
      success: "#388e3c",
      warning: "#f57c00",
      error: "#d32f2f",
      disabled: "#bdbdbd",
      divider: "#e0e0e0",
    },
    darkColors: {
      primary: "#008dcf",
      secondary: "#00bcd4",
      background: "#121212",
      white: "#000000",
      black: "#ffffff",
      grey0: "#303030",
      grey1: "#424242",
      grey2: "#616161",
      grey3: "#757575",
      grey4: "#9e9e9e",
      grey5: "#bdbdbd",
      greyOutline: "#424242",
      searchBg: "#1e1e1e",
      success: "#4caf50",
      warning: "#ff9800",
      error: "#f44336",
      disabled: "#616161",
      divider: "#2c2c2c",
    },
    mode: "dark",
  });

  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={theme}>
        <Stack
          screenOptions={{
            headerShown: false,
            animation: "fade_from_bottom",
          }}
        />
        <StatusBar style="light" />
      </ThemeProvider>
    </QueryClientProvider>
  );
}
