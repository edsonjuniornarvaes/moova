import { StyleSheet } from "react-native";
import { useSignIn } from "@clerk/clerk-expo";
import { useState } from "react";
import { Link } from "expo-router";

import * as S from "./styles";

const socialButtonContent = [
  {
    icon: <S.GoogleIcon />,
  },
  {
    icon: <S.AppleIcon />,
  },
  {
    icon: <S.FacebookIcon />,
  },
];

export default function Login() {
  const { isLoaded, setActive, signIn } = useSignIn();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function handleSignIn() {
    if (!isLoaded) return;

    try {
      const signinUser = await signIn.create({
        identifier: email,
        password: password,
      });

      await setActive({ session: signinUser.createdSessionId });
    } catch (err) {
      console.log(JSON.stringify(err, null, 2));
    }
  }

  return (
    <S.GradientContainer colors={["#00ADEF", "#7BE495"]}>
      <S.TopContent>
        <S.MoovaIcon />
      </S.TopContent>
      <S.BottomContent>
        <S.TitleContainer>
          <S.Title>
            Encontre seu esporte favorito, reuna a galera e organize sua partida
          </S.Title>
        </S.TitleContainer>
        <S.ButtonContainer>
          <S.Button>
            <S.ButtonTitle>Acessar com celular</S.ButtonTitle>
            <S.ChevronRightIcon />
          </S.Button>
        </S.ButtonContainer>
        <S.LineContainer>
          <S.GradientLine
            colors={["rgba(224, 224, 224, 0)", "rgba(224, 224, 224, 1)"]}
            start={{ x: 0, y: 0.5 }}
            end={{ x: 1, y: 0.5 }}
          />
          <S.LineText>Ou continuar com</S.LineText>
          <S.GradientLine
            colors={["rgba(224, 224, 224, 1)", "rgba(224, 224, 224, 0)"]}
            start={{ x: 0, y: 0.5 }}
            end={{ x: 1, y: 0.5 }}
          />
        </S.LineContainer>
        <S.SocialButtonContainer>
          {socialButtonContent.map((item, index) => {
            return (
              <S.SocialButton key={index} index={index}>
                {item.icon}
              </S.SocialButton>
            );
          })}
        </S.SocialButtonContainer>
        <S.CreateAccountContainer>
          <S.CreateAccountText>
            Ainda não tem conta?{" "}
            <Link href="/register">
              <S.CreateAccountTextLink>Crie já</S.CreateAccountTextLink>
            </Link>
          </S.CreateAccountText>
        </S.CreateAccountContainer>
      </S.BottomContent>
    </S.GradientContainer>
  );
}

const styles = StyleSheet.create({
  title: {
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 28,
    marginBottom: 14,
  },
  input: {
    marginVertical: 4,
    height: 50,
    borderWidth: 1,
    borderColor: "#121212",
    borderRadius: 8,
    padding: 10,
    backgroundColor: "#fff",
  },
  button: {
    margin: 8,
    alignItems: "center",
  },
});
