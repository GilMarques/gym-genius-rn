import { initialWorkout } from "data/initialWorkout";
import {
  addExercises,
  addSet,
  removeExercise,
  removeSet,
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
      addExercises: addExercises(dispatch),
      removeExercise: removeExercise(dispatch),
    },
  };

  return (
    <WorkoutContext.Provider value={value}>{children}</WorkoutContext.Provider>
  );
}
