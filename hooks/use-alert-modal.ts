import { create } from 'zustand';

interface AlertModalPros {
  open: boolean;
  setOpen: (value: boolean) => void;
}

export const useAlertModal = create<AlertModalPros>((set) => ({
  open: false,
  setOpen: (value) => set({ open: value }),
}));
