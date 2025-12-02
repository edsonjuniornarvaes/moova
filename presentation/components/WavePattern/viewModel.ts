import { useWindowDimensions } from "react-native";

interface WavePatternProps {
  opacity?: number;
}

export function useWavePatternViewModel({ opacity = 0.12 }: WavePatternProps) {
  const { width, height } = useWindowDimensions();
  const waveHeight = height * 0.6;

  const createWaveLine = (
    y: number,
    amplitude: number,
    frequency: number,
    phase: number = 0
  ) => {
    const segments = 150;
    const step = width / segments;
    let path = `M 0 ${y}`;

    for (let i = 0; i <= segments; i++) {
      const x = i * step;
      const waveY =
        y + amplitude * Math.sin((x / width) * Math.PI * 2 * frequency + phase);
      path += ` L ${x} ${waveY}`;
    }

    return path;
  };

  const waveLines = [
    { y: waveHeight * 0.25, amplitude: 2.5, frequency: 2, phase: 0, opacity: opacity * 0.9, strokeWidth: 1 },
    { y: waveHeight * 0.3, amplitude: 3, frequency: 2.2, phase: Math.PI / 4, opacity: opacity * 0.8, strokeWidth: 1 },
    { y: waveHeight * 0.35, amplitude: 2, frequency: 2.5, phase: Math.PI / 2, opacity: opacity * 0.7, strokeWidth: 0.8 },
    { y: waveHeight * 0.4, amplitude: 3.5, frequency: 1.8, phase: Math.PI, opacity: opacity * 0.6, strokeWidth: 0.8 },
    { y: waveHeight * 0.45, amplitude: 2.5, frequency: 2.3, phase: (Math.PI * 3) / 4, opacity: opacity * 0.5, strokeWidth: 0.8 },
    { y: waveHeight * 0.5, amplitude: 3, frequency: 2, phase: Math.PI / 3, opacity: opacity * 0.4, strokeWidth: 0.7 },
    { y: waveHeight * 0.55, amplitude: 2, frequency: 2.8, phase: (Math.PI * 2) / 3, opacity: opacity * 0.35, strokeWidth: 0.7 },
    { y: waveHeight * 0.6, amplitude: 3, frequency: 1.5, phase: Math.PI / 6, opacity: opacity * 0.3, strokeWidth: 0.6 },
    { y: waveHeight * 0.65, amplitude: 2.5, frequency: 2.2, phase: Math.PI / 5, opacity: opacity * 0.25, strokeWidth: 0.6 },
  ];

  return {
    width,
    waveHeight,
    createWaveLine,
    waveLines,
  };
}

