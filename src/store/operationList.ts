import { create } from 'zustand';

import { OperationRecord } from '@/libs/api';
import apiClient from '@/libs/api/client';

import { runTask } from './modal';

type OperationListState = {
  operationList: OperationRecord[];
  getOperationList: (...args: Parameters<typeof apiClient.trade.tradeOperationRecordList>) => void;
};

export const useOperationListStore = create<OperationListState>((set) => ({
  operationList: [],
  getOperationList: async (...args) => {
    await runTask(async () => {
      const response = await apiClient.trade.tradeOperationRecordList(...args);
      set({ operationList: response.results });
    });
  }
}));
