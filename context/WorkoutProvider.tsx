import {
  addExercises,
  addSet,
  removeExercise,
  removeSet,
  updateSet,
} from "lib/workoutProviderActions";
import { workoutReducer } from "lib/workoutReducer";
import { createContext, useContext, useReducer } from "react";

export const WorkoutContext = createContext();

export function useWorkoutContext() {
  return useContext(WorkoutContext);
}

export function WorkoutProvider({ children }) {
  const [currentWorkout, dispatch] = useReducer(workoutReducer, initialWorkout);

  const value = {
    state: {
      currentWorkout,
      title: currentWorkout.title,
    },
    actions: {
      addSet: addSet(dispatch),
      removeSet: removeSet(dispatch),
      updateSet: updateSet(dispatch),
      addExercises: addExercises(dispatch),
      removeExercise: removeExercise(dispatch),
    },
  };

  return (
    <WorkoutContext.Provider value={value}>{children}</WorkoutContext.Provider>
  );
}

const initialWorkout: WorkoutProps = {
  title: "Legs",
  exercises: [
    {
      id: 1,
      name: "Squats",
      sets: [
        {
          id: "a1",
          previous: { reps: 10, weight: 50 },
          current: { reps: 10, weight: 50 },
          isCompleted: false,
        },
      ],
    },
    {
      id: 2,
      name: "Deadlifts",
      sets: [
        {
          id: "b2",
          previous: { reps: 10, weight: 50 },
          current: { reps: 10, weight: 50 },
          isCompleted: false,
        },
      ],
    },
  ],
};
