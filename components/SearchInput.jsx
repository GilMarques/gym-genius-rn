import { Entypo } from "@expo/vector-icons";
import React, { useState } from "react";
import { TextInput, View } from "react-native";
const SearchInput = ({
  title,
  value,
  placeholder,
  handleChangeText,
  otherStyles,
  ...props
}) => {
  const [showPassword, setShowPassword] = useState(false);
  return (
    <View className={`space-y-2 ${otherStyles}`}>
      <View className="border-black-200 h-16 w-full flex-row items-center rounded-2xl bg-gray-500 px-4 focus:border-secondary">
        <Entypo name="magnifying-glass" size={24} color="black" />
        <TextInput
          className="flex-1 text-base font-bold text-white"
          value={value}
          placeholder={placeholder}
          onChangeText={handleChangeText}
          secureTextEntry={title === "Password" && !showPassword}
        />
      </View>
    </View>
  );
};

export default SearchInput;
