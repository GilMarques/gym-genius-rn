import { Ionicons } from "@expo/vector-icons";
import React from "react";
import { Text, View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

const Tag = ({ name, selected, onPress }) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <View className="flex-row items-center self-start rounded-full bg-primary px-2 py-1">
        {selected && <Ionicons name="close-circle" size={15} color="black" />}
        <Text className="text-black">{name}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default Tag;
