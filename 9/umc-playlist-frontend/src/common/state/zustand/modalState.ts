import { create } from "zustand";
import { ModalState } from "../type/type";

interface ModalZustand extends ModalState {
  openModal: () => void;
  closeModal: () => void;
}

export const useModal = create<ModalZustand>((set) => ({
  isOpen: false,
  openModal: () => set({ isOpen: true }),
  closeModal: () => set({ isOpen: false }),
}));
