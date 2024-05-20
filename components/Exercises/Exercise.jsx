import { FontAwesome6, Ionicons } from "@expo/vector-icons";
import React, { useState } from "react";
import { Text, TextInput, TouchableOpacity, View } from "react-native";

import resolveConfig from "tailwindcss/resolveConfig";

import { useWorkoutDispatchContext } from "context/WorkoutProvider";
import { Divider, Icon, Menu } from "react-native-paper";
import tailwindConfig from "../../tailwind.config";

import Animated from "react-native-reanimated";

const fullConfig = resolveConfig(tailwindConfig);

const widthSet = " w-[20%]";
const widthPrevious = " w-[20%]";
const widthWeight = " w-[20%]";
const widthReps = " w-[20%]";
const widthCheck = " w-[20%]";
const Set = ({ weight, reps, exerciseIndex, setIndex }) => {
  const [checked, setChecked] = useState(false);
  const { removeSet, updateSet } = useWorkoutDispatchContext();
  return (
    <View className="mt-2">
      <View
        className={
          "absolute w-full flex-row items-center justify-end bg-red-500 "
        }
      >
        <Ionicons name="trash-sharp" size={24} color="white" />
      </View>

      <Animated.View
        className="flex-row items-center border border-primary bg-primary"
        key={setIndex}
      >
        <Text className={"text-white text-center" + widthSet}>
          {setIndex + 1}
        </Text>
        <Text className={"text-white text-center" + widthPrevious}>-</Text>

        <View className={"flex items-center justify-center " + widthWeight}>
          <TextInput
            placeholder={reps ? reps : ""}
            placeholderTextColor={"#ffffff"}
            className={`h-5 w-[60%] rounded-md border   text-center  ${
              checked
                ? "text-secondary border-secondary"
                : "text-white border-white"
            }`}
          />
        </View>
        <View className={"flex items-center justify-center" + widthReps}>
          <TextInput
            placeholder={reps ? reps : ""}
            placeholderTextColor={"#ffffff"}
            className={`h-5 w-[60%] rounded-md border text-center  ${
              checked
                ? "text-secondary border-secondary"
                : "text-white border-white"
            }`}
          />
        </View>

        <View className={"flex items-center justify-center " + widthCheck}>
          <TouchableOpacity onPress={() => setChecked(!checked)}>
            {checked ? (
              <View className={"flex items-center justify-center"}>
                <Ionicons
                  name="checkmark-circle"
                  size={24}
                  color={fullConfig.theme.colors.secondary}
                />
              </View>
            ) : (
              <View className={"flex items-center justify-center"}>
                <Ionicons
                  name="checkmark-circle-outline"
                  size={24}
                  color="white"
                />
              </View>
            )}
          </TouchableOpacity>
        </View>
      </Animated.View>
    </View>
  );
};

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

const Exercise = ({ name, equipment, sets, index }) => {
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
            <TouchableOpacity onPress={openMenu}>
              <FontAwesome6 name="ellipsis" size={15} color="white" />
            </TouchableOpacity>
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

      <View className="flex-row justify-between">
        <Text className={"text-white text-center " + widthSet}>Set</Text>
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
          key={setIndex}
          {...set}
          exerciseIndex={index}
          setIndex={setIndex}
        />
      ))}

      <View className="mt-2 w-full self-center rounded-xl border-t border-white" />

      <TouchableOpacity
        onPress={() => {
          addSet(index);
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
