import {
  BackgroundColorProps,
  createBox,
  createRestyleComponent,
  createVariant,
  spacing,
  SpacingProps,
  VariantProps,
} from "@shopify/restyle";
import { Theme } from "@/utils/theme";
import { Animated, View } from "react-native";
import { useRef, useEffect } from "react";

const Box = createBox<Theme>();

const ShimmerAnimation = () => {
  const shimmerTranslate = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.loop(
      Animated.timing(shimmerTranslate, {
        toValue: 1,
        duration: 1500,
        useNativeDriver: true,
      })
    ).start();
  }, [shimmerTranslate]);

  const translateX = shimmerTranslate.interpolate({
    inputRange: [0, 1],
    outputRange: [-300, 300],
  });

  return (
    <Animated.View
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        bottom: 0,
        width: 100,
        backgroundColor: "rgba(255,255,255,0.2)",
        transform: [{ translateX }],
      }}
    />
  );
};

type Props = SpacingProps<Theme> &
  VariantProps<Theme, "cardVariants"> &
  BackgroundColorProps<Theme> &
  React.ComponentProps<typeof View>;

const CardSkeleton = createRestyleComponent<Props, Theme>([
  spacing,
  createVariant({ themeKey: "cardVariants" }),
]);

const SkeletonLoader = () => {
  return (
    <CardSkeleton variant="elevated">
      <Box
        backgroundColor="cardPrimaryBackground"
        height={20}
        marginBottom="s"
        width="70%"
        overflow="hidden"
        borderRadius={"m"}
      >
        <ShimmerAnimation />
      </Box>

      <Box
        backgroundColor="cardPrimaryBackground"
        height={100}
        marginBottom="s"
        width="90%"
        overflow="hidden"
        borderRadius={"m"}
      >
        <ShimmerAnimation />
      </Box>
      <Box
        backgroundColor="cardPrimaryBackground"
        height={50}
        marginBottom="s"
        width="70%"
        overflow="hidden"
        borderRadius={"m"}
      >
        <ShimmerAnimation />
      </Box>
    </CardSkeleton>
  );
};

export default SkeletonLoader;
