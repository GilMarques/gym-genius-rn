import { MaterialCommunityIcons } from "@expo/vector-icons";
import React from "react";
import { Text, View } from "react-native";
const widthSet = " w-[10%]";
const widthPrevious = " w-[30%]";
const widthWeight = " w-[20%]";
const widthReps = " w-[20%]";
const widthCheck = " w-[20%]";
const TableHeader = () => {
  return (
    <View className="mt-2 flex-row justify-between">
      <Text className={"text-white  " + widthSet}>Set</Text>
      <Text className={"text-white text-center " + widthPrevious}>
        Previous
      </Text>

      <Text className={"text-white text-center " + widthWeight}>
        <MaterialCommunityIcons name="weight" size={15} color="white" /> kg
      </Text>
      <Text className={"text-white text-center " + widthReps}>Reps</Text>
      <View className={"flex items-center justify-center " + widthCheck}></View>
    </View>
  );
};

export default TableHeader;
