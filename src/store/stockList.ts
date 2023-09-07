import { create } from 'zustand';

import { Inventory, Order, OrderSell } from '@/libs/api';
import apiClient from '@/libs/api/client';

import { ModalType, useModalStore } from './modal';

type StockItem = {
  action: string | null;
  orderData: Order | null;
} & Inventory;

type StockListState = {
  stockList: StockItem[];
  getStockList: (page?: number) => void;
  updateStockOnSale: (arg: OrderSell) => void;
  updateStockOffShelve: (id: number) => void;
};

export const useStockListStore = create<StockListState>((set, get) => ({
  stockList: [],
  getStockList: async (page?: number) => {
    try {
      useModalStore.getState().open(ModalType.Loading);
      const response = await apiClient.inventory.inventoryList(page);
      set({ stockList: (response.results || [])?.map((item) => ({ ...item, action: null, orderData: null })) });
      useModalStore.getState().close();
    } catch (error) {
      const err = error as Error;
      console.error(err);
      useModalStore.getState().open(ModalType.Error, {
        errorText: `[${err.name}] ${err.message}`
      });
    }
  },
  getStockInfo: async (carbonCreditId: number) => {
    try {
      useModalStore.getState().open(ModalType.Loading);
      const orderData = await apiClient.trade.tradeListCarbonOrderRetrieve(carbonCreditId.toString());
      // get response and set into stock set({ stockList: response.results });
      const stockIndex = get().stockList.findIndex((stock) => stock.id === carbonCreditId);

      if (stockIndex >= 0) {
        const newStockList = Array.from(get().stockList);
        newStockList[stockIndex].orderData = orderData;
        set({ stockList: newStockList });
      } else {
        throw new Error('Not found stock index');
      }
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
  },
  updateStockOffShelve: async (id: number) => {
    try {
      useModalStore.getState().open(ModalType.Loading);
      await apiClient.trade.tradeOrderSellDestroy(id);
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
