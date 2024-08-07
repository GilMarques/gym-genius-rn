import { Ionicons } from "@expo/vector-icons";
import exercises from "constants/exercises";
import { router } from "expo-router";
import { getTailwindConfig } from "lib/helper";
import React from "react";
import { Image, Text, TouchableWithoutFeedback, View } from "react-native";

const Thumbnail = ({ path, name, color }) => {
  return (
    <View className="h-14 w-14 items-center justify-center">
      {path ? (
        <Image source={exercises[path]} className="h-full w-full" />
      ) : (
        <View
          className={"h-full w-full items-center justify-center rounded-md"}
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
  );
};

const config = getTailwindConfig();
const ExerciseListedForSwap = ({
  name,
  id,
  path,
  tags,
  checked,
  color,
  onPress,
}) => {
  return (
    <View
      className="my-2 flex flex-row rounded-md"
      style={{
        backgroundColor: checked
          ? config.theme.colors.primary.light
          : "transparent",
      }}
    >
      <TouchableWithoutFeedback onPress={onPress}>
        <View className="w-[90%]">
          <View className="flex-row items-center gap-x-2">
            <Thumbnail path={path} name={name} color={color} />

            <View className="">
              <Text className="font-bold text-white" style={{ fontSize: 16 }}>
                {name}
              </Text>
              <Text className="text-white" style={{ fontSize: 12 }}>
                {tags?.join(", ")}
              </Text>
            </View>
          </View>
        </View>
      </TouchableWithoutFeedback>

      <TouchableWithoutFeedback
        onPress={() => {
          router.navigate("/(modals)/search/" + id);
        }}
      >
        <View className="w-[10%] flex-row items-center justify-end">
          <Ionicons name="information-circle-outline" size={24} color="white" />
        </View>
      </TouchableWithoutFeedback>
    </View>
  );
};

export default ExerciseListedForSwap;
