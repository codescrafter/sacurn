import { create } from 'zustand';

import { CarbonCredit } from '@/libs/api';
import apiClient from '@/libs/api/client';
import { CarbonTag } from '@/type';

import { FilterOptionsState } from './filterOptions';
import { ModalType, useModalStore } from './modal';

type Filters = {
  location?: FilterOptionsState['locationOptions'][number]['value'];
  vintage?: FilterOptionsState['vintageOptions'][number]['value'];
  price?: string;
  desc?: boolean;
  tag?: string;
  page?: number;
};

type ProductListState = {
  productList: CarbonCredit[];
  filters: Filters;
  updateProductListFilters: (filters: Filters) => void;
  getProductList: (...args: Parameters<typeof apiClient.carbonCredit.carbonCreditList>) => void;
  getProductListWithFilter: () => void;
};

export const useProductListStore = create<ProductListState>((set, get) => ({
  productList: [],
  filters: {
    location: undefined,
    vintage: undefined,
    price: undefined,
    desc: false,
    tag: CarbonTag.Green,
    page: undefined
  },
  updateProductListFilters: (filters: Filters) => {
    set({
      filters: {
        ...get().filters,
        ...filters
      }
    });
    get().getProductListWithFilter();
  },
  getProductList: async (...args) => {
    try {
      useModalStore.getState().open(ModalType.Loading);
      const response = await apiClient.carbonCredit.carbonCreditList(...args);
      set({ productList: response.results });
      useModalStore.getState().close();
    } catch (error) {
      const err = error as Error;
      console.error(err);
      useModalStore.getState().open(ModalType.Error, {
        errorText: `[${err.name}] ${err.message}`
      });
    }
  },
  getProductListWithFilter: async () => {
    const filters = get().filters;
    get().getProductList(filters.desc?.toString(), filters.location, filters.page, filters.price, filters.tag);
  }
}));
