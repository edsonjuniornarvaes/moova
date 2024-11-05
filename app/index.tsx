import Splash from "@/components/Splash";
import { useState } from "react";
import { ActivityIndicator, Text, View } from "react-native";
import { preventAutoHideAsync } from "expo-splash-screen";

preventAutoHideAsync();

export default function Index() {
  const [splashComplete, setSplashComplete] = useState(false);

  return (
    <>
      {splashComplete ? (
        <View>
          <Text>Home Screen</Text>
        </View>
      ) : (
        <Splash onComplete={setSplashComplete} />
      )}
      {/* <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <ActivityIndicator size={40} color={"#121212"}/>
    </View> */}
    </>
  );
}
