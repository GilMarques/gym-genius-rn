import { FontAwesome6 } from "@expo/vector-icons";
import { TransitionPresets } from "@react-navigation/stack";
import { TouchableWithoutFeedback } from "react-native";

export const optionsReorder = {
  ...TransitionPresets.ModalPresentationIOS,

  gestureEnabled: true,
  presentation: "modal",
  headerShown: true,
  title: "Reorder Exercises",

  

  headerLeft: () => (
    <TouchableWithoutFeedback onPress={() => router.back()} className="ml-8">
      <FontAwesome6 name="x" size={15} color="white" />
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
