import { create } from 'zustand';

type PlatformState = {
  isCardComparisonModalOpen: boolean;
  isPermissionSettingsModalOpen: boolean;
  toggleCardComparison: () => void;
  togglePermissionSettings: () => void;
};

export const usePlatformStore = create<PlatformState>((set) => ({
  isCardComparisonModalOpen: false,
  isPermissionSettingsModalOpen: false,
  toggleCardComparison: () => set((state) => ({ isCardComparisonModalOpen: !state.isCardComparisonModalOpen })),
  togglePermissionSettings: () =>
    set((state) => ({ isPermissionSettingsModalOpen: !state.isPermissionSettingsModalOpen }))
}));
