import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
const newTemplate = () => {
  const [title, setTitle] = useState("New workout template");
  const [exercises, setExercises] = useState([
    { title: "Bench Press", sets: 0, reps: 0 },
  ]);
  return <SafeAreaView></SafeAreaView>;
};

export default newTemplate;
