import { useKeypadContext } from "context/KeypadProvider";
import React, { useEffect, useReducer, useRef } from "react";
import { View } from "react-native";
import { TextInput } from "react-native-gesture-handler";

function reducer(state, action) {
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
      return {
        ...state,
        input:
          state.input.substring(0, state.selection.start) +
          action.text +
          state.input.substring(state.selection.end),
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
}

const CustomTextInput = ({ placeholder, checked = false }) => {
  const [state, dispatch] = useReducer(reducer, {
    input: "",
    selection: { start: 0, end: 0 },
  });

  const { setInputDispatch, openKeypad, keypadVisible } = useKeypadContext();

  const ref = useRef(null);

  useEffect(() => {
    if (!keypadVisible) {
      ref.current.blur();
    }
  }, [keypadVisible]);

  return (
    <View className="w-[90%]">
      <TextInput
        ref={ref}
        placeholder={placeholder}
        placeholderTextColor={"#ffffff"}
        className="rounded-md border border-white text-center text-white"
        cursorColor={"white"}
        value={state.input}
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
      />
    </View>
  );
};

export default CustomTextInput;