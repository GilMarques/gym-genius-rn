import { FontAwesome6 } from "@expo/vector-icons";
import React from "react";
import { Text, View } from "react-native";
import { secondsToHm } from "../../lib/helper";
import Template from "../Template";

const icon_size = 12;
const HeaderReview = ({ title, duration, tonnage, numRecords }) => {
  return (
    <>
      <View className="flex-row items-center justify-between">
        <Text className="text-2xl font-bold text-white">{title}</Text>

        <View className="flex-row items-center gap-2">
          <FontAwesome6 name="ellipsis" size={24} color="white" />
        </View>
      </View>
      <View className="flex-row items-center justify-between">
        <View className="flex-row items-center gap-2">
          <FontAwesome6 name="clock" size={icon_size} color="white" />
          <Text className="text-white">{secondsToHm(duration)}</Text>
        </View>

        <View className="flex-row items-center gap-2">
          <FontAwesome6 name="weight-hanging" size={icon_size} color="white" />
          <Text className="text-white">{tonnage + " lbs"}</Text>
        </View>
        <View className="flex-row items-center gap-2">
          <FontAwesome6 name="trophy" size={icon_size} color="white" />
          <Text className="text-white">{numRecords + " PRs"}</Text>
        </View>
      </View>
    </>
  );
};

const LogTemplate = ({ data }) => {
  return (
    <Template>
      <HeaderReview
        title={data.title}
        duration={data.duration}
        tonnage={data.tonnage}
        numRecords={data.numRecords}
      />

      {data.exercises.map((exercise) => (
        <Text key={exercise.name} className="text-sm text-white">
          {exercise.sets} x {exercise.name}
        </Text>
      ))}
    </Template>
  );
};

export default LogTemplate;
