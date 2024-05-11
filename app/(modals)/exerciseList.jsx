import React, { useEffect, useState } from "react";
import { View } from "react-native";
import { FlatList } from "react-native-gesture-handler";

import { data } from "../../data/exerciseData";

import DropdownSearch from "../../components/DropdownSearch";
import EmptyState from "../../components/EmptyState";
import ExerciseListed from "../../components/Exercises/ExerciseListed";

const exerciseList = () => {
  const [value, setValue] = useState("");
  const [dataFiltered, setDataFiltered] = useState(data);
  const [tags, setTags] = useState([]);

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
        renderItem={({ item }) => <ExerciseListed {...item} />}
        ListEmptyComponent={() => <EmptyState subtitle="No results found" />}
      />
    </View>
  );
};

export default exerciseList;
