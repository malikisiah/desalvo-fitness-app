import { Skeleton as RNEUISkeleton } from "@rneui/themed";
import { SafeAreaView, View } from "react-native";
import { useTheme } from "@rneui/themed";

export default function Skeleton() {
  const { theme } = useTheme();
  return (
    <SafeAreaView style={{ backgroundColor: theme.colors.background, flex: 1 }}>
      <View style={{ flex: 1, alignItems: "center", marginTop: "20%" }}>
        {" "}
        <RNEUISkeleton
          skeletonStyle={{
            backgroundColor: theme.colors.grey1,
          }}
          style={{
            backgroundColor: theme.colors.grey0,
            height: "50%",
            width: "100%",
            borderRadius: 15,
            marginBottom: "2%",
          }}
        />
        <RNEUISkeleton
          skeletonStyle={{
            backgroundColor: theme.colors.grey1,
          }}
          style={{
            backgroundColor: theme.colors.grey0,
            borderRadius: 10,
            height: "5%",
          }}
        />
      </View>
    </SafeAreaView>
  );
}
