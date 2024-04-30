import { FontAwesome6 } from "@expo/vector-icons";
import React from "react";
import { Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

function secondsToHm(seconds) {
  const hours = Math.floor(seconds / 3600);
  const minutes = Math.floor((seconds % 3600) / 60);
  if (hours === 0) return `${minutes}m`;
  return `${hours}h ${minutes}m`;
}

function kgToLbs(kg) {
  return Math.round(kg * 2.205);
}

const HistoryCard = ({ data }) => {
  const date = new Date(data.lastPerformed);
  return (
    <View className="w-full rounded-2xl border-2 border-gray-200 p-4">
      <View className="flex-row items-center justify-between">
        <Text className="text-2xl font-bold text-white">{data.title}</Text>
        <Text className="text-white">
          {date.getDay().toString() +
            " " +
            date.toLocaleString("default", { month: "long" })}
        </Text>
      </View>

      <View className="flex-row items-center justify-between">
        <View className="flex-row items-center gap-2">
          <FontAwesome6 name="clock" size={24} color="white" />
          <Text className="text-white">{secondsToHm(data.duration)}</Text>
        </View>

        <View className="flex-row items-center gap-2">
          <FontAwesome6 name="weight-hanging" size={24} color="white" />
          <Text className="text-white">{data.tonnage + " lbs"}</Text>
        </View>
        <View className="flex-row items-center gap-2">
          <FontAwesome6 name="trophy" size={24} color="white" />
          <Text className="text-white">{data.numRecords + " PRs"}</Text>
        </View>
      </View>

      {data.exercises.map((exercise) => (
        <Text key={exercise.name} className="text-sm text-white">
          {exercise.sets} x {exercise.name}
        </Text>
      ))}
    </View>
  );
};

const History = () => {
  return (
    <SafeAreaView className="h-full bg-primary">
      <HistoryCard
        data={{
          title: "Title",
          duration: 57 * 60 + 1,
          tonnage: 8000,
          numRecords: 3,
          lastPerformed: new Date(2024, 3, 26, 12, 30, 15),
          exercises: [
            { name: "Exercise 1", sets: 3 },
            { name: "Exercise 2", sets: 2 },
            { name: "Exercise 3", sets: 1 },
          ],
        }}
      />
    </SafeAreaView>
  );
};

export default History;
