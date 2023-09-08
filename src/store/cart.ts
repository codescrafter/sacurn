import { create } from 'zustand';

import { Cart, CartDetailResonse, CartRequest, TransactionDetail } from '@/libs/api';
import apiClient from '@/libs/api/client';

import { ModalType, useModalStore } from './modal';

type CartItem = {
  selected: boolean;
} & Cart;

type CartState = {
  cartList: CartItem[];
  cartDetail: CartDetailResonse | null;
  checkoutDetail: TransactionDetail | null;
  getSelectedCartIdList: () => CartItem['id'][];
  getCartList: (page?: number) => void;
  getCartDetail: () => void;
  addToCart: (arg: CartRequest) => void;
  updateCartItemSelected: (id: Cart['id'], index: number, isSelected: boolean) => void;
  updateCartItemQty: (...args: Parameters<typeof apiClient.trade.tradeCartPartialUpdate>) => void;
  deleteCartItem: (id: number) => void;
  checkOutCart: () => Promise<boolean>;
};

export const useCartStore = create<CartState>((set, get) => ({
  cartList: [],
  cartDetail: null,
  checkoutDetail: null,
  getSelectedCartIdList: () =>
    get()
      .cartList.filter((item) => item.selected)
      .map((item) => item.id),
  getCartList: async (page?: number) => {
    try {
      useModalStore.getState().open(ModalType.Loading);
      const response = await apiClient.trade.tradeCartList(page);
      const cartList = (response.results || []).map((item) => ({ ...item, selected: false }));
      set({ cartList });
      useModalStore.getState().close();
    } catch (error) {
      const err = error as Error;
      console.error(err);
      useModalStore.getState().open(ModalType.Error, {
        errorText: `[${err.name}] ${err.message}`
      });
    }
  },
  getCartDetail: async () => {
    if (get().getSelectedCartIdList().length > 0) {
      const cartDetail = await apiClient.trade.tradeCartDetailCreate({ cart_id_list: get().getSelectedCartIdList() });
      set({ cartDetail });
    } else {
      set({ cartDetail: null });
    }
  },
  addToCart: async (arg: CartRequest) => {
    try {
      useModalStore.getState().open(ModalType.Loading);
      const cartItem = await apiClient.trade.tradeCartCreate(arg);
      const cartList = Array.from(get().cartList);
      cartList.push({ ...cartItem, selected: false });
      set({ cartList });

      await get().getCartDetail();
      useModalStore.getState().open(ModalType.AddToCart);
    } catch (error) {
      const err = error as Error;
      console.error(err);
      useModalStore.getState().open(ModalType.Error, {
        errorText: `[${err.name}] ${err.message}`
      });
    }
  },
  updateCartItemSelected: async (id: Cart['id'], index: number, isSelected: boolean) => {
    const cartList = Array.from(get().cartList);
    if (cartList[index].id === id) {
      cartList[index].selected = isSelected;
    }
    set({ cartList });
    await get().getCartDetail();
  },
  updateCartItemQty: async (...args: Parameters<typeof apiClient.trade.tradeCartPartialUpdate>) => {
    try {
      useModalStore.getState().open(ModalType.Loading);
      await apiClient.trade.tradeCartPartialUpdate(...args);
      await get().getCartDetail();
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
      const newCartList = get().cartList.filter((item) => item.id !== id);
      set({ cartList: newCartList });
      await get().getCartDetail();
      useModalStore.getState().close();
    } catch (error) {
      const err = error as Error;
      console.error(err);
      useModalStore.getState().open(ModalType.Error, {
        errorText: `[${err.name}] ${err.message}`
      });
    }
  },
  checkOutCart: async () => {
    let isSuccess = false;
    try {
      useModalStore.getState().open(ModalType.Loading);
      const checkoutDetail = await apiClient.trade.tradeOrderBuyCreate({
        cart_id_list: get().getSelectedCartIdList()
      });
      set({ checkoutDetail, cartList: [], cartDetail: null });
      isSuccess = true;
      useModalStore.getState().close();
    } catch (error) {
      const err = error as Error;
      console.error(err);
      useModalStore.getState().open(ModalType.Error, {
        errorText: `[${err.name}] ${err.message}`
      });
    }
    return isSuccess;
  }
}));
