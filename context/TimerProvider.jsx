import { createContext, useContext, useEffect, useRef, useState } from "react";

export const TimerContext = createContext();

export function useTimerContext() {
  return useContext(TimerContext);
}

export function TimerProvider({ children }) {
  const [state, setState] = useState("play");
  const [workoutTimer, setWorkoutTimer] = useState(0);
  const [restTimer, setRestTimer] = useState({
    start: Date.now(),
    duration: 0,
  });

  const intervalRef = useRef(null);

  function startTimer() {
    setState("play");
    setWorkoutTimer(0);
    intervalRef.current = setInterval(() => {
      setWorkoutTimer((prevTimer) => prevTimer + 1);
    }, 1000);

    return () => clearInterval(intervalRef.current);
  }

  function resumeTimer(value) {
    setState("play");
    setRestTimer({
      start: Date.now(),
      duration: value,
    });
  }

  function pauseTimer() {
    setState("pause");
    clearInterval(intervalRef.current);
  }

  function startRestTimer(duration) {
    setState("pause");
    setRestTimer({
      start: Date.now(),
      duration: duration,
    });
  }

  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setWorkoutTimer((prevTimer) => {
        return prevTimer + 1;
      });
    }, 1000);

    return () => clearInterval(intervalRef.current);
  }, []);

  const value = {
    state: {
      state,
      workoutTimer,
      restTimer,
    },
    actions: { startTimer, resumeTimer, pauseTimer, startRestTimer },
  };

  return (
    <TimerContext.Provider value={value}>{children}</TimerContext.Provider>
  );
}
