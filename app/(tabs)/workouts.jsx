import { router } from "expo-router";
import React from "react";
import { ScrollView, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import TrainTemplate from "../../components/TrainTemplate";

const weekdays = [
  { day: "S", color: "gray" },
  { day: "M", color: "blue" },
  { day: "T", color: "green" },
  { day: "W", color: "gray" },
  { day: "T", color: "gray" },
  { day: "F", color: "gray" },
  { day: "S", color: "gray" },
];
const Workout = () => {
  return (
    <SafeAreaView className="relative h-full bg-primary px-4">
      {/* <View className="flex-row items-center justify-between rounded-md">
        {weekdays.map((day, index) => (
          <PrimaryButton
            key={index}
            title={day.day}
            color={day.color}
            containerStyles={`min-w-12 min-h-12 rounded-full p-4 w-12 h-12`}
            textStyles={"text-xs text-white"}
          />
        ))}
      </View> */}
      <ScrollView>
        <Text className="my-4 text-center text-2xl font-bold text-white">
          Active
        </Text>
        <TrainTemplate
          data={{
            id: "1",
            title: "Title",
            for: "Monday",
            color: "blue",
            lastPerformed: new Date(2024, 3, 26, 12, 30, 15),
            exercises: [
              { name: "Exercise 1", sets: 3 },
              { name: "Exercise 2", sets: 2 },
              { name: "Exercise 3", sets: 1 },
            ],
          }}
          index={2}
          onPress={() => router.navigate(`/(modals)/currentTemplate`)}
        />
        <TrainTemplate
          data={{
            title: "Title",
            for: "Tuesday",
            lastPerformed: new Date(2024, 3, 26, 12, 30, 15),
            exercises: [
              { name: "Exercise 1", sets: 3 },
              { name: "Exercise 2", sets: 2 },
              { name: "Exercise 3", sets: 1 },
            ],
          }}
          index={0}
        />

        <Text className="text-2xl font-bold text-white">Archived</Text>

        <TrainTemplate
          data={{
            title: "Title",
            lastPerformed: new Date(2024, 3, 26, 12, 30, 15),
            exercises: [
              { name: "Exercise 1", sets: 3 },
              { name: "Exercise 2", sets: 2 },
              { name: "Exercise 3", sets: 1 },
            ],
          }}
        />
        <TrainTemplate
          data={{
            title: "Title",
            lastPerformed: new Date(2024, 3, 26, 12, 30, 15),
            exercises: [
              { name: "Exercise 1", sets: 3 },
              { name: "Exercise 2", sets: 2 },
              { name: "Exercise 3", sets: 1 },
            ],
          }}
        />
        <TrainTemplate
          data={{
            title: "Title",
            lastPerformed: new Date(2024, 3, 26, 12, 30, 15),
            exercises: [
              { name: "Exercise 1", sets: 3 },
              { name: "Exercise 2", sets: 2 },
              { name: "Exercise 3", sets: 1 },
            ],
          }}
        />
      </ScrollView>
    </SafeAreaView>
  );
};

export default Workout;
