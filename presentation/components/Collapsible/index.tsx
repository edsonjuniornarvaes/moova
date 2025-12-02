import Ionicons from "@expo/vector-icons/Ionicons";
import { PropsWithChildren } from "react";
import { TouchableOpacity, useColorScheme } from "react-native";
import { ThemedText } from "@/presentation/components/ThemedText";
import { ThemedView } from "@/presentation/components/ThemedView";
import { Colors } from "@/constants/Colors";
import { useCollapsibleViewModel } from "./viewModel";
import { styles } from "./styles";

export function Collapsible({
  children,
  title,
}: PropsWithChildren & { title: string }) {
  const { isOpen, toggle } = useCollapsibleViewModel();
  const theme = useColorScheme() ?? "light";

  return (
    <ThemedView>
      <TouchableOpacity
        style={styles.heading}
        onPress={toggle}
        activeOpacity={0.8}
      >
        <Ionicons
          name={isOpen ? "chevron-down" : "chevron-forward-outline"}
          size={18}
          color={theme === "light" ? Colors.light.icon : Colors.dark.icon}
        />
        <ThemedText type="defaultSemiBold">{title}</ThemedText>
      </TouchableOpacity>
      {isOpen && <ThemedView style={styles.content}>{children}</ThemedView>}
    </ThemedView>
  );
}
