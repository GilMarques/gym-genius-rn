import { Feather } from "@expo/vector-icons";
import { TransitionPresets } from "@react-navigation/stack";
import { router } from "expo-router";
import { TouchableWithoutFeedback } from "react-native";

export const optionsSearch = ({ route }) => {
  const { name } = data.find((e) => e.id === parseInt(route.params.exerciseId));

  return {
    ...TransitionPresets.ModalPresentationIOS,

    gestureEnabled: true,
    presentation: "modal",

    headerShown: true,
    title: name,

    headerLeft: () => (
      <TouchableWithoutFeedback onPress={() => router.back()} className="ml-4">
        <Feather name="x" size={24} color="white" />
      </TouchableWithoutFeedback>
    ),

    headerRight: () => (
      <TouchableWithoutFeedback onPress={() => {}} className="mr-4">
        <Feather name="edit-3" size={24} color="white" />
      </TouchableWithoutFeedback>
    ),

    cardStyle: { backgroundColor: "#1a1a1a" },
    overlayStyle: { borderColor: "#1a1a1a" },
    headerStyle: {
      backgroundColor: "#1a1a1a",
    },
    headerTitleStyle: {
      color: "#fff",
    },

    headerTitleAlign: "center",
    headerShadowVisible: false,
  };
};
