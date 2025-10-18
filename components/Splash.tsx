import { VideoView, useVideoPlayer } from "expo-video";
import { useEffect } from "react";
import { StyleSheet } from "react-native";
import { hideAsync } from "expo-splash-screen";
import { useSplash } from "../contexts/SplashContext";

function Splash() {
  const { setSplashComplete } = useSplash();
  const player = useVideoPlayer(
    require("../assets/videos/splash.mp4"),
    (player) => {
      player.loop = false;
      player.play();
    }
  );

  useEffect(() => {
    hideAsync();

    const timer = setTimeout(() => {
      setSplashComplete(true);
    }, 3000);

    return () => {
      clearTimeout(timer);
    };
  }, [setSplashComplete]);

  return (
    <VideoView
      style={StyleSheet.absoluteFill}
      player={player}
      allowsFullscreen={false}
      allowsPictureInPicture={false}
    />
  );
}

export default Splash;
