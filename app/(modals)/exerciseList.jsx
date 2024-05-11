import { Entypo, FontAwesome6, Ionicons } from "@expo/vector-icons";
import React, { useEffect, useState } from "react";
import { Image, Text, TextInput, TouchableOpacity, View } from "react-native";
import { FlatList } from "react-native-gesture-handler";
import { images } from "../../constants";
import { data } from "../../temp/exerciseData";

const Exercise = ({ name, thumbnail, musclesWorked }) => {
  return (
    <View>
      <View className="flex-row items-center justify-between p-2">
        <View className="flex-row items-center gap-2">
          <Image source={{ uri: thumbnail }} className="h-10 w-10" />
          <View>
            <Text className="font-bold text-white">{name}</Text>
            <Text className="text-white">{musclesWorked?.join(", ")}</Text>
          </View>
        </View>
        <TouchableOpacity>
          <Ionicons name="information-circle-outline" size={24} color="white" />
        </TouchableOpacity>
      </View>
      <View className="flex-row items-center justify-center gap-2">
        <View className="w-[90%] rounded-full border border-black"></View>
      </View>
    </View>
  );
};

const Tag = ({ name, selected, onPress }) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <View className="flex-row items-center self-start rounded-full bg-secondary px-2 py-1">
        {selected && <Ionicons name="close-circle" size={15} color="black" />}

        <Text className="text-black">{name}</Text>
      </View>
    </TouchableOpacity>
  );
};

const SelectedTags = ({ tags, setTags }) => {
  return (
    <View className="flex-row items-center">
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
const UnselectedTags = ({ tags, setTags, onChangeText }) => {
  return (
    <View className="flex-row items-center">
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

import { searchTags } from "../../temp/exerciseData";

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

const EmptyState = ({ subtitle }) => {
  return (
    <View className="flex-1 items-center justify-center">
      <Image
        source={images.boxer}
        resizeMode="contain"
        className="h-[216px] w-[270px]"
      />
      <Text className="text-white">{subtitle}</Text>
    </View>
  );
};

const exerciseList = () => {
  const [value, setValue] = useState("");
  const [dataFiltered, setDataFiltered] = useState(data);
  const [tags, setTags] = useState(["Chest", "Back", "Biceps"]);
  useEffect(() => {
    setDataFiltered(
      data.filter(
        (exercise) =>
          exercise.name.toLowerCase().includes(value.toLowerCase()) &&
          tags.every((tag) => exercise.musclesWorked.includes(tag))
      )
    );
  }, [value, tags]);
  return (
    <View style={{ flex: 1 }}>
      <DropdownSearch
        value={value}
        onChangeText={setValue}
        tags={tags}
        setTags={setTags}
      />

      <FlatList
        data={dataFiltered}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <Exercise {...item} />}
        ListEmptyComponent={() => <EmptyState subtitle="No results found" />}
      />
    </View>
  );
};

export default exerciseList;
