import { FontAwesome6 } from "@expo/vector-icons";
import React from "react";
import { Text, View } from "react-native";
import { TouchableWithoutFeedback } from "react-native-gesture-handler";
import { useGlobalContext } from "../context/GlobalProvider";
import { secondsToHourMinuteSecond } from "../lib/helper";

const WorkoutBottomSheetButton = ({ handlePresentModal }) => {
  const { seconds } = useGlobalContext();
  return (
    <TouchableWithoutFeedback onPress={handlePresentModal}>
      <View className="absolute bottom-[48px] z-10 flex w-[101%] self-center rounded-t-xl border-x border-t border-[#444444] bg-primary px-4 pb-2">
        <View className="flex-row items-center justify-between p-4">
          <Text>
            <FontAwesome6 name="x" size={20} color="white" />
          </Text>
          <Text className="text-center text-white">
            {secondsToHourMinuteSecond(seconds)}
          </Text>
        </View>

        <View className="absolute flex w-full self-center">
          <Text className="text-center text-xl font-bold text-white">
            Custom Program
          </Text>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default WorkoutBottomSheetButton;
