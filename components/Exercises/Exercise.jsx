import { FontAwesome6 } from "@expo/vector-icons";
import React, { useRef, useState } from "react";
import { Text, TextInput, View } from "react-native";

import PrimaryButton from "components/Buttons/PrimaryButton";
import { useModalStore } from "components/PopUpModals/stores/ModalStore";
import RestTimer from "components/RestTimer";
import TableHeader from "components/TableHeader";
import { Divider } from "react-native-paper";
import { useWorkoutStore } from "stores/workoutStore";
import ExerciseMenu from "./ExerciseMenu";
import Set from "./Set";

const Exercise = ({ id, restTime, name, sets, scrollRef, control, note }) => {
  const [menuVisible, setMenuVisible] = React.useState(false);

  const [autoRestTimer, setAutoRestTimer] = useState(restTime);
  const [exerciseNote, setExerciseNote] = useState(note || "");

  const openMenu = () => setMenuVisible(true);
  const closeMenu = () => setMenuVisible(false);

  const addSet = useWorkoutStore((state) => state.addSet);
  const removeExercise = useWorkoutStore((state) => state.removeExercise);
  const setVisible = useModalStore((state) => state.setVisible);
  const menuActions = {
    closeMenu,
    setVisible,
    removeExercise,
  };

  const noteRef = useRef(null);

  return (
    <>
      <View className="mb-4">
        <View className="flex-row items-center justify-between">
          <Text className="text-xl font-bold text-white">{name}</Text>
          <ExerciseMenu
            noteRef={noteRef}
            exerciseId={id}
            menuVisible={menuVisible}
            openMenu={openMenu}
            closeMenu={closeMenu}
            menuActions={menuActions}
          />
        </View>

        {exerciseNote && (
          <TextInput
            className="my-1 rounded-md bg-background-light p-2 text-white"
            ref={noteRef}
            value={exerciseNote}
            onChangeText={(text) => setExerciseNote(text)}
            multiline={true}
            maxLength={200}
            onBlur={() => noteRef.current?.blur()}
          />
        )}
        <RestTimer autoRestTimer={autoRestTimer} />

        <TableHeader />
        <Divider />
        {sets.map((set, setIndex) => (
          <Set
            key={set.id}
            control={control}
            exerciseId={id}
            setIndex={setIndex}
            scrollRef={scrollRef}
            restTime={autoRestTimer}
            {...set}
          />
        ))}
        <Divider className="mt-2" />

        <PrimaryButton
          title={
            <Text className="items-center text-black">
              <FontAwesome6 name="add" size={15} color="black" /> Add Set
            </Text>
          }
          color={"#dadada"}
          handlePress={() => addSet(id)}
        />
      </View>
    </>
  );
};

export default Exercise;
