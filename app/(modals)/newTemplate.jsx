import { FontAwesome6 } from "@expo/vector-icons";
import Exercise from "components/Exercises/Exercise";
import FormField from "components/FormField";
import React, { useState } from "react";
import { Text, View } from "react-native";
import { TouchableWithoutFeedback } from "react-native-gesture-handler";
import { SafeAreaView } from "react-native-safe-area-context";
const newTemplate = () => {
  const [title, setTitle] = useState("New workout template");
  const [exercises, setExercises] = useState([
    { title: "Bench Press", sets: 0, reps: 0 },
  ]);
  return (
    <SafeAreaView className="h-full bg-background">
      <View className="p-4">
        <View>
          <Text className="text-2xl font-bold text-primary">
            {title} {"  "}
            <FontAwesome6 name="pencil" size={15} color="white" />
          </Text>
        </View>

        <FormField placeholder={"Note"} otherStyles={"text-white"} />

        {exercises.map((exercise, index) => (
          <Exercise key={index} {...exercise} index={index} />
        ))}

        <TouchableWithoutFeedback>
          <Text className="text-center font-bold text-white">ADD EXERCISE</Text>
        </TouchableWithoutFeedback>
      </View>
    </SafeAreaView>
  );
};

export default newTemplate;
