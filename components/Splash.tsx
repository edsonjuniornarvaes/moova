import { AVPlaybackStatusSuccess, ResizeMode, Video } from "expo-av";
import { useState } from "react";
import { StyleSheet } from "react-native";
import { hideAsync } from "expo-splash-screen";

type Props = {
  onComplete: (status: boolean) => void;
};

function Splash({ onComplete }: Props) {
  const [lastStatus, setLastStatus] = useState<AVPlaybackStatusSuccess>(
    {} as AVPlaybackStatusSuccess
  );

  function onPlaybackStatusUpdate(status: AVPlaybackStatusSuccess) {
    if (status.isLoaded) {
      if (lastStatus.isLoaded !== status.isLoaded) {
        hideAsync();
      }
    }
    if (status.didJustFinish) {
      onComplete(true);
    }
    setLastStatus(() => status);
  }

  return (
    <Video
      style={StyleSheet.absoluteFill}
      resizeMode={ResizeMode.COVER}
      source={require("../assets/videos/splash.mp4")}
      isLooping={false}
      onPlaybackStatusUpdate={onPlaybackStatusUpdate}
      shouldPlay={true}
    />
  );
}

export default Splash;
