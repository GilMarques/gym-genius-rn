import React from "react";
import { View } from "react-native";
import Tag from "./Tag";

const UnselectedTags = ({ tags, setTags, onChangeText }) => {
  return (
    <View className="flex-row items-center" style={{ gap: 4 }}>
      {tags.map((tag, index) => (
        <Tag
          key={index}
          name={tag}
          selected={false}
          onPress={() => {
            setTags((prev) => [...prev, tag]);
            onChangeText("");
          }}
        />
      ))}
    </View>
  );
};
export default UnselectedTags;
