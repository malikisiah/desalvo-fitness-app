import { View, Text, Pressable } from "react-native";
import { useRouter } from "expo-router";

export default function Index() {
  const router = useRouter();

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text style={{ fontSize: 24, marginBottom: 20 }}>
        Authentication screen
      </Text>

      {/* Try programmatic navigation */}
      <Pressable
        onPress={() => {
          router.replace("/(tabs)");
        }}
        style={{
          marginTop: 20,
          padding: 12,
          backgroundColor: "green",
          borderRadius: 8,
        }}
      >
        <Text style={{ color: "white", fontSize: 18 }}>
          Go to Tabs (Router Push)
        </Text>
      </Pressable>
    </View>
  );
}
