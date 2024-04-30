import React, { useState } from "react";
import { Text, TextInput, TouchableOpacity, View } from "react-native";

import { Entypo } from "@expo/vector-icons";

const FormField = ({
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
      <Text className="text-base font-medium text-gray-100">{title}</Text>

      <View className="border-black-200 h-16 w-full flex-row items-center rounded-2xl border-2 bg-gray-900 px-4 focus:border-secondary">
        <TextInput
          className="flex-1 text-base font-bold text-white"
          value={value}
          placeholder={placeholder}
          onChangeText={handleChangeText}
          secureTextEntry={title === "Password" && !showPassword}
        />
        {title === "Password" && (
          <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
            {showPassword ? (
              <Entypo name="eye" size={24} color="white" />
            ) : (
              <Entypo name="eye-with-line" size={24} color="white" />
            )}
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};

export default FormField;
