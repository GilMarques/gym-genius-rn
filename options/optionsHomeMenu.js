import { TransitionPresets } from "@react-navigation/stack";
import { View } from "react-native";

export const optionsHomeMenu = {
  ...TransitionPresets.ModalPresentationIOS,

  gestureEnabled: true,
  presentation: "modal",

  headerShown: true,
  title: "Exercises",

  header: () => (
    <View className="mt-4 flex w-[20%] self-center">
      <View className="rounded-md border-2 border-secondary"></View>
    </View>
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
