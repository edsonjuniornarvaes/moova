import { Platform } from "react-native";
import { openBrowserAsync } from "expo-web-browser";

export function useExternalLinkViewModel(href: string) {
  const handlePress = async (event: any) => {
    if (Platform.OS !== "web") {
      event.preventDefault();
      await openBrowserAsync(href);
    }
  };

  return {
    handlePress,
  };
}

