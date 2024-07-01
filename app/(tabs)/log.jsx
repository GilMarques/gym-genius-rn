import LogTemplate from "components/Log/LogTemplate.jsx";
import React from "react";
import { Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import LogCalendar from "components/Log/LogCalendar.jsx";
import { historyData } from "data/exerciseData.js";
import { ScrollView } from "react-native-gesture-handler";
import tailwindConfig from "tailwind.config.js";
import resolveConfig from "tailwindcss/resolveConfig";

const fullConfig = resolveConfig(tailwindConfig);
const Log = () => {
  return (
    <SafeAreaView className="h-full bg-background p-6">
      <LogCalendar />
      <Text className="mb-2 text-center text-2xl font-bold text-white">
        Recent Workouts
      </Text>
      <ScrollView showsVerticalScrollIndicator={false}>
        <LogTemplate data={historyData[0]} />
        <LogTemplate data={historyData[0]} />
        <LogTemplate data={historyData[0]} />
      </ScrollView>
    </SafeAreaView>
  );
};

export default Log;
