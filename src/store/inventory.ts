import { create } from 'zustand';

import { AOI, Categories, TrendData } from '@/libs/api';
import apiClient from '@/libs/api/client';

import { runTask } from './modal';

type InventoryState = {
  ordersInfo: AOI;
  trendData: TrendData;
  categoriesData: Categories;
  getOrdersInfo: () => void;
  getTrendData: () => void;
  getCategoriesData: () => void;
};

export const useInventoryStore = create<InventoryState>((set) => ({
  ordersInfo: {
    order_count: 0,
    acc_amount: 0,
    acc_points: 0,
    member_name: 0,
    upgrade: {},
    expire_at: ''
  },
  trendData: {},
  categoriesData: {},
  getOrdersInfo: async () => {
    await runTask(async () => {
      const response = await apiClient.inventory.inventoryAccumulatedOrdersInformationRetrieve();
      set({ ordersInfo: response });
    });
  },
  getTrendData: async () => {
    await runTask(async () => {
      const response = await apiClient.inventory.inventoryTrendDataRetrieve();
      set({ trendData: response });
    });
  },
  getCategoriesData: async () => {
    await runTask(async () => {
      const response = await apiClient.inventory.inventoryCategoriesRetrieve();
      set({ categoriesData: response });
    });
  }
}));
