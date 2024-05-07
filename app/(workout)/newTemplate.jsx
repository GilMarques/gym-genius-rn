import { FontAwesome6 } from "@expo/vector-icons";
import React, { useState } from "react";
import { Text, TouchableWithoutFeedback, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Exercise from "../../components/Exercise";
import FormField from "../../components/FormField";
const newTemplate = () => {
  const [title, setTitle] = useState("New workout template");
  const [exercises, setExercises] = useState([
    { title: "Bench Press", sets: 0, reps: 0 },
  ]);
  return (
    <SafeAreaView>
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
    </SafeAreaView>
  );
};

export default newTemplate;
