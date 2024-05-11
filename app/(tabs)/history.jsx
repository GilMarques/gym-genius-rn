import { FontAwesome6 } from "@expo/vector-icons";
import React from "react";
import { Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import PrimaryButton from "../../components/Buttons/PrimaryButton";
function secondsToHm(seconds) {
  const hours = Math.floor(seconds / 3600);
  const minutes = Math.floor((seconds % 3600) / 60);
  if (hours === 0) return `${minutes}m`;
  return `${hours}h ${minutes}m`;
}

function kgToLbs(kg) {
  return Math.round(kg * 2.205);
}

const History = () => {
  return (
    <SafeAreaView className="h-full bg-primary p-6">
      <Text className="text-xl text-secondary">April</Text>
      <PrimaryButton
        title={<FontAwesome6 name="calendar" size={24} color="black" />}
        containerStyles={"absolute w-16 h-16 bottom-5 right-5 rounded-full"}
      />
    </SafeAreaView>
  );
};

export default History;
