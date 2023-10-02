import { create } from 'zustand';

import { TransactionRecord } from '@/libs/api';
import apiClient from '@/libs/api/client';

import { runTask } from './modal';

type TransactionHistoryListState = {
  transactionHistoryList: TransactionRecord[];
  getTransactionHistoryList: (page?: number) => void;
};

export const useTransactionHistoryListStore = create<TransactionHistoryListState>((set) => ({
  transactionHistoryList: [],
  getTransactionHistoryList: async (page?: number) => {
    await runTask(async () => {
      const response = await apiClient.trade.tradeTransactionRecordList(page);
      set({ transactionHistoryList: response.results });
    });
  }
}));
