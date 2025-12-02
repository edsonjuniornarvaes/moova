import { StyleSheet } from "react-native";
import { theme } from "@/theme";

export const styles = StyleSheet.create({
  default: {
    fontSize: theme.fonts.size.base,
    lineHeight: 24,
  },
  defaultSemiBold: {
    fontSize: theme.fonts.size.base,
    lineHeight: 24,
    fontWeight: theme.fonts.weight.semiBold,
  },
  title: {
    fontSize: theme.fonts.size.xxl,
    fontWeight: theme.fonts.weight.bold,
    lineHeight: 32,
  },
  subtitle: {
    fontSize: theme.fonts.size.lg,
    fontWeight: theme.fonts.weight.bold,
  },
  link: {
    lineHeight: 30,
    fontSize: theme.fonts.size.base,
    color: theme.colors.text.primary,
  },
});

