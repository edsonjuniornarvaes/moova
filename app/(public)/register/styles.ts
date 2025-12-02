import { StyleSheet } from "react-native";
import { theme } from "@/theme";
import { commonStyles } from "@/theme/styles";

export const styles = StyleSheet.create({
  container: {
    ...commonStyles.containerCenter,
    padding: theme.spacing.lg,
  },
  title: {
    ...commonStyles.textTitle,
    fontSize: theme.fonts.size.xl,
  },
  input: {
    ...commonStyles.input,
  },
  button: {
    margin: theme.spacing.sm,
    alignItems: "center",
  },
});

