import { Link } from "expo-router";
import WavePattern from "@/presentation/components/WavePattern";
import { theme } from "@/theme";
import { useSignInViewModel } from "./viewModel";
import * as S from "./styles";

const socialButtonContent = [
  {
    icon: <S.GoogleIcon />,
  },
];

export default function SignIn() {
  const { handleSignIn } = useSignInViewModel();

  return (
    <S.GradientContainer colors={[theme.colors.gradient.start, theme.colors.gradient.middle, theme.colors.gradient.end]}>
      <WavePattern opacity={0.12} />
      <S.TopContent>
        <S.MoovaIcon />
        <S.TitleContainer>
          <S.Title>Juntos, em movimento</S.Title>
        </S.TitleContainer>
      </S.TopContent>
      <S.BottomContent>
        <S.ButtonContainer>
          <S.Button onPress={handleSignIn}>
            <S.ButtonTitle>Acessar com e-mail</S.ButtonTitle>
          </S.Button>
        </S.ButtonContainer>
        <S.SocialButtonContainer>
          {socialButtonContent.map((item, index) => {
            return (
              <S.SocialButton key={index} index={index}>
                {item.icon}
                <S.SocialButtonText>Continuar com Google</S.SocialButtonText>
              </S.SocialButton>
            );
          })}
        </S.SocialButtonContainer>

        <S.CreateAccountContainer>
          <S.CreateAccountQuestionText>
            Não tem conta?
          </S.CreateAccountQuestionText>
          <Link href="/register">
            <S.CreateAccountTextLink>Criar agora</S.CreateAccountTextLink>
          </Link>
        </S.CreateAccountContainer>
      </S.BottomContent>
    </S.GradientContainer>
  );
}

