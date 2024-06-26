import { ACTIONS } from "lib/workoutProviderActions";

export type ExerciseProps = {
  id: number;
  name: string;
  note?: string;
  restTime: number;
  sets: {
    id: string;

    previous: { reps: number; weight: number } | null;
    current: { reps: number; weight: number };
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
  | { type: "removeExercise"; payload: { exerciseId: number } };

export type ActionType = (typeof ACTIONS)[keyof typeof ACTIONS];
