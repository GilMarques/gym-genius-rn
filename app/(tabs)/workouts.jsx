import { Ionicons } from "@expo/vector-icons";
import PrimaryButton from "components/Buttons/PrimaryButton";
import TrainTemplate from "components/TrainTemplate";
import { workoutData } from "data/exerciseData";
import { router } from "expo-router";
import React from "react";
import { ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

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
    <SafeAreaView className="relative h-full bg-background px-4">
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
      <ScrollView showsVerticalScrollIndicator={false}>
        <Text className="my-4 text-center text-2xl font-bold text-white">
          Active
        </Text>
        <TrainTemplate
          data={workoutData[0]}
          index={2}
          onPress={() => router.navigate(`/(modals)/currentTemplate`)}
        />
        <TrainTemplate data={workoutData[1]} index={0} />
        <TrainTemplate data={workoutData[2]} index={0} />

        <Text className="my-4 text-center text-2xl font-bold text-white">
          Archived
        </Text>

        <TrainTemplate data={workoutData[0]} />
        <TrainTemplate data={workoutData[0]} />
        <TrainTemplate data={workoutData[0]} />
      </ScrollView>

      <View className="absolute bottom-5 right-5">
        <PrimaryButton
          title={<Ionicons name="add-sharp" size={24} color="black" />}
          containerStyles={"rounded-full w-12 h-12"}
          onPress={() => router.push(`/(modals)/newTemplate`)}
        />
      </View>
    </SafeAreaView>
  );
};

export default Workout;
