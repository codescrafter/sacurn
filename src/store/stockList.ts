import { create } from 'zustand';

import { Inventory, Order, OrderSell } from '@/libs/api';
import apiClient from '@/libs/api/client';

import { ModalType, useModalStore } from './modal';

export type StockItem = {
  action: string | null;
  orderData: Order[] | undefined;
} & Inventory;

type StockListState = {
  stockList: StockItem[];
  getStockList: (page?: number) => void;
  getStockInfo: (carbonCreditId: number) => Promise<boolean>;
  updateStockOnSale: (arg: OrderSell) => void;
  updateStockOffShelve: (id: number) => void;
};

export const useStockListStore = create<StockListState>((set, get) => ({
  stockList: [],
  getStockList: async (page?: number) => {
    try {
      useModalStore.getState().open(ModalType.Loading);
      const response = await apiClient.inventory.inventoryList(page);
      set({ stockList: (response.results || [])?.map((item) => ({ ...item, action: null, orderData: undefined })) });
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
    let isSuccess = false;
    try {
      useModalStore.getState().open(ModalType.Loading);
      const response = await apiClient.trade.tradeListCarbonOrderRetrieve(carbonCreditId.toString());
      // get response and set into stock set({ stockList: response.results });
      const stockIndex = get().stockList.findIndex((stock) => stock.id === carbonCreditId);

      if (stockIndex >= 0) {
        const newStockList = Array.from(get().stockList);
        newStockList[stockIndex].orderData = response.order;
        set({ stockList: newStockList });
      } else {
        throw new Error('Not found stock index');
      }
      isSuccess = true;
      useModalStore.getState().close();
    } catch (error) {
      const err = error as Error;
      console.error(err);
      useModalStore.getState().open(ModalType.Error, {
        errorText: `[${err.name}] ${err.message}`
      });
    }
    return isSuccess;
  },
  updateStockOnSale: async (arg: OrderSell) => {
    try {
      useModalStore.getState().open(ModalType.Loading);
      await apiClient.trade.tradeOrderSellCreate(arg);
      useModalStore.getState().open(ModalType.MakeStockOnSale);
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
