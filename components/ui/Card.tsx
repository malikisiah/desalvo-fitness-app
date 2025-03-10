import {
  createRestyleComponent,
  spacing,
  color,
  ColorProps,
  SpacingProps,
} from "@shopify/restyle";
import { Theme } from "@/utils/theme";

type Props = SpacingProps<Theme> &
  ColorProps<Theme> & {
    title: string;
    content: string;
    image: string;
  };
const BaseCard = createRestyleComponent<Props, Theme>([spacing, color]);

const Card: React.FC<Props> = ({ title, content, image, ...rest }) => {};

export default Card;
