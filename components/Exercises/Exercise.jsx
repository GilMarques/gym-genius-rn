import { FontAwesome6 } from "@expo/vector-icons";
import React from "react";
import { Text, TouchableOpacity, View } from "react-native";

import resolveConfig from "tailwindcss/resolveConfig";

import { useWorkoutDispatchContext } from "context/WorkoutProvider";
import { TouchableWithoutFeedback } from "react-native-gesture-handler";
import { Divider, Icon, Menu } from "react-native-paper";
import tailwindConfig from "../../tailwind.config";
import Set from "./Set";

const fullConfig = resolveConfig(tailwindConfig);

const widthSet = " w-[20%]";
const widthPrevious = " w-[20%]";
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
      style={{ height: 40 }}
      theme={{ colors: { secondary: "white" } }}
    />
  );
};

const Exercise = ({ id, name, equipment, sets, scrollRef }) => {
  const [visible, setVisible] = React.useState(false);
  const { addSet, removeSet, updateSet } = useWorkoutDispatchContext();
  const openMenu = () => setVisible(true);

  const closeMenu = () => setVisible(false);
  return (
    <View className="mb-4">
      <View className="flex-row items-center justify-between">
        <Text className="text-xl font-bold text-secondary">
          {name} ({equipment || "Other"})
        </Text>

        <Menu
          visible={visible}
          onDismiss={closeMenu}
          anchor={
            <TouchableWithoutFeedback onPress={openMenu}>
              <FontAwesome6 name="ellipsis" size={15} color="white" />
            </TouchableWithoutFeedback>
          }
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
        </Menu>
      </View>

      <View className="mt-2 flex-row justify-between">
        <Text className={"text-white  " + widthSet}>Set</Text>
        <Text className={"text-white text-center " + widthPrevious}>
          Previous
        </Text>

        <Text className={"text-white text-center " + widthWeight}>Weight</Text>
        <Text className={"text-white text-center " + widthReps}>Reps</Text>
        <View
          className={"flex items-center justify-center " + widthCheck}
        ></View>
      </View>

      <View className="w-full self-center rounded-xl border-t border-white" />

      {sets.map((set, setIndex) => (
        <Set
          key={set.id}
          setIndex={setIndex}
          exerciseId={id}
          scrollRef={scrollRef}
          {...set}
        />
      ))}

      <View className="mt-2 w-full self-center rounded-xl border-t border-white" />

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
