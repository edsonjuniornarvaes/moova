import { Stack } from "expo-router";

export default function PublicLayout() {
  return (
    <Stack
      screenOptions={{
        headerStyle: {
          backgroundColor: "#121212",
        },
        headerTintColor: "#FFF",
      }}
    >
      <Stack.Screen
        name="sign-in/index"
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="sign-in/view"
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="register"
        options={{
          headerTitle: "Criar conta",
        }}
      />
    </Stack>
  );
}
