import { getTailwindConfig } from "lib/helper";
import React, { useEffect } from "react";
import Animated, {
  Easing,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from "react-native-reanimated";

const RestTimerProgressBar = ({ value, height }) => {
  const animatedValue = useSharedValue(100);
  const conf = getTailwindConfig();
  const rStyle = useAnimatedStyle(() => {
    return {
      width: animatedValue.value + "%",
    };
  });

  useEffect(() => {
    animatedValue.value = withTiming(0, {
      duration: value * 1000,
      easing: Easing.linear,
      useNativeDriver: true,
    });
  }, [value]);

  return (
    <Animated.View
      style={[
        {
          height: height,
          backgroundColor: conf.theme.colors.secondary,
        },
        rStyle,
      ]}
    ></Animated.View>
  );
};

export default RestTimerProgressBar;
