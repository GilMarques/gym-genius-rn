import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";
import { getTailwindConfig } from "lib/helper";
import React, { useCallback, useRef, useState } from "react";
import { Text, View } from "react-native";
import {
  TextInput,
  TouchableWithoutFeedback,
} from "react-native-gesture-handler";
import Animated from "react-native-reanimated";

const fullConfig = getTailwindConfig();
const KeyPadButton = ({ text, onPress }) => {
  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <View
        className="flex h-12 w-24 items-center justify-center rounded-md bg-[#323232]"
        style={{
          shadowColor: "#fff",
          shadowOffset: { width: 2, height: 2 },
          shadowOpacity: 1,
          shadowRadius: 0,
          elevation: 1,
        }}
      >
        <Text className="text-xl font-bold text-white">{text}</Text>
      </View>
    </TouchableWithoutFeedback>
  );
};
const CloseButton = () => {
  return (
    <TouchableWithoutFeedback>
      <View className="flex h-12 w-24 items-center justify-center rounded-md bg-[#323232]">
        <MaterialCommunityIcons name="keyboard-close" size={24} color="white" />
      </View>
    </TouchableWithoutFeedback>
  );
};

const DotButton = ({ onPress }) => {
  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <View className="w-24 flex-row justify-center">
        <Text className="text-3xl text-white">.</Text>
      </View>
    </TouchableWithoutFeedback>
  );
};

const TextButton = ({ text }) => {
  return (
    <TouchableWithoutFeedback>
      <View className="flex h-12 w-24 items-center justify-center rounded-md bg-[#323232]">
        <Text className="font-bold text-white">{text}</Text>
      </View>
    </TouchableWithoutFeedback>
  );
};

const BackspaceButton = ({ onPress }) => {
  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <View className="flex h-12 w-24 items-center justify-center">
        <Ionicons name="backspace" size={24} color="white" />
      </View>
    </TouchableWithoutFeedback>
  );
};

const CustomKeyboard = ({ input, setInput, selection }) => {
  const backspaceBehavior = useCallback(() => {
    setInput((prev) => {
      const [start, end] = [selection.start, selection.end];
      if (start == end) {
        return prev.substring(0, selection.start - 1);
      }
      return prev.substring(0, selection.start) + prev.substring(selection.end);
    });
  }, [selection]);

  const pressBehavior = useCallback(
    (text) => {
      setInput((prev) => {
        return (
          prev.substring(0, selection.start) +
          text +
          prev.substring(selection.end)
        );
      });
    },
    [selection]
  );

  const dotBehavior = useCallback(() => {
    setInput((prev) => {
      if (prev.includes(".")) {
        return prev;
      }
      return (
        prev.substring(0, selection.start) + "." + prev.substring(selection.end)
      );
    });
  }, [selection]);

  return (
    <Animated.View className="absolute top-full h-[400px] w-full bg-[#1d1d1d]">
      <View className="mb-2 flex-row justify-around">
        <CloseButton />
        <TextButton text={"RPE"} onPress={() => setInput("RPE")} />
        <TextButton text={"Next"} />
      </View>
      <View className="mt-2 flex-row justify-around">
        <KeyPadButton text="1" onPress={() => pressBehavior("1")} />
        <KeyPadButton text="2" onPress={() => pressBehavior("2")} />
        <KeyPadButton text="3" onPress={() => pressBehavior("3")} />
      </View>
      <View className="mt-2 flex-row justify-around">
        <KeyPadButton text="4" onPress={() => pressBehavior("4")} />
        <KeyPadButton text="5" onPress={() => pressBehavior("5")} />
        <KeyPadButton text="6" onPress={() => pressBehavior("6")} />
      </View>
      <View className="mt-2 flex-row justify-around">
        <KeyPadButton text="7" onPress={() => pressBehavior("7")} />
        <KeyPadButton text="8" onPress={() => pressBehavior("8")} />
        <KeyPadButton text="9" onPress={() => pressBehavior("9")} />
      </View>

      <View className="mt-2 flex-row justify-around">
        <DotButton onPress={() => dotBehavior()} />
        <KeyPadButton text="0" onPress={() => pressBehavior("0")} />
        <BackspaceButton onPress={() => backspaceBehavior()} />
      </View>
    </Animated.View>
  );
};

const CustomTextInput = ({ placeholder, checked = false }) => {
  const [input, setInput] = useState("1231.23");

  const [selection, setSelection] = useState({ start: 0, end: 0 });
  const ref = useRef(null);
  return (
    <View>
      <TextInput
        ref={ref}
        placeholder={placeholder}
        placeholderTextColor={"#ffffff"}
        className="rounded-md border border-white text-center text-white"
        value={input}
        onChangeText={(text) => setInput(text)}
        showSoftInputOnFocus={false}
        selectTextOnFocus={true}
        onSelectionChange={(e) => {
          setSelection(e.nativeEvent.selection);
        }}
      />
      <CustomKeyboard input={input} setInput={setInput} selection={selection} />
    </View>
  );
};

export default CustomTextInput;
