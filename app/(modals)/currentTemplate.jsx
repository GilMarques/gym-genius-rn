import { FontAwesome6, MaterialIcons } from "@expo/vector-icons";
import PrimaryButton from "components/Buttons/PrimaryButton";
import Exercise from "components/Exercises/Exercise";
import { TimerProvider, useTimerContext } from "context/TimerProvider";
import {
  useWorkoutContext,
  useWorkoutDispatchContext,
} from "context/WorkoutProvider";
import { router } from "expo-router";
import { secondsToHourMinuteSecond } from "lib/helper";
import React, { useRef, useState } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import {
  ScrollView,
  TouchableWithoutFeedback,
} from "react-native-gesture-handler";

import { SafeAreaView } from "react-native-safe-area-context";

const TimerDisplay = ({ seconds }) => {
  const [state, setState] = useState("play");
  const { workoutTimer } = useTimerContext();
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
              {secondsToHourMinuteSecond(seconds)}
            </Text>
          </>
        )}
      </View>
    </View>
  );
};

const currentTemplate = () => {
  const {
    title,
    currentWorkout,
    workoutTimer: seconds,
    restTimer,
  } = useWorkoutContext();
  const scrollRef = useRef();
  const dispatch = useWorkoutDispatchContext();

  return (
    <SafeAreaView className="h-full bg-primary">
      <View>
        <View className="flex-row items-center justify-between px-6">
          <TimerProvider>
            <TimerDisplay seconds={seconds} />
          </TimerProvider>
          <PrimaryButton title="Finish" containerStyles={"px-4"} />
        </View>
        <View className="absolute flex self-center">
          <Text className="text-xl text-white">{title}</Text>
        </View>
      </View>
      <View className="px-4">
        <ScrollView
          showsVerticalScrollIndicator={false}
          ref={scrollRef}
          className="my-2 h-[80%]"
        >
          {currentWorkout.exercises.map((exercise, exerciseIndex) => (
            <Exercise
              key={exercise.id}
              exerciseIndex={exerciseIndex}
              scrollRef={scrollRef}
              {...exercise}
            />
          ))}

          <TouchableWithoutFeedback
            onPress={() => router.navigate("/(modals)/exerciseList")}
          >
            <Text className="text-center font-bold text-white">
              ADD EXERCISE
            </Text>
          </TouchableWithoutFeedback>
        </ScrollView>
      </View>

      <View className="border-t border-white">
        <TouchableOpacity>
          <View className="mt-2 w-1/3 flex-row items-center justify-between self-end rounded-md border border-white px-4 py-2">
            <MaterialIcons name="alarm" size={20} color="white" />
            <Text className="text-white">Rest Timer</Text>
          </View>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default currentTemplate;
