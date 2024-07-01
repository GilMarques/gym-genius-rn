import Chart from "components/Analytics/Chart";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";

const Analytics = () => {
  const data = [
    { value: 50 },
    { value: 80 },
    { value: 90 },
    { value: 70 },
    { value: 70 },
    { value: 60 },
    { value: 50 },
    { value: 40 },
    { value: 30 },
    { value: 20 },
    { value: 10 },
    { value: 0 },
  ];
  return (
    <SafeAreaView className="h-full bg-background">
      <Chart data={data} />
    </SafeAreaView>
  );
};

export default Analytics;
