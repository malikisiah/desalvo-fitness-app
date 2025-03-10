import { createBox, useTheme } from "@shopify/restyle";
import { Theme } from "@/utils/theme";
import { SafeAreaView } from "react-native-safe-area-context";
import { ReactNode } from "react";

const BaseBox = createBox<Theme>();

BaseBox.defaultProps = {
  backgroundColor: "mainBackground",
  flex: 1,
  alignItems: "center",
};

const Box = ({
  children,
  backgroundColor = "mainBackground",
  ...rest
}: {
  children: ReactNode;
  backgroundColor?: keyof Theme["colors"];
}) => {
  const theme = useTheme<Theme>();
  const resolvedBackgroundColor = theme.colors[backgroundColor];

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: resolvedBackgroundColor }}>
      <BaseBox backgroundColor={backgroundColor} {...rest}>
        {children}
      </BaseBox>
    </SafeAreaView>
  );
};

export default Box;
