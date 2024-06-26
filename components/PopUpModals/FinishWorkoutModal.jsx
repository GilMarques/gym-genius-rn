import PrimaryButton from "components/Buttons/PrimaryButton";
import PopUpModal from "components/PopUpModal";
import React from "react";
import { Text, View } from "react-native";
import OutlineButton from "../Buttons/OutlineButton";

const FinishWorkoutModal = ({ visible, setVisible, onFinish }) => {
  return (
    <PopUpModal visible={visible} setVisible={setVisible}>
      <Text className="text-center text-2xl font-bold text-white">
        Finish Workout
      </Text>
      <Text className="my-4 text-white">
        All empty sets will be discarded. All sets with valid data will be
        automatically marked as complete.
      </Text>
      <View className="flex-row justify-around">
        <OutlineButton
          title="Cancel"
          containerStyles={"px-4"}
          handlePress={() => setVisible(false)}
        />
        <PrimaryButton
          title="Finish"
          containerStyles={"px-4"}
          handlePress={onFinish}
        />
      </View>
    </PopUpModal>
  );
};

export default FinishWorkoutModal;
