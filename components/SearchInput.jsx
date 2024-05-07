import React, { useState } from "react";
import { TextInput, TouchableOpacity, View } from "react-native";

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
        <TextInput
          className="flex-1 text-base font-bold text-white"
          value={value}
          placeholder={placeholder}
          onChangeText={handleChangeText}
          secureTextEntry={title === "Password" && !showPassword}
        />

        <TouchableOpacity></TouchableOpacity>
      </View>
    </View>
  );
};

export default SearchInput;
