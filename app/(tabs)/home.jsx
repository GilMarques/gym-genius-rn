import React, { useState } from "react";
import { Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { Ionicons } from "@expo/vector-icons";
import PrimaryButton from "components/Buttons/PrimaryButton.jsx";
import HomeTemplate from "components/Home/HomeTemplate.jsx";
import { useLoginContext } from "context/LoginProvider";
import { router } from "expo-router";
import { TouchableOpacity } from "react-native-gesture-handler";
import tailwindConfig from "tailwind.config.js";
import resolveConfig from "tailwindcss/resolveConfig";

const fullConfig = resolveConfig(tailwindConfig);

const Home = () => {
  const { user } = useLoginContext();
  const [numberWorkouts, setNumberWorkouts] = useState(0);
  router.navigate(`/(modals)/reorderExercises`);
  return (
    <SafeAreaView className="h-full bg-background p-6">
      <TouchableOpacity className="flex self-end">
        <Ionicons name="person-circle-sharp" size={32} color="white" />
      </TouchableOpacity>

      <Text className="text-center text-2xl font-bold text-white">
        Active Program
      </Text>

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

      <Text className="my-4 text-center text-2xl font-bold text-white">
        Featured
      </Text>

      <View className="absolute bottom-5 right-5">
        <PrimaryButton
          title={<Ionicons name="menu-sharp" size={24} color="black" />}
          containerStyles={"rounded-full w-12 h-12"}
          handlePress={() => router.navigate("/homeMenu")}
        />
      </View>
    </SafeAreaView>
  );
};

export default Home;
