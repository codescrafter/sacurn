import { create } from 'zustand';

import { OperationRecord } from '@/libs/api';
import apiClient from '@/libs/api/client';

import { runTask } from './modal';

type OperationListState = {
  operationList: OperationRecord[];
  getOperationList: (page?: number) => void;
};

export const useOperationListStore = create<OperationListState>((set) => ({
  operationList: [],
  getOperationList: async (page?: number) => {
    await runTask(async () => {
      const response = await apiClient.trade.tradeOperationRecordList(page);
      set({ operationList: response.results });
    });
  }
}));
