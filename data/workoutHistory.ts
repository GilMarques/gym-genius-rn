type WorkoutHistoryProps = {
  id: number;
  title: string;
  datePerformed: string;
  duration: string;
  tonnage: string;
  numRecords: string;
  exercises: {
    name: string;
    sets: {
      warmup: boolean;
      weight: number;
      reps: number;
      bestSet: string;
      records?: { rm?: number; reps?: number; weight?: number };
    }[];
  }[];
};

type ExerciseHistoryProps = {
  id: number;
  history: {
    workoutTitle: string;
    datePerfomed: string;
    sets: {
      weight: number;
      reps: number;
      records?: { rm?: number; reps?: number; weight?: number };
    }[];
  }[];
};

const workoutHistoryData: WorkoutHistoryProps[] = [
  {
    id: 1,
    title: "Title",
    datePerformed: "2024-03-26",
    duration: "1:00",
    tonnage: "8000",
    numRecords: "3",
    exercises: [
      {
        name: "Exercise 1",
        sets: [
          {
            warmup: true,
            weight: 0,
            reps: 0,
            bestSet: "",
          },
          {
            warmup: false,
            weight: 0,
            reps: 0,
            bestSet: "",
          },
          {
            warmup: false,
            weight: 0,
            reps: 0,
            bestSet: "",
          },
        ],
      },
      {
        name: "Exercise 2",
        sets: [
          {
            warmup: true,
            weight: 0,
            reps: 0,
            bestSet: "",
          },
          {
            warmup: false,
            weight: 0,
            reps: 0,
            bestSet: "",
          },
          {
            warmup: false,
            weight: 0,
            reps: 0,
            bestSet: "",
          },
        ],
      },
    ],
  },
];
