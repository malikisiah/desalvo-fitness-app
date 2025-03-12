import { createBox } from "@shopify/restyle";
import { Theme } from "@/utils/theme";

const Box = createBox<Theme>();

Box.defaultProps = {
  flex: 1,
  alignContent: "center",
  alignItems: "center",
};

export default Box;
