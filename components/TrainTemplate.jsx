import { FontAwesome6, Octicons } from "@expo/vector-icons";
import React from "react";
import { Text, View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { secondsToHm2 } from "../lib/helper";
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

const SubHeader = ({ weekday, estimatedDuration }) => {
  return (
    <View className="flex-row items-center justify-end">
      <View>
        <Text className="w-full text-right text-white">{weekday}</Text>
        <View className="flex-row items-center gap-1">
          <FontAwesome6 name="clock" size={12} color="white" />
          <Text className="text-white">
            Est. {secondsToHm2(estimatedDuration)}
          </Text>
        </View>
      </View>
    </View>
  );
};

const TrainTemplate = ({ data, onPress }) => {
  const date = new Date(data.lastPerformed);

  return (
    <Template>
      <TouchableOpacity onPress={onPress}>
        <HeaderWithShareOptions title={data.title} />

        {data.exercises.map((exercise) => (
          <Text key={exercise.name} className="text-sm text-white">
            {exercise.sets} x {exercise.name}
          </Text>
        ))}
        <SubHeader
          weekday={data.for}
          estimatedDuration={data.estimatedDuration}
        />
      </TouchableOpacity>
    </Template>
  );
};

export default TrainTemplate;
