import { FontAwesome6 } from "@expo/vector-icons";
import { useTimerContext } from "context/TimerProvider";
import { secondsToHourMinuteSecond, secondsToms } from "lib/helper";
import { Text, View } from "react-native";
import RestTimerProgressBar from "./RestTimerProgressBar";
export default TimerDisplay = () => {
  const {
    state: { state, workoutTimer, restTimer },
  } = useTimerContext();

  return (
    <View className="w-18 rounded-md bg-[#686868]">
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
