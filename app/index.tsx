import Splash from "@/components/Splash";
import { useSplash } from "@/contexts/SplashContext";
import { preventAutoHideAsync } from "expo-splash-screen";

preventAutoHideAsync();

export default function Index() {
  const { splashComplete } = useSplash();

  // Se a splash não estiver completa, mostra a splash
  if (!splashComplete) {
    return <Splash />;
  }

  // Se a splash estiver completa, não mostra nada
  // O _layout.tsx vai redirecionar automaticamente
  return null;
}
