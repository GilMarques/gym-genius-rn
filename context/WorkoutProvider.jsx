import {
  createContext,
  useContext,
  useEffect,
  useReducer,
  useRef,
  useState,
} from "react";

export const WorkoutContext = createContext();
export const WorkoutDispatchContext = createContext();

function addSet(exerciseIndex) {
  dispatch({ type: "addSet", index: exerciseIndex });
}

function updateSet(exerciseIndex, setIndex, field, value) {
  dispatch({
    type: "updateSet",
    index: exerciseIndex,
    setIndex: setIndex,
    field: field,
    value: value,
  });
}

function removeSet(exerciseIndex, setIndex) {
  dispatch({ type: "removeSet", index: exerciseIndex });
}

function addExercise(exerciseId, exerciseName) {
  dispatch({ type: "addExercise", id: exerciseId, name: exerciseName });
}

function removeExercise(exerciseIndex) {
  dispatch({ type: "removeExercise", index: exerciseIndex });
}

const ACTIONS = {
  ADD_SET: "addSet",
  REMOVE_SET: "removeSet",
  UPDATE_SET: "updateSet",
};

function workoutReducer(state, action) {
  // switch (action.type) {
  //   case ACTIONS.ADD_SET:
  //     return {
  //       ...state,
  //       exercises: state.exercises.map((exercise, index) => {
  //         if (index === action.index) {
  //           return {
  //             ...exercise,
  //             sets: [...exercise.sets, { previous: null, current: null }],
  //           };
  //         }
  //         return exercise;
  //       }),
  //     };
  //   case ACTIONS.REMOVE_SET:
  //     return {
  //       ...state,
  //       exercises: state.exercises.map((exercise, index) => {
  //         if (index === action.index) {
  //           return {
  //             ...exercise,
  //             sets: exercise.sets.filter((set, setIndex) => {
  //               return setIndex !== action.setIndex;
  //             }),
  //           };
  //         }
  //         return exercise;
  //       }),
  //     };
  //   case ACTIONS.UPDATE_SET:
  //     return {
  //       ...state,
  //       exercises: state.exercises.map((exercise, index) => {
  //         if (index === action.index) {
  //           return {
  //             ...exercise,
  //             sets: exercise.sets.map((set, setIndex) => {
  //               if (setIndex === action.setIndex) {
  //                 return {
  //                   ...set,
  //                   [action.field]: action.value,
  //                 };
  //               }
  //               return set;
  //             }),
  //           };
  //         }
  //         return exercise;
  //       }),
  //     };

  //   default:
  //     return state;
  // }
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

  useEffect(() => {
    setInterval(() => {
      setWorkoutTimer((prevTimer) => prevTimer + 1);
    }, 1000);
  }, []);

  return (
    <WorkoutContext.Provider value={{ currentWorkout, workoutTimer }}>
      <WorkoutDispatchContext.Provider value={dispatch}>
        {children}
      </WorkoutDispatchContext.Provider>
    </WorkoutContext.Provider>
  );
}

const initialWorkout = {
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
};
