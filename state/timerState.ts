import { create } from "zustand";

interface TimerState {
  time: number;
  intervalRef: any;
  active: boolean;
  setRef: (ref) => void;
  increase: () => void;
}

export const useStore = create<TimerState>((set) => ({
  time: 0,
  intervalRef: null,
  active: false,
  setRef: (ref) => set((state) => ({ ...state, ref: ref, active: true })),
  increase: () => set((state) => ({ ...state, time: state.time + 1 })),
}));
