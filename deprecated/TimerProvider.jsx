import { createContext, useContext, useRef, useState } from "react";

export const TimerContext = createContext();

export function useTimerContext() {
  return useContext(TimerContext);
}

export function TimerProvider({ children }) {
  const [state, setState] = useState("play");
  const [workoutTimer, setWorkoutTimer] = useState(0);
  const [restTimer, setRestTimer] = useState({
    start: Date.now(),
    duration: 300,
    current: 300,
  });

  const intervalRef = useRef(null);
  const restTimerIntervalRef = useRef(null);

  function startTimer() {
    setState("play");
    setWorkoutTimer(0);
    if (intervalRef.current) clearInterval(intervalRef.current);
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
    clearInterval(restTimerIntervalRef.current);
    setState("rest");
    setRestTimer({
      start: Date.now(),
      duration: duration,
      current: duration,
    });

    restTimerIntervalRef.current = setInterval(() => {
      setRestTimer((prevTimer) => {
        if (prevTimer.current <= 0) {
          setState("play");
          clearInterval(restTimerIntervalRef.current);
          return prevTimer;
        }
        return {
          ...prevTimer,
          current: prevTimer.current - 1,
        };
      });
    }, 1000);

    return () => clearInterval(restTimerIntervalRef.current);
  }

  function incrementRestTimer() {
    setRestTimer((prevTimer) => {
      return {
        ...prevTimer,
        current: prevTimer.current + 15,
        duration: prevTimer.duration + 15,
      };
    });
  }

  function decrementRestTimer() {
    setRestTimer((prevTimer) => {
      if (prevTimer.current - 15 <= 0) {
        clearInterval(restTimerIntervalRef.current);
        setState("play");
        return prevTimer;
      }
      return {
        ...prevTimer,
        current: prevTimer.current - 15,
        duration: prevTimer.duration - 15,
      };
    });
  }

  const value = {
    state: {
      state,
      workoutTimer,
      restTimer,
    },
    actions: {
      startTimer,
      resumeTimer,
      pauseTimer,
      startRestTimer,
      incrementRestTimer,
      decrementRestTimer,
    },
  };

  return (
    <TimerContext.Provider value={value}>{children}</TimerContext.Provider>
  );
}
