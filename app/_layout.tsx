import { Stack } from "expo-router";
import queryClient from "@/utils/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { ThemeProvider, createTheme } from "@rneui/themed";
import { StatusBar } from "expo-status-bar";

export default function RootLayout() {
  const theme = createTheme({
    lightColors: {
      primary: "#008dcf",

      black: "white",
      background: "#080808",
    },
    mode: "light",
  });

  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={theme}>
        <Stack
          screenOptions={{
            headerShown: false,
          }}
        />
        <StatusBar style="light" />
      </ThemeProvider>
    </QueryClientProvider>
  );
}
