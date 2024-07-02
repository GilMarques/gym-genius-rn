import { FontAwesome6 } from "@expo/vector-icons";
import { secondsToHourMinuteSecond, secondsToms } from "lib/helper";
import { Text, View } from "react-native";
import { useStore } from "state/timerState";
import RestTimerProgressBar from "./RestTimerProgressBar";
export default TimerDisplay = () => {
  const workoutTimer = useStore((state) => state.time);
  const state = "play";
  return (
    <View className="w-18 rounded-md bg-gray-500">
      {state === "rest" && <RestTimerProgressBar />}
      <View
        className="flex-row items-center justify-between p-2"
        style={{ gap: 10 }}
      >
        {state === "play" && (
          <>
            <FontAwesome6 name="play" size={15} color="white" />
            <Text className="font-bold text-white">
              {secondsToHourMinuteSecond(workoutTimer)}
            </Text>
          </>
        )}

        {state === "pause" && (
          <>
            <FontAwesome6 name="pause" size={15} color="white" />
            <Text className="font-bold text-white">
              {secondsToHourMinuteSecond(workoutTimer)}
            </Text>
          </>
        )}

        {state === "rest" && (
          <>
            <FontAwesome6 name="stopwatch" size={15} color="white" />
            <Text className="font-bold text-white">
              {secondsToms(restTimer.current)}
            </Text>
          </>
        )}
      </View>
    </View>
  );
};
