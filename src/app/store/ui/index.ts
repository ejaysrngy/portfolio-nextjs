import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

interface UiStateTypes {
  visitedMain: boolean;
  setVisitedMain: (payload: boolean) => void;
}

const uiSlice = create<UiStateTypes>()(
  persist(
    (set) => ({
      visitedMain: false,
      setVisitedMain: (payload: boolean) => set(() => ({ visitedMain: payload })),
    }),
    {
      name: "visited-storage", // name of the item in the storage (must be unique)
      storage: createJSONStorage(() => sessionStorage), // (optional) by default, 'localStorage' is used
      partialize: ({ actions, ...rest }: any) => rest,
    }
  )
);

export default uiSlice;
