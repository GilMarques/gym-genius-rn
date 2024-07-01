import { TransitionPresets } from "@react-navigation/stack";

export const optionsReorder = {
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
        Reorder Exercises
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
