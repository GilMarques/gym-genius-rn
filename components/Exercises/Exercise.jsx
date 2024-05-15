import { FontAwesome6, Ionicons } from "@expo/vector-icons";
import React, { useState } from "react";
import { Text, TextInput, TouchableOpacity, View } from "react-native";

import resolveConfig from "tailwindcss/resolveConfig";

import tailwindConfig from "../../tailwind.config";

const fullConfig = resolveConfig(tailwindConfig);

const Options = () => {
  return (
    <View>
      <FontAwesome6 name="ellipsis" size={15} color="white" />
    </View>
  );
};

const widthSet = " w-[20%]";
const widthPrevious = " w-[20%]";
const widthWeight = " w-[20%]";
const widthReps = " w-[20%]";
const widthCheck = " w-[20%]";
const Set = ({ weight, reps, index }) => {
  const [checked, setChecked] = useState(false);
  return (
    <View className="mt-2 flex-row items-center rounded-md" key={index}>
      <Text className={"text-white text-center" + widthSet}>{index + 1}</Text>
      <Text className={"text-white text-center" + widthPrevious}>-</Text>

      <View className={"flex items-center justify-center " + widthWeight}>
        <TextInput
          placeholder={reps ? reps : ""}
          placeholderTextColor={"#ffffff"}
          className={`h-5 w-[60%] rounded-md border   text-center  ${
            checked
              ? "text-secondary border-secondary"
              : "text-white border-white"
          }`}
        />
      </View>
      <View className={"flex items-center justify-center" + widthReps}>
        <TextInput
          placeholder={reps ? reps : ""}
          placeholderTextColor={"#ffffff"}
          className={`h-5 w-[60%] rounded-md border text-center  ${
            checked
              ? "text-secondary border-secondary"
              : "text-white border-white"
          }`}
        />
      </View>

      <View className={"flex items-center justify-center " + widthCheck}>
        <TouchableOpacity onPress={() => setChecked(!checked)}>
          {checked ? (
            <View className={"flex items-center justify-center"}>
              <Ionicons
                name="checkmark-circle"
                size={24}
                color={fullConfig.theme.colors.secondary}
              />
            </View>
          ) : (
            <View className={"flex items-center justify-center"}>
              <Ionicons
                name="checkmark-circle-outline"
                size={24}
                color="white"
              />
            </View>
          )}
        </TouchableOpacity>
      </View>
    </View>
  );
};

const Exercise = ({ name, equipment, sets, index }) => {
  return (
    <View className="mb-4">
      <View className="flex-row items-center justify-between">
        <Text className="text-xl font-bold text-secondary">
          {name} ({equipment})
        </Text>
        <Options />
      </View>

      <View className="flex-row justify-between">
        <Text className={"text-white text-center " + widthSet}>Set</Text>
        <Text className={"text-white text-center " + widthPrevious}>
          Previous
        </Text>

        <Text className={"text-white text-center " + widthWeight}>Kg</Text>
        <Text className={"text-white text-center " + widthReps}>Reps</Text>
        <View
          className={"flex items-center justify-center " + widthCheck}
        ></View>
      </View>

      <View className="w-full self-center rounded-xl border-t border-white" />

      {sets.map((set, index) => (
        <Set key={index} {...set} index={index} />
      ))}

      <View className="mt-2 w-full self-center rounded-xl border-t border-white" />

      <TouchableOpacity
        onPress={() => setSets([...sets, { weight: "", reps: "12" }])}
      >
        <View className="mt-2 flex-row justify-center">
          <View className="w-[90%] flex-row items-center justify-center rounded-md bg-[#dadada] p-2">
            <FontAwesome6 name="add" size={15} color="black" />
            <Text className="ml-2">Add Set</Text>
          </View>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default Exercise;
