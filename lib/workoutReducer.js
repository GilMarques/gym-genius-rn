import uuid from "react-native-uuid";

export const ACTIONS = {
  ADD_SET: "addSet",
  REMOVE_SET: "removeSet",
  UPDATE_SET: "updateSet",
  ADD_EXERCISE: "addExercise",
  REMOVE_EXERCISE: "removeExercise",
  SWAP_EXERCISE: "swapExercise",
};

export function workoutReducer(state, action) {
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

    case ACTIONS.ADD_EXERCISE:
      const exercise = data.find((e) => e.id === parseInt(action.id));
      return {
        ...state,
        exercises: [
          ...state.exercises,
          {
            id: exercise.id,
            name: exercise.name,
            sets: [
              {
                id: uuid.v4(),
                previous: { weight: null, reps: null },
                current: { weight: null, reps: null },
              },
            ],
          },
        ],
      };

    default:
      return state;
  }
}
