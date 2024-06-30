import { FontAwesome6 } from "@expo/vector-icons";
import { TransitionPresets } from "@react-navigation/stack";
import { Text, TouchableWithoutFeedback } from "react-native";

export const optionsList = {
  ...TransitionPresets.ModalPresentationIOS,

  gestureEnabled: true,
  presentation: "modal",

  headerShown: true,
  title: "Exercises",

  headerLeft: () => (
    <TouchableWithoutFeedback onPress={() => router.back()} className="ml-8">
      <FontAwesome6 name="x" size={15} color="white" />
    </TouchableWithoutFeedback>
  ),

  headerRight: () => (
    <TouchableWithoutFeedback onPress={() => router.back()} className="mr-4">
      <Text className="font-bold text-white">Create New</Text>
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
