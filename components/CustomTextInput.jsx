import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";
import React from "react";
import { Text, View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

const KeyPadButton = ({ text, onPress }) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <View
        className="flex h-12 w-24 items-center justify-center rounded-md bg-white"
        style={{ elevation: 2 }}
      >
        <Text className="text-xl font-bold">{text}</Text>
      </View>
    </TouchableOpacity>
  );
};
const CloseButton = () => {
  return (
    <TouchableOpacity>
      <View
        className="flex h-12 w-24 items-center justify-center rounded-md bg-white"
        style={{ elevation: 2 }}
      >
        <MaterialCommunityIcons name="keyboard-close" size={24} color="black" />
      </View>
    </TouchableOpacity>
  );
};

const DotButton = () => {
  return (
    <TouchableOpacity>
      <View className="w-24 flex-row justify-center">
        <Text className="text-3xl">.</Text>
      </View>
    </TouchableOpacity>
  );
};

const NextButton = () => {
  return (
    <TouchableOpacity>
      <View className="flex h-12 w-24 items-center justify-center rounded-md bg-white">
        <Text className="font-bold">Next</Text>
      </View>
    </TouchableOpacity>
  );
};

const BackspaceButton = () => {
  return (
    <TouchableOpacity>
      <View className="flex h-12 w-24 items-center justify-center">
        <Ionicons name="backspace" size={24} color="black" />
      </View>
    </TouchableOpacity>
  );
};

const CustomKeyboard = () => {
  return (
    <View className="absolute top-full h-[400px] w-full bg-[#444444]">
      <View className="mt-2 flex-row justify-around">
        <CloseButton />
        <CloseButton />
        <NextButton />
      </View>
      <View className="mt-2 flex-row justify-around">
        <KeyPadButton text="1" />
        <KeyPadButton text="2" />
        <KeyPadButton text="3" />
      </View>
      <View className="mt-2 flex-row justify-around">
        <KeyPadButton text="4" />
        <KeyPadButton text="5" />
        <KeyPadButton text="6" />
      </View>
      <View className="mt-2 flex-row justify-around">
        <KeyPadButton text="7" />
        <KeyPadButton text="8" />
        <KeyPadButton text="9" />
      </View>

      <View className="mt-2 flex-row justify-around">
        <DotButton />
        <KeyPadButton text="0" />
        <BackspaceButton />
      </View>
    </View>
  );
};

const CustomTextInput = () => {
  return (
    <View>
      <Text>CustomTextInput</Text>
      <CustomKeyboard />
    </View>
  );
};

export default CustomTextInput;
