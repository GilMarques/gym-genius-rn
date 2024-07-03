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
  setRef: (ref) =>
    set((state) => ({ ...state, ref: ref, active: ref ? true : false })),
  increase: () => set((state) => ({ ...state, time: state.time + 1 })),
}));

export const startTimer = (increase: () => void, setRef: (ref) => void) => {
  const intervalRef = setInterval(() => {
    increase();
  }, 1000);
  setRef(intervalRef);
  return intervalRef;
};

export const pauseTimer = (intervalRef, setRef: (ref) => void) => {
  clearInterval(intervalRef);
  setRef(null);
};

export const resumeTimer = (increase: () => void, setRef: (ref) => void) => {
  const intervalRef = setInterval(() => {
    increase();
  }, 1000);
  setRef(intervalRef);
  return () => clearInterval(intervalRef);
};
