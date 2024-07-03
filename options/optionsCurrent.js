import { TransitionPresets } from "@react-navigation/stack";

export const optionsCurrent = {
  ...TransitionPresets.ModalPresentationIOS,

  // topOffset: 30,
  gestureEnabled: true,
  presentation: "modal",
  headerShown: false,
  cardStyle: { backgroundColor: "#1a1a1a" },
  overlayStyle: { borderColor: "#1a1a1a" },
};
