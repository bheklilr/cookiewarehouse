export const COLORS = {
  black: "#101413",
  dark: "#1C2322",
  light: "#b7ccc9",
  white: '#dfe8e7',
  primary: "#75A099",
  primaryDark: "#405854",
  accent: "#30897A",
  accentDark: "#1B4B43"
};

export const SPACING = {
  tiny: "0.25rem",
  small: "0.5rem",
  normal: "1rem",
  large: "2rem",
  huge: "4rem"
};

export const TYPOGRAPHY = {
  sizes: {
    tiny: "0.25rem",
    small: "0.5rem",
    normal: "1rem",
    large: "2rem",
    huge: "4rem"
  },
  families: {
    normal: "Courgette",
    secondary: "Roboto" // TODO: Pick a better secondary
  },
  colors: {
    black: COLORS.light,
    dark: COLORS.accent,
    light: COLORS.black,
    white: COLORS.dark,
    primary: COLORS.black,
    primaryDark: COLORS.light,
    accent: COLORS.dark,
    accentDark: COLORS.light
  }
};
