import React, { useState } from "react";
import { Calendar } from "react-native-calendars";
import resolveConfig from "tailwindcss/resolveConfig";
import tailwindConfig from "../../tailwind.config.js";

const fullConfig = resolveConfig(tailwindConfig);

const LogCalendar = () => {
  const [markedDates, setMarkedDates] = useState({
    "2024-05-22": {
      startingDay: true,
      endingDay: true,
      color: fullConfig.theme.colors.secondary,
      textColor: "black",
    },
    "2024-05-23": {
      startingDay: true,
      endingDay: true,
      color: fullConfig.theme.colors.secondary,
      textColor: "black",
    },
    "2024-05-14": {
      startingDay: true,
      endingDay: true,
      color: fullConfig.theme.colors.secondary,
      textColor: "black",
      disabled: true,
    },
    "2024-05-15": {
      selected: true,
    },
  });

  return (
    <Calendar
      markedDates={markedDates}
      markingType={"period"}
      theme={{
        backgroundColor: "transparent",
        calendarBackground: "transparent",
        textSectionTitleColor: fullConfig.theme.colors.primary.DEFAULT,
        monthTextColor: "white",
        arrowColor: "white",
        dayTextColor: "white",
        selectedDayBackgroundColor: "white",
        indicatorColor: "white",
      }}
      onDayPress={(day) => {
        console.log("selected day", day);
      }}
      monthFormat={"MMM"}
      hideExtraDays={true}
      onPressArrowLeft={(subtractMonth) => subtractMonth()}
      onPressArrowRight={(addMonth) => addMonth()}
      disabledByDefault={true} //
    />
  );
};

export default LogCalendar;
