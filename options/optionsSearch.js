import { Feather } from "@expo/vector-icons";
import { TransitionPresets } from "@react-navigation/stack";
import { data } from "data/exerciseData";
import { router } from "expo-router";
import { Text, TouchableWithoutFeedback, View } from "react-native";

export const optionsSearch = ({ route }) => {
  const { name } = data.find((e) => e.id === parseInt(route.params.exerciseId));
  return {
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
          {name}
        </Text>

        <TouchableWithoutFeedback onPress={() => {}}>
          <Feather name="edit-3" size={24} color="white" />
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
};
