import ChevronRightIconImport from "@/components/icons/chevron-right";
import MoovaIconImport from "@/components/icons/moova";
import GoogleIconImport from "@/components/icons/google";
import AppleIconImport from "@/components/icons/apple";
import FacebookIconImport from "@/components/icons/facebook";

const GoogleIcon = styled(GoogleIconImport).attrs({})``;
const AppleIcon = styled(AppleIconImport).attrs({})``;
const FacebookIcon = styled(FacebookIconImport).attrs({})``;
const MoovaIcon = styled(MoovaIconImport).attrs({ width: 283, height: 57 })``;
const ChevronRightIcon = styled(ChevronRightIconImport).attrs({})``;

import { LinearGradient } from "expo-linear-gradient";
import styled from "styled-components/native";

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
  /* background-color: rgba(255, 255, 255, 0.95); */
  /* border-top-left-radius: 20px; */
  /* border-top-right-radius: 20px; */
`;

const TitleContainer = styled.View`
  padding-top: 24px;
`;

const Title = styled.Text`
  font-size: 16px;
  color: #fff;
  text-align: center;
  font-family: Orbitron-Regular;
`;

const ButtonContainer = styled.View`
  /* padding: 20px 0; */
`;

const Button = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
  justify-content: center;

  height: 48px;
  border-radius: 12px;
  background-color: #009b8e;
`;

const ButtonTitle = styled.Text`
  font-size: 16px;
  font-weight: bold;
  color: #fff;
  text-align: center;
  font-family: Orbitron-SemiBold;
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

  padding: 24px 0;
`;

const SocialButton = styled.View<{ index: number }>`
  align-items: center;
  justify-content: center;
  flex-direction: row;

  width: 100%;
  height: 48px;
  margin: 0;
  border-radius: 12px;
  background-color: #fff;
  padding: 0 16px;
`;

const SocialButtonText = styled.Text`
  font-size: 16px;
  font-weight: 600;
  color: #222222;
  margin-left: 12px;
  font-family: Orbitron-SemiBold;
`;

const CreateAccountContainer = styled.View`
  align-items: center;
`;

const CreateAccountText = styled.Text`
  margin-right: 2px;
  font-family: Orbitron-Regular;
`;

const CreateAccountTextLink = styled.Text`
  font-size: 12px;
  font-weight: bold;
  text-decoration-line: underline;
  padding-left: 2px;
  color: #fff;
  font-family: Orbitron-SemiBold;
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
  CreateAccountText,
  CreateAccountTextLink,
};
