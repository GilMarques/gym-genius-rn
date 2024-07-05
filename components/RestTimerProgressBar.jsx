import { getTailwindConfig } from "lib/helper";
import React, { useEffect } from "react";
import Animated, {
  Easing,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from "react-native-reanimated";
import { useRestTimerStore } from "stores/restTimerStore";

const config = getTailwindConfig();

const RestTimerProgressBar = () => {
  const animatedValue = useSharedValue(0);

  const date = useRestTimerStore((state) => state.startDate);
  const current = useRestTimerStore((state) => state.current);
  const duration = useRestTimerStore((state) => state.duration);
  const rStyle = useAnimatedStyle(() => {
    return {
      right: animatedValue.value + "%",
    };
  });

  useEffect(() => {
    console.log(current);
    animatedValue.value = (1 - current / duration) * 100;
    animatedValue.value = withTiming(100, {
      duration: current * 1000,
      easing: Easing.linear,
      useNativeDriver: true,
    });
  }, [duration, date]);

  return (
    <Animated.View
      className="absolute bottom-0 left-0 right-0 top-0 rounded-md"
      style={[
        {
          backgroundColor: config.theme.colors.primary.dark,
        },
        rStyle,
      ]}
    ></Animated.View>
  );
};

export default RestTimerProgressBar;
