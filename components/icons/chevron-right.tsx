import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";

const ChevronRightIcon = (props: SvgProps) => {
  return (
    <Svg width={6} height={10} fill="none" {...props}>
      <Path
        stroke="#fff"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="m1 1 4 4-4 4"
      />
    </Svg>
  );
};

export default ChevronRightIcon;
