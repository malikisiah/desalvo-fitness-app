import {
  createRestyleComponent,
  VariantProps,
  createVariant,
} from "@shopify/restyle";
import { TextInput, TextInputProps } from "react-native";
import { Theme } from "@/utils/theme";

// Define props for the TextInput component with variants
type InputProps = VariantProps<Theme, "inputVariants"> & TextInputProps;

// Create a Restyle-enhanced TextInput component
const Input = createRestyleComponent<InputProps, Theme>(
  [createVariant({ themeKey: "inputVariants" })],
  TextInput
);

export default Input;
