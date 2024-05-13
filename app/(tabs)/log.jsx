import React, { useState } from "react";
import { Text } from "react-native";
import { Calendar } from "react-native-calendars";
import { SafeAreaView } from "react-native-safe-area-context";
import LogTemplate from "../../components/Log/LogTemplate.jsx";

import resolveConfig from "tailwindcss/resolveConfig";
import tailwindConfig from "../../tailwind.config.js";

const fullConfig = resolveConfig(tailwindConfig);
const Log = () => {
  const [markedDates, setMarkedDates] = useState({
    "2024-05-22": {
      startingDay: true,
      endingDay: true,
      color: "blue",
    },
    "2024-05-23": {
      startingDay: true,
      endingDay: true,
      color: "blue",
    },
    "2024-05-14": {
      startingDay: true,
      endingDay: true,
      color: "blue",
    },
  });

  const handleDayPress = (day) => {};

  return (
    <SafeAreaView className="h-full bg-primary p-6">
      <Calendar
        markedDates={markedDates}
        markingType={"period"}
        theme={{
          backgroundColor: "transparent",
          calendarBackground: "transparent",
          textSectionTitleColor: fullConfig.theme.colors.secondary,
          monthTextColor: fullConfig.theme.colors.secondary,
          arrowColor: "white",
          dayTextColor: "white",
          selectedDayBackgroundColor: "white",
          indicatorColor: "white",
        }}
        onDayPress={(day) => {
          console.log("selected day", day);
        }}
        monthFormat={"MMM"}
        onMonthChange={(month) => {
          console.log("month changed", month);
        }}
        hideExtraDays={true}
        onPressArrowLeft={(subtractMonth) => subtractMonth()}
        onPressArrowRight={(addMonth) => addMonth()}
        disableAllTouchEventsForDisabledDays={true}
      />

      <Text className="text-xl text-secondary">Recent Workouts</Text>
      <LogTemplate
        data={{
          title: "Title",
          duration: 57 * 60 + 1,
          tonnage: 8000,
          numRecords: 3,
          lastPerformed: new Date(2024, 3, 26, 12, 30, 15),
          exercises: [
            { name: "Exercise 1", sets: 3 },
            { name: "Exercise 2", sets: 2 },
            { name: "Exercise 3", sets: 1 },
          ],
        }}
      />
    </SafeAreaView>
  );
};

export default Log;
