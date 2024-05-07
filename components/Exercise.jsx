import { FontAwesome6 } from "@expo/vector-icons";
import React, { useState } from "react";
import { Text, TextInput, TouchableOpacity, View } from "react-native";

const Options = () => {
  return (
    <View>
      <Text className="text-white">OPT</Text>
    </View>
  );
};

const Exercise = ({ title, index }) => {
  const [sets, setSets] = useState([{ weight: "5", reps: "12" }]);

  return (
    <View>
      <View className="flex-row justify-between">
        <View className="flex-row space-x-2">
          <Text className="text-xl font-bold text-white">{index + 1}</Text>
          <Text className="text-xl font-bold text-secondary">{title}</Text>
        </View>

        <Options />
      </View>

      <View className="flex-row justify-between px-4">
        <Text className="text-white">Set</Text>
        <Text className="text-white">Previous</Text>

        <Text className="text-white">Kg</Text>
        <Text className="text-white">Reps</Text>
      </View>
      <View className="flex-row justify-center">
        <View className="w-[90%] rounded-xl border border-white"></View>
      </View>

      {sets.map((set, index) => (
        <View className="flex-row justify-between px-4" key={index}>
          <Text className="text-white">{index + 1}</Text>
          <Text className="text-white">SetPrevious</Text>
          <TextInput
            placeholder={set.weight ? set.weight : ""}
            placeholderTextColor={"#ffffff75"}
            className="h-8 w-16 rounded-md border-2 border-white text-center text-white"
          />
          <TextInput
            placeholder={set.reps ? set.reps : ""}
            placeholderTextColor={"#ffffff75"}
            className="h-8 w-16 border-2 border-white text-center text-white"
          />
        </View>
      ))}

      <TouchableOpacity
        onPress={() => setSets([...sets, { weight: "", reps: "12" }])}
      >
        <View className="flex-row justify-center">
          <View className="w-[90%] flex-row justify-center rounded-md bg-slate-600 p-2">
            <Text className="text-white">
              <FontAwesome6 name="add" size={15} color="white" />
              Add Set
            </Text>
          </View>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default Exercise;
