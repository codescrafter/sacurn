import { create } from 'zustand';

import { TransactionRecord } from '@/libs/api';
import apiClient from '@/libs/api/client';

import { runTask } from './modal';

type TransactionHistoryListState = {
  transactionHistoryList: TransactionRecord[];
  getTransactionHistoryList: (...args: Parameters<typeof apiClient.trade.tradeTransactionRecordList>) => void;
};

export const useTransactionHistoryListStore = create<TransactionHistoryListState>((set) => ({
  transactionHistoryList: [],
  getTransactionHistoryList: async (...args) => {
    await runTask(async () => {
      const response = await apiClient.trade.tradeTransactionRecordList(...args);
      set({ transactionHistoryList: response.results });
    });
  }
}));
