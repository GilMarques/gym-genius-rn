import Exercise from "components/Exercises/Exercise";
import CurrentTemplateHeader from "components/Headers/CurrentTemplateHeader";
import { router } from "expo-router";
import React, { useRef } from "react";
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

  return (
    <SafeAreaView className="h-full bg-background">
      <CurrentTemplateHeader />
      <View className="mt-4 px-4">
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
              ADD EXERCISES
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
    </SafeAreaView>
  );
};

export default currentTemplate;
