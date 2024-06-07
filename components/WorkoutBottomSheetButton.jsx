import { Feather } from "@expo/vector-icons";
import { useWorkoutContext } from "context/WorkoutProvider";
import React from "react";
import { Text, View } from "react-native";
import { TouchableWithoutFeedback } from "react-native-gesture-handler";
import { secondsToHourMinuteSecond } from "../lib/helper";

const WorkoutBottomSheetButton = ({ handlePresentModal }) => {
  const { workoutTimer: seconds } = useWorkoutContext();
  return (
    <TouchableWithoutFeedback onPress={handlePresentModal}>
      <View className="absolute bottom-[48px] z-10 flex w-[101%] rounded-t-xl border-x border-t border-[#444444] bg-primary">
        <View className="h-[50px] w-full flex-row items-center justify-between px-8">
          <Text>
            <Feather name="x" size={25} color="white" />
          </Text>
          <Text className="text-center text-white">
            {secondsToHourMinuteSecond(seconds)}
          </Text>
        </View>

        <View className="absolute h-full w-full items-center justify-center">
          <Text className="text-center text-xl font-bold text-white">
            Custom Program
          </Text>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default WorkoutBottomSheetButton;
