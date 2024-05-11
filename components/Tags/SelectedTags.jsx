import React from "react";
import { View } from "react-native";
import Tag from "./Tag";

const SelectedTags = ({ tags, setTags }) => {
  return (
    <View className="flex-row items-center" style={{ gap: 4 }}>
      {tags.map((tag, index) => (
        <Tag
          key={index}
          name={tag}
          selected={true}
          onPress={() => setTags((prev) => prev.filter((t) => t !== tag))}
        />
      ))}
    </View>
  );
};

export default SelectedTags;
