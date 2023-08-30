import { create } from 'zustand';

import { CarbonCredit, WatchList } from '@/libs/api';
import apiClient from '@/libs/api/client';

import { ModalType, useModalStore } from './modal';

type ProductsState = {
  products: CarbonCredit[];
  getProducts: (arg: { desc?: string; sortby?: string; page?: number; tags?: string }) => void;
  addToWhishList: (arg: WatchList) => void;
};

export const useProductsStore = create<ProductsState>((set) => ({
  products: [],
  getProducts: async (arg) => {
    const { desc, sortby, page, tags } = arg;
    try {
      useModalStore.getState().open(ModalType.Loading);
      const response = await apiClient.carbonCredit.carbonCreditList(desc, page, sortby, tags);
      set({ products: response.results });
      useModalStore.getState().close();
    } catch (error) {
      set({ products: [] });
      const err = error as Error;
      console.error(err);
      useModalStore.getState().open(ModalType.Error, {
        errorText: `[${err.name}] ${err.message}`
      });
    }
  },
  addToWhishList: async (arg: WatchList) => {
    try {
      useModalStore.getState().open(ModalType.Loading);
      await apiClient.carbonCredit.carbonCreditWatchListCreate(arg);
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
