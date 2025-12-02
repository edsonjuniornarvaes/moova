import { StyleSheet } from "react-native";
import { theme } from "./index";

export const commonStyles = StyleSheet.create({
  // Containers
  container: {
    flex: 1,
  },
  containerCenter: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  containerPadding: {
    flex: 1,
    padding: theme.spacing.base,
  },
  containerPaddingLarge: {
    flex: 1,
    padding: theme.spacing.xxxl,
  },
  
  // Inputs
  input: {
    marginVertical: theme.spacing.xs,
    height: theme.sizes.input.height,
    borderWidth: 1,
    borderColor: theme.colors.input.border,
    borderRadius: theme.borderRadius.sm,
    padding: theme.spacing.sm,
    backgroundColor: theme.colors.input.background,
    fontSize: theme.fonts.size.base,
  },
  
  // Buttons
  button: {
    height: theme.sizes.button.height,
    borderRadius: theme.borderRadius.md,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: theme.spacing.base,
  },
  buttonPrimary: {
    backgroundColor: theme.colors.button.primary,
  },
  buttonSecondary: {
    backgroundColor: theme.colors.button.secondary,
    borderWidth: 1,
    borderColor: theme.colors.input.border,
  },
  buttonText: {
    fontSize: theme.fonts.size.base,
    fontWeight: theme.fonts.weight.bold,
    color: theme.colors.button.text,
    fontFamily: theme.fonts.family.semiBold,
  },
  buttonTextSecondary: {
    fontSize: theme.fonts.size.base,
    fontWeight: theme.fonts.weight.semiBold,
    color: theme.colors.button.textDark,
    fontFamily: theme.fonts.family.semiBold,
  },
  
  // Text
  textTitle: {
    fontSize: theme.fonts.size.xl,
    fontWeight: theme.fonts.weight.bold,
    textAlign: "center",
    marginBottom: theme.spacing.sm,
  },
  textSubtitle: {
    fontSize: theme.fonts.size.lg,
    fontWeight: theme.fonts.weight.bold,
  },
  textBody: {
    fontSize: theme.fonts.size.base,
    fontFamily: theme.fonts.family.regular,
  },
  textBodyBold: {
    fontSize: theme.fonts.size.base,
    fontFamily: theme.fonts.family.semiBold,
  },
  textSmall: {
    fontSize: theme.fonts.size.sm,
    fontFamily: theme.fonts.family.regular,
  },
  textSmallBold: {
    fontSize: theme.fonts.size.sm,
    fontFamily: theme.fonts.family.semiBold,
  },
  textWhite: {
    color: theme.colors.text.white,
  },
  textDark: {
    color: theme.colors.text.primary,
  },
  
  // Spacing utilities
  marginBottom: {
    marginBottom: theme.spacing.base,
  },
  marginTop: {
    marginTop: theme.spacing.base,
  },
  paddingHorizontal: {
    paddingHorizontal: theme.spacing.base,
  },
  paddingVertical: {
    paddingVertical: theme.spacing.base,
  },
});

