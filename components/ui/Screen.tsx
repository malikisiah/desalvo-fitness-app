import { SafeAreaView } from "react-native-safe-area-context";
import Box from "./Box";
import { ReactNode } from "react";
import { useTheme } from "@shopify/restyle";
import { Theme } from "@/utils/theme";

const Screen = ({ children }: { children: ReactNode }) => {
  const theme = useTheme<Theme>();
  return (
    <SafeAreaView
      style={{
        width: "100%",
        flex: 1,
        backgroundColor: theme.colors.mainBackground,
      }}
    >
      <Box alignItems="center" width={"100%"}>
        {children}
      </Box>
    </SafeAreaView>
  );
};

export default Screen;
