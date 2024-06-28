import {
  FontAwesome6,
  MaterialCommunityIcons,
  MaterialIcons,
} from "@expo/vector-icons";
import React, { useState } from "react";
import { Text, TouchableOpacity, View } from "react-native";

import resolveConfig from "tailwindcss/resolveConfig";

import { useWorkoutContext } from "context/WorkoutProvider";
import { getTailwindConfig, secondsToms } from "lib/helper";

import RestTimerModal from "components/PopUpModals/RestTimerModal";
import { Divider } from "react-native-paper";
import tailwindConfig from "../../tailwind.config";
import ExerciseMenu from "./ExerciseMenu";
import Set from "./Set";

const fullConfig = resolveConfig(tailwindConfig);

const widthSet = " w-[10%]";
const widthPrevious = " w-[30%]";
const widthWeight = " w-[20%]";
const widthReps = " w-[20%]";
const widthCheck = " w-[20%]";

const config = getTailwindConfig();

const Exercise = ({ id, restTime, name, sets, scrollRef }) => {
  const [menuVisible, setMenuVisible] = React.useState(false);

  const [restTimerVisible, setRestTimerVisible] = React.useState(false);

  const [autoRestTimer, setAutoRestTimer] = useState(restTime);

  const openMenu = () => setMenuVisible(true);
  const closeMenu = () => setMenuVisible(false);

  const {
    actions: { addSet, removeExercise },
  } = useWorkoutContext();

  return (
    <>
      <View className="mb-4">
        <View className="flex-row items-center justify-between">
          <Text className="text-xl font-bold text-white">{name}</Text>
          <ExerciseMenu
            menuVisible={menuVisible}
            openMenu={openMenu}
            closeMenu={closeMenu}
          />
        </View>

        <View className="flex-row items-center" style={{ gap: 5 }}>
          <MaterialIcons
            name="alarm"
            size={15}
            color={config.theme.colors.secondary}
          />
          <Text className="text-secondary">
            {autoRestTimer ? secondsToms(autoRestTimer) : "Off"}
          </Text>
        </View>

        <View className="mt-2 flex-row justify-between">
          <Text className={"text-white  " + widthSet}>Set</Text>
          <Text className={"text-white text-center " + widthPrevious}>
            Previous
          </Text>

          <Text className={"text-white text-center " + widthWeight}>
            <MaterialCommunityIcons name="weight" size={15} color="white" /> kg
          </Text>
          <Text className={"text-white text-center " + widthReps}>Reps</Text>
          <View
            className={"flex items-center justify-center " + widthCheck}
          ></View>
        </View>

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

        <TouchableOpacity
          onPress={() => {
            addSet(id);
          }}
        >
          <View className="mt-2 flex-row justify-center">
            <View className="w-[90%] flex-row items-center justify-center rounded-md bg-[#dadada] p-2">
              <FontAwesome6 name="add" size={15} color="black" />
              <Text className="ml-2">Add Set</Text>
            </View>
          </View>
        </TouchableOpacity>
      </View>

      <RestTimerModal
        visible={restTimerVisible}
        onSubmit={(value) => {
          setAutoRestTimer(value);
          setRestTimerVisible(false);
        }}
      />
    </>
  );
};

export default Exercise;
