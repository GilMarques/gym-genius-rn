import React from "react";
import { Text } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import resolveConfig from "tailwindcss/resolveConfig";
import tailwindConfig from "../../tailwind.config.js";

const fullConfig = resolveConfig(tailwindConfig);

const PrimaryButton = ({
  title,
  handlePress,
  containerStyles,
  textStyles,
  color,
  disabled,
}) => {
  return (
    <TouchableOpacity
      onPress={handlePress}
      activeOpacity={0.7}
      className={`flex justify-center items-center rounded-md p-1 ${containerStyles} `}
      style={{
        backgroundColor: color || fullConfig.theme.colors.secondary,
        opacity: disabled ? 0.5 : 1,
        zIndex: 1,
      }}
      disabled={disabled}
    >
      <Text className={`text-lg font-bold text-primary ${textStyles}`}>
        {title}
      </Text>
    </TouchableOpacity>
  );
};

export default PrimaryButton;
