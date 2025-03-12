import Text from "@/components/ui/Text";
import Screen from "@/components/ui/Screen";
import { View } from "react-native";
import { useAuthStore } from "@/utils/authStore";

export default function Index() {
  const { user } = useAuthStore();
  return (
    <Screen>
      <View>
        <Text variant="header">Hello {user?.id}</Text>
      </View>
    </Screen>
  );
}
