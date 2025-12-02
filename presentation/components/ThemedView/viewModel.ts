import { useThemeColor } from "@/hooks/useThemeColor";

interface UseThemedViewViewModelProps {
  lightColor?: string;
  darkColor?: string;
}

export function useThemedViewViewModel({
  lightColor,
  darkColor,
}: UseThemedViewViewModelProps) {
  const backgroundColor = useThemeColor(
    { light: lightColor, dark: darkColor },
    "background"
  );

  return {
    backgroundColor,
  };
}

