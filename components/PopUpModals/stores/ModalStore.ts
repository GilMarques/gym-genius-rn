import { create } from "zustand";

export enum VisibleModals {
  None,
  AddExerciseNote,
  StartRestTimer,
  SetRestTimer,
  DiscardWorkout,
  FinishWorkout,
}

interface ModalStore {
  visible: VisibleModals;
  setVisible: (visible: VisibleModals) => void;
}

export const useModalStore = create<ModalStore>((set) => ({
  visible: VisibleModals.None,
  setVisible: (visible: VisibleModals) => set({ visible }),
}));
