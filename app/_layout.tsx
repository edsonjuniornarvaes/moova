import { useEffect } from "react";
import { ClerkProvider, useAuth } from "@clerk/clerk-expo";
import { Slot, useRouter, useSegments } from "expo-router";
import * as SecureStore from "expo-secure-store";
import { SplashProvider, useSplash } from "../contexts/SplashContext";

const publishKey = process.env.EXPO_PUBLIC_CLERK_PUBLISHABLE_KEY!;

const tokenCache = {
  async getToken(key: string) {
    try {
      return SecureStore.getItemAsync(key);
    } catch (err) {
      return null;
    }
  },
  async saveToken(key: string, value: string) {
    try {
      return SecureStore.setItemAsync(key, value);
    } catch (err) {
      return;
    }
  },
};

const InitialLayout = () => {
  const { isLoaded, isSignedIn } = useAuth();
  const segments = useSegments();
  const router = useRouter();
  const { splashComplete } = useSplash();

  useEffect(() => {
    if (!isLoaded || !splashComplete) return;

    console.log("User: ", isSignedIn);
    const inAuthGroup = segments[0] === "(auth)";

    if (isSignedIn && !inAuthGroup) {
      router.replace("/home");
    } else if (!isSignedIn) {
      router.replace("/sign-in/view");
    }
  }, [isSignedIn, splashComplete]);

  return <Slot />;
};

export default function RootLayout() {
  return (
    <SplashProvider>
      <ClerkProvider publishableKey={publishKey} tokenCache={tokenCache}>
        <InitialLayout />
      </ClerkProvider>
    </SplashProvider>
  );
}
