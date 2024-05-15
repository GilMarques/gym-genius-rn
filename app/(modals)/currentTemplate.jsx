import { FontAwesome6, Ionicons } from "@expo/vector-icons";
import React from "react";
import { ScrollView, Text, TouchableOpacity, View } from "react-native";
import { TouchableWithoutFeedback } from "react-native-gesture-handler";
import { SafeAreaView } from "react-native-safe-area-context";
import PrimaryButton from "../../components/Buttons/PrimaryButton";
import Exercise from "../../components/Exercises/Exercise";
import { useGlobalContext } from "../../context/GlobalProvider";
import { secondsToHourMinuteSecond } from "../../lib/helper";

const currentTemplate = () => {
  const { currentWorkout, seconds } = useGlobalContext();

  return (
    <SafeAreaView className="h-full bg-primary">
      <View>
        <View className="flex-row items-center justify-between px-6">
          <View className="flex-row items-center">
            <View
              className="flex-row items-center justify-between rounded-md bg-slate-200 p-2"
              style={{ gap: 10 }}
            >
              <FontAwesome6 name="play" size={15} color="black" />
              <Text className="font-bold">
                {secondsToHourMinuteSecond(seconds)}
              </Text>
            </View>
          </View>
          <PrimaryButton title="Finish" containerStyles={"px-4"} />
        </View>
      </View>
      <View className="px-4">
        {/* <FormField placeholder={"Note"} otherStyles={"text-white"} /> */}
        <ScrollView
          showsVerticalScrollIndicator={false}
          className="my-2 h-[80%]"
        >
          <View>
            <Text className="text-2xl font-bold text-secondary">
              {currentWorkout.title}
              <FontAwesome6 name="pencil" size={15} color="white" />
            </Text>
          </View>

          {currentWorkout.exercises.map((exercise, index) => (
            <Exercise key={index} {...exercise} index={index} />
          ))}

          <TouchableWithoutFeedback>
            <Text className="text-center font-bold text-white">
              ADD EXERCISE
            </Text>
          </TouchableWithoutFeedback>
        </ScrollView>
      </View>
      <View className="border-t border-white">
        <TouchableOpacity>
          <View className="mt-2 w-1/3 flex-row items-center justify-between self-end rounded-md border border-white px-4 py-2">
            <Ionicons name="alarm-outline" size={24} color="white" />
            <Text className="text-white">Rest Timer</Text>
          </View>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default currentTemplate;
