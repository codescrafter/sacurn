import { create } from 'zustand';

import apiClient from '@/libs/api/client';
import { formatNumberByComma } from '@/util/helper';

import { runTask } from './modal';

type OptionType = { name: string; value: string };

type FilterOptionsState = {
  locationOptions: OptionType[];
  vintageOptions: OptionType[];
  priceOptions: OptionType[];
  getFilterOptions: () => void;
};

export type Filters = {
  location?: FilterOptionsState['locationOptions'][number]['value'];
  vintage?: FilterOptionsState['vintageOptions'][number]['value'];
  price?: string;
  desc?: boolean;
  tag?: string;
  page?: number;
  sort_by?: 'price' | 'vintage';
};

export const useFilterOptionsStore = create<FilterOptionsState>((set, get) => ({
  locationOptions: [],
  vintageOptions: [],
  priceOptions: [],
  getFilterOptions: async () => {
    if (get().locationOptions.length !== 0 || get().vintageOptions.length !== 0) return;

    await runTask(async () => {
      const filterOptions = await apiClient.carbonCredit.carbonCreditFilterListRetrieve();
      const locationOptions = filterOptions.location_list?.map((item) => ({ name: item, value: item }));
      let vintageOptions = filterOptions.vintage_list?.map((item) => ({ name: item, value: item }));
      vintageOptions = vintageOptions?.sort((a, b) => Number(b.value) - Number(a.value));
      // 10,100 -> 10 ~ 100
      const priceOptions = filterOptions.price_list?.map((item) => ({
        name: formatNumberByComma(item.split(',')?.[0]) + ' ~ ' + formatNumberByComma(item.split(',')?.[1]),
        value: item
      }));

      set({ locationOptions, vintageOptions, priceOptions });
    });
  }
}));
