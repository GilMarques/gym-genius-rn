import { MaterialIcons } from "@expo/vector-icons";
import { TransitionPresets } from "@react-navigation/stack";
import PrimaryButton from "components/Buttons/PrimaryButton";
import TimerDisplay from "components/TimerDisplay";
import { View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export const optionsCurrent = {
  ...TransitionPresets.ModalPresentationIOS,

  // topOffset: 30,
  gestureEnabled: true,
  presentation: "modal",
  header: () => (
    <SafeAreaView
      style={{
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        marginHorizontal: 20,
      }}
    >
      <View
        className="flex-row items-center justify-between"
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",

          gap: 10,
        }}
      >
        <TimerDisplay />
        <PrimaryButton
          title={<MaterialIcons name="alarm" size={20} color="white" />}
          containerStyles={"px-2"}
          handlePress={() => setRestTimerModalVisible(true)}
        />
      </View>

      <PrimaryButton
        title="Finish"
        containerStyles={"px-4"}
        handlePress={() => setFinishWorkoutModalVisible(true)}
      />
    </SafeAreaView>
  ),
  cardStyle: { backgroundColor: "#1a1a1a" },
  overlayStyle: { borderColor: "#1a1a1a" },
};
