import { FontAwesome6 } from "@expo/vector-icons";
import React from "react";
import { Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import CustomButton from "../../components/CustomButton";

function timeDifference(date1, date2 = new Date()) {
  const difference = Math.abs(date2 - date1) / 1000; // Difference in seconds

  if (difference < 60) {
    return `${Math.floor(difference)} second${
      Math.floor(difference) === 1 ? "" : "s"
    } ago`;
  } else if (difference < 3600) {
    const minutes = Math.floor(difference / 60);
    return `${minutes} minute${minutes === 1 ? "" : "s"} ago`;
  } else if (difference < 86400) {
    const hours = Math.floor(difference / 3600);
    return `${hours} hour${hours === 1 ? "" : "s"} ago`;
  } else if (difference < 2592000) {
    // Roughly 30 days
    const days = Math.floor(difference / 86400);
    return `${days} day${days === 1 ? "" : "s"} ago`;
  } else {
    return "More than a month ago";
  }
}

const Template = ({ data }) => {
  const date = new Date(data.lastPerformed);
  return (
    <View className="w-full rounded-2xl border-2 border-gray-200 p-4">
      <Text className="text-2xl font-bold text-white">{data.title}</Text>
      <Text className="text-white">{timeDifference(date, new Date())}</Text>
      {data.exercises.map((exercise) => (
        <Text key={exercise.name} className="text-sm text-white">
          {exercise.sets} x {exercise.name}
        </Text>
      ))}
    </View>
  );
};

const Train = () => {
  return (
    <SafeAreaView className="h-full bg-primary">
      <Text className="text-2xl font-bold text-secondary">Templates</Text>

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

      <CustomButton
        title={<FontAwesome6 name="add" size={24} color="black" />}
        containerStyles={"w-16 h-16 rounded-full absolute bottom-5 right-5"}
      />
    </SafeAreaView>
  );
};

export default Train;
