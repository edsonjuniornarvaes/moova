import { useEffect } from "react";
import { StyleSheet, View } from "react-native";
import { hideAsync } from "expo-splash-screen";
import { useSplash } from "../contexts/SplashContext";
import {
  useSharedValue,
  withTiming,
  withDelay,
  Easing,
  useAnimatedStyle,
} from "react-native-reanimated";
import Animated from "react-native-reanimated";
import { LinearGradient } from "expo-linear-gradient";
import MoovaIcon from "@/components/icons/moova";
import JuntosMovimentoIcon from "@/components/icons/juntos-movimento";

function Splash() {
  const { setSplashComplete } = useSplash();

  // Valores animados - fade-in simples
  const logoOpacity = useSharedValue(0);
  const textOpacity = useSharedValue(0);

  useEffect(() => {
    hideAsync();

    // Logo fade-in suave
    logoOpacity.value = withTiming(1, {
      duration: 800,
      easing: Easing.bezier(0.25, 0.1, 0.25, 1),
    });

    // Texto fade-in com delay
    textOpacity.value = withDelay(
      300,
      withTiming(1, {
        duration: 800,
        easing: Easing.bezier(0.25, 0.1, 0.25, 1),
      })
    );

    // Completa após 2.5 segundos
    const completeTimer = setTimeout(() => {
      setSplashComplete(true);
    }, 2500);

    return () => {
      clearTimeout(completeTimer);
    };
  }, [setSplashComplete]);

  const logoAnimatedStyle = useAnimatedStyle(() => ({
    opacity: logoOpacity.value,
  }));

  const textAnimatedStyle = useAnimatedStyle(() => ({
    opacity: textOpacity.value,
  }));

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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  logoContainer: {
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 24,
  },
  textContainer: {
    alignItems: "center",
    justifyContent: "center",
  },
});

export default Splash;
