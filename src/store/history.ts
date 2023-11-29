import { create } from 'zustand';

import { OperationRecord, TransactionRecord } from '@/libs/api';
import apiClient from '@/libs/api/client';

import { runTask } from './modal';

type HistoryState = {
  statusOptions: string[];
  userOptions: string[];
  getHistoryOptions: (...args: Parameters<typeof apiClient.trade.tradeOperationRecordFilterListRetrieve>) => void;
  getOperationHistoryList: (
    ...args: Parameters<typeof apiClient.trade.tradeOperationRecordList>
  ) => Promise<OperationRecord[]>;
  getOrderHistoryList: (
    ...args: Parameters<typeof apiClient.trade.tradeTransactionRecordList>
  ) => Promise<TransactionRecord[]>;
};

export const useHistoryStore = create<HistoryState>((set) => ({
  statusOptions: [],
  userOptions: [],
  getHistoryOptions: async (...args) => {
    await runTask(async () => {
      const response = await apiClient.trade.tradeOperationRecordFilterListRetrieve(...args);
      set({
        statusOptions: response.action_list,
        userOptions: response.user_list
      });
    });
  },
  getOperationHistoryList: async (...args) => {
    let recordList: OperationRecord[] = [];
    await runTask(async () => {
      const response = await apiClient.trade.tradeOperationRecordList(...args);
      if (response.results) recordList = response.results;
    });
    return recordList;
  },
  getOrderHistoryList: async (...args) => {
    let recordList: TransactionRecord[] = [];
    await runTask(async () => {
      const response = await apiClient.trade.tradeTransactionRecordList(...args);
      if (response.results) recordList = response.results;
    });
    return recordList;
  }
}));
