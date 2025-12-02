import * as React from "react";
import Svg, { SvgProps, Text } from "react-native-svg";

const JuntosMovimentoIcon = ({ ...props }: SvgProps) => {
  return (
    <Svg width={200} height={20} viewBox="0 0 200 20" fill="none" {...props}>
      <Text
        x="100"
        y="15"
        fontSize="16"
        fontWeight="400"
        fill="#FFFFFF"
        textAnchor="middle"
        fontFamily="Orbitron-Regular"
      >
        Juntos, em movimento
      </Text>
    </Svg>
  );
};

export default JuntosMovimentoIcon;
