interface SetProps {
    id: number;
    checked: boolean;
    previous: {
        weight: number | null;
        reps: number | null;
    };
    current: {
        weight: number | null;
        reps: number | null;
    };
}

interface ExerciseProps {
    id: number;
    name: string;
    equipment: string;
    sets: SetProps[];
}
