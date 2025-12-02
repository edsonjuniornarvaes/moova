import { StyleSheet } from "react-native";
import { theme } from "@/theme";
import { commonStyles } from "@/theme/styles";

export const styles = StyleSheet.create({
  container: {
    ...commonStyles.containerCenter,
    padding: theme.spacing.xxxl,
  },
  input: {
    ...commonStyles.input,
  },
});

