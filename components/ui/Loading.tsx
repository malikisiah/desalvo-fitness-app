import { ActivityIndicator } from "react-native";

import { useTheme } from "@shopify/restyle";
import { Theme } from "@/utils/theme";
import Box from "./Box";
import SafeAreaView from "./SafeAreaView";

const Loading = () => {
  const theme = useTheme<Theme>();
  return (
    <SafeAreaView>
      <Box flexGrow={1} justifyContent="center" height={"100%"}>
        <ActivityIndicator size={"large"} color={theme.colors.primary} />
      </Box>
    </SafeAreaView>
  );
};

export default Loading;
