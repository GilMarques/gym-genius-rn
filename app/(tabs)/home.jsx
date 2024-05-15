import React, { useState } from "react";
import { Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useGlobalContext } from "../../context/GlobalProvider";

import { Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";
import { TouchableOpacity } from "react-native-gesture-handler";
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
