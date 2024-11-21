import { create } from "zustand";
interface useModalState {
  isOpen: boolean;
  setIsOpen: (value: boolean) => void;
  close: () => void;
}

export const useModalStore = create<useModalState>((set) => ({
  isOpen: false,
  setIsOpen: (value: boolean) => set({ isOpen: value }),
  close: () => set({ isOpen:false }),
}));
