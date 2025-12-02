import Animated from "react-native-reanimated";
import { ThemedText } from "@/presentation/components/ThemedText";
import { useHelloWaveViewModel } from "./viewModel";
import { styles } from "./styles";

export function HelloWave() {
  const { animatedStyle } = useHelloWaveViewModel();

  return (
    <Animated.View style={animatedStyle}>
      <ThemedText style={styles.text}>👋</ThemedText>
    </Animated.View>
  );
}

