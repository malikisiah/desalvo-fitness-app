import {
  createRestyleComponent,
  createVariant,
  VariantProps,
} from "@shopify/restyle";
import { Theme } from "@/utils/theme";
import { View, Text } from "react-native";
import { IconRunning } from "components/user-interface/base/icon-running";
import Dot from "assets/svg/dot.svg";
import { useTheme } from "@shopify/restyle";

export interface PillExerciseDetailsProps
  extends VariantProps<Theme, "pillVariants"> {
  /** Used to locate this view in end-to-end tests. */
  testID?: string;
}

// Create a themed View using restyle
const ThemedContainer = createRestyleComponent<
  VariantProps<Theme, "pillVariants"> & React.ComponentProps<typeof View>,
  Theme
>([createVariant({ themeKey: "pillVariants" })], View);

export default function PillExerciseDetails({
  testID,
  variant = "default",
}: PillExerciseDetailsProps) {
  const theme = useTheme<Theme>();

  return (
    <ThemedContainer variant={variant} testID={testID ?? "127:1303"}>
      <View style={{ flexDirection: "column", rowGap: theme.spacing.s }}>
        {/* Header */}
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            columnGap: theme.spacing.xs,
          }}
        >
          <IconRunning testID="127:1548" />
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              columnGap: theme.spacing.xxs,
            }}
          >
            <Text
              style={{
                color: theme.colors.primary,
                fontSize: theme.textVariants.bodyBold.fontSize,
                fontWeight: "700",
              }}
            >
              Running
            </Text>
            <Dot />
            <Text
              style={{
                color: theme.colors.primary,
                fontSize: theme.textVariants.body.fontSize,
                fontWeight: "500",
              }}
            >
              8.00 AM - 9.30 AM
            </Text>
          </View>
        </View>

        {/* Details */}
        <View style={{ flexDirection: "row", columnGap: theme.spacing.m }}>
          <View>
            <Text
              style={{
                color: theme.colors.textSecondary,
                fontSize: theme.textVariants.body.fontSize,
              }}
            >
              hours
            </Text>
            <Text
              style={{
                color: theme.colors.textPrimary,
                fontSize: 35,
                fontWeight: "800",
              }}
            >
              1.32
            </Text>
          </View>
          <View>
            <Text
              style={{
                color: theme.colors.textSecondary,
                fontSize: theme.textVariants.body.fontSize,
              }}
            >
              kilometers
            </Text>
            <Text
              style={{
                color: theme.colors.textPrimary,
                fontSize: 35,
                fontWeight: "800",
              }}
            >
              9.50
            </Text>
          </View>
        </View>
      </View>
    </ThemedContainer>
  );
}
