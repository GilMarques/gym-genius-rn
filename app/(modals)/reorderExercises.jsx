import React from "react";
import { View } from "react-native";
import { FlatList } from "react-native-gesture-handler";

import EmptyState from "components/EmptyState";
import ExerciseListed from "components/Exercises/ExerciseListed";

const reorderExercises = () => {
  return (
    <View style={{ flex: 1 }}>
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
    </View>
  );
};

export default reorderExercises;
