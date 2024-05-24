import { Feather, Ionicons } from "@expo/vector-icons";
import { useWorkoutDispatchContext } from "context/WorkoutProvider";
import React, { useState } from "react";
import { Dimensions, StyleSheet, Text, View } from "react-native";

import {
  Gesture,
  GestureDetector,
  TextInput,
  TouchableOpacity,
} from "react-native-gesture-handler";
import Animated, {
  runOnJS,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from "react-native-reanimated";
import resolveConfig from "tailwindcss/resolveConfig";

import tailwindConfig from "../../tailwind.config";
const fullConfig = resolveConfig(tailwindConfig);

const { width: SCREEN_WIDTH } = Dimensions.get("window");
const TRANSLATE_X_THRESHOLD = SCREEN_WIDTH * 0.15;

const LIST_ITEM_HEIGHT = 30;

const Set = ({ id, weight, reps, setIndex, scrollRef, exerciseId }) => {
  const translateX = useSharedValue(0);
  const itemHeight = useSharedValue(LIST_ITEM_HEIGHT);
  const marginTop = useSharedValue(10);
  const opacity = useSharedValue(1);

  const [checked, setChecked] = useState(false);
  const { removeSet, updateSet } = useWorkoutDispatchContext();

  const panGesture = Gesture.Pan()
    .onUpdate((event) => {
      translateX.value = Math.min(0, event.translationX);
    })
    .onEnd((event) => {
      if (translateX.value < -TRANSLATE_X_THRESHOLD) {
        itemHeight.value = withTiming(0);
        marginTop.value = withTiming(0);
        opacity.value = withTiming(0);
        translateX.value = withTiming(-SCREEN_WIDTH, undefined, () => {
          runOnJS(removeSet)(exerciseId, id);
        });
      } else {
        translateX.value = withTiming(0);
      }
    })
    .activeOffsetX([-10, 10]);

  const rStyle = useAnimatedStyle(() => {
    return {
      transform: [{ translateX: translateX.value }],
    };
  });

  const rIconContainerStyle = useAnimatedStyle(() => {
    const opacity = withTiming(
      translateX.value < -TRANSLATE_X_THRESHOLD ? 1 : 0
    );
    return {
      opacity: opacity,
    };
  });

  const rContainerStyle = useAnimatedStyle(() => {
    return {
      height: itemHeight.value,
      marginTop: marginTop.value,
      opacity: opacity.value,
    };
  });

  return (
    <Animated.View style={[rContainerStyle]}>
      <Animated.View style={[styles.trashIconContainer, rIconContainerStyle]}>
        <Feather name="trash-2" size={24} color="red" />
      </Animated.View>

      <GestureDetector gesture={panGesture}>
        <Animated.View style={[styles.setContainer, rStyle]}>
          <View className="h-[20px] w-[20%] flex-row self-center">
            <View className="w-fit flex-col items-center">
              <Text className="h-0">Set</Text>
              <Text className="text-white">{setIndex + 1}</Text>
            </View>
          </View>

          <Text style={styles.textElement}>-</Text>

          <View style={styles.fieldElement}>
            <TextInput
              placeholder={reps ? reps : ""}
              placeholderTextColor={"#ffffff"}
              style={[
                styles.textInput,
                checked
                  ? {
                      color: fullConfig.theme.colors.secondary,
                      borderColor: fullConfig.theme.colors.secondary,
                    }
                  : null,
              ]}
            />
          </View>

          <View style={styles.fieldElement}>
            <TextInput
              placeholder={reps ? reps : ""}
              placeholderTextColor={"#ffffff"}
              style={[
                styles.textInput,
                checked
                  ? {
                      color: fullConfig.theme.colors.secondary,
                      borderColor: fullConfig.theme.colors.secondary,
                    }
                  : null,
              ]}
            />
          </View>

          <View className="w-[20%] flex-row justify-end">
            <TouchableOpacity onPress={() => setChecked(!checked)}>
              <Ionicons
                name={checked ? "checkmark-circle" : "checkmark-circle-outline"}
                size={24}
                color={checked ? fullConfig.theme.colors.secondary : "white"}
              />
            </TouchableOpacity>
          </View>
        </Animated.View>
      </GestureDetector>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  trashIconContainer: {
    position: "absolute",

    height: "100%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    right: 5,
  },

  setContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#1a1a1a",
    height: LIST_ITEM_HEIGHT,
  },

  textElement: {
    width: "20%",
    color: "white",
    textAlign: "center",
  },

  fieldElement: {
    width: "20%",
    color: "white",
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },

  textInput: {
    height: 20,
    width: "60%",
    borderRadius: 6,
    textAlign: "center",
    borderWidth: 1,
    borderColor: "white",
  },
});

export default Set;
