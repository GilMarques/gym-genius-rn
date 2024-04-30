import { FontAwesome6 } from "@expo/vector-icons";
import React, { useState } from "react";
import { Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import CustomButton from "../../components/CustomButton";
import { useGlobalContext } from "../../context/GlobalProvider";
const Home = () => {
  const { user } = useGlobalContext();
  const [numberWorkouts, setNumberWorkouts] = useState(0);

  return (
    <SafeAreaView className="h-full bg-primary">
      {/* <FlatList /> */}

      <View className="flex-row items-center gap-2">
        <FontAwesome6 name="user-circle" size={32} color="#ffd554" />
        <View>
          <Text className="text-2xl font-bold text-secondary">
            {user?.username || "User"}
          </Text>
          <Text className="font-bold text-white">
            {numberWorkouts} recorded workouts
          </Text>
        </View>
      </View>

      <Text className="text-xl font-bold text-secondary">Featured</Text>

      <CustomButton
        title={<FontAwesome6 name="add" size={24} color="black" />}
        containerStyles={"w-16 h-16 rounded-full absolute bottom-5 right-5"}
      />

      <FontAwesome6 name="gear" size={24} color="white" />
    </SafeAreaView>
  );
};

export default Home;
