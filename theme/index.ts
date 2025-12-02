// Cores base únicas
const COLORS = {
  // Cores principais
  PRIMARY_TEAL: "#00a896",
  SECONDARY_TEAL: "#4ECDC4",
  BLUE_START: "#00ADEF",
  GREEN_END: "#7BE495",

  // Cores de texto
  TEXT_DARK_PRIMARY: "#222222",
  TEXT_DARK_SECONDARY: "#121212",
  TEXT_WHITE: "#ffffff",
  TEXT_LIGHT: "#ECEDEE",

  // Cores de fundo
  BG_WHITE: "#ffffff",
  BG_DARK: "#151718",
  BG_LIGHT: "#11181C",

  // Cores de ícone
  ICON_LIGHT: "#687076",
  ICON_DARK: "#9BA1A6",

  // Cores de status
  STATUS_ERROR: "#FF3D00",
  STATUS_SUCCESS: "#4CAF50",
  STATUS_WARNING: "#FFC107",

  // Cores de sombra
  SHADOW_BLACK: "#000",
} as const;

export const theme = {
  colors: {
    // Cores principais
    primary: COLORS.PRIMARY_TEAL,
    secondary: COLORS.SECONDARY_TEAL,

    // Gradiente
    gradient: {
      start: COLORS.BLUE_START,
      middle: COLORS.SECONDARY_TEAL,
      end: COLORS.GREEN_END,
    },

    // Cores de texto
    text: {
      primary: COLORS.TEXT_DARK_PRIMARY,
      secondary: COLORS.TEXT_DARK_SECONDARY,
      white: COLORS.TEXT_WHITE,
      light: COLORS.TEXT_LIGHT,
    },

    // Cores de fundo
    background: {
      white: COLORS.BG_WHITE,
      dark: COLORS.BG_DARK,
      light: COLORS.BG_LIGHT,
    },

    // Cores de botão
    button: {
      primary: COLORS.PRIMARY_TEAL,
      secondary: COLORS.BG_WHITE,
      text: COLORS.TEXT_WHITE,
      textDark: COLORS.TEXT_DARK_PRIMARY,
    },

    // Cores de input
    input: {
      border: COLORS.TEXT_DARK_SECONDARY,
      background: COLORS.BG_WHITE,
    },

    // Cores de ícone
    icon: {
      light: COLORS.ICON_LIGHT,
      dark: COLORS.ICON_DARK,
      white: COLORS.TEXT_WHITE,
    },

    // Cores de status
    status: {
      error: COLORS.STATUS_ERROR,
      success: COLORS.STATUS_SUCCESS,
      warning: COLORS.STATUS_WARNING,
    },
  },

  fonts: {
    family: {
      regular: "Orbitron-Regular",
      medium: "Orbitron-Medium",
      semiBold: "Orbitron-SemiBold",
      bold: "Orbitron-Bold",
    },
    size: {
      xs: 12,
      sm: 14,
      base: 16,
      lg: 20,
      xl: 28,
      xxl: 32,
    },
    weight: {
      regular: "400",
      medium: "500",
      semiBold: "600",
      bold: "700",
    },
  },

  spacing: {
    xs: 4,
    sm: 8,
    md: 12,
    base: 16,
    lg: 20,
    xl: 24,
    xxl: 32,
    xxxl: 40,
  },

  borderRadius: {
    sm: 8,
    md: 12,
    lg: 16,
    full: 9999,
  },

  sizes: {
    button: {
      height: 48,
    },
    input: {
      height: 50,
    },
  },

  shadows: {
    sm: {
      shadowColor: COLORS.SHADOW_BLACK,
      shadowOffset: { width: 0, height: 1 },
      shadowOpacity: 0.1,
      shadowRadius: 2,
      elevation: 2,
    },
    md: {
      shadowColor: COLORS.SHADOW_BLACK,
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.15,
      shadowRadius: 4,
      elevation: 4,
    },
    lg: {
      shadowColor: COLORS.SHADOW_BLACK,
      shadowOffset: { width: 0, height: 4 },
      shadowOpacity: 0.2,
      shadowRadius: 8,
      elevation: 8,
    },
  },
} as const;

export type Theme = typeof theme;
