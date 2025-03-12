import { createText } from "@shopify/restyle";
import { Theme } from "@/utils/theme";

const Text = createText<Theme>();

Text.defaultProps = {
  textAlign: "center",
};

export default Text;
