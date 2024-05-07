import { FontAwesome6 } from "@expo/vector-icons";
import React, { useEffect, useState } from "react";
import { Text, View } from "react-native";
import { TouchableWithoutFeedback } from "react-native-gesture-handler";
import CustomButton from "./CustomButton";
function secondsToHourMinuteSecond(seconds) {
  const hours = Math.floor(seconds / 3600);
  const minutes = Math.floor((seconds % 3600) / 60);
  const remainingSeconds = seconds % 60;

  const formattedHours = hours.toString();
  const formattedMinutes = minutes.toString().padStart(2, "0");
  const formattedSeconds = remainingSeconds.toString().padStart(2, "0");

  if (hours === 0) return `${formattedMinutes}:${formattedSeconds}`;
  return `${formattedHours}:${formattedMinutes}:${formattedSeconds}`;
}
const WorkoutBottomSheetButton = ({ handlePresentModal }) => {
  const [seconds, setSeconds] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setSeconds((prevSeconds) => prevSeconds + 1);
    }, 1000);

    return () => clearInterval(interval);
  }, []);
  return (
    <TouchableWithoutFeedback
      // router.push("/newTemplate");
      onPress={handlePresentModal}
    >
      <View className="absolute -left-1 bottom-[48px] z-10 w-[102%] rounded-t-xl border-x border-t border-white bg-primary px-4">
        <View className="flex-row items-center justify-between p-4">
          <Text>
            <FontAwesome6 name="x" size={20} color="white" />{" "}
          </Text>
          <CustomButton title={"Resume"} />
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
