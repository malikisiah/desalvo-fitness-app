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
    cardPrimaryBackground: palette.grayLight,
    primary: palette.DeSalvoBlue,
    secondary: palette.greenPrimary,
    danger: palette.red,
    textPrimary: palette.black,
    textSecondary: palette.grayDark,
    textAccent: palette.grayLight,
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

    subheader: {
      fontFamily: "Urbanist",
      fontSize: 28,
      color: "textPrimary",
      textAlign: "center",
    },

    accent: {
      fontSize: 15,
      color: "primary",
      textAlign: "center",
    },

    defaults: {
      fontSize: 15,
      fontFamily: "Urbanist",
      color: "textPrimary",
    },
  },

  cardVariants: {
    defaults: {
      backgroundColor: "cardPrimaryBackground",
      borderRadius: "l",
      shadowColor: "textPrimary",
      shadowOffset: { width: 0, height: 4 },
      shadowOpacity: 0.1,
      shadowRadius: 6,
      elevation: 3,
      width: "40%",
    },
  },

  inputVariants: {
    defaults: {
      fontSize: 16,
      width: "80%",
      padding: "s",
      borderRadius: "l",
      borderWidth: 1,
      borderColor: "textAccent",
      backgroundColor: "cardPrimaryBackground",
      color: "textPrimary",
      shadowColor: "textPrimary",
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.05,
      shadowRadius: 4,
      elevation: 2,
    },
  },
});

export type Theme = typeof theme;
export default theme;
