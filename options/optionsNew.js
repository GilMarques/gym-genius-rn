import { TransitionPresets } from "@react-navigation/stack";
import { router } from "expo-router";
import { Text, TouchableWithoutFeedback } from "react-native";

export const optionsNew = {
  ...TransitionPresets.ModalPresentationIOS,

  gestureEnabled: true,
  presentation: "modal",

  headerShown: true,

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
        New Template
      </Text>
      <TouchableWithoutFeedback onPress={() => router.back()}>
        <View>
          <Feather name="x" size={24} color="white" />
        </View>
      </TouchableWithoutFeedback>

      <TouchableWithoutFeedback onPress={() => {}}>
        <Text style={{ fontWeight: "700", color: "white" }}>SAVE</Text>
      </TouchableWithoutFeedback>
    </View>
  ),

  cardStyle: { backgroundColor: "#1a1a1a" },
  overlayStyle: { borderColor: "#1a1a1a" },
  headerStyle: {
    backgroundColor: "#1a1a1a",
  },

  headerShadowVisible: false,
};
