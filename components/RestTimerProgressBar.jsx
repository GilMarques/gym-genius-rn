import { getTailwindConfig } from "lib/helper";
import React, { useEffect } from "react";
import Animated, {
  Easing,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from "react-native-reanimated";

const RestTimerProgressBar = ({ height }) => {
  const {
    state: { restTimer },
  } = useTimerContext();
  const animatedValue = useSharedValue(100);
  const conf = getTailwindConfig();
  const rStyle = useAnimatedStyle(() => {
    return {
      width: animatedValue.value + "%",
    };
  });

  useEffect(() => {
    console.log(restTimer);
    animatedValue.value = 100;
    animatedValue.value = withTiming(0, {
      duration: restTimer.duration * 1000,
      easing: Easing.linear,
      useNativeDriver: true,
    });
  }, [restTimer.start]);

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
