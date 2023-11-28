import { create } from 'zustand';

import { AOI } from '@/libs/api';
import apiClient from '@/libs/api/client';

import { runTask } from './modal';

type InventoryState = {
  ordersInfo: AOI;
  getOrdersInfo: () => void;
};

export const useInventoryStore = create<InventoryState>((set) => ({
  ordersInfo: {
    order_count: 0,
    acc_amount: 0,
    acc_points: 0,
    member_name: '',
    upgrade: {},
    expire_at: ''
  },
  getOrdersInfo: async () => {
    await runTask(async () => {
      const response = await apiClient.inventory.inventoryAccumulatedOrdersInformationRetrieve();
      set({ ordersInfo: response });
    });
  }
}));
