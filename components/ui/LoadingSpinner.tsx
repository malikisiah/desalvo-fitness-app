import { ActivityIndicator, View } from "react-native";
import { useTheme } from "@rneui/themed";
import Screen from "./Screen";

export default function LoadingSpinner() {
  const { theme } = useTheme();
  return (
    <Screen>
      <View style={{ marginTop: "35%" }}>
        <ActivityIndicator size="large" color={theme.colors.primary} />
      </View>
    </Screen>
  );
}
