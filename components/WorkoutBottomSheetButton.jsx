import { FontAwesome6 } from "@expo/vector-icons";
import { router } from "expo-router";
import React from "react";
import { Text, View } from "react-native";
import { TouchableWithoutFeedback } from "react-native-gesture-handler";
import { useGlobalContext } from "../context/GlobalProvider";
import { secondsToHourMinuteSecond } from "../lib/helper";
import PrimaryButton from "./Buttons/PrimaryButton";

const WorkoutBottomSheetButton = ({ handlePresentModal }) => {
  const { seconds } = useGlobalContext();
  return (
    <TouchableWithoutFeedback
      onPress={() => router.push("/(modals)/exerciseList")}
    >
      <View className="absolute -left-1 bottom-[48px] z-10 w-[102%] rounded-t-xl border-x border-t border-[#1a1a1a025] bg-primary px-4">
        <View className="flex-row items-center justify-between p-4">
          <Text>
            <FontAwesome6 name="x" size={20} color="white" />{" "}
          </Text>
          <PrimaryButton title={"Resume"} />
        </View>

        <View className="absolute flex h-full w-full items-center justify-center">
          <Text className="text-center text-xl font-bold text-white">
            Title
          </Text>
          <Text className="text-center text-white">
            {secondsToHourMinuteSecond(seconds)}
          </Text>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default WorkoutBottomSheetButton;
