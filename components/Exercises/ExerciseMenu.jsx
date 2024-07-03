import { FontAwesome6 } from "@expo/vector-icons";
import { VisibleModals } from "components/PopUpModals/stores/ModalStore";
import { router } from "expo-router";
import React from "react";
import { TouchableWithoutFeedback, View } from "react-native";
import { Divider, Menu } from "react-native-paper";
import { MenuItem } from "./MenuItem";

const items = [
  {
    leadingIcon: "note-outline",
    title: "Add Exercise Note",
    onPress: (menuActions, exerciseId) => {
      menuActions.setVisible(VisibleModals.AddExerciseNote);
      menuActions.closeMenu();
    },
  },

  {
    leadingIcon: "swap-horizontal",
    title: "Swap Exercise",
    onPress: (menuActions, exerciseId) => {
      router.navigate("/(modals)/swapExercise");
      menuActions.closeMenu();
    },
  },

  {
    leadingIcon: "swap-vertical",
    title: "Reorder Exercises",
    onPress: (menuActions, exerciseId) => {
      router.navigate(`/(modals)/reorderExercises`);
      menuActions.closeMenu();
    },
  },

  {
    leadingIcon: "math-norm",
    title: "Add to Superset",
    onPress: (menuActions, exerciseId) => {
      menuActions.closeMenu();
    },
  },
  {
    leadingIcon: "information-outline",
    title: "View Exercise Info",
    onPress: (menuActions, exerciseId) => {
      router.navigate(`/(modals)/search/${exerciseId}`);
      menuActions.closeMenu();
    },
  },

  {
    leadingIcon: "alarm",
    title: "Set Rest Timer",
    onPress: (menuActions, exerciseId) => {
      menuActions.setVisible(VisibleModals.SetRestTimer);
      menuActions.closeMenu();
    },
  },

  {
    leadingIcon: "close",
    title: "Remove Exercise",
    onPress: (menuActions, exerciseId) => {
      menuActions.removeExercise(exerciseId);
      menuActions.closeMenu();
    },
    color: "crimson",
  },
];

const ExerciseMenu = ({
  id,
  menuVisible,
  openMenu,
  closeMenu,
  menuActions,
  exerciseId,
}) => {
  menuActions["closeMenu"] = closeMenu;
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
        <View key={index}>
          <MenuItem
            {...item}
            menuActions={menuActions}
            exerciseId={exerciseId}
          />
          {index != items.length - 1 && (
            <Divider style={{ width: "90%", alignSelf: "center" }} />
          )}
        </View>
      ))}
    </Menu>
  );
};

export default ExerciseMenu;
