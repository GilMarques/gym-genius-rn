import { getTailwindConfig } from "lib/helper";
import React, { useEffect, useReducer, useRef } from "react";
import { useController } from "react-hook-form";
import { View } from "react-native";
import { TextInput } from "react-native-gesture-handler";
import { useKeypadStore } from "stores/keypadStore";

function reducer(onChange, state, action) {
  return (state, action) => {
    switch (action.type) {
      case "BACKSPACE":
        const [start, end] = [state.selection.start, state.selection.end];
        if (start == end) {
          return {
            ...state,
            input: state.input.substring(0, state.selection.start - 1),
          };
        }
        return {
          ...state,
          input:
            state.input.substring(0, state.selection.start) +
            state.input.substring(state.selection.end),
        };

      case "PRESS":
        const result =
          state.input.substring(0, state.selection.start) +
          action.text +
          state.input.substring(state.selection.end);
        onChange(result);
        return {
          ...state,
          input: result,
        };

      case "DOT":
        if (state.input.includes(".")) {
          return state;
        }

        return {
          ...state,
          input:
            state.input.substring(0, state.selection.start) +
            "." +
            state.input.substring(state.selection.end),
        };

      case "SET_SELECTION":
        return {
          ...state,
          selection: action.selection,
        };
      default:
        return state;
    }
  };
}

function reducerModifier(field) {}

const config = getTailwindConfig();

const CustomTextInput = ({ name, control, placeholder, isComplete }) => {
  const { field } = useController({
    name,
    control,
  });

  const [state, dispatch] = useReducer(reducer(field.onChange), {
    input: "",
    selection: { start: 0, end: 0 },
  });

  const keypadVisible = useKeypadStore((state) => state.visible);
  const setInputDispatch = useKeypadStore((state) => state.setInputDispatch);
  const openKeypad = useKeypadStore((state) => state.open);
  const ref = useRef(null);

  useEffect(() => {
    if (!keypadVisible && ref.current) {
      ref.current.blur();
    }
  }, [keypadVisible]);

  return (
    <View className="w-[90%]">
      <TextInput
        ref={ref}
        value={field.value}
        cursorColor={"white"}
        showSoftInputOnFocus={false}
        selectTextOnFocus={true}
        onSelectionChange={(e) => {
          dispatch({
            type: "SET_SELECTION",
            selection: e.nativeEvent.selection,
          });
        }}
        onFocus={() => {
          setInputDispatch(dispatch);
          openKeypad();
        }}
        maxLength={6}
        placeholder={placeholder}
        placeholderTextColor={"#ffffff"}
        className="rounded-md border text-center text-white"
        style={{
          backgroundColor: isComplete
            ? config.theme.colors.secondary
            : "transparent",
          borderColor: isComplete ? config.theme.colors.primary.dark : "white",
        }}
      />
    </View>
  );
};

export default CustomTextInput;
