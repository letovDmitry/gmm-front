import { create } from "zustand";
import { immer } from "zustand/middleware/immer";

interface IloginPopup {
    isOpen: boolean;
    setIsOpen: (bol: boolean) => void;
}

export const useLoginPopupStore = create<IloginPopup>()(
    immer((set) => ({
        isOpen: false,
        setIsOpen: (bol: boolean) => {
            set((state) => {
                state.isOpen = bol;
            });
        },
    }))
);
