import OutlineButton from "components/Buttons/OutlineButton";
import PrimaryButton from "components/Buttons/PrimaryButton";
import PopUpModal from "components/PopUpModal";
import React, { useState } from "react";
import { StyleSheet, Text, TextInput, View } from "react-native";

const NoteModal = ({ visible, onSubmit, onClose, note }) => {
  const [value, setValue] = useState(note);

  return (
    <PopUpModal visible={visible}>
      <Text className="self-center text-xl font-bold text-white">
        Exercise Note
      </Text>

      <TextInput
        placeholder="Please enter your notes here"
        placeholderTextColor={"lightgrey"}
        backgroundColor="grey"
        style={{ height: 140, textAlignVertical: "center" }}
        className="mt-4 rounded-md px-4 py-2"
        value={value}
        onChangeText={(text) => setValue(text)}
        multiline={true}
        maxLength={200}
      />
      <Text className="self-end text-white">{value.length}/200</Text>

      <View className="mt-4 flex-row justify-around">
        <OutlineButton
          title={"Cancel"}
          containerStyles={"px-4"}
          handlePress={() => onClose()}
        />
        <PrimaryButton
          title={"OK"}
          containerStyles={"px-4"}
          handlePress={() => onSubmit(value)}
        />
      </View>
    </PopUpModal>
  );
};

const styles = StyleSheet.create({
  pickerItem: {
    fontWeight: "600",
    textAlign: "center",
    textAlignVertical: "center",
    color: "#fff",
  },
  indicatorHolder: {
    position: "absolute",
    alignSelf: "center",
  },

  indicator: {
    width: 120,
    height: 1,
    backgroundColor: "#ccc",
  },
});

export default NoteModal;
