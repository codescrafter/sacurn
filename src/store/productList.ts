import { create } from 'zustand';

import { CarbonCredit } from '@/libs/api';
import apiClient from '@/libs/api/client';

import { ModalType, useModalStore } from './modal';

type ProductListState = {
  productList: CarbonCredit[];
  getProducts: (arg: { desc?: string; sortby?: string; page?: number; tags?: string }) => void;
};

export const useProductsStore = create<ProductListState>((set) => ({
  productList: [],
  getProducts: async (arg) => {
    const { desc, sortby, page, tags } = arg;
    try {
      useModalStore.getState().open(ModalType.Loading);
      const response = await apiClient.carbonCredit.carbonCreditList(desc, page, sortby, tags);
      set({ productList: response.results });
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
