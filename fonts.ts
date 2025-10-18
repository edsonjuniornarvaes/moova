import * as Font from "expo-font";

export const loadFonts = async () => {
  try {
    await Font.loadAsync({
      "Orbitron-Regular": require("./assets/fonts/Orbitron-Regular.ttf"),
      "Orbitron-Medium": require("./assets/fonts/Orbitron-Medium.ttf"),
      "Orbitron-SemiBold": require("./assets/fonts/Orbitron-SemiBold.ttf"),
      "Orbitron-Bold": require("./assets/fonts/Orbitron-Bold.ttf"),
    });
    console.log("Orbitron fonts loaded successfully");
  } catch (error) {
    console.log("Error loading Orbitron fonts:", error);
    // Se houver erro, não carrega as fontes customizadas
    // O app usará as fontes padrão do sistema
  }
};

export const fontFamily = {
  regular: "Orbitron-Regular",
  medium: "Orbitron-Medium",
  semiBold: "Orbitron-SemiBold",
  bold: "Orbitron-Bold",
};
