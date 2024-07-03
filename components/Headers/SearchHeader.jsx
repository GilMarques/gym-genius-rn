import { Feather } from "@expo/vector-icons";
import { data } from "data/exerciseData";
import { router } from "expo-router";
import React from "react";
import { Text, TouchableWithoutFeedback, View } from "react-native";

const SearchHeader = ({ exerciseId }) => {
  const { name } = data.find((e) => e.id === parseInt(exerciseId));
  return (
    <View
      style={{
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        marginHorizontal: 16,
      }}
    >
      <Text
        style={{
          fontSize: 20,
          lineHeight: 28,
          position: "absolute",
          width: "100%",
          bottom: 0,
          textAlign: "center",
          fontWeight: "700",
          color: "white",
        }}
      >
        {name}
      </Text>
      <TouchableWithoutFeedback onPress={() => router.back()}>
        <View>
          <Feather name="x" size={24} color="white" />
        </View>
      </TouchableWithoutFeedback>
      <TouchableWithoutFeedback onPress={() => {}}>
        <Feather name="edit-3" size={24} color="white" />
      </TouchableWithoutFeedback>
    </View>
  );
};

export default SearchHeader;
