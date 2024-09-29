
import { create } from "zustand";
import { immer } from "zustand/middleware/immer";

interface IBonusPopup {
    isOpen: boolean;
    setIsOpen: (bol: boolean) => void;
}

export const useForgotPopupStore = create<IBonusPopup>()(
    immer((set) => ({
        isOpen: false,
        setIsOpen: (bol: boolean) => {
            set((state) => {
                state.isOpen = bol;
            });
        },
    }))
);
