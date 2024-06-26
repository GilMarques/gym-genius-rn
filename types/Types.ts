import { ACTIONS } from "lib/workoutProviderActions";

export type ExerciseProps = {
  id: number;
  name: string;
  note?: string;
  restTime: number;
  sets: {
    id: string;

    previous: { reps: number; weight: number } | null;
  }[];
};

export type WorkoutProps = {
  title: string;
  exercises: ExerciseProps[];
};

export type Action =
  | { type: "addSet"; payload: { exerciseId: number } }
  | { type: "removeSet"; payload: { exerciseId: number; setId: string } }
  | { type: "addExercise"; payload: { exerciseId: number } }
  | { type: "removeExercise"; payload: { exerciseId: number } }
  | { type: "setNote"; payload: { exerciseId: number; note: string } }
  | { type: "reorderExercises"; payload: { data: WorkoutProps } };

export type ActionType = (typeof ACTIONS)[keyof typeof ACTIONS];
