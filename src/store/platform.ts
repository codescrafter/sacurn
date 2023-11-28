import { create } from 'zustand';

type PlatformState = {
  isCardComparisonModalOpen: boolean;
  toggleCardComparison: () => void;
};

export const usePlatformStore = create<PlatformState>((set) => ({
  isCardComparisonModalOpen: false,
  toggleCardComparison: () => set((state) => ({ isCardComparisonModalOpen: !state.isCardComparisonModalOpen }))
}));
