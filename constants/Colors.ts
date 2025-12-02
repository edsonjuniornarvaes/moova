import { theme } from "@/theme";

const tintColorLight = '#0a7ea4';
const tintColorDark = '#fff';

export const Colors = {
  light: {
    text: theme.colors.text.primary,
    background: theme.colors.background.white,
    tint: tintColorLight,
    icon: theme.colors.icon.light,
    tabIconDefault: theme.colors.icon.light,
    tabIconSelected: tintColorLight,
  },
  dark: {
    text: theme.colors.text.light,
    background: theme.colors.background.dark,
    tint: tintColorDark,
    icon: theme.colors.icon.dark,
    tabIconDefault: theme.colors.icon.dark,
    tabIconSelected: tintColorDark,
  },
};
