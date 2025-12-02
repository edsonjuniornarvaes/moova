import type { PropsWithChildren, ReactElement } from "react";
import Animated from "react-native-reanimated";
import { ThemedView } from "@/presentation/components/ThemedView";
import { useParallaxScrollViewModel } from "./viewModel";
import { styles } from "./styles";

type Props = PropsWithChildren<{
  headerImage: ReactElement;
  headerBackgroundColor: { dark: string; light: string };
}>;

export default function ParallaxScrollView({
  children,
  headerImage,
  headerBackgroundColor,
}: Props) {
  const { colorScheme, scrollRef, headerAnimatedStyle, HEADER_HEIGHT } =
    useParallaxScrollViewModel();

  return (
    <ThemedView style={styles.container}>
      <Animated.ScrollView ref={scrollRef} scrollEventThrottle={16}>
        <Animated.View
          style={[
            { height: HEADER_HEIGHT },
            { backgroundColor: headerBackgroundColor[colorScheme] },
            headerAnimatedStyle,
          ]}
        >
          {headerImage}
        </Animated.View>
        <ThemedView style={styles.content}>{children}</ThemedView>
      </Animated.ScrollView>
    </ThemedView>
  );
}

