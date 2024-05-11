import { FontAwesome6 } from "@expo/vector-icons";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import PrimaryButton from "../../components/Buttons/PrimaryButton";
import Chart from "../../components/Chart";

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
    <SafeAreaView className="h-full bg-primary">
      <PrimaryButton
        title={<FontAwesome6 name="add" size={24} color="black" />}
        containerStyles={"w-16 h-16 rounded-full absolute bottom-5 right-5"}
      />
      <Chart data={data} />
    </SafeAreaView>
  );
};

export default Analytics;
