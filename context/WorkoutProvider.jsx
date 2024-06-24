import { workoutReducer } from "lib/workoutReducer";
import { createContext, useContext, useReducer } from "react";

export const WorkoutContext = createContext();
export const WorkoutDispatchContext = createContext();

export function useWorkoutContext() {
  return useContext(WorkoutContext);
}

export function useWorkoutDispatchContext() {
  return useContext(WorkoutDispatchContext);
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

  return (
    <WorkoutContext.Provider
      value={{
        currentWorkout,

        title: currentWorkout.title,
      }}
    >
      <WorkoutDispatchContext.Provider
        value={{
          dispatch,
          addSet,
          removeSet,
          updateSet,
          addExercises,
          removeExercise,
        }}
      >
        {children}
      </WorkoutDispatchContext.Provider>
    </WorkoutContext.Provider>
  );
}

const initialWorkout = {
  title: "Legs",
  exercises: [],
};
