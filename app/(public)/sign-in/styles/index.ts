import ChevronRightIconImport from "@/components/icons/chevron-right";
import MoovaIconImport from "@/components/icons/moova";
import GoogleIconImport from "@/components/icons/google";
import AppleIconImport from "@/components/icons/apple";
import FacebookIconImport from "@/components/icons/facebook";

const GoogleIcon = styled(GoogleIconImport).attrs({})``;
const AppleIcon = styled(AppleIconImport).attrs({})``;
const FacebookIcon = styled(FacebookIconImport).attrs({})``;
const MoovaIcon = styled(MoovaIconImport).attrs({})``;
const ChevronRightIcon = styled(ChevronRightIconImport).attrs({})``;

import { LinearGradient } from "expo-linear-gradient";
import styled from "styled-components/native";

const GradientContainer = styled(LinearGradient)`
  flex: 1;
`;

const GradientLine = styled(LinearGradient)`
  height: 0.8px;
  width: 40%;
`;

const TopContent = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

const BottomContent = styled.View`
  flex: 1;
  border-top-left-radius: 16px;
  border-top-right-radius: 16px;
  padding: 0 30px;

  background-color: #fff;
`;

const TitleContainer = styled.View`
  padding-top: 56px;
`;

const Title = styled.Text`
  font-size: 16px;
  color: #888888;
  text-align: center;
`;

const ButtonContainer = styled.View`
  padding: 40px 0;
`;

const Button = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
  justify-content: center;

  height: 48px;
  border-radius: 6px;
  background-color: #345134;
`;

const ButtonTitle = styled.Text`
  font-size: 16px;
  font-weight: bold;
  color: #fff;
  text-align: center;
`;

const ButtonIconContainer = styled.View`
  background-color: red;
`;

const LineContainer = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin: 0 16px;
`;

const LineText = styled.Text`
  font-size: 12px;
  text-align: center;
  color: #888888;
  padding: 0 12px;
`;

const SocialButtonContainer = styled.View`
  align-items: center;
  justify-content: center;
  flex-direction: row;

  padding: 40px 0;
`;

const SocialButton = styled.View<{ index: number }>`
  align-items: center;
  justify-content: center;

  width: 66px;
  height: 46px;
  margin: ${({ index }) => (index === 1 ? "0 24px" : "0")};
  border-radius: 6px;
`;

const CreateAccountContainer = styled.View`
  align-items: center;
`;

const CreateAccountText = styled.Text`
  margin-right: 2px;
`;

const CreateAccountTextLink = styled.Text`
  font-weight: bold;
  text-decoration-line: underline;
  padding-left: 2px;
  color: #345134;
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
  CreateAccountContainer,
  CreateAccountText,
  CreateAccountTextLink,
};
