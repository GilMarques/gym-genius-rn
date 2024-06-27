import {
  FontAwesome6,
  MaterialCommunityIcons,
  MaterialIcons,
} from "@expo/vector-icons";
import React from "react";
import {
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from "react-native";

import resolveConfig from "tailwindcss/resolveConfig";

import { useTimerContext } from "context/TimerProvider";
import { useWorkoutContext } from "context/WorkoutProvider";
import { getTailwindConfig, secondsToms } from "lib/helper";

import { Divider, Icon, Menu } from "react-native-paper";
import tailwindConfig from "../../tailwind.config";
import Set from "./Set";

const fullConfig = resolveConfig(tailwindConfig);

const widthSet = " w-[10%]";
const widthPrevious = " w-[30%]";
const widthWeight = " w-[20%]";
const widthReps = " w-[20%]";
const widthCheck = " w-[20%]";

const MenuItem = ({ leadingIcon, title, onPress }) => {
  return (
    <Menu.Item
      leadingIcon={(props) => (
        <Icon source={leadingIcon} color={"white"} size={props.size} />
      )}
      onPress={onPress}
      title={title}
      titleStyle={{ color: "white" }}
      theme={{ colors: { secondary: "white" } }}
    />
  );
};

const config = getTailwindConfig();

const Exercise = ({ id, restTime, name, sets, scrollRef }) => {
  const [visible, setVisible] = React.useState(false);

  const openMenu = () => setVisible(true);

  const closeMenu = () => setVisible(false);

  const {
    actions: { addSet, removeExercise },
  } = useWorkoutContext();

  const {
    actions: { startRestTimer },
  } = useTimerContext();
  return (
    <View className="mb-4">
      <View className="flex-row items-center justify-between">
        <Text className="text-xl font-bold text-white">{name}</Text>

        <Menu
          visible={visible}
          onDismiss={closeMenu}
          anchor={
            <TouchableWithoutFeedback onPress={openMenu}>
              <FontAwesome6 name="ellipsis" size={25} color="white" />
            </TouchableWithoutFeedback>
          }
          elevation={1}
          className="w-[70%]"
          contentStyle={{ backgroundColor: "#1a1a1a" }}
        >
          <MenuItem
            leadingIcon="plus-circle-outline"
            title="Add Warmup Sets"
            onPress={() => {}}
          />

          <Divider style={{ width: "90%", alignSelf: "center" }} />
          <MenuItem
            leadingIcon={"note-outline"}
            onPress={() => {}}
            title="Add Exercise Note"
          />

          <Divider style={{ width: "90%", alignSelf: "center" }} />
          <MenuItem
            leadingIcon={"swap-horizontal"}
            onPress={() => {}}
            title="Swap Exercise"
          />

          <Divider style={{ width: "90%", alignSelf: "center" }} />

          <MenuItem
            leadingIcon={"swap-vertical"}
            onPress={() => {}}
            title="Reorder Exercises"
          />
          <Divider style={{ width: "90%", alignSelf: "center" }} />
          <MenuItem
            leadingIcon={"math-norm"}
            onPress={() => {}}
            title="Create Superset"
          />
          <Divider style={{ width: "90%", alignSelf: "center" }} />
          <MenuItem
            leadingIcon="information-outline"
            title="View Exercise Info"
            onPress={() => {}}
          />

          <Divider style={{ width: "90%", alignSelf: "center" }} />
          <MenuItem
            leadingIcon="alarm"
            title="Auto Rest Timer"
            onPress={() => {}}
          />

          <Divider style={{ width: "90%", alignSelf: "center" }} />
          <MenuItem
            leadingIcon="close"
            title="Remove Exercise"
            onPress={() => {}}
          />
        </Menu>
      </View>

      <View className="flex-row items-center" style={{ gap: 5 }}>
        <MaterialIcons
          name="alarm"
          size={15}
          color={config.theme.colors.secondary}
        />
        <Text className="text-secondary">
          {restTime ? secondsToms(restTime) : "Off"}
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
          onComplete={restTime ? () => startRestTimer(restTime) : null}
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
  );
};

export default Exercise;
