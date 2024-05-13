import React, { useState } from "react";
import { Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useGlobalContext } from "../../context/GlobalProvider";

import resolveConfig from "tailwindcss/resolveConfig";
import PrimaryButton from "../../components/Buttons/PrimaryButton.jsx";
import HomeTemplate from "../../components/Home/HomeTemplate.jsx";
import tailwindConfig from "../../tailwind.config.js";

const fullConfig = resolveConfig(tailwindConfig);

const Home = () => {
  const { user } = useGlobalContext();
  const [numberWorkouts, setNumberWorkouts] = useState(0);

  return (
    <SafeAreaView className="h-full bg-primary p-6">
      {/* <FlatList /> */}

      <View className="flex-row items-center justify-center gap-2">
        <View>
          <Text className="text-center text-2xl font-bold text-secondary">
            {user?.username || "User"}
          </Text>
          <Text className="font-bold text-white">
            {numberWorkouts} recorded workouts
          </Text>
        </View>
      </View>

      <View className="flex-row items-center justify-between">
        <Text className="text-xl font-bold text-secondary">Active Program</Text>
      </View>

      <HomeTemplate
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

      <PrimaryButton title={"Create New Program"} />
    </SafeAreaView>
  );
};

export default Home;
