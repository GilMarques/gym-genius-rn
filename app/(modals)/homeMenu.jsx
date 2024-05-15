import { router } from "expo-router";
import React from "react";
import { Text, View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

const homeMenu = () => {
  return (
    <View className="absolute bottom-0 h-1/2 w-full bg-black opacity-50">
      <TouchableOpacity onPress={() => router.back()}>
        <Text className="text-3xl text-white">homeMenu</Text>
      </TouchableOpacity>
    </View>
  );
};

export default homeMenu;
