import { create } from "zustand";

interface keypadState {
  visible: boolean;
  setVisible: (visible: boolean) => void;
  dispatch: any;
  setInputDispatch: (dispatch: any) => void;
  close: () => void;
  open: () => void;
}

export const useKeypadStore = create<keypadState>((set) => ({
  visible: false,
  setVisible: (visible) => set({ visible }),
  dispatch: null,
  setInputDispatch: (dispatch) => set({ dispatch }),
  close: () => set({ visible: false }),
  open: () => set({ visible: true }),
}));
