import { useThemeColor } from "@/hooks/useThemeColor";

export type ThemedTextType =
  | "default"
  | "title"
  | "defaultSemiBold"
  | "subtitle"
  | "link";

interface UseThemedTextViewModelProps {
  lightColor?: string;
  darkColor?: string;
}

export function useThemedTextViewModel({
  lightColor,
  darkColor,
}: UseThemedTextViewModelProps) {
  const color = useThemeColor({ light: lightColor, dark: darkColor }, "text");

  return {
    color,
  };
}

