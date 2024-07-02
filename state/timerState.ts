import { create } from "zustand";

enum TimerToggle {
  Play,
  Pause,
  Rest,
}

interface TimerState {
  time: number;
  ref: any;
  increaseTime: () => void;
  pause: () => void;
}

interface Toggle {
  type: TimerToggle;
  setType: () => void;
}

interface RestTimerState {
  duration: number;
}

export const useStore = create<TimerState>((set) => ({
  time: 0,
  ref: null,
  increaseTime: () => set((state) => ({ ...state, time: state.time + 1 })),
  setRef: (ref) => set((state) => ({ ...state, ref: ref })),
  pause: () => {},
}));
