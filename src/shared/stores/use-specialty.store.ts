import { create } from "zustand";

interface SpecialtyStore {
  searchTerm: string;
  setSearchTerm: (term: string) => void;
}

export const useSpecialtyStore = create<SpecialtyStore>((set) => ({
  searchTerm: "",
  setSearchTerm: (term) => set({ searchTerm: term }),
}));
