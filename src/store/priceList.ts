import { create } from 'zustand';

import { Order } from '@/libs/api';
import apiClient from '@/libs/api/client';

import { ModalType, useModalStore } from './modal';

type PriceListState = {
  priceList: Order[];
  getPriceList: (arg: { carbonCreditId?: string; desc?: string; page?: number; sortby?: string }) => void;
};

export const usePriceListStore = create<PriceListState>((set) => ({
  priceList: [],
  getPriceList: async (arg) => {
    const { carbonCreditId, desc, page, sortby } = arg;

    try {
      useModalStore.getState().open(ModalType.Loading);
      const response = await apiClient.trade.tradeOrderSellList(carbonCreditId, desc, page, sortby);
      set({ priceList: response.results });
      useModalStore.getState().close();
    } catch (error) {
      set({ priceList: [] });
      const err = error as Error;
      console.error(err);
      useModalStore.getState().open(ModalType.Error, {
        errorText: `[${err.name}] ${err.message}`
      });
    }
  }
}));
