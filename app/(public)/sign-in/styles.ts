import { LinearGradient } from "expo-linear-gradient";
import { default as styled } from "styled-components/native";
import { theme } from "@/theme";
import ChevronRightIconImport from "@/presentation/icons/chevron-right";
import MoovaIconImport from "@/presentation/icons/moova";
import GoogleIconImport from "@/presentation/icons/google";
import AppleIconImport from "@/presentation/icons/apple";
import FacebookIconImport from "@/presentation/icons/facebook";

const GoogleIcon = styled(GoogleIconImport).attrs({})``;
const AppleIcon = styled(AppleIconImport).attrs({})``;
const FacebookIcon = styled(FacebookIconImport).attrs({})``;
const MoovaIcon = styled(MoovaIconImport).attrs({ width: 283, height: 57 })``;
const ChevronRightIcon = styled(ChevronRightIconImport).attrs({})``;

const GradientContainer = styled(LinearGradient)`
  flex: 1;

  align-items: center;
  justify-content: center;

  padding: 0 16px 0 16px;
`;

const GradientLine = styled(LinearGradient)`
  height: 0.8px;
  width: 40%;
`;

const TopContent = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  padding-bottom: 24px;
`;

const BottomContent = styled.View`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 0 16px 40px 16px;
`;

const TitleContainer = styled.View`
  padding-top: 24px;
`;

const Title = styled.Text`
  font-size: ${theme.fonts.size.base}px;
  color: ${theme.colors.text.white};
  text-align: center;
  font-family: ${theme.fonts.family.regular};
`;

const ButtonContainer = styled.View`
  margin-bottom: 16px;
`;

const Button = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
  justify-content: center;

  height: ${theme.sizes.button.height}px;
  border-radius: ${theme.borderRadius.md}px;
  background-color: ${theme.colors.button.primary};
`;

const ButtonTitle = styled.Text`
  font-size: ${theme.fonts.size.base}px;
  font-weight: ${theme.fonts.weight.bold};
  color: ${theme.colors.button.text};
  text-align: center;
  font-family: ${theme.fonts.family.semiBold};
`;

const ButtonIconContainer = styled.View`
  background-color: red;
`;

const LineContainer = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin: 0 16px;
  width: 100%;
`;

const LineText = styled.Text`
  font-size: 12px;
  text-align: center;
  color: #fff;
  padding: 24px 12px;
  font-family: Orbitron-Regular;
`;

const SocialButtonContainer = styled.View`
  align-items: center;
  justify-content: center;
  flex-direction: row;

  padding: 16px 0 24px 0;
`;

const SocialButton = styled.TouchableOpacity<{ index: number }>`
  align-items: center;
  justify-content: center;
  flex-direction: row;

  width: 100%;
  height: ${theme.sizes.button.height}px;
  margin: 0;
  border-radius: ${theme.borderRadius.md}px;
  background-color: ${theme.colors.button.secondary};
  padding: 0 ${theme.spacing.base}px;
`;

const SocialButtonText = styled.Text`
  font-size: ${theme.fonts.size.base}px;
  font-weight: ${theme.fonts.weight.semiBold};
  color: ${theme.colors.text.primary};
  margin-left: ${theme.spacing.md}px;
  font-family: ${theme.fonts.family.semiBold};
`;

const CreateAccountContainer = styled.View`
  align-items: center;
  padding-top: 8px;
`;

const CreateAccountQuestionText = styled.Text`
  font-size: ${theme.fonts.size.sm}px;
  color: ${theme.colors.text.white};
  text-align: center;
  margin-bottom: ${theme.spacing.sm}px;
  font-family: ${theme.fonts.family.regular};
`;

const CreateAccountText = styled.Text`
  margin-right: 2px;
  font-family: Orbitron-Regular;
`;

const CreateAccountTextLink = styled.Text`
  font-size: ${theme.fonts.size.sm}px;
  font-weight: ${theme.fonts.weight.bold};
  text-align: center;
  color: ${theme.colors.text.white};
  font-family: ${theme.fonts.family.semiBold};
`;

export {
  GradientContainer,
  GradientLine,
  TopContent,
  BottomContent,
  TitleContainer,
  Title,
  ButtonContainer,
  Button,
  ButtonTitle,
  ButtonIconContainer,
  ChevronRightIcon,
  GoogleIcon,
  AppleIcon,
  FacebookIcon,
  MoovaIcon,
  LineContainer,
  LineText,
  SocialButtonContainer,
  SocialButton,
  SocialButtonText,
  CreateAccountContainer,
  CreateAccountQuestionText,
  CreateAccountText,
  CreateAccountTextLink,
};

