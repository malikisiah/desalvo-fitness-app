import {
  createRestyleComponent,
  VariantProps,
  createVariant,
  spacing,
  SpacingProps,
} from "@shopify/restyle";
import { View, ViewProps } from "react-native";
import { Theme } from "@/utils/theme";
import Box from "./Box";
import { Image } from "expo-image";
import Text from "./Text";

type Props = VariantProps<Theme, "cardVariants"> &
  ViewProps &
  SpacingProps<Theme>;
const CardContainer = createRestyleComponent<Props, Theme>(
  [createVariant({ themeKey: "cardVariants" }), spacing],
  View
);

const Card = ({
  image,
  title,
  content,
}: {
  image: string;
  title: string;
  content: string;
}) => {
  return (
    <CardContainer>
      <Box>
        <Text>{title}</Text>
        <Image
          source={image}
          style={{ flex: 1, aspectRatio: "16/9", width: "100%" }}
        />
        <Text>{content}</Text>
      </Box>
    </CardContainer>
  );
};

export default Card;
