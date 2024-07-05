import { FontAwesome6 } from "@expo/vector-icons";
import { secondsToHourMinuteSecond } from "lib/helper";
import { Text, View } from "react-native";
import { useRestTimerStore } from "stores/restTimerStore";
import { useStore } from "stores/timerStore";
export default TimerDisplay = () => {
  const workoutTimer = useStore((state) => state.time);
  const active = useStore((state) => state.active);
  const restTimerRef = useRestTimerStore((state) => state.intervalRef);
  const currentRestTime = useRestTimerStore((state) => state.current);

  return (
    <View className="w-18 rounded-md bg-gray-500">
      {/* {restTimerRef != null && <RestTimerProgressBar />} */}
      <View
        className="flex-row items-center justify-between p-2"
        style={{ gap: 10 }}
      >
        {/* {restTimerRef !== null && (
          <>
            <FontAwesome6 name="stopwatch" size={15} color="white" />
            <Text className="font-bold text-white">
              {secondsToms(currentRestTime)}
            </Text>
          </>
        )} */}

        {active === true && (
          <>
            <FontAwesome6 name="play" size={15} color="white" />
            <Text className="font-bold text-white">
              {secondsToHourMinuteSecond(workoutTimer)}
            </Text>
          </>
        )}

        {active === false && (
          <>
            <FontAwesome6 name="pause" size={15} color="white" />
            <Text className="font-bold text-white">
              {secondsToHourMinuteSecond(workoutTimer)}
            </Text>
          </>
        )}
      </View>
    </View>
  );
};
