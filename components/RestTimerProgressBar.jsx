import { useTimerContext } from "context/TimerProvider";
import { getTailwindConfig } from "lib/helper";
import React, { useEffect } from "react";
import Animated, {
  Easing,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from "react-native-reanimated";

const config = getTailwindConfig();

const RestTimerProgressBar = () => {
  const {
    state: { restTimer },
  } = useTimerContext();
  const animatedValue = useSharedValue(0);

  const rStyle = useAnimatedStyle(() => {
    return {
      right: animatedValue.value + "%",
    };
  });

  useEffect(() => {
    console.log(restTimer);
    animatedValue.value = 0;
    animatedValue.value = withTiming(100, {
      duration: restTimer.duration * 1000,
      easing: Easing.linear,
      useNativeDriver: true,
    });
  }, [restTimer.start]);

  return (
    <Animated.View
      className="absolute bottom-0 left-0 right-0 top-0 rounded-md"
      style={[
        {
          backgroundColor: config.theme.colors.tertiary,
        },
        rStyle,
      ]}
    ></Animated.View>
  );
};

export default RestTimerProgressBar;
