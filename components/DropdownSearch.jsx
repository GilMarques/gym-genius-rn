import { Entypo, FontAwesome6 } from "@expo/vector-icons";
import React, { useEffect, useState } from "react";
import { TouchableOpacity, View } from "react-native";
import { TextInput } from "react-native-gesture-handler";
import SelectedTags from "./Tags/SelectedTags";
import UnselectedTags from "./Tags/UnselectedTags";

import { searchTags } from "../data/exerciseData.js";

const DropdownSearch = ({ value, onChangeText, tags, setTags }) => {
  const [showDropdown, setShowDropdown] = useState(false);
  const [focused, setFocused] = useState(false);
  const [resultTags, setResultTags] = useState([]);
  useEffect(() => {
    setResultTags(
      searchTags.filter((tag) =>
        value.length
          ? tag.toLowerCase().startsWith(value.toLowerCase()) &&
            !tags.includes(tag)
          : false
      )
    );
  }, [value]);
  return (
    <View className="">
      <View className="border-black-200 h-8 w-[90%] flex-row items-center self-center rounded-2xl bg-gray-500 px-4 focus:border-secondary">
        <Entypo name="magnifying-glass" size={24} color="black" />
        <SelectedTags tags={tags} setTags={setTags} selected={true} />
        <TextInput
          className="flex-1 text-base font-bold text-white"
          value={value}
          onChangeText={onChangeText}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
        />
        <TouchableOpacity
          onPress={() => {
            onChangeText("");
            setTags([]);
          }}
        >
          <FontAwesome6 name="x" size={24} color="black" />
        </TouchableOpacity>
      </View>

      {focused && (
        <View className="mt-2 w-[90%] flex-wrap self-center">
          <UnselectedTags
            tags={resultTags}
            selected={false}
            setTags={setTags}
            onChangeText={onChangeText}
          />
        </View>
      )}
    </View>
  );
};

export default DropdownSearch;
