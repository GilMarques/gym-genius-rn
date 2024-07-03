import { Feather } from "@expo/vector-icons";
import { router } from "expo-router";
import React from "react";
import { Text, TouchableWithoutFeedback, View } from "react-native";

const ExerciseListHeader = () => {
  return (
    <View
      style={{
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        margin: 16,
      }}
    >
      <Text
        style={{
          fontSize: 20,
          lineHeight: 28,
          position: "absolute",
          width: "100%",
          textAlign: "center",
          fontWeight: "700",
          color: "white",
        }}
      >
        Exercises
      </Text>
      <TouchableWithoutFeedback onPress={() => router.back()}>
        <View>
          <Feather name="x" size={24} color="white" />
        </View>
      </TouchableWithoutFeedback>

      <TouchableWithoutFeedback onPress={() => {}}>
        <Text style={{ fontWeight: "700", color: "white" }}>Create New</Text>
      </TouchableWithoutFeedback>
    </View>
  );
};

export default ExerciseListHeader;
