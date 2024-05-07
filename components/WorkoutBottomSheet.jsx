import { FontAwesome6 } from "@expo/vector-icons";
import React from "react";
import { Text, View } from "react-native";
import { TouchableWithoutFeedback } from "react-native-gesture-handler";
import FormField from "./FormField";
const WorkoutBottomSheet = ({ title = "Title", exercises = [] }) => {
  return (
    <View className="p-8">
      <View>
        <Text className="text-2xl font-bold text-secondary">
          {title} {"  "}
          <FontAwesome6 name="pencil" size={15} color="white" />
        </Text>
      </View>

      <FormField placeholder={"Note"} otherStyles={"text-white"} />

      {exercises.map((exercise, index) => (
        <Exercise key={index} {...exercise} index={index} />
      ))}

      <TouchableWithoutFeedback
        onPress={() => {
          console.log("clicked");
        }}
      >
        <Text className="font-bold text-white">ADD EXERCISE</Text>
      </TouchableWithoutFeedback>
    </View>
  );
};

export default WorkoutBottomSheet;
