import { MaterialIcons } from "@expo/vector-icons";
import PrimaryButton from "components/Buttons/PrimaryButton";
import Exercise from "components/Exercises/Exercise";
import FinishWorkoutModal from "components/PopUpModals/FinishWorkoutModal";
import RestTimerModal from "components/PopUpModals/RestTimerModal";
import TimerDisplay from "components/TimerDisplay";
import { useWorkoutContext } from "context/WorkoutProvider";
import { router } from "expo-router";
import React, { useRef, useState } from "react";
import { Text, View } from "react-native";
import {
  ScrollView,
  TouchableWithoutFeedback,
} from "react-native-gesture-handler";
import { Divider } from "react-native-paper";

import { SafeAreaView } from "react-native-safe-area-context";

const currentTemplate = () => {
  const {
    state: { title, currentWorkout },
  } = useWorkoutContext();
  const scrollRef = useRef();

  const [restTimerModalVisible, setRestTimerModalVisible] = useState(false);

  const [finishWorkoutModalVisible, setFinishWorkoutModalVisible] =
    useState(false);
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

          <PrimaryButton
            title="Finish"
            containerStyles={"px-4"}
            handlePress={() => setFinishWorkoutModalVisible(true)}
          />
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
        visible={restTimerModalVisible}
        setVisible={setRestTimerModalVisible}
      />

      <FinishWorkoutModal
        visible={finishWorkoutModalVisible}
        setVisible={setFinishWorkoutModalVisible}
      />
    </SafeAreaView>
  );
};

export default currentTemplate;
