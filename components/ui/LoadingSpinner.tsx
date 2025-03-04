import { ActivityIndicator, View } from "react-native";

import Screen from "./Screen";

export default function LoadingSpinner() {
  return (
    <Screen>
      <View style={{ marginTop: "35%" }}>
        <ActivityIndicator size="large" color={"blue"} />
      </View>
    </Screen>
  );
}
