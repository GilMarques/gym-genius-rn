import { FontAwesome6 } from "@expo/vector-icons";
import { router } from "expo-router";
import React, { useState } from "react";
import { ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import CustomButton from "../../components/CustomButton";
import PopupMenu from "../../components/PopupMenu";

function timeDifference(date1, date2) {
  if (!date1 || !date2) return "N/A";
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

const Template = ({ data, index }) => {
  const date = new Date(data.lastPerformed);
  const [optionsVisible, setOptionsVisible] = useState(false);
  return (
    <View
      className="my-2 rounded-2xl border border-gray-500 bg-primary px-6 py-2"
      style={{ zIndex: index }}
    >
      <View className="flex-row items-center justify-between">
        <Text className="text-2xl font-bold text-white">{data.title}</Text>

        <View className="flex-row items-center gap-2">
          <FontAwesome6 name="share-from-square" size={24} color="white" />
          {/* <Menu onSelect={() => console.log("Delete")}>
            <MenuTrigger>
              <FontAwesome6 name="ellipsis" size={24} color="white" />
            </MenuTrigger>
            <MenuOptions>
              <MenuOption value={1}>
                <Text>
                  <FontAwesome6 name="trash" size={24} color="black" />
                  Delete
                </Text>
              </MenuOption>

              <MenuOption value={2} text="Edit" />
            </MenuOptions>
          </Menu> */}
          <PopupMenu
            options={[
              {
                title: "Delete",
                icon: "trash",
                handlePress: () => console.log("Delete"),
              },
              {
                title: "Edit",
                icon: "edit",
                handlePress: () => console.log("Edit"),
              },
              ,
            ]}
          />
        </View>
      </View>

      {data.exercises.map((exercise) => (
        <Text key={exercise.name} className="text-sm text-white">
          {exercise.sets} x {exercise.name}
        </Text>
      ))}

      <View className="flex-row items-center justify-between">
        <Text className="text-blue-500">{data.for}</Text>
        <View className="flex-row items-center gap-1">
          <FontAwesome6 name="clock" size={12} color="white" />
          <Text className="text-white">Est. 56min</Text>
        </View>
      </View>
    </View>
  );
};
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
          <CustomButton
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
