import PrimaryButton from "components/Buttons/PrimaryButton";
import React, { useState } from "react";
import { Text, View } from "react-native";
import { TextInput } from "react-native-gesture-handler";
import OutlineButton from "../Buttons/OutlineButton";

const AddExerciseNoteModal = () => {
  const [value, setValue] = useState("");
  return (
    <View className="rounded-md bg-[#141414] p-4">
      <Text className="text-center text-xl font-bold text-white">
        Exercise Note
      </Text>

      <TextInput
        className="mt-4 h-24 rounded-md bg-[#1a1a1a] p-4 text-white"
        placeholderTextColor={"#ffffff"}
        placeholder="Enter your notes here..."
        value={value}
        onChangeText={setValue}
      />
      <Text className="self-end text-white">{value.length}/200</Text>

      <View className="mt-4 flex-row justify-around">
        <OutlineButton title="Resume" containerStyles={"px-4"} />
        <PrimaryButton title="Discard" containerStyles={"px-4"} />
      </View>
    </View>
  );
};

export default AddExerciseNoteModal;
