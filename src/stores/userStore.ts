import { create } from "zustand";

export interface IUserStore {
  user: User | undefined;
  setUser: (user: User) => void;
}

export const useUserStore = create<IUserStore>((set) => ({
  user: undefined,
  setUser: (user: User) => set({ user }),
}));
