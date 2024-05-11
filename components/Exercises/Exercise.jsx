import { FontAwesome6, Ionicons } from "@expo/vector-icons";
import React, { useState } from "react";
import { Text, TextInput, TouchableOpacity, View } from "react-native";

const Options = () => {
  return (
    <View>
      <FontAwesome6 name="ellipsis" size={15} color="white" />
    </View>
  );
};

const Set = ({ weight, reps, index }) => {
  const [checked, setChecked] = useState(false);
  return (
    <View
      className="mt-2 flex-row items-center justify-between rounded-md px-2"
      key={index}
    >
      <Text className="text-white">{index + 1}</Text>
      <Text className="text-white">SetPrevious</Text>
      <TextInput
        placeholder={weight ? weight : ""}
        placeholderTextColor={"#ffffffea"}
        className="h-8 w-16 rounded-md border-2 border-white text-center text-white"
      />
      <TextInput
        placeholder={reps ? reps : ""}
        placeholderTextColor={"#ffffffea"}
        className="h-8 w-16 border-2 border-white text-center text-white"
      />

      <TouchableOpacity onPress={() => setChecked(!checked)}>
        {checked ? (
          <Ionicons name="checkmark-circle" size={24} color="green" />
        ) : (
          <Ionicons name="checkmark-circle-outline" size={24} color="white" />
        )}
      </TouchableOpacity>
    </View>
  );
};

const Exercise = ({ title, index }) => {
  const [sets, setSets] = useState([{ weight: "5", reps: "12" }]);

  return (
    <View className="p-4">
      <View className="flex-row items-center justify-between">
        <View className="flex-row space-x-2">
          <Text className="text-xl font-bold text-secondary">
            {title} (Barbell)
          </Text>
        </View>

        <Options />
      </View>

      <View className="flex-row justify-between">
        <Text className="text-white">Set</Text>
        <Text className="text-white">Previous</Text>

        <Text className="text-white">Kg</Text>
        <Text className="text-white">Reps</Text>
      </View>
      <View className="flex-row justify-center">
        <View className="w-[90%] rounded-xl border border-white"></View>
      </View>

      {sets.map((set, index) => (
        <Set key={index} {...set} index={index} />
      ))}

      <TouchableOpacity
        onPress={() => setSets([...sets, { weight: "", reps: "12" }])}
      >
        <View className="mt-2 flex-row justify-center">
          <View className="w-[90%] flex-row items-center justify-center rounded-md bg-[#ffffff80] p-2">
            <FontAwesome6 name="add" size={15} color="black" />
            <Text className="ml-2">Add Set</Text>
          </View>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default Exercise;
