import React, { useEffect, useState } from "react";
import { FlatList, View } from "react-native";

import { data } from "data/exerciseData";

import PrimaryButton from "components/Buttons/PrimaryButton";
import DropdownSearch from "components/DropdownSearch";
import EmptyState from "components/EmptyState";
import ExerciseListedForSwap from "components/Exercises/ExerciseListedForSwap";
import { router } from "expo-router";
import { useWorkoutStore } from "state/workoutState";

const swapExercise = () => {
  const [value, setValue] = useState("");
  const [dataFiltered, setDataFiltered] = useState(data);
  const [tags, setTags] = useState([]);

  const [selectedId, setSelectedId] = useState(null);

  const clickBehavior = (id) => {
    setSelectedId((prev) => (prev == id ? null : id));
  };

  useEffect(() => {
    setDataFiltered(
      data.filter(
        (exercise) =>
          exercise.name.toLowerCase().includes(value.toLowerCase()) &&
          tags.every((tag) => exercise.musclesWorked.includes(tag))
      )
    );
  }, [value, tags]);

  const swapExercise = useWorkoutStore((state) => state.swapExercise);

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
        renderItem={({ item }) => (
          <ExerciseListedForSwap
            {...item}
            checked={selectedId == item.id ? true : false}
            onPress={() => {
              clickBehavior(item.id);
            }}
          />
        )}
        ListEmptyComponent={() => <EmptyState subtitle="No results found" />}
      />
      <View className="mt-2 flex-row justify-around">
        <PrimaryButton
          title={`Swap Exercise`}
          containerStyles={"px-4 py-2 w-[150px]"}
          textStyles={"text-sm"}
          disabled={selectedId == null}
          handlePress={() => {
            router.back();
          }}
        />
      </View>
    </View>
  );
};

export default swapExercise;
