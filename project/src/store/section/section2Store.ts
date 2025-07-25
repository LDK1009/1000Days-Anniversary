import { create } from "zustand";

interface Section2StoreType {
  viewVariant: "closeLetter" | "openLetter" | "letterPaper";
  setViewVariant: (value: "closeLetter" | "openLetter" | "letterPaper") => void;
}

export const useSection2Store = create<Section2StoreType>((set) => ({
  viewVariant: "closeLetter",
  setViewVariant: (value) => set(() => ({ viewVariant: value })),
}));
