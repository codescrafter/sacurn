import { create } from 'zustand';

import { Inventory, Order } from '@/libs/api';
import apiClient from '@/libs/api/client';

import { ModalType, useModalStore } from './modal';

export type StockItem = {
  action: string | null;
  orderData: Order | null;
} & Inventory;

type StockListState = {
  stockList: StockItem[];
  getStockList: (page?: number) => void;
  getStockInfo: (carbonCreditId: number) => Promise<boolean>;
  updateStockOnSale: (carbonId: number, qty: number, price: number, minUnit: number) => void;
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
    let isSuccess = false;
    try {
      useModalStore.getState().open(ModalType.Loading);
      const response = await apiClient.trade.tradeListCarbonOrderRetrieve(carbonCreditId.toString());
      const stockIndex = get().stockList.findIndex((stock) => stock.carbon_credit === carbonCreditId);

      if (stockIndex >= 0) {
        const newStockList = Array.from(get().stockList);
        newStockList[stockIndex].orderData = response.order?.[0] || null;
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
  updateStockOnSale: async (carbonId, quantity, price, minUnit) => {
    try {
      useModalStore.getState().open(ModalType.Loading);
      await apiClient.trade.tradeOrderSellCreate({
        carbon_credit: carbonId,
        quantity,
        price: price.toString(),
        min_order_quantity: minUnit,
        sell: 1
      });
      get().getStockList();
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
      console.log('xx', error);
      const err = error as Error;
      console.error(err);
      useModalStore.getState().open(ModalType.Error, {
        errorText: `[${err.name}] ${err.message}`
      });
    }
  }
}));
