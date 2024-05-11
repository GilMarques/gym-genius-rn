import { FontAwesome6 } from "@expo/vector-icons";
import React, { useRef } from "react";
import { Text, View } from "react-native";
import { TouchableWithoutFeedback } from "react-native-gesture-handler";
import Exercise from "./Exercise";
import FormField from "./FormField";
const WorkoutBottomSheet = ({ title = "Title", exercises = [] }) => {
  const bottomSheetModalRef = useRef(null);

  const snapPoints = ["95%"];
  function handlePresentModal() {
    bottomSheetModalRef.current?.present();
  }
  return (
    <View className="p-8">
      <View>
        <Text className="text-2xl font-bold text-secondary">
          {title} {"  "}
          <FontAwesome6 name="pencil" size={15} color="white" />
        </Text>
      </View>

      <FormField placeholder={"Note"} otherStyles={"text-white"} />

      {exercises.map((exercise, index) => (
        <Exercise key={index} {...exercise} index={index} />
      ))}

      <TouchableWithoutFeedback onPress={handlePresentModal}>
        <Text className="text-center font-bold text-white">ADD EXERCISE</Text>
      </TouchableWithoutFeedback>

      {/* <BottomSheetModal
        ref={bottomSheetModalRef}
        index={0}
        snapPoints={snapPoints}
        backgroundStyle={{
          backgroundColor: "#00031b",
        }}
        handleIndicatorStyle={{
          backgroundColor: "#ffc68a",
          width: "25%",
        }}
        stackBehavior="push"
      >
        <AddExercise />
      </BottomSheetModal> */}
    </View>
  );
};

export default WorkoutBottomSheet;
