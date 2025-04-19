import { Theme } from "@/utils/theme";
import { useTheme } from "@shopify/restyle";
import { SafeAreaView as SAV } from "react-native-safe-area-context";

export default function SafeAreaView({
  children,
}: {
  children: React.ReactNode;
}) {
  const theme = useTheme<Theme>();
  return (
    <SAV style={{ flex: 1, backgroundColor: theme.colors.mainBackground }}>
      {children}
    </SAV>
  );
}
