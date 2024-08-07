import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";
import React, { useCallback, useEffect, useRef } from "react";
import { Text, View } from "react-native";
import { TouchableWithoutFeedback } from "react-native-gesture-handler";
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from "react-native-reanimated";
import { useKeypadStore } from "stores/keypadStore";

const KeyPadButton = ({ text, onPress }) => {
  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <View
        className="flex h-12 w-28 items-center justify-center rounded-md bg-background-light"
        style={{
          shadowColor: "#fff",
          shadowOffset: { width: 2, height: 2 },
          shadowOpacity: 1,
          shadowRadius: 0,
          elevation: 1,
        }}
      >
        <Text className="text-xl font-bold text-white">{text}</Text>
      </View>
    </TouchableWithoutFeedback>
  );
};
const CloseButton = ({ onPress }) => {
  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <View className="flex h-12 w-28 items-center justify-center rounded-md bg-background-light">
        <MaterialCommunityIcons name="keyboard-close" size={24} color="white" />
      </View>
    </TouchableWithoutFeedback>
  );
};

const DotButton = ({ onPress }) => {
  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <View className="w-28 flex-row justify-center">
        <Text className="text-3xl text-white">.</Text>
      </View>
    </TouchableWithoutFeedback>
  );
};

const TextButton = ({ text, visible = true }) => {
  return (
    <TouchableWithoutFeedback disabled={!visible}>
      <View
        className="flex h-12 w-28 items-center justify-center rounded-md bg-background-light"
        style={{ opacity: visible ? 1 : 0 }}
      >
        <Text className="font-bold text-white">{text}</Text>
      </View>
    </TouchableWithoutFeedback>
  );
};

const BackspaceButton = ({ onPress }) => {
  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <View className="flex h-12 w-28 items-center justify-center">
        <Ionicons name="backspace" size={24} color="white" />
      </View>
    </TouchableWithoutFeedback>
  );
};

const CustomKeyPad = () => {
  const keypadVisible = useKeypadStore((state) => state.visible);
  const dispatch = useKeypadStore((state) => state.dispatch);
  const closeKeypad = useKeypadStore((state) => state.close);

  const ref = useRef(null);

  const backspaceBehavior = useCallback(() => {
    if (dispatch) {
      dispatch({ type: "BACKSPACE" });
    }
  }, [dispatch]);

  const pressBehavior = useCallback(
    (text) => {
      if (dispatch) {
        dispatch({ type: "PRESS", text: text });
      }
    },
    [dispatch]
  );

  const dotBehavior = useCallback(() => {
    if (dispatch) {
      dispatch({ type: "DOT" });
    }
  }, [dispatch]);

  const animatedValue = useSharedValue(-100);

  const rStyle = useAnimatedStyle(() => {
    return {
      bottom: animatedValue.value + "%",
    };
  });

  const closeBehavior = () => {
    animatedValue.value = withTiming(-100, {
      duration: 500,
      useNativeDriver: true,
    });
  };

  const openBehavior = () => {
    animatedValue.value = withTiming(0, {
      duration: 500,
      useNativeDriver: true,
    });
  };

  useEffect(() => {
    if (keypadVisible) {
      openBehavior();
    } else {
      closeBehavior();
    }
  }, [keypadVisible]);

  return (
    <Animated.View className="absolute w-full" ref={ref} style={rStyle}>
      <View className="my-2 flex-row justify-around">
        <CloseButton onPress={() => closeKeypad()} />
        <TextButton text={"RPE"} visible={false} />
        <TextButton text={"Next"} />
      </View>
      <View className="border-t border-background-dark bg-background">
        <View className="mt-2 flex-row justify-around">
          <KeyPadButton text="1" onPress={() => pressBehavior("1")} />
          <KeyPadButton
            text="2"
            onPress={() => {
              pressBehavior("2");
            }}
          />
          <KeyPadButton text="3" onPress={() => pressBehavior("3")} />
        </View>
        <View className="mt-2 flex-row justify-around">
          <KeyPadButton text="4" onPress={() => pressBehavior("4")} />
          <KeyPadButton text="5" onPress={() => pressBehavior("5")} />
          <KeyPadButton text="6" onPress={() => pressBehavior("6")} />
        </View>
        <View className="mt-2 flex-row justify-around">
          <KeyPadButton text="7" onPress={() => pressBehavior("7")} />
          <KeyPadButton text="8" onPress={() => pressBehavior("8")} />
          <KeyPadButton text="9" onPress={() => pressBehavior("9")} />
        </View>

        <View className="mt-2 flex-row justify-around">
          <DotButton onPress={() => dotBehavior()} />
          <KeyPadButton text="0" onPress={() => pressBehavior("0")} />
          <BackspaceButton onPress={() => backspaceBehavior()} />
        </View>
      </View>
    </Animated.View>
  );
};

export default CustomKeyPad;
