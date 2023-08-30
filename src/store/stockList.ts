import { create } from 'zustand';

import { Inventory, OrderSell } from '@/libs/api';
import apiClient from '@/libs/api/client';

import { ModalType, useModalStore } from './modal';

type StockListState = {
  stockList: Inventory[];
  getStockList: (page?: number) => void;
  updateStockOnSale: (arg: OrderSell) => void;
};

export const useStockListStore = create<StockListState>((set) => ({
  stockList: [],
  getStockList: async (page?: number) => {
    try {
      useModalStore.getState().open(ModalType.Loading);
      const response = await apiClient.inventory.inventoryList(page);
      set({ stockList: response.results });
      useModalStore.getState().close();
    } catch (error) {
      const err = error as Error;
      console.error(err);
      useModalStore.getState().open(ModalType.Error, {
        errorText: `[${err.name}] ${err.message}`
      });
    }
  },
  getStockInfo: async (carbonCreditId?: string) => {
    try {
      useModalStore.getState().open(ModalType.Loading);
      // const response =
      await apiClient.trade.tradeListCarbonOrderRetrieve(carbonCreditId);
      // get response and set into stock set({ stockList: response.results });
      useModalStore.getState().close();
    } catch (error) {
      const err = error as Error;
      console.error(err);
      useModalStore.getState().open(ModalType.Error, {
        errorText: `[${err.name}] ${err.message}`
      });
    }
  },
  updateStockOnSale: async (arg: OrderSell) => {
    try {
      useModalStore.getState().open(ModalType.Loading);
      await apiClient.trade.tradeOrderSellCreate(arg);
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
