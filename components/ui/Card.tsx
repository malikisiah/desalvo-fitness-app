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
import { Link } from "expo-router";

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
  href,
  ...rest
}: {
  image: string;
  title: string;
  content: string;
  href: `/${string}`;
} & Props) => {
  return (
    <CardContainer {...rest}>
      <Box gap="s">
        <Text variant="subheader">{title}</Text>
        <Image
          source={image}
          style={{
            flex: 1,
            aspectRatio: "16/9",
            width: "100%",
            borderRadius: 10,
          }}
        />
        <Text>{content}</Text>
        <Link href={href}>Action</Link>
      </Box>
    </CardContainer>
  );
};

export default Card;
