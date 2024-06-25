import { workoutReducer } from "lib/workoutReducer";
import { createContext, useContext, useReducer } from "react";

export const WorkoutContext = createContext();

export function useWorkoutContext() {
  return useContext(WorkoutContext);
}

export function WorkoutProvider({ children }) {
  const [currentWorkout, dispatch] = useReducer(workoutReducer, initialWorkout);

  function addSet(exerciseId) {
    dispatch({ type: ACTIONS.ADD_SET, exerciseId });
  }

  function updateSet(exerciseIndex, setIndex, field, value) {
    dispatch({
      type: "updateSet",
      exerciseIndex,
      setIndex,
      field,
      value,
    });
  }

  function removeSet(exerciseId, setId) {
    dispatch({ type: ACTIONS.REMOVE_SET, exerciseId, setId });
  }

  function addExercises(exerciseIds) {
    for (const exerciseId of exerciseIds) {
      dispatch({ type: "addExercise", id: exerciseId });
    }
  }

  function removeExercise(exerciseId) {
    dispatch({ type: "removeExercise", exerciseId });
  }

  const value = {
    state: {
      currentWorkout,
      title: currentWorkout.title,
    },
    actions: {
      addSet,
      removeSet,
      updateSet,
      addExercises,
      removeExercise,
    },
  };

  return (
    <WorkoutContext.Provider value={value}>{children}</WorkoutContext.Provider>
  );
}

const initialWorkout = {
  title: "Legs",
  exercises: [],
};
