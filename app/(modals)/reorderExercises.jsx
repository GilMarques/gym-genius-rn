import { Ionicons } from "@expo/vector-icons";
import { useWorkoutContext } from "context/WorkoutProvider";
import React from "react";
import { FlatList, Text, View } from "react-native";

const reorderExercises = () => {
  const {
    state: { currentWorkout },
  } = useWorkoutContext();

  return (
    <View style={{ flex: 1 }}>
      <FlatList
        data={currentWorkout.exercises}
        keyExtractor={(item) => item.id}
        renderItem={({ item, index }) => (
          <View className="mx-4 my-2 flex-row items-center justify-between rounded-md bg-background-light p-2">
            <View className="flex-row items-center" style={{ gap: 10 }}>
              <Text className="mx-2 text-lg font-bold text-primary">
                {index + 1}
              </Text>
              <Text className="font-bold text-white">{item.name}</Text>
            </View>

            <Ionicons name="menu-sharp" size={24} color="white" />
          </View>
        )}
      />
    </View>
  );
};

export default reorderExercises;
