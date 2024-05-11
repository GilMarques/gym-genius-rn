import uuid from "react-native-uuid";

let data = [];
for (let i = 0; i < 20; i++) {
  data.push({
    id: uuid.v4(),
    name: `Exercise ${i + 1}`,
    thumbnail: "https://i.imgur.com/5tj6iQp.png",
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

let searchTags = [...equipment, ...muscleGroups];
export { data, equipment, muscleGroups, searchTags };
