import { FontAwesome6 } from "@expo/vector-icons";
import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import CustomButton from "./CustomButton";

const DiscardWorkoutModal = () => {
  return (
    <View className="rounded-md bg-[#141414] p-4">
      <Text className="text-center text-2xl font-bold text-white">
        Discard Workout
      </Text>
      <Text className="my-4 text-white">
        Are you sure you want to discard this workout? Progress in this session
        will be lost.
      </Text>
      <View className="flex-row justify-around">
        <CustomButton
          title="Resume"
          containerStyles={"border-2 border-white px-4"}
          color={"transparent"}
          textStyles={"text-white"}
        />
        <CustomButton title="Discard" containerStyles={"px-4"} />
      </View>

      <TouchableOpacity className="absolute right-4 top-4">
        <FontAwesome6 name="x" size={15} color="white" />
      </TouchableOpacity>
    </View>
  );
};

export default DiscardWorkoutModal;
