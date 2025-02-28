import { ActivityIndicator, View } from "react-native";
import { useTheme } from "@rneui/themed";
import Center from "./Center";

export default function LoadingSpinner() {
  const { theme } = useTheme();
  return (
    <Center>
      <View style={{ marginTop: "35%" }}>
        <ActivityIndicator size="large" color={theme.colors.primary} />
      </View>
    </Center>
  );
}
