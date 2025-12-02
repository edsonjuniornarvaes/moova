import { Text, View } from "react-native";
import { Link } from "expo-router";
import { useHomeViewModel } from "./viewModel";
import { styles } from "./styles";

export default function Home() {
  const { userEmail } = useHomeViewModel();

  return (
    <View style={styles.container}>
      <Text>Página Home</Text>
      <Text>Email: {userEmail}</Text>

      <Link href="/profile">
        <Text>Meu perfil</Text>
      </Link>
    </View>
  );
}

