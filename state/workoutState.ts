import { data } from "data/exerciseData";
import { initialWorkout } from "data/initialWorkout";
import uuid from "react-native-uuid";
import { ExerciseProps } from "types/Types";
import { create } from "zustand";

interface workoutState {
  title: string;
  exercises: ExerciseProps[];

  addSet: (exerciseId: number) => void;
  removeSet: (exerciseId: number, setId: string) => void;
  addExercise: (exerciseId: number) => void;
  removeExercise: (exerciseId: number) => void;
  reorderExercises: (data: ExerciseProps[]) => void;
  addExercises: (exerciseIds: number[]) => void;
}

export const useWorkoutStore = create<workoutState>((set) => ({
  title: initialWorkout.title,
  exercises: initialWorkout.exercises,
  addSet: (exerciseId) =>
    set((state) => ({
      ...state,
      exercises: state.exercises.map((exercise) => {
        if (exercise.id === exerciseId) {
          return {
            ...exercise,
            sets: [
              ...exercise.sets,
              {
                id: uuid.v4() as string,
                previous: null,
              },
            ],
          };
        }
        return exercise;
      }),
    })),
  removeSet: (exerciseId, setId) =>
    set((state) => ({
      ...state,
      exercises: state.exercises.map((exercise) => {
        if (exercise.id === exerciseId) {
          exercise.sets = exercise.sets.filter((set) => {
            return set.id !== setId;
          });
        }
        return exercise;
      }),
    })),
  addExercise: (exerciseId) => {
    const exercise = data.find((e) => e.id === exerciseId);
    set((state) => ({
      ...state,
      exercises: [
        ...state.exercises,
        {
          id: exercise.id,
          name: exercise.name,
          restTime: 0,
          sets: [
            {
              id: uuid.v4() as string,
              previous: null,
            },
          ],
        },
      ],
    }));
  },
  removeExercise: (exerciseId) =>
    set((state) => ({
      ...state,
      exercises: state.exercises.filter(
        (exercise) => exercise.id !== exerciseId
      ),
    })),

  reorderExercises: (data) => set((state) => ({ ...state, exercises: data })),
  addExercises: (exerciseIds) =>
    set((state) => {
      const newExercises = exerciseIds.map((id) => {
        const exercise = data.find((e) => e.id === id);
        return {
          id: exercise.id,
          name: exercise.name,
          restTime: 0,
          sets: [
            {
              id: uuid.v4() as string,
              previous: null,
            },
          ],
        };
      });
      return {
        ...state,
        exercises: [...state.exercises, ...newExercises],
      };
    }),
}));
