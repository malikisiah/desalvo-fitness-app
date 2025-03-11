import { createTheme } from "@shopify/restyle";

const palette = {
  purpleLight: "#8C6FF7",
  purplePrimary: "#5A31F4",
  purpleDark: "#3F22AB",
  DeSalvoBlue: "#118ecc",

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
    primary: palette.DeSalvoBlue,
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
      fontFamily: "BebasNeue",
      fontSize: 34,
      color: "textPrimary",
    },

    defaults: {
      fontSize: 14,
      fontFamily: "Urbanist",
      color: "textPrimary",
      fontWeight: "semibold",
    },
  },
});

export type Theme = typeof theme;
export default theme;
