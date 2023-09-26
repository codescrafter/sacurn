import { create } from 'zustand';

import { CarbonCredit } from '@/libs/api';
import apiClient from '@/libs/api/client';
import { CarbonTag } from '@/type';

import { Filters } from './filterOptions';
import { runTask } from './modal';

type ProductListState = {
  productList: CarbonCredit[];
  filters: Filters;
  updateProductListByFilters: (filters: Filters) => void;
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
    page: undefined,
    sort_by: 'price'
  },
  updateProductListByFilters: (filters: Filters) => {
    set({
      filters: {
        ...get().filters,
        ...filters
      }
    });
    get().getProductListWithFilter();
  },
  getProductList: async (...args) => {
    await runTask(async () => {
      const response = await apiClient.carbonCredit.carbonCreditList(...args);
      set({ productList: response.results });
    });
  },
  getProductListWithFilter: async () => {
    const filters = get().filters;
    get().getProductList(
      filters.desc,
      filters.location,
      filters.page,
      filters.price,
      filters.tag,
      filters.vintage,
      filters.sort_by
    );
  }
}));
