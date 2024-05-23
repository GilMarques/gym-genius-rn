import {
  createContext,
  useContext,
  useEffect,
  useReducer,
  useRef,
  useState,
} from "react";

import uuid from "react-native-uuid";

export const WorkoutContext = createContext();
export const WorkoutDispatchContext = createContext();

const ACTIONS = {
  ADD_SET: "addSet",
  REMOVE_SET: "removeSet",
  UPDATE_SET: "updateSet",
};

function workoutReducer(state, action) {
  switch (action.type) {
    case ACTIONS.ADD_SET:
      const result = {
        ...state,
        exercises: state.exercises.map((exercise) => {
          if (exercise.id === action.exerciseId) {
            return {
              ...exercise,
              sets: [
                ...exercise.sets,
                {
                  id: uuid.v4(),
                  previous: { weight: 0, reps: 0 },
                  current: { weight: null, reps: null },
                },
              ],
            };
          }
          return exercise;
        }),
      };

      return result;
    case ACTIONS.REMOVE_SET:
      return {
        ...state,
        exercises: state.exercises.map((exercise) => {
          if (exercise.id === action.exerciseId) {
            return {
              ...exercise,
              sets: exercise.sets.filter((set) => {
                return set.id !== action.setId;
              }),
            };
          }
          return exercise;
        }),
      };

    default:
      return state;
  }
  return state;
}

export function useWorkoutContext() {
  return useContext(WorkoutContext);
}

export function useWorkoutDispatchContext() {
  return useContext(WorkoutDispatchContext);
}

export function WorkoutProvider({ children }) {
  const [workoutTimer, setWorkoutTimer] = useState(0);
  const intervalRef = useRef(null);
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

  function addExercise(exerciseId, exerciseName) {
    dispatch({ type: "addExercise", id: exerciseId, name: exerciseName });
  }

  function removeExercise(exerciseId) {
    dispatch({ type: "removeExercise", exerciseId });
  }

  useEffect(() => {
    setInterval(() => {
      setWorkoutTimer((prevTimer) => prevTimer + 1);
    }, 1000);
  }, []);

  return (
    <WorkoutContext.Provider value={{ currentWorkout, workoutTimer }}>
      <WorkoutDispatchContext.Provider
        value={{ dispatch, addSet, removeSet, updateSet }}
      >
        {children}
      </WorkoutDispatchContext.Provider>
    </WorkoutContext.Provider>
  );
}

const initialWorkout = {
  id: uuid.v4(),
  title: "Title 3",
  exercises: [
    {
      id: uuid.v4(),
      name: "Exercise 1",
      equipment: "Dumbbell",
      sets: [
        {
          id: uuid.v4(),
          previous: { weight: 0, reps: 0 },
          current: { weight: null, reps: null },
        },
        {
          id: uuid.v4(),
          previous: { weight: 0, reps: 0 },
          current: { weight: null, reps: null },
        },
        {
          id: uuid.v4(),
          previous: null,
          current: { weight: null, reps: null },
        },
      ],
    },
    {
      id: uuid.v4(),
      name: "Exercise 2",

      sets: [
        {
          id: uuid.v4(),
          previous: null,
          current: { weight: null, reps: null },
        },
      ],
    },
    {
      id: uuid.v4(),
      name: "Exercise 3",
      sets: [
        {
          id: uuid.v4(),
          previous: null,
          current: { weight: null, reps: null },
        },
        {
          id: uuid.v4(),
          previous: null,
          current: { weight: null, reps: null },
        },
      ],
    },
  ],
};
