import { Feather } from "@expo/vector-icons";
import { TransitionPresets } from "@react-navigation/stack";
import { router } from "expo-router";
import { Text, TouchableWithoutFeedback, View } from "react-native";

export const optionsList = {
  ...TransitionPresets.ModalPresentationIOS,

  gestureEnabled: true,
  presentation: "modal",

  headerShown: true,
  title: "Exercises",

  header: () => (
    <View
      style={{
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        margin: 16,
      }}
    >
      <Text
        style={{
          fontSize: 20,
          lineHeight: 28,
          position: "absolute",
          width: "100%",
          textAlign: "center",
          fontWeight: "700",
          color: "white",
        }}
      >
        Exercises
      </Text>
      <TouchableWithoutFeedback onPress={() => router.back()}>
        <View>
          <Feather name="x" size={24} color="white" />
        </View>
      </TouchableWithoutFeedback>

      <TouchableWithoutFeedback onPress={() => {}}>
        <Text style={{ fontWeight: "700", color: "white" }}>Create New</Text>
      </TouchableWithoutFeedback>
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
