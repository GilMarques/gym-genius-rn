import { Action } from "types/Types";

export const ACTIONS = {
  ADD_SET: "addSet",
  REMOVE_SET: "removeSet",

  ADD_EXERCISE: "addExercise",
  REMOVE_EXERCISE: "removeExercise",
  SWAP_EXERCISE: "swapExercise",
} as const;

export function addSet(dispatch) {
  return (exerciseId: number) => {
    const action: Action = { type: ACTIONS.ADD_SET, payload: { exerciseId } };
    dispatch(action);
  };
}

export function removeSet(dispatch) {
  return (exerciseId: number, setId: string) =>
    dispatch({ type: ACTIONS.REMOVE_SET, payload: { exerciseId, setId } });
}

export function addExercises(dispatch) {
  return (exerciseIds: number[]) =>
    exerciseIds.forEach((exerciseId) =>
      dispatch({ type: "addExercise", payload: { exerciseId } })
    );
}

export function removeExercise(dispatch) {
  return (exerciseId: number) =>
    dispatch({ type: "removeExercise", payload: { exerciseId } });
}