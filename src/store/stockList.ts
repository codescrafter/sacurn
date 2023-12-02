import { create } from 'zustand';

import { ExtendedInventory, Order } from '@/libs/api';
import apiClient from '@/libs/api/client';

import { useCardStore } from './card';
import { ModalType, runTask, useModalStore } from './modal';

export type StockItem = {
  action: string | null;
  orderList: Order[];
} & ExtendedInventory;

type StockListState = {
  stockList: StockItem[];
  getStockList: (keyword?: string, page?: number) => void;
  getStockOrderList: (carbonCreditId: number) => Promise<boolean>;
  updateStockOnSale: (carbonId: number, qty: number, price: number, minUnit: number) => Promise<boolean>;
  updateStockOffShelve: (id: number) => void;
};

export const useStockListStore = create<StockListState>((set, get) => ({
  stockList: [],
  getStockList: async (keyword?: string, page?: number) => {
    await runTask(async () => {
      const response = await apiClient.inventory.inventoryList(keyword, page);
      set({ stockList: (response.results || [])?.map((item) => ({ ...item, action: null, orderList: [] })) });
    });
  },
  getStockOrderList: async (carbonCreditId: number) => {
    let isSuccess = false;

    await runTask(async () => {
      const response = await apiClient.trade.tradeListCarbonOrderList(carbonCreditId.toString());
      const stockIndex = get().stockList.findIndex((stock) => stock.carbon_credit === carbonCreditId);

      if (stockIndex >= 0) {
        const newStockList = Array.from(get().stockList);
        newStockList[stockIndex].orderList = response.results || [];
        set({ stockList: newStockList });
      } else {
        throw new Error('Not found stock index');
      }
      isSuccess = true;
    });

    return isSuccess;
  },
  updateStockOnSale: async (carbonId, quantity, price, minUnit) => {
    let isSuccess = false;
    await runTask(
      async () => {
        // TODO: refactor the modal workflow
        useModalStore.getState().close();
        isSuccess = await useCardStore.getState().checkMemberCard(
          async () => {
            return await apiClient.twid.twidGenPkcs7TbsOrderSellCreate({
              carbon_credit: carbonId,
              quantity,
              price: price.toString(),
              min_order_quantity: minUnit,
              sell: 1
            });
          },
          async (twid_record, b64Cert, pkcs1) => {
            await apiClient.trade.tradeOrderSellCreate(
              {
                carbon_credit: carbonId,
                quantity,
                price: price.toString(),
                min_order_quantity: minUnit,
                sell: 1,
                b64Cert,
                pkcs1
              },
              twid_record.toString()
            );
          }
        );

        return !isSuccess;
      },
      {
        onComplete: () => {
          if (isSuccess) return ModalType.MakeStockOnSale;
        }
      }
    );

    if (isSuccess) {
      await get().getStockList();
    }

    return isSuccess;
  },
  updateStockOffShelve: async (orderId: number) => {
    let isSuccess = false;
    await runTask(
      async () => {
        isSuccess = await useCardStore.getState().checkMemberCard(
          async () => {
            return await apiClient.twid.twidGenPkcs7TbsOrderTakeOffCreate({
              order: orderId
            });
          },
          async (twid_record, b64Cert, pkcs1) => {
            await apiClient.trade.tradeOrderSellTakeOffCreate(twid_record.toString(), {
              order: orderId,
              b64Cert,
              pkcs1
            });
          }
        );

        return !isSuccess;
      },
      {
        onComplete: () => {
          if (isSuccess) return ModalType.MakeStockOnSale;
        }
      }
    );

    if (isSuccess) {
      await get().getStockList();
    }

    return isSuccess;
  }
}));
