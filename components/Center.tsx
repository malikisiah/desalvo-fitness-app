import { View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useTheme } from "@rneui/themed";
import type { ReactNode } from "react";

export default function Center({ children }: { children: ReactNode }) {
  const { theme } = useTheme();
  return (
    <SafeAreaView
      style={{
        backgroundColor: theme.colors.background,
        flex: 1,
      }}
    >
      <View
        style={{
          flex: 1,
          alignItems: "center",
          marginTop: "3%",
          width: "100%",
        }}
      >
        {children}
      </View>
    </SafeAreaView>
  );
}
