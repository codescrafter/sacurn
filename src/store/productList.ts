import { create } from 'zustand';

import { CarbonCredit } from '@/libs/api';
import apiClient from '@/libs/api/client';

import { ModalType, useModalStore } from './modal';

type ProductListState = {
  productList: CarbonCredit[];
  getProductList: (...args: Parameters<typeof apiClient.carbonCredit.carbonCreditList>) => void;
};

export const useProductListStore = create<ProductListState>((set) => ({
  productList: [],
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
  }
}));
