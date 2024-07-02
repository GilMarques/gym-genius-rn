import { data } from "data/exerciseData";
import uuid from "react-native-uuid";
import { Action, WorkoutProps } from "types/Types";
import { ACTIONS } from "./workoutProviderActions";

//TODO: Connect history
export function workoutReducer(state: WorkoutProps, action: Action) {
  switch (action.type) {
    case ACTIONS.ADD_SET:
      const result = {
        ...state,
        exercises: state.exercises.map((exercise) => {
          if (exercise.id === action.payload.exerciseId) {
            return {
              ...exercise,
              sets: [
                ...exercise.sets,
                {
                  id: uuid.v4(),
                  previous: null,
                  current: null,
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
          if (exercise.id === action.payload.exerciseId) {
            return {
              ...exercise,
              sets: exercise.sets.filter((set) => {
                return set.id !== action.payload.setId;
              }),
            };
          }
          return exercise;
        }),
      };
    case ACTIONS.ADD_EXERCISE:
      const exercise = data.find((e) => e.id === action.payload.exerciseId);
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
              },
            ],
          },
        ],
      };

    case ACTIONS.REMOVE_EXERCISE:
      return {
        ...state,
        exercises: state.exercises.filter(
          (exercise) => exercise.id !== action.payload.exerciseId
        ),
      };

    case ACTIONS.SET_NOTE:
      return {
        ...state,
        exercises: state.exercises.map((exercise) => {
          if (exercise.id === action.payload.exerciseId) {
            return {
              ...exercise,
              note: action.payload.note,
            };
          }
          return exercise;
        }),
      };

    case ACTIONS.REORDER_EXERCISES:
      return {
        ...state,
        exercises: action.payload.data,
      };

    default:
      return state;
  }
}
