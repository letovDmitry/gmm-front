import { create } from "zustand";
import { immer } from "zustand/middleware/immer";

interface IRegisterPopup {
    isOpen: boolean;
    setIsOpen: (bol: boolean) => void;
}

export const useRegisterPopupStore = create<IRegisterPopup>()(
    immer((set) => ({
        isOpen: false,
        setIsOpen: (bol: boolean) => {
            set((state) => {
                state.isOpen = bol;
            });
        },
    }))
);

