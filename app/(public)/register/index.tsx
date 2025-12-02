import { View, Text, TextInput, Button, Pressable } from "react-native";
import { Link } from "expo-router";
import { useRegisterViewModel } from "./viewModel";
import { styles } from "./styles";

export default function Register() {
  const {
    email,
    setEmail,
    password,
    setPassword,
    pendingEmailCode,
    code,
    setCode,
    handleSignUp,
    handleVerifyUser,
  } = useRegisterViewModel();

  return (
    <View style={styles.container}>
      {!pendingEmailCode && (
        <View>
          <Text style={styles.title}>Criar uma conta</Text>

          <TextInput
            autoCapitalize="none"
            placeholder="Digite seu email..."
            style={styles.input}
            value={email}
            onChangeText={setEmail}
          />

          <TextInput
            autoCapitalize="none"
            placeholder="Digite sua senha..."
            style={styles.input}
            value={password}
            onChangeText={setPassword}
            secureTextEntry
          />

          <Button
            title="Criar uma conta"
            color="#121212"
            onPress={handleSignUp}
          />

          <Link href="/sign-in" asChild>
            <Pressable style={styles.button}>
              <Text>Já possui uma conta? Faça o login</Text>
            </Pressable>
          </Link>
        </View>
      )}

      {pendingEmailCode && (
        <View>
          <Text style={styles.title}>Digite o código:</Text>
          <TextInput
            autoCapitalize="none"
            placeholder="Digite seu código..."
            style={styles.input}
            value={code}
            onChangeText={setCode}
          />
          <Button
            title="Ativar conta"
            color="#121212"
            onPress={handleVerifyUser}
          />
        </View>
      )}
    </View>
  );
}

