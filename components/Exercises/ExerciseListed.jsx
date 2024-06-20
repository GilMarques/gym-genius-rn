import { Ionicons } from "@expo/vector-icons";
import exercises from "constants/exercises";
import React from "react";
import { Image, Text, TouchableNativeFeedback, View } from "react-native";
import { TouchableWithoutFeedback } from "react-native-gesture-handler";
const ExerciseListed = ({ name, path, tags, checkedIndex, color, onPress }) => {
  return (
    <TouchableNativeFeedback onPress={onPress}>
      <View className="w-full self-center px-2">
        <View className="flex-row items-center justify-between p-2">
          <View className="flex-row items-center gap-2">
            <View className="h-14 w-14 items-center justify-center">
              {path ? (
                <Image source={exercises[path]} className="h-full w-full" />
              ) : (
                <View
                  className={
                    "h-full w-full items-center justify-center rounded-md"
                  }
                  style={{ backgroundColor: color }}
                >
                  <Text className="text-lg font-bold">
                    {name
                      .split(" ")
                      .map((n) => n[0])
                      .join("")
                      .substring(0, 2)}
                  </Text>
                </View>
              )}
            </View>
            <View className=" ">
              <Text className="font-bold text-white" style={{ fontSize: 16 }}>
                {name}
              </Text>
              <Text className="text-white" style={{ fontSize: 12 }}>
                {tags?.join(", ")}
              </Text>
            </View>
          </View>

          <View className="flex-row items-center gap-2">
            {checkedIndex !== -1 && (
              <View className="h-5 w-5 flex-row items-center justify-center rounded-full bg-secondary p-2">
                <Text className="absolute text-center text-xs">
                  {checkedIndex + 1}
                </Text>
              </View>
            )}

            <TouchableWithoutFeedback>
              <Ionicons
                name="information-circle-outline"
                size={24}
                color="white"
              />
            </TouchableWithoutFeedback>
          </View>
        </View>
      </View>
    </TouchableNativeFeedback>
  );
};

export default ExerciseListed;
