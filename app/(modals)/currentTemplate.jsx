import { FontAwesome6, MaterialIcons } from "@expo/vector-icons";
import PrimaryButton from "components/Buttons/PrimaryButton";
import Exercise from "components/Exercises/Exercise";
import RestTimerModal from "components/PopUpModals/RestTimerModal";
import { useTimerContext } from "context/TimerProvider";
import { useWorkoutContext } from "context/WorkoutProvider";
import { router } from "expo-router";
import { secondsToHourMinuteSecond } from "lib/helper";
import React, { useRef, useState } from "react";
import { Text, View } from "react-native";
import {
  ScrollView,
  TouchableWithoutFeedback,
} from "react-native-gesture-handler";
import { Divider } from "react-native-paper";

import { SafeAreaView } from "react-native-safe-area-context";

const TimerDisplay = () => {
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

const currentTemplate = () => {
  const {
    state: { title, currentWorkout },
  } = useWorkoutContext();
  const scrollRef = useRef();

  const [RestTimerModalVisible, setRestTimerModalVisible] = useState(false);

  return (
    <SafeAreaView className="h-full bg-primary">
      <View>
        <View className="flex-row items-center justify-between px-6">
          <View
            className="flex-row items-center justify-between"
            style={{ gap: 10 }}
          >
            <TimerDisplay />
            <PrimaryButton
              title={<MaterialIcons name="alarm" size={20} color="white" />}
              containerStyles={"px-2"}
              handlePress={() => setRestTimerModalVisible(true)}
            />
          </View>

          <PrimaryButton title="Finish" containerStyles={"px-4"} />
        </View>
      </View>
      <Divider className="mt-4" />
      <View className="px-4">
        <ScrollView
          showsVerticalScrollIndicator={false}
          ref={scrollRef}
          className="my-2 h-[80%]"
        >
          <View className="mb-2 flex self-center">
            <Text className="text-2xl font-bold text-white">{title}</Text>
          </View>
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

      <RestTimerModal
        visible={RestTimerModalVisible}
        setVisible={setRestTimerModalVisible}
      />
    </SafeAreaView>
  );
};

export default currentTemplate;
