import { Ionicons } from "@expo/vector-icons";
import SupersetHeader from "components/Headers/SupersetHeader";
import React from "react";
import { Text, View } from "react-native";
import { TouchableWithoutFeedback } from "react-native-gesture-handler";
import { SafeAreaView } from "react-native-safe-area-context";
import { useWorkoutStore } from "stores/workoutStore";

const addToSuperset = () => {
  const exercises = useWorkoutStore((state) => state.exercises);
  return (
    <SafeAreaView>
      <SupersetHeader />
      <View>
        <FlatList
          data={exercises}
          keyExtractor={(item) => item.id}
          renderItem={(item, index) => (
            <TouchableWithoutFeedback
              onLongPress={drag}
              onEnd={onDragEnd}
              delayLongPress={50}
            >
              <View className="mx-8 my-2 flex-row items-center justify-between rounded-md bg-background-light p-2">
                <View className="flex-row items-center" style={{ gap: 10 }}>
                  <Text className="mx-2 text-lg font-bold text-primary">
                    {index + 1}
                  </Text>
                  <Text className="font-bold text-white">{item.name}</Text>
                </View>

                <Ionicons name="menu-sharp" size={24} color="white" />
              </View>
            </TouchableWithoutFeedback>
          )}
        />
      </View>
    </SafeAreaView>
  );
};

export default addToSuperset;
