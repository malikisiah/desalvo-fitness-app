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
    <CardContainer {...rest} style={{ overflow: "hidden" }}>
      <Image
        source={image}
        style={{
          flex: 1,
          borderTopLeftRadius: 10,
          borderTopRightRadius: 10,
          aspectRatio: "16/9",
        }}
      />
      <Box gap="s" padding="m">
        <Text variant="subheader">{title}</Text>
        <Text>{content}</Text>
        <Link href={href}>
          <Text color="primary" textAlign="center">
            View
          </Text>
        </Link>
      </Box>
    </CardContainer>
  );
};

export default Card;
