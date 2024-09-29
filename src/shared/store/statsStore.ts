import { create } from "zustand";
import { immer } from "zustand/middleware/immer";
import { MainStats } from "../api/stats/stats";

interface IMainStatsStore {
    stats: MainStats;
    setStats: (stats: MainStats) => void;
}

export const useMainStatsStore = create<IMainStatsStore>()(
    immer((set) => ({
        stats: { users: 0, online: 0, replinish: 0 },
        setStats: (el: MainStats) => {
            set((state) => {
                state.stats = el;
            });
        },
    }))
);
