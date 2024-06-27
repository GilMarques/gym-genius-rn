import { WorkoutProps } from "types/Types";

export const initialWorkout: WorkoutProps = {
  title: "Legs",
  exercises: [
    {
      id: 1,
      name: "Squats",

      restTime: 120,
      sets: [
        {
          id: "a1",
          previous: { reps: 10, weight: 50 },
        },
        {
          id: "a2",
          previous: { reps: 10, weight: 50 },
        },
        {
          id: "a3",
          previous: null,
        },
      ],
    },
    {
      id: 2,
      name: "Deadlifts",
      restTime: 0,
      sets: [
        {
          id: "b1",
          previous: { reps: 10, weight: 50 },
        },
        {
          id: "b2",
          previous: { reps: 10, weight: 50 },
        },
        {
          id: "b3",
          previous: { reps: 10, weight: 50 },
        },
      ],
    },
    {
      id: 5,
      name: "Split Squat",
      restTime: 0,
      sets: [
        {
          id: "c1",
          previous: { reps: 10, weight: 50 },
        },
        {
          id: "c2",
          previous: { reps: 10, weight: 50 },
        },
        {
          id: "c3",
          previous: { reps: 10, weight: 50 },
        },
      ],
    },
  ],
};
