import { View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import type { ReactNode } from "react";

export default function Screen({ children }: { children: ReactNode }) {
  return (
    <SafeAreaView
      style={{
        backgroundColor: "white",
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
