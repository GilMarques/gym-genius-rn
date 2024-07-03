import { create } from "zustand";

interface RestTimerState {
  startDate: Date;
  intervalRef: any;
  current: number;
  duration: number;
  setRef: (ref) => void;
  decrease: () => void;
  increaseDuration: () => void;
  decreaseDuration: () => void;
}

export const useStore = create<RestTimerState>((set) => ({
  startDate: new Date(),
  intervalRef: null,
  current: 0,
  duration: 0,
  setRef: (ref) => set((state) => ({ ...state, ref: ref })),
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
      return { ...state, time: state.current - 1 };
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

export const startTimer = (decrease: () => void, setRef: (ref) => void) => {
  const intervalRef = setInterval(() => {
    decrease();
  }, 1000);
  setRef(intervalRef);
  return () => clearInterval(intervalRef);
};
