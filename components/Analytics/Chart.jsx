import React from "react";
import { View } from "react-native";
import { LineChart } from "react-native-gifted-charts";

const Chart = ({ data }) => {
  return (
    <View className="w-full border-2 border-white">
      <LineChart
        data={data}
        indicatorColor="white"
        color="#ffd554"
        textColor={"white"}
        dataPointsColor="#ffd554"
        xAxisColor={"white"}
        yAxisColor={"white"}
        xAxisIndicesColor={"white"}
        yAxisIndicesColor={"white"}
        yAxisTextStyle={{ color: "white" }}
        xAxisLabelTextStyle={{
          color: "white",
          transform: [{ rotate: "-60deg" }],
        }}
        xAxisLabelTexts={["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"]}
      />
    </View>
  );
};

export default Chart;
