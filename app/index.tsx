import Splash from "@/components/Splash";
import { useSplash } from "@/contexts/SplashContext";
import { ActivityIndicator, Text, View } from "react-native";
import { preventAutoHideAsync } from "expo-splash-screen";

preventAutoHideAsync();

export default function Index() {
  const { splashComplete } = useSplash();

  return (
    <>
      {splashComplete ? (
        <View>
          <Text>Home Screen</Text>
        </View>
      ) : (
        <Splash />
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
