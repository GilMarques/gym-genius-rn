import { Ionicons } from "@expo/vector-icons";
import { useWorkoutContext } from "context/WorkoutProvider";
import React from "react";
import { Text, View } from "react-native";
import DraggableFlatList, {
  ScaleDecorator,
} from "react-native-draggable-flatlist";
import { TouchableWithoutFeedback } from "react-native-gesture-handler";
const reorderExercises = () => {
  const {
    state: { currentWorkout },
    actions: { reorderExercises },
  } = useWorkoutContext();

  return (
    <View>
      <DraggableFlatList
        data={currentWorkout.exercises}
        keyExtractor={(item) => item.id}
        onDragEnd={({ data }) => {
          reorderExercises(data);
        }}
        renderItem={({ item, drag, getIndex, onDragEnd }) => (
          <ScaleDecorator>
            <TouchableWithoutFeedback
              onLongPress={drag}
              onEnd={onDragEnd}
              delayLongPress={50}
            >
              <View className="mx-8 my-2 flex-row items-center justify-between rounded-md bg-background-light p-2">
                <View className="flex-row items-center" style={{ gap: 10 }}>
                  <Text className="mx-2 text-lg font-bold text-primary">
                    {getIndex() + 1}
                  </Text>
                  <Text className="font-bold text-white">{item.name}</Text>
                </View>

                <Ionicons name="menu-sharp" size={24} color="white" />
              </View>
            </TouchableWithoutFeedback>
          </ScaleDecorator>
        )}
      />
    </View>
  );
};

export default reorderExercises;
