import { Feather } from "@expo/vector-icons";
import { TransitionPresets } from "@react-navigation/stack";
import { Text, TouchableWithoutFeedback, View } from "react-native";

export const optionsSuperset = {
  ...TransitionPresets.ModalPresentationIOS,
  gestureEnabled: true,
  presentation: "modal",
  header: () => (
    <View
      style={{
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        margin: 16,
      }}
    >
      <TouchableWithoutFeedback onPress={() => router.back()}>
        <Feather name="x" size={24} color="white" />
      </TouchableWithoutFeedback>

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
        Add to Superset
      </Text>
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
