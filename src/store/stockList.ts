import { create } from 'zustand';

import { Inventory, Order } from '@/libs/api';
import apiClient from '@/libs/api/client';

import { ModalType, runTask } from './modal';

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
    runTask(async () => {
      const response = await apiClient.inventory.inventoryList(page);
      set({ stockList: (response.results || [])?.map((item) => ({ ...item, action: null, orderData: null })) });
    });
  },
  getStockInfo: async (carbonCreditId: number) => {
    let isSuccess = false;

    runTask(async () => {
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
    });

    return isSuccess;
  },
  updateStockOnSale: async (carbonId, quantity, price, minUnit) => {
    runTask(
      async () => {
        await apiClient.trade.tradeOrderSellCreate({
          carbon_credit: carbonId,
          quantity,
          price: price.toString(),
          min_order_quantity: minUnit,
          sell: 1
        });
        get().getStockList();
      },
      {
        onComplete: () => ModalType.MakeStockOnSale
      }
    );
  },
  updateStockOffShelve: async (id: number) => {
    runTask(async () => {
      await apiClient.trade.tradeOrderSellDestroy(id);
    });
  }
}));
