import {
  createRestyleComponent,
  spacing,
  SpacingProps,
} from "@shopify/restyle";
import { Theme } from "@/utils/theme";

type Props = SpacingProps<Theme>;
const Card = createRestyleComponent<Props, Theme>([spacing]);

export default Card;
