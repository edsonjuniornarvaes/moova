import { Text, View, TextInput, Button } from "react-native";
import { useProfileViewModel } from "./viewModel";
import { styles } from "./styles";

export default function Profile() {
  const {
    user,
    firstName,
    setFirstName,
    lastName,
    setLastName,
    handleUpdateProfile,
  } = useProfileViewModel();

  return (
    <View style={styles.container}>
      {user?.fullName && (
        <Text style={{ textAlign: "center", marginBottom: 20 }}>
          Bem vindo: {user?.fullName}
        </Text>
      )}

      <TextInput
        value={firstName}
        onChangeText={setFirstName}
        placeholder="Digite seu primeiro nome..."
        style={styles.input}
      />
      <TextInput
        value={lastName}
        onChangeText={setLastName}
        placeholder="Digite sobrenome..."
        style={styles.input}
      />

      <Button
        title="Atualizar perfil"
        onPress={handleUpdateProfile}
        color="#121212"
      />
    </View>
  );
}

