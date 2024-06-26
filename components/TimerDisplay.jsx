import { FontAwesome6 } from "@expo/vector-icons";
import { useTimerContext } from "context/TimerProvider";
import { secondsToHourMinuteSecond } from "lib/helper";
import { useState } from "react";
import { Text, View } from "react-native";

export default TimerDisplay = () => {
  const [state, setState] = useState("play");
  const {
    state: { workoutTimer },
  } = useTimerContext();
  return (
    <View className="flex-row items-center">
      <View
        className="flex-row items-center justify-between rounded-md bg-slate-200 p-2"
        style={{ gap: 10 }}
      >
        {state === "play" && (
          <>
            <FontAwesome6 name="play" size={15} color="black" />
            <Text className="font-bold">
              {secondsToHourMinuteSecond(workoutTimer)}
            </Text>
          </>
        )}

        {state === "pause" && (
          <>
            <FontAwesome6 name="play" size={15} color="black" />
            <Text className="font-bold">
              {secondsToHourMinuteSecond(workoutTimer)}
            </Text>
          </>
        )}
      </View>
    </View>
  );
};
