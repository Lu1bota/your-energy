import { create } from "zustand";

interface StateTypes {
  isOpenMenu: boolean;
  openMenu: () => void;
  closeMenu: () => void;
}

export const useGlobalState = create<StateTypes>()((set) => ({
  isOpenMenu: false,
  openMenu: () => set({ isOpenMenu: true }),
  closeMenu: () => set({ isOpenMenu: false }),
}));
