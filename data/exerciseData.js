//randomized css color
function randomColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
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
import data from "../assets/Exercise_Data.json";
console.log(data);
// fetch(jsonData)
//   .then((res) => {
//     if (!res.ok) {
//       throw new Error(`HTTP error! Status: ${res.status}`);
//     }
//     return res.json();
//   })
//   .then((data) => console.log(data))
//   .catch((error) => console.log("Unable to fetch data:", error));

export { data, equipment, historyData, muscleGroups, searchTags, workoutData };
