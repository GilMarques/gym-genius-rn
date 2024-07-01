import { TransitionPresets } from "@react-navigation/stack";
import { router } from "expo-router";

export const optionsAddList = {
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
      <TouchableWithoutFeedback onPress={() => router.back()}>
        <View>
          <Feather name="x" size={24} color="white" />
        </View>
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
        Add Exercises
      </Text>

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

  headerShadowVisible: false,
};
