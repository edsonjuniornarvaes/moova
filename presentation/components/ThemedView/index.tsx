import { View, type ViewProps } from "react-native";
import { useThemedViewViewModel } from "./viewModel";

export type ThemedViewProps = ViewProps & {
  lightColor?: string;
  darkColor?: string;
};

export function ThemedView({
  style,
  lightColor,
  darkColor,
  ...otherProps
}: ThemedViewProps) {
  const { backgroundColor } = useThemedViewViewModel({
    lightColor,
    darkColor,
  });

  return <View style={[{ backgroundColor }, style]} {...otherProps} />;
}

