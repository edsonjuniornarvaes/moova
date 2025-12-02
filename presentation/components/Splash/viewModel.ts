import { useEffect } from "react";
import {
  useSharedValue,
  withTiming,
  withDelay,
  Easing,
  useAnimatedStyle,
} from "react-native-reanimated";
import { hideAsync } from "expo-splash-screen";
import { useSplash } from "@/contexts/SplashContext";

export function useSplashViewModel() {
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
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [setSplashComplete]);

  const logoAnimatedStyle = useAnimatedStyle(() => ({
    opacity: logoOpacity.value,
  }));

  const textAnimatedStyle = useAnimatedStyle(() => ({
    opacity: textOpacity.value,
  }));

  return {
    logoAnimatedStyle,
    textAnimatedStyle,
  };
}
