import { useEffect, useState } from "react";
import { StyleSheet, View, Image } from "react-native";
import { VideoView, useVideoPlayer } from "expo-video";
import { hideAsync } from "expo-splash-screen";
import { useSplash } from "../contexts/SplashContext";

function Splash() {
  const { setSplashComplete } = useSplash();
  const [showVideo, setShowVideo] = useState(false);

  const player = useVideoPlayer(
    require("../assets/videos/splash.mp4"),
    (player) => {
      player.loop = false;
      player.muted = true;
    }
  );

  useEffect(() => {
    hideAsync();

    // Primeiro mostra a imagem por 1.5 segundos
    const imageTimer = setTimeout(() => {
      setShowVideo(true);
      player.play();
    }, 1500);

    // Depois do vídeo, completa a splash
    const completeTimer = setTimeout(() => {
      setSplashComplete(true);
    }, 4000); // 1.5s imagem + 2.5s vídeo

    return () => {
      clearTimeout(imageTimer);
      clearTimeout(completeTimer);
    };
  }, [setSplashComplete, player]);

  return (
    <View style={styles.container}>
      {/* Imagem sempre presente como fundo */}
      <Image
        source={require("../assets/images/splash.png")}
        style={styles.image}
        resizeMode="contain"
      />

      {/* Vídeo como overlay quando ativo */}
      {showVideo && (
        <VideoView
          style={styles.video}
          player={player}
          allowsFullscreen={false}
          allowsPictureInPicture={false}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff",
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    width: "100%",
    height: "100%",
    position: "absolute",
  },
  video: {
    width: "100%",
    height: "100%",
    position: "absolute",
  },
});

export default Splash;
