import { create } from 'zustand';

import { Order } from '@/libs/api';
import apiClient from '@/libs/api/client';

import { runTask } from './modal';

type PriceListState = {
  priceList: Order[];
  getPriceList: (arg: { carbonCreditId?: string; desc?: string; page?: number; sortby?: string }) => void;
};

export const usePriceListStore = create<PriceListState>((set) => ({
  priceList: [],
  getPriceList: async (arg) => {
    const { carbonCreditId, desc, page, sortby } = arg;

    runTask(async () => {
      const response = await apiClient.trade.tradeOrderSellList(carbonCreditId, desc, page, sortby);
      set({ priceList: response.results });
    });
  }
}));
