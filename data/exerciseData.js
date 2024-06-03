import uuid from "react-native-uuid";

let data = [];
//randomized muscles worked
for (let i = 0; i < 20; i++) {
  data.push({
    id: uuid.v4(),
    name: `Exercise ${i + 1}`,

    musclesWorked: ["Chest", "Back", "Legs"],
  });
}

let muscleGroups = [
  //Chest
  "Chest",
  // Shoulders
  "Front Delts",
  "Side Delts",
  "Rear Delts",
  // Arms
  "Biceps",
  "Triceps",
  "Forearms",
  //Back
  "Upper Back",
  "Lats",
  "Lower Back",
  //Legs
  "Quads",
  "Hamstrings",
  "Calves",
  "Abductors",
  "Adductors",
  //Abs
  "Abs",

  // Other
  "Other",
];

let equipment = [
  "Barbell",
  "Dumbbell",
  "Machine",
  "Cable",
  "Bodyweight",
  "Weighted Bodyweight",
  "Smith Machine",
  "Kettlebell",
  "Other",
];

let workoutData = [
  {
    id: 1,
    title: "Title",
    lastPerformed: new Date(2024, 3, 26, 12, 30, 15),
    estimatedDuration: 57 * 60 + 1,
    exercises: [
      { name: "Exercise 1", sets: 3 },
      { name: "Exercise 2", sets: 2 },
      { name: "Exercise 3", sets: 1 },
    ],
  },
  {
    id: 2,
    title: "Title 2",
    lastPerformed: new Date(2024, 3, 22, 12, 30, 15),
    estimatedDuration: 62 * 60 + 1,
    exercises: [
      { name: "Exercise 1", sets: 1 },
      { name: "Exercise 2", sets: 2 },
      { name: "Exercise 3", sets: 3 },
    ],
  },
  {
    id: 3,
    title: "Title 3",
    lastPerformed: new Date(2024, 3, 11, 12, 30, 15),
    estimatedDuration: 60 * 60 + 1,
    exercises: [
      { name: "Exercise 1", sets: 5 },
      { name: "Exercise 2", sets: 5 },
      { name: "Exercise 3", sets: 5 },
    ],
  },
];

let historyData = [
  {
    id: 1,
    title: "Title",
    duration: 57 * 60 + 1,
    tonnage: 8000,
    numRecords: 3,
    lastPerformed: new Date(2024, 3, 26, 12, 30, 15),
    exercises: [
      { name: "Exercise 1", sets: 3 },
      { name: "Exercise 2", sets: 2 },
      { name: "Exercise 3", sets: 1 },
    ],
  },
  {
    id: 2,
    title: "Title",
    duration: 60 * 60 + 1,
    tonnage: 8000,
    numRecords: 3,
    lastPerformed: new Date(2024, 3, 26, 12, 30, 15),
    exercises: [
      { name: "Exercise 1", sets: 3 },
      { name: "Exercise 2", sets: 2 },
      { name: "Exercise 3", sets: 1 },
    ],
  },
];

let searchTags = [...equipment, ...muscleGroups];
export { data, equipment, historyData, muscleGroups, searchTags, workoutData };
