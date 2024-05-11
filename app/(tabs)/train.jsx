import { FontAwesome6 } from "@expo/vector-icons";
import { router } from "expo-router";
import React from "react";
import { ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import PrimaryButton from "../../components/Buttons/PrimaryButton";
import Template from "../../components/Template";

const weekdays = [
  { day: "S", color: "gray" },
  { day: "M", color: "blue" },
  { day: "T", color: "green" },
  { day: "W", color: "gray" },
  { day: "T", color: "gray" },
  { day: "F", color: "gray" },
  { day: "S", color: "gray" },
];
const Train = () => {
  return (
    <SafeAreaView className="relative h-full bg-primary px-4">
      <View className="flex-row items-center justify-between rounded-md">
        {weekdays.map((day, index) => (
          <PrimaryButton
            key={index}
            title={day.day}
            color={day.color}
            containerStyles={`min-w-12 min-h-12 rounded-full p-4 w-12 h-12`}
            textStyles={"text-xs text-white"}
          />
        ))}
      </View>
      <ScrollView>
        <Text className="text-2xl font-bold text-secondary">
          Active Templates
        </Text>
        <Template
          data={{
            title: "Title",
            for: "Monday",
            lastPerformed: new Date(2024, 3, 26, 12, 30, 15),
            exercises: [
              { name: "Exercise 1", sets: 3 },
              { name: "Exercise 2", sets: 2 },
              { name: "Exercise 3", sets: 1 },
            ],
          }}
          index={2}
        />
        <Template
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

        <Text className="text-2xl font-bold text-secondary">
          Archived Templates
        </Text>

        <Template
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
        <Template
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
        <Template
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

      <CustomButton
        title={<FontAwesome6 name="add" size={24} color="black" />}
        containerStyles={"w-16 h-16 rounded-full absolute bottom-5 right-5"}
        handlePress={() => router.push("/newTemplate")}
      />
    </SafeAreaView>
  );
};

export default Train;
