import { create } from 'zustand';

import { CarbonCredit } from '@/libs/api';
import apiClient from '@/libs/api/client';

import { runTask } from './modal';

type CarbonCreditState = {
  carbonCredit: CarbonCredit;
  getCarbonCredit: (id: number) => void;
};

export const useCarbonCreditStore = create<CarbonCreditState>((set) => ({
  carbonCredit: {} as CarbonCredit,

  getCarbonCredit: async (id: number) => {
    await runTask(async () => {
      const response = await apiClient.carbonCredit.carbonCreditRetrieve(id);
      set({ carbonCredit: response });
    });
  }
}));
