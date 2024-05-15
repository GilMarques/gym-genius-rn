import { createContext, useContext, useEffect, useRef, useState } from "react";
import { getCurrentUser } from "../lib/appwrite";

const GlobalContext = createContext();

export const useGlobalContext = () => useContext(GlobalContext);

const GlobalProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  const [seconds, setSeconds] = useState(0);
  const intervalRef = useRef(null);
  const [currentWorkout, setCurrentWorkout] = useState({
    id: 3,

    title: "Title 3",
    exercises: [
      {
        id: 1,
        name: "Exercise 1",
        equipment: "Dumbbell",
        sets: [
          {
            previous: { weight: 0, reps: 0 },
            current: { weight: null, reps: null },
          },
          {
            previous: { weight: 0, reps: 0 },
            current: { weight: null, reps: null },
          },
          {
            previous: null,
            current: { weight: null, reps: null },
          },
        ],
      },
      {
        id: 2,
        name: "Exercise 2",

        sets: [
          {
            previous: null,
            current: { weight: null, reps: null },
          },
        ],
      },
      {
        id: 3,
        name: "Exercise 3",
        sets: [
          { previous: null, current: { weight: null, reps: null } },
          { previous: null, current: { weight: null, reps: null } },
        ],
      },
    ],
  });

  // function handleStartTimer() {
  //   intervalRef.current = setInterval(() => {
  //     setSeconds((seconds) => seconds + 1);
  //   }, 1000);
  // }

  // function handleStopTimer() {
  //   clearInterval(intervalRef.current);
  // }

  useEffect(() => {
    getCurrentUser()
      .then((res) => {
        if (res) {
          setIsLoggedIn(true);
          setUser(res);
        } else {
          setIsLoggedIn(false);
          setUser(null);
        }
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, []);

  return (
    <GlobalContext.Provider
      value={{
        isLoggedIn,
        setIsLoggedIn,
        user,
        setUser,
        isLoading,

        seconds,
        setSeconds,
        currentWorkout,
        setCurrentWorkout,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export default GlobalProvider;
