import React from "react";
import { Text, TouchableOpacity } from "react-native";

const CustomButton = ({
  title,
  handlePress,
  containerStyles,
  textStyles,
  color,
  isLoading,
}) => {
  return (
    <TouchableOpacity
      onPress={handlePress}
      activeOpacity={0.7}
      className={`flex justify-center items-center rounded-md p-1 ${containerStyles} ${
        isLoading ? "opacity-50" : ""
      }`}
      style={{ backgroundColor: color || "#ffd554" }}
      disabled={isLoading}
    >
      <Text className={`text-lg font-bold text-primary ${textStyles}`}>
        {title}
      </Text>
    </TouchableOpacity>
  );
};

export default CustomButton;
