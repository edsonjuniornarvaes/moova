import { useEffect, useState } from "react";
import { ClerkProvider, useAuth } from "@clerk/clerk-expo";
import { Slot, useRouter, useSegments } from "expo-router";
import * as SecureStore from "expo-secure-store";
import { StatusBar } from "expo-status-bar";
import { SplashProvider, useSplash } from "../contexts/SplashContext";
import { loadFonts } from "../fonts";
import ReduxProvider from "../providers/ReduxProvider";

const publishKey = process.env.EXPO_PUBLIC_CLERK_PUBLISHABLE_KEY!;

const tokenCache = {
  async getToken(key: string) {
    try {
      return SecureStore.getItemAsync(key);
    } catch {
      return null;
    }
  },
  async saveToken(key: string, value: string) {
    try {
      return SecureStore.setItemAsync(key, value);
    } catch {
      return;
    }
  },
};

const InitialLayout = () => {
  const { isLoaded, isSignedIn } = useAuth();
  const segments = useSegments();
  const router = useRouter();
  const { splashComplete } = useSplash();
  const [fontsLoaded, setFontsLoaded] = useState(false);

  useEffect(() => {
    const loadAppFonts = async () => {
      try {
        await loadFonts();
        setFontsLoaded(true);
      } catch (error) {
        console.log(
          "Font loading failed, continuing without custom fonts:",
          error
        );
        setFontsLoaded(true); // Continua mesmo se as fontes falharem
      }
    };
    loadAppFonts();
  }, []);

  useEffect(() => {
    if (!isLoaded || !splashComplete || !fontsLoaded) return;

    console.log("User: ", isSignedIn);
    console.log("Splash complete: ", splashComplete);
    console.log("Fonts loaded: ", fontsLoaded);
    console.log("Current segments: ", segments);

    const inAuthGroup = segments[0] === "(auth)";

    if (isSignedIn && !inAuthGroup) {
      console.log("Redirecting to /home");
      router.replace("/home");
    } else if (!isSignedIn) {
      console.log("Redirecting to /sign-in");
      router.replace("/sign-in");
    }
  }, [isLoaded, isSignedIn, splashComplete, fontsLoaded, segments, router]);

  if (!fontsLoaded) {
    return null;
  }

  return <Slot />;
};

export default function RootLayout() {
  return (
    <ReduxProvider>
      <SplashProvider>
        <ClerkProvider publishableKey={publishKey} tokenCache={tokenCache}>
          <StatusBar style="light" />
          <InitialLayout />
        </ClerkProvider>
      </SplashProvider>
    </ReduxProvider>
  );
}
