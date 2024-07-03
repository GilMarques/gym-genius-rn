import Exercise from "components/Exercises/Exercise";
import FinishWorkoutModal from "components/PopUpModals/FinishWorkoutModal";
import RestTimerModal from "components/PopUpModals/RestTimerModal";
import { router } from "expo-router";
import React, { useRef, useState } from "react";
import { Text, View } from "react-native";
import {
  ScrollView,
  TouchableWithoutFeedback,
} from "react-native-gesture-handler";

import { SafeAreaView } from "react-native-safe-area-context";
import { useWorkoutStore } from "stores/workoutStore";

const currentTemplate = () => {
  const title = useWorkoutStore((state) => state.title);
  const exercises = useWorkoutStore((state) => state.exercises);
  const scrollRef = useRef();

  const [restTimerModalVisible, setRestTimerModalVisible] = useState(false);
  const [finishWorkoutModalVisible, setFinishWorkoutModalVisible] =
    useState(false);

  return (
    <SafeAreaView className="h-full bg-background">
      <View className="px-4">
        <ScrollView showsVerticalScrollIndicator={false} ref={scrollRef}>
          <View className="mb-2 flex self-center">
            <Text className="text-2xl font-bold text-white">{title}</Text>
          </View>
          {exercises.map((exercise, exerciseIndex) => (
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
            <Text className="mt-2 text-center text-lg font-bold text-white">
              ADD EXERCISE
            </Text>
          </TouchableWithoutFeedback>

          <TouchableWithoutFeedback onPress={() => {}}>
            <Text
              className="mt-2 text-center text-lg font-bold"
              style={{
                color: "crimson",
              }}
            >
              CANCEL WORKOUT
            </Text>
          </TouchableWithoutFeedback>
        </ScrollView>
      </View>

      <RestTimerModal
        visible={restTimerModalVisible}
        onSubmit={(value) => {
          setRestTimerModalVisible(false);
          startRestTimer(value);
        }}
      />

      <FinishWorkoutModal
        visible={finishWorkoutModalVisible}
        onSubmit={() => setFinishWorkoutModalVisible(false)}
        onCancel={() => setFinishWorkoutModalVisible(false)}
      />
    </SafeAreaView>
  );
};

export default currentTemplate;
