import { Ionicons } from "@expo/vector-icons";
import React from "react";
import { Image, Text, View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

const ExerciseListed = ({ name, thumbnail, musclesWorked }) => {
  return (
    <View>
      <View className="flex-row items-center justify-between p-2">
        <View className="flex-row items-center gap-2">
          <Image source={{ uri: thumbnail }} className="h-10 w-10" />
          <View>
            <Text className="font-bold text-white">{name}</Text>
            <Text className="text-white">{musclesWorked?.join(", ")}</Text>
          </View>
        </View>
        <TouchableOpacity>
          <Ionicons name="information-circle-outline" size={24} color="white" />
        </TouchableOpacity>
      </View>
      <View className="flex-row items-center justify-center gap-2">
        <View className="w-[90%] rounded-full border border-black"></View>
      </View>
    </View>
  );
};

export default ExerciseListed;
