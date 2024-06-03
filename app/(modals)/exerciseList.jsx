import React, { useEffect, useState } from "react";
import { View } from "react-native";
import { FlatList } from "react-native-gesture-handler";

import { data } from "data/exerciseData";

import OutlineButton from "components/Buttons/OutlineButton";
import PrimaryButton from "components/Buttons/PrimaryButton";
import DropdownSearch from "components/DropdownSearch";
import EmptyState from "components/EmptyState";
import ExerciseListed from "components/Exercises/ExerciseListed";

const SubmitButton = ({ number }) => {
  return (
    <PrimaryButton
      title={`Add Exercises ${number ? "(" + number + ")" : ""}`}
      containerStyles={"px-4 py-2 w-[150px]"}
      textStyles={"text-sm"}
      disabled={true}
    />
  );
};

const SubmitSupersetButton = () => {
  return (
    <OutlineButton
      title="Add as Superset"
      containerStyles={"px-4 py-2 border-[0.5px] w-[150px]"}
      textStyles={"text-sm"}
      disabled={true}
    />
  );
};

const exerciseList = () => {
  const [value, setValue] = useState("");
  const [dataFiltered, setDataFiltered] = useState(data);
  const [tags, setTags] = useState([]);

  const [selectedIds, setSelectedIds] = useState([]);

  const clickBehavior = (id) => {
    if (selectedIds.includes(id)) {
      setSelectedIds(selectedIds.filter((item) => item !== id));
    } else {
      setSelectedIds([...selectedIds, id]);
    }
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
          <ExerciseListed
            {...item}
            checkedIndex={selectedIds.indexOf(item.id)}
            onPress={() => {
              clickBehavior(item.id);
            }}
          />
        )}
        ListEmptyComponent={() => <EmptyState subtitle="No results found" />}
      />
      <View className="mt-2 flex-row justify-around">
        <SubmitSupersetButton />
        <SubmitButton number={selectedIds.length} />
      </View>
    </View>
  );
};

export default exerciseList;
