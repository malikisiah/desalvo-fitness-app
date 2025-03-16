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
        flex: 1,
        backgroundColor: theme.colors.mainBackground,
      }}
    >
      <Box width={"100%"} marginTop="m" alignItems="center">
        {children}
      </Box>
    </SafeAreaView>
  );
};

export default Screen;
