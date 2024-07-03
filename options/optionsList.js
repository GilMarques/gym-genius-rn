import { TransitionPresets } from "@react-navigation/stack";

export const optionsList = {
  ...TransitionPresets.ModalPresentationIOS,

  gestureEnabled: true,
  presentation: "modal",

  headerShown: false,
  title: "Exercises",

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
