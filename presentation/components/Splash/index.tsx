import Animated from "react-native-reanimated";
import { LinearGradient } from "expo-linear-gradient";
import MoovaIcon from "@/presentation/icons/moova";
import JuntosMovimentoIcon from "@/presentation/icons/juntos-movimento";
import { useSplashViewModel } from "./viewModel";
import { styles } from "./styles";

function Splash() {
  const { logoAnimatedStyle, textAnimatedStyle } = useSplashViewModel();

  return (
    <LinearGradient colors={["#00ADEF", "#7BE495"]} style={styles.container}>
      <Animated.View style={[styles.logoContainer, logoAnimatedStyle]}>
        <MoovaIcon width={283} height={57} />
      </Animated.View>

      <Animated.View style={[styles.textContainer, textAnimatedStyle]}>
        <JuntosMovimentoIcon />
      </Animated.View>
    </LinearGradient>
  );
}

export default Splash;
