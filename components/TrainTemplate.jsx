import { FontAwesome6, Octicons } from "@expo/vector-icons";
import React from "react";
import { Text, View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import Template from "./Template";

const HeaderWithShareOptions = ({ title }) => {
  return (
    <View className="flex-row items-center justify-between">
      <Text className="text-2xl font-bold text-white">{title}</Text>

      <View className="flex-row items-center gap-2">
        <TouchableOpacity>
          <Octicons name="share" size={24} color="white" />
        </TouchableOpacity>
        <TouchableOpacity>
          <FontAwesome6 name="ellipsis" size={24} color="white" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const SubHeader = ({ weekday, color }) => {
  return (
    <View className="mt-2 flex-row items-center justify-between">
      <Text style={{ color: color || "white" }}>{weekday}</Text>
      <View className="flex-row items-center gap-1">
        <FontAwesome6 name="clock" size={12} color="white" />
        <Text className="text-white">Est. 56min</Text>
      </View>
    </View>
  );
};

const TrainTemplate = ({ data, onPress }) => {
  const date = new Date(data.lastPerformed);

  return (
    <Template>
      <HeaderWithShareOptions title={data.title} />

      {data.exercises.map((exercise) => (
        <Text key={exercise.name} className="text-sm text-white">
          {exercise.sets} x {exercise.name}
        </Text>
      ))}
      <SubHeader weekday={data.for} color={data.color} />
    </Template>
  );
};

export default TrainTemplate;
