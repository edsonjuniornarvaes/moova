import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";

const FacebookIcon = (props: SvgProps) => {
  return (
    <Svg width={22} height={22} fill="none" {...props}>
      <Path
        fill="#376AED"
        d="M22 11.067C22 4.953 17.077 0 11 0S0 4.953 0 11.067C0 16.59 4.023 21.169 9.281 22v-7.734H6.487v-3.2H9.28V8.63c0-2.774 1.641-4.306 4.155-4.306 1.204 0 2.463.216 2.463.216v2.722H14.51c-1.366 0-1.792.854-1.792 1.729v2.077h3.05l-.487 3.2h-2.563V22C17.977 21.17 22 16.59 22 11.067Z"
      />
    </Svg>
  );
};

export default FacebookIcon;
