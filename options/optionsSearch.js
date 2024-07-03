import { TransitionPresets } from "@react-navigation/stack";

export const optionsSearch = ({ route }) => {
  return {
    ...TransitionPresets.ModalPresentationIOS,

    gestureEnabled: true,
    presentation: "modal",

    headerShown: false,
    cardStyle: { backgroundColor: "#1a1a1a" },
    overlayStyle: { borderColor: "#1a1a1a" },
    headerStyle: {
      backgroundColor: "#1a1a1a",
    },

    headerShadowVisible: false,
  };
};
