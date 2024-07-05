import { create } from "zustand";

interface RestTimerState {
  startDate: Date;
  intervalRef: any;
  current: number;
  duration: number;
  setRef: (ref) => void;
  setNewTimer: (duration) => void;
  decrease: () => void;
  increaseDuration: () => void;
  decreaseDuration: () => void;
}

export const useRestTimerStore = create<RestTimerState>((set) => ({
  startDate: new Date(),
  intervalRef: null,
  current: 0,
  duration: 0,
  setRef: (ref) => set((state) => ({ ...state, intervalRef: ref })),
  setNewTimer: (duration) =>
    set((state) => ({
      ...state,
      duration: duration,
      current: duration,
      startDate: new Date(),
    })),
  decrease: () =>
    set((state) => {
      if (state.current === 0) {
        clearInterval(state.intervalRef);
        return {
          ...state,
          intervalRef: null,
          duration: 0,
          current: 0,
        };
      }
      return { ...state, current: state.current - 1 };
    }),
  decreaseDuration: () => {
    set((state) => {
      if (state.current - 15 <= 0) {
        clearInterval(state.intervalRef);
        return {
          ...state,
          intervalRef: null,
          duration: 0,
          current: 0,
        };
      }
      return {
        ...state,
        duration: state.duration - 15,
        current: state.current - 15,
      };
    });
  },
  increaseDuration: () => {
    set((state) => ({
      ...state,
      duration: state.duration + 15,
      current: state.current + 15,
    }));
  },
}));

export const startRestTimer = (
  duration: number,
  ref,
  setNewTimer: (duration) => void,
  decrease: () => void,
  setRef: (ref) => void
) => {
  if (ref) clearInterval(ref);
  setNewTimer(duration);
  const intervalRef = setInterval(() => {
    decrease();
  }, 1000);

  setRef(intervalRef);
  return intervalRef;
};

export const stopRestTimer = (ref, setRef: (ref) => void) => {
  clearInterval(ref);
  setRef(null);
};
