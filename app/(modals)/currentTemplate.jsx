import { FontAwesome6, Ionicons } from "@expo/vector-icons";
import React, { useState } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { TouchableWithoutFeedback } from "react-native-gesture-handler";
import { SafeAreaView } from "react-native-safe-area-context";
import Exercise from "../../components/Exercise";
import FormField from "../../components/FormField";
const newTemplate = () => {
  const [title, setTitle] = useState("New workout template");
  const [exercises, setExercises] = useState([
    { title: "Bench Press", sets: 0, reps: 0 },
  ]);
  return (
    <SafeAreaView className="h-full bg-primary">
      <View className="p-4">
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

        <TouchableWithoutFeedback>
          <Text className="text-center font-bold text-white">ADD EXERCISE</Text>
        </TouchableWithoutFeedback>
      </View>

      <View className="absolute bottom-12 right-6">
        <TouchableOpacity>
          <View className="flex-row items-center rounded-md border-2 border-white px-4 py-2">
            <Ionicons name="alarm-outline" size={24} color="white" />
            <Text className="text-white">Rest Timer</Text>
          </View>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default newTemplate;
