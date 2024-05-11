import React from "react";
import { Image, Text, View } from "react-native";

import { images } from "../constants";
const EmptyState = ({ subtitle }) => {
  return (
    <View className="flex-1 items-center justify-center">
      <Image
        source={images.boxer}
        resizeMode="contain"
        className="h-[216px] w-[270px]"
      />
      <Text className="text-white">{subtitle}</Text>
    </View>
  );
};

export default EmptyState;
