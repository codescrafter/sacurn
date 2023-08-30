import { create } from 'zustand';

import { OrderBuy, TransactionDetail } from '@/libs/api';
import apiClient from '@/libs/api/client';

import { ModalType, useModalStore } from './modal';

type CartState = {
  cartList: [];
  checkoutDetail: TransactionDetail | null;
  deleteCartItem: (id: number) => void;
  checkOutCart: (arg: OrderBuy) => void;
};

export const useCartStore = create<CartState>((set) => ({
  cartList: [],
  checkoutDetail: null,
  deleteCartItem: async (id: number) => {
    try {
      useModalStore.getState().open(ModalType.Loading);
      await apiClient.trade.tradeCartDestroy(id);
      // set({ cartList });
      useModalStore.getState().close();
    } catch (error) {
      const err = error as Error;
      console.error(err);
      useModalStore.getState().open(ModalType.Error, {
        errorText: `[${err.name}] ${err.message}`
      });
    }
  },
  checkOutCart: async (arg: OrderBuy) => {
    try {
      useModalStore.getState().open(ModalType.Loading);
      const checkoutDetail = await apiClient.trade.tradeOrderBuyCreate(arg);
      set({ checkoutDetail });
      useModalStore.getState().close();
    } catch (error) {
      const err = error as Error;
      console.error(err);
      useModalStore.getState().open(ModalType.Error, {
        errorText: `[${err.name}] ${err.message}`
      });
    }
  }
}));
