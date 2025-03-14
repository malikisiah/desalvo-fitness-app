import { ActivityIndicator } from "react-native";

import Screen from "./Screen";
import { useTheme } from "@shopify/restyle";
import { Theme } from "@/utils/theme";
import Box from "./Box";

const Loading = () => {
  const theme = useTheme<Theme>();
  return (
    <Screen>
      <Box flexGrow={1} justifyContent="center" height={"100%"}>
        <ActivityIndicator size={"large"} color={theme.colors.primary} />
      </Box>
    </Screen>
  );
};

export default Loading;
