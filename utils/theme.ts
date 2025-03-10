import { createTheme } from "@shopify/restyle";

const palette = {
  purpleLight: "#8C6FF7",
  purplePrimary: "#5A31F4",
  purpleDark: "#3F22AB",

  greenLight: "#56DCBA",
  greenPrimary: "#0ECD9D",
  greenDark: "#0A906E",

  black: "#0B0B0B",
  white: "#FFFFFF",
  grayLight: "#F5F5F5",
  grayMedium: "#BDBDBD",
  grayDark: "#828282",
  red: "#FF3B30",
};

const theme = createTheme({
  colors: {
    mainBackground: palette.white,
    cardPrimaryBackground: palette.purplePrimary,
    primary: palette.purplePrimary,
    secondary: palette.greenPrimary,
    danger: palette.red,
    textPrimary: palette.black,
    textSecondary: palette.grayDark,
  },

  spacing: {
    xs: 4,
    s: 8,
    m: 16,
    l: 24,
    xl: 40,
  },

  borderRadii: {
    none: 0,
    s: 4,
    m: 8,
    l: 16,
    xl: 24,
    pill: 50,
  },

  textVariants: {
    header: {
      fontWeight: "bold",
      fontSize: 34,
      color: "textPrimary",
    },
    body: {
      fontSize: 16,
      lineHeight: 24,
      color: "textSecondary",
    },
    button: {
      fontSize: 16,
      fontWeight: "bold",
      textAlign: "center",
      color: "white",
    },
    defaults: {
      fontSize: 14,
      color: "textPrimary",
    },
  },
});

export type Theme = typeof theme;
export default theme;
