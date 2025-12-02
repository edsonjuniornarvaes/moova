import React from "react";
import { View } from "react-native";
import Svg, { Path } from "react-native-svg";
import { useWavePatternViewModel } from "./viewModel";
import { styles } from "./styles";

interface WavePatternProps {
  opacity?: number;
}

export default function WavePattern({ opacity = 0.12 }: WavePatternProps) {
  const { width, waveHeight, createWaveLine, waveLines } = useWavePatternViewModel({ opacity });

  return (
    <View style={[styles.container, { height: waveHeight }]} pointerEvents="none">
      <Svg
        width={width}
        height={waveHeight}
        viewBox={`0 0 ${width} ${waveHeight}`}
        preserveAspectRatio="none"
      >
        {waveLines.map((line, index) => (
          <Path
            key={index}
            d={createWaveLine(line.y, line.amplitude, line.frequency, line.phase)}
            stroke="white"
            strokeWidth={line.strokeWidth}
            fill="none"
            opacity={line.opacity}
          />
        ))}
      </Svg>
    </View>
  );
}

