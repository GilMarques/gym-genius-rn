export function addSet(dispatch, exerciseId) {
  return () => dispatch({ type: ACTIONS.ADD_SET, exerciseId });
}

export function updateSet(dispatch) {
  return (exerciseIndex, setIndex, field, value) =>
    dispatch({
      type: "updateSet",
      exerciseIndex,
      setIndex,
      field,
      value,
    });
}

export function removeSet(dispatch) {
  return (exerciseId, setId) =>
    dispatch({ type: ACTIONS.REMOVE_SET, exerciseId, setId });
}

export function addExercises(dispatch) {
  return (exerciseIds) =>
    exerciseIds.forEach((exerciseId) =>
      dispatch({ type: "addExercise", id: exerciseId })
    );
}

export function removeExercise(dispatch) {
  return (exerciseId) => dispatch({ type: "removeExercise", exerciseId });
}
