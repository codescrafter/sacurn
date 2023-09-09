import { create } from 'zustand';

import apiClient from '@/libs/api/client';

import { ModalType, useModalStore } from './modal';

type OptionType = { name: string; value: string };

export type FilterOptionsState = {
  locationOptions: OptionType[];
  vintageOptions: OptionType[];
  getFilterOptions: () => void;
};

export const useFilterOptionsStore = create<FilterOptionsState>((set, get) => ({
  locationOptions: [],
  vintageOptions: [],
  getFilterOptions: async () => {
    if (get().locationOptions.length !== 0 || get().vintageOptions.length !== 0) return;

    try {
      useModalStore.getState().open(ModalType.Loading);
      const filterOptions = await apiClient.carbonCredit.carbonCreditFilterListRetrieve();
      const locationOptions = filterOptions.location_list?.map((item) => ({ name: item, value: item }));
      const vintageOptions = filterOptions.vintage_list?.map((item) => ({ name: item, value: item }));
      set({ locationOptions, vintageOptions });
      useModalStore.getState().close();
    } catch (error) {
      const err = error as Error;
      console.error(err);
      useModalStore.getState().open(ModalType.Error, {
        errorText: `[${err.name}] ${err.message}`
      });
    }
  }
}));
