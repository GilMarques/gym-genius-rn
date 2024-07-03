import { createContext, useContext, useRef, useState } from "react";

export const KeypadContext = createContext();

export function useKeypadContext() {
  return useContext(KeypadContext);
}

export function KeypadProvider({ children }) {
  const dispatch = useRef(null);
  const [visible, setVisible] = useState(false);

  const setInputDispatch = (newDispatch) => {
    dispatch.current = newDispatch;
  };

  const value = {
    state: { dispatch, keypadVisible: visible },
    actions: {
      setInputDispatch,
      openKeypad: () => setVisible(true),
      closeKeypad: () => setVisible(false),
    },
  };

  return (
    <KeypadContext.Provider value={value}>{children}</KeypadContext.Provider>
  );
}
