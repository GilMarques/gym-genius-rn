import { MaterialIcons } from "@expo/vector-icons";
import { getTailwindConfig, secondsToms } from "lib/helper";
import React from "react";
import { Text, View } from "react-native";

const config = getTailwindConfig();
const RestTimer = ({ autoRestTimer }) => {
  return (
    <View className="flex-row items-center" style={{ gap: 5 }}>
      <MaterialIcons
        name="alarm"
        size={15}
        color={config.theme.colors.secondary}
      />
      <Text className="text-secondary">
        {autoRestTimer ? secondsToms(autoRestTimer) : "Off"}
      </Text>
    </View>
  );
};

export default RestTimer;
