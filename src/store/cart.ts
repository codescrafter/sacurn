import { create } from 'zustand';

import { Cart, OrderBuy, TransactionDetail } from '@/libs/api';
import apiClient from '@/libs/api/client';

import { ModalType, useModalStore } from './modal';

type CartState = {
  cartList: Cart[];
  checkoutDetail: TransactionDetail | null;
  addToCart: (arg: Cart) => void;
  deleteCartItem: (id: number) => void;
  checkOutCart: (arg: OrderBuy) => void;
};

export const useCartStore = create<CartState>((set) => ({
  cartList: [],
  checkoutDetail: null,
  getCartList: async (page?: number) => {
    try {
      useModalStore.getState().open(ModalType.Loading);
      const response = await apiClient.trade.tradeCartList(page);
      set({ cartList: response.results });
      useModalStore.getState().close();
    } catch (error) {
      const err = error as Error;
      console.error(err);
      useModalStore.getState().open(ModalType.Error, {
        errorText: `[${err.name}] ${err.message}`
      });
    }
  },
  addToCart: async (arg: Cart) => {
    try {
      useModalStore.getState().open(ModalType.Loading);
      await apiClient.trade.tradeCartCreate(arg);
      useModalStore.getState().close();
    } catch (error) {
      const err = error as Error;
      console.error(err);
      useModalStore.getState().open(ModalType.Error, {
        errorText: `[${err.name}] ${err.message}`
      });
    }
  },
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
