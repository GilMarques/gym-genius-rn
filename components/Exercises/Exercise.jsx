import { FontAwesome6 } from "@expo/vector-icons";
import React, { useState } from "react";
import { Text, View } from "react-native";

import { useWorkoutContext } from "context/WorkoutProvider";

import PrimaryButton from "components/Buttons/PrimaryButton";
import NoteModal from "components/PopUpModals/NoteModal";
import RestTimerModal from "components/PopUpModals/RestTimerModal";
import RestTimer from "components/RestTimer";
import TableHeader from "components/TableHeader";
import { Divider } from "react-native-paper";
import ExerciseMenu from "./ExerciseMenu";
import Set from "./Set";

const Exercise = ({ id, restTime, name, sets, scrollRef, note }) => {
  const [menuVisible, setMenuVisible] = React.useState(false);

  const [restTimerVisible, setRestTimerVisible] = React.useState(false);

  const [noteModalVisible, setNoteModalVisible] = useState(false);
  const [autoRestTimer, setAutoRestTimer] = useState(restTime);
  const [exerciseNote, setExerciseNote] = useState(note || "");

  const openMenu = () => setMenuVisible(true);
  const closeMenu = () => setMenuVisible(false);

  const {
    actions: { addSet, removeExercise },
  } = useWorkoutContext();

  const menuActions = {
    closeMenu,
    setRestTimerVisible,
    removeExercise,
    setNoteModalVisible,
  };

  return (
    <>
      <View className="mb-4">
        <View className="flex-row items-center justify-between">
          <Text className="text-xl font-bold text-white">{name}</Text>
          <ExerciseMenu
            exerciseId={id}
            menuVisible={menuVisible}
            openMenu={openMenu}
            closeMenu={closeMenu}
            menuActions={menuActions}
          />
        </View>

        <RestTimer autoRestTimer={autoRestTimer} />

        <TableHeader />
        <Divider />
        {sets.map((set, setIndex) => (
          <Set
            key={set.id}
            setIndex={setIndex}
            exerciseId={id}
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

      <RestTimerModal
        visible={restTimerVisible}
        onSubmit={(value) => {
          setAutoRestTimer(value);
          setRestTimerVisible(false);
        }}
        onClose={() => setRestTimerVisible(false)}
      />

      <NoteModal
        visible={noteModalVisible}
        note={exerciseNote}
        onSubmit={(value) => {
          setExerciseNote(value);
          setNoteModalVisible(false);
        }}
        onClose={() => setNoteModalVisible(false)}
      />
    </>
  );
};

export default Exercise;
