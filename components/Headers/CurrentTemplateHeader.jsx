import { MaterialIcons } from "@expo/vector-icons";
import PrimaryButton from "components/Buttons/PrimaryButton";
import {
  useModalStore,
  VisibleModals,
} from "components/PopUpModals/stores/ModalStore";
import TimerDisplay from "components/TimerDisplay";
import React from "react";
import { View } from "react-native";
import { useRestTimerStore } from "stores/restTimerStore";

const CurrentTemplateHeader = ({ handleSubmit }) => {
  const setVisible = useModalStore((state) => state.setVisible);
  const increaseDuration = useRestTimerStore((state) => state.increaseDuration);
  const decreaseDuration = useRestTimerStore((state) => state.decreaseDuration);

  const current = useRestTimerStore((state) => state.current);
  const intervalRef = useRestTimerStore((state) => state.intervalRef);

  return (
    <View>
      <View
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
            handlePress={() => setVisible(VisibleModals.StartRestTimer)}
          />
        </View>

        <PrimaryButton
          title="Finish"
          containerStyles={"px-4"}
          handlePress={() => setVisible(VisibleModals.FinishWorkout)}
        />
      </View>
    </View>
  );
};

export default CurrentTemplateHeader;
