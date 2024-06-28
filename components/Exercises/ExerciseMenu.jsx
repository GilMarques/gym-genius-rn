import { FontAwesome6 } from "@expo/vector-icons";
import React from "react";
import { TouchableWithoutFeedback } from "react-native";
import { Menu } from "react-native-paper";
import { MenuItem } from "./MenuItem";

const items = [
  {
    leadingIcon: "note-outline",
    onPress: () => {},
    title: "Add Exercise Note",
    color: "white",
  },

  { leadingIcon: "swap-horizontal", onPress: () => {}, title: "Swap Exercise" },

  {
    leadingIcon: "swap-vertical",
    onPress: () => {},
    title: "Reorder Exercises",
  },

  {
    leadingIcon: "math-norm",
    onPress: () => {},
    title: "Add to Superset",
  },
  {
    leadingIcon: "information-outline",
    title: "View Exercise Info",
    onPress: () => {},
  },

  {
    leadingIcon: "alarm",
    title: "Set Rest Timer",
    onPress: () => {
      setRestTimerVisible(true);
    },
  },

  {
    leadingIcon: "close",
    title: "Remove Exercise",
    onPress: () => {},
    color: "crimson",
  },
];

const ExerciseMenu = ({ menuVisible, openMenu, closeMenu }) => {
  return (
    <Menu
      visible={menuVisible}
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
      {items.map((item, index) => (
        <MenuItem key={index} {...item} />
      ))}
    </Menu>
  );
};

export default ExerciseMenu;
