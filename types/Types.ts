type ExerciseProps = {
    id: number;
    name: string;
    sets: {
      id: string;
      previous: { reps: number; weight: number };
      current: { reps: number; weight: number };
      isCompleted: boolean;
    }[];
  };
  
  type WorkoutProps = {
    title: string;
    exercises: ExerciseProps[];
  };