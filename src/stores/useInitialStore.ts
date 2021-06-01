import create from "zustand";
import {InitialStore} from "stores/interfaces";

export const useInitialStore = create<InitialStore>(set => ({
  loading: false,
  setLoading: (loading): void =>
    set(state => ({
      ...state,
      loading,
    })),
}));
