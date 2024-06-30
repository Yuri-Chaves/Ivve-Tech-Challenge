import { create } from "zustand";
import { FactsService } from "./FactsServiceTypes";

export const useFactsServiceStore = create<FactsService>((set) => ({
  facts: null,
  setFact: async (fact) => {
    if (fact) {
      set({ facts: fact })
    } else {
      set({ facts: null})
    }
  },
  category: "none",
  setCategory: (category) => {
    set({ category })
  },
  searching: false,
  setSearching: (searching) => {
    set({ searching })
  }
}))
