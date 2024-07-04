import PrimaryButton from "components/Buttons/PrimaryButton";
import Exercise from "components/Exercises/Exercise";
import CurrentTemplateHeader from "components/Headers/CurrentTemplateHeader";
import FinishWorkoutModal from "components/PopUpModals/FinishWorkoutModal";
import NoteModal from "components/PopUpModals/NoteModal";
import RestTimerModal from "components/PopUpModals/RestTimerModal";
import {
  useModalStore,
  VisibleModals,
} from "components/PopUpModals/stores/ModalStore";
import { router } from "expo-router";
import React, { useRef } from "react";
import { useForm } from "react-hook-form";
import { Text, TouchableWithoutFeedback, View } from "react-native";
import { ScrollView } from "react-native-gesture-handler";

import { SafeAreaView } from "react-native-safe-area-context";
import { useKeypadStore } from "stores/keypadStore";
import { useWorkoutStore } from "stores/workoutStore";

const currentTemplate = () => {
  const modalVisible = useModalStore((state) => state.visible);
  const setVisible = useModalStore((state) => state.setVisible);

  const title = useWorkoutStore((state) => state.title);
  const exercises = useWorkoutStore((state) => state.exercises);
  const scrollRef = useRef();

  const { control, handleSubmit } = useForm();
  const closeKeypad = useKeypadStore((state) => state.close);

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <SafeAreaView className="h-full bg-background">
      <TouchableWithoutFeedback onPress={() => closeKeypad()}>
        <View>
          <CurrentTemplateHeader handleSubmit={handleSubmit} />

          <PrimaryButton
            title={"Temporary Submit"}
            handlePress={() => {
              handleSubmit(onSubmit)();
            }}
          />
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
                  control={control}
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
        </View>
      </TouchableWithoutFeedback>
      <RestTimerModal
        // visible={restTimerModalVisible}
        visible={modalVisible == VisibleModals.StartRestTimer}
        buttonTitle={"Start"}
        onSubmit={(value) => {
          // startRestTimer(value);
          setVisible(VisibleModals.None);
        }}
        onClose={() => setVisible(VisibleModals.None)}
      />

      <RestTimerModal
        visible={modalVisible == VisibleModals.SetRestTimer}
        onSubmit={(value) => {
          // setAutoRestTimer(value);
          setVisible(VisibleModals.None);
        }}
        onClose={() => setVisible(VisibleModals.None)}
      />

      <NoteModal
        visible={modalVisible == VisibleModals.AddExerciseNote}
        onSubmit={(value) => {
          setExerciseNote(value);
          setVisible(VisibleModals.None);
        }}
        onClose={() => setVisible(VisibleModals.None)}
      />

      <FinishWorkoutModal
        visible={modalVisible == VisibleModals.FinishWorkout}
        onSubmit={() => {
          handleSubmit(onSubmit)();
          setVisible(VisibleModals.None);
        }}
        onCancel={() => setVisible(VisibleModals.None)}
      />
    </SafeAreaView>
  );
};

export default currentTemplate;
