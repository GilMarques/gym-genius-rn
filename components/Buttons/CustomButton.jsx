import React from "react";
import { Text } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import resolveConfig from "tailwindcss/resolveConfig";
import tailwindConfig from "../../tailwind.config.js";

const fullConfig = resolveConfig(tailwindConfig);

const CustomButton = ({
  title,
  handlePress,
  isLoading,
  color,
  containerStyles,
  textStyles,
}) => {
  return (
    <TouchableOpacity
      onPress={handlePress}
      activeOpacity={0.7}
      className={`flex justify-center items-center rounded-md p-1 ${containerStyles} ${
        isLoading ? "opacity-50" : ""
      }`}
      style={{
        backgroundColor: color || fullConfig.theme.colors.primary.DEFAULT,
      }}
      disabled={isLoading}
    >
      <Text className={`text-lg font-bold text-primary ${textStyles}`}>
        {title}
      </Text>
    </TouchableOpacity>
  );
};

export default CustomButton;
