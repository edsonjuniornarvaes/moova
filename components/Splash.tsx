import { useEffect } from "react";
import { StyleSheet, View, Text } from "react-native";
import { hideAsync } from "expo-splash-screen";
import { useSplash } from "../contexts/SplashContext";
import {
  useSharedValue,
  withTiming,
  withDelay,
  withSequence,
  Easing,
  useAnimatedStyle,
} from "react-native-reanimated";
import Animated from "react-native-reanimated";
import { LinearGradient } from "expo-linear-gradient";
import MoovaIcon from "@/components/icons/moova";

function Splash() {
  const { setSplashComplete } = useSplash();

  // Animação unificada - vibrante e moderna
  const logoOpacity = useSharedValue(0);
  const logoScale = useSharedValue(0.9);
  const logoBlur = useSharedValue(15);
  const logoRotateZ = useSharedValue(-2);

  const textOpacity = useSharedValue(0);
  const textScale = useSharedValue(0.9);

  useEffect(() => {
    hideAsync();

    // Logo fade-in com leve pulsação vibrante
    logoOpacity.value = withTiming(1, {
      duration: 800,
      easing: Easing.bezier(0.16, 1, 0.3, 1),
    });
    logoBlur.value = withTiming(0, {
      duration: 900,
    });
    logoScale.value = withSequence(
      withTiming(1.04, {
        duration: 500,
        easing: Easing.out(Easing.ease),
      }),
      withTiming(1, {
        duration: 400,
        easing: Easing.bezier(0.34, 0, 0.24, 1),
      })
    );
    logoRotateZ.value = withSequence(
      withTiming(1.5, {
        duration: 500,
        easing: Easing.out(Easing.ease),
      }),
      withTiming(-0.5, {
        duration: 350,
        easing: Easing.inOut(Easing.ease),
      }),
      withTiming(0, {
        duration: 250,
        easing: Easing.bezier(0.34, 0, 0.24, 1),
      })
    );

    // Texto fade-in sutil com pequeno delay
    textOpacity.value = withDelay(
      150,
      withTiming(1, {
        duration: 800,
        easing: Easing.bezier(0.16, 1, 0.3, 1),
      })
    );
    textScale.value = withSequence(
      withDelay(
        150,
        withTiming(1.02, {
          duration: 500,
          easing: Easing.out(Easing.ease),
        })
      ),
      withTiming(1, {
        duration: 400,
        easing: Easing.bezier(0.34, 0, 0.24, 1),
      })
    );

    // Completa a splash após animações concluírem (1.3s)
    const completeTimer = setTimeout(() => {
      setSplashComplete(true);
    }, 1300);

    return () => {
      clearTimeout(completeTimer);
    };
  }, [setSplashComplete]);

  const logoAnimatedStyle = useAnimatedStyle(() => ({
    opacity: logoOpacity.value,
    transform: [
      { scale: logoScale.value },
      { rotate: `${logoRotateZ.value}deg` },
    ],
  }));

  const textAnimatedStyle = useAnimatedStyle(() => ({
    opacity: textOpacity.value,
    transform: [{ scale: textScale.value }],
  }));

  return (
    <LinearGradient colors={["#00ADEF", "#7BE495"]} style={styles.container}>
      <Animated.View style={[styles.logoContainer, logoAnimatedStyle]}>
        <MoovaIcon width={283} height={57} />
      </Animated.View>

      <Animated.Text style={[styles.text, textAnimatedStyle]}>
        Juntos, em movimento
      </Animated.Text>
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
    marginBottom: 32,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 20 },
    shadowOpacity: 0.2,
    shadowRadius: 30,
    elevation: 20,
  },
  text: {
    fontSize: 16,
    color: "#fff",
    textAlign: "center",
    fontFamily: "Orbitron-Regular",
    letterSpacing: 2,
    fontWeight: "600",
  },
});

export default Splash;
