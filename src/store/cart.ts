import { ReactNode } from 'react';
import { create } from 'zustand';

import { CartDetailResonse, CartRequest, ExtendedCart, TransactionDetail } from '@/libs/api';
import apiClient from '@/libs/api/client';

import { useCardStore } from './card';
import { ModalType, runTask } from './modal';

export type CheckoutResult = {
  isSuccess: boolean;
  checkoutDetail: TransactionDetail | null;
};

type CartItem = {
  selected: boolean;
} & ExtendedCart;

type CartState = {
  cartList: CartItem[];
  cartDetail: CartDetailResonse | null;
  isSelectedAll: () => boolean;
  setAllCartItemSelect: (isSelected: boolean) => void;
  getSelectedCartIdList: () => CartItem['id'][];
  getCartList: (page?: number) => void;
  getCartDetail: () => void;
  addToCart: (arg: CartRequest) => void;
  updateCartItemSelected: (id: ExtendedCart['id'], index: number, isSelected: boolean) => void;
  updateCartItemQty: (...args: Parameters<typeof apiClient.trade.tradeCartPartialUpdate>) => void;
  deleteCartItem: (id: number) => void;
  deleteSelectedCartItem: () => void;
  checkOutCart: (cartDetailUi: ReactNode) => Promise<CheckoutResult>;
};

export const useCartStore = create<CartState>((set, get) => ({
  cartList: [],
  cartDetail: null,
  isSelectedAll: () => !get().cartList.some((item) => item.selected === false),
  setAllCartItemSelect: async (isSelected: boolean) => {
    const newCartList = get().cartList.map((item) => ({
      ...item,
      selected: isSelected
    }));

    set({ cartList: newCartList });
    await get().getCartDetail();
  },
  getSelectedCartIdList: () =>
    get()
      .cartList.filter((item) => item.selected)
      .map((item) => item.id),
  getCartList: async (page?: number) => {
    await runTask(async () => {
      const response = await apiClient.trade.tradeCartList(page);
      const cartList = (response.results || []).map((item) => ({ ...item, selected: false }));
      set({ cartList });
    });
  },
  getCartDetail: async () => {
    if (get().getSelectedCartIdList().length > 0) {
      const cartDetail = await apiClient.trade.tradeCartDetailCreate({
        cart_id_list: JSON.stringify(get().getSelectedCartIdList())
      });
      set({ cartDetail });
    } else {
      set({ cartDetail: null });
    }
  },
  addToCart: async (arg: CartRequest) => {
    await runTask(
      async () => {
        const cartItem = await apiClient.trade.tradeCartCreate(arg);
        const cartList = Array.from(get().cartList);
        cartList.push({ ...cartItem, selected: false });
        set({ cartList });
        await get().getCartDetail();
      },
      {
        onComplete: () => ModalType.AddToCart
      }
    );
  },
  updateCartItemSelected: async (id: ExtendedCart['id'], index: number, isSelected: boolean) => {
    const cartList = Array.from(get().cartList);
    if (cartList[index].id === id) {
      cartList[index].selected = isSelected;
    }
    set({ cartList });
    await get().getCartDetail();
  },
  updateCartItemQty: async (...args: Parameters<typeof apiClient.trade.tradeCartPartialUpdate>) => {
    await runTask(async () => {
      await apiClient.trade.tradeCartPartialUpdate(...args);
      await get().getCartDetail();
    });
  },
  deleteCartItem: async (id: number) => {
    await runTask(async () => {
      await apiClient.trade.tradeCartDestroy(id);
      const newCartList = get().cartList.filter((item) => item.id !== id);
      set({ cartList: newCartList });
      await get().getCartDetail();
    });
  },
  deleteSelectedCartItem: async () => {
    await runTask(async () => {
      const cartItemIdList = get()
        .cartList.filter((item) => item.selected)
        .map((item) => item.id);
      if (cartItemIdList.length === 0) return;
      await apiClient.trade.tradeCartBulkDeleteCreate({
        cart_id_list: JSON.stringify(cartItemIdList)
      });
      await get().getCartList();
      await get().getCartDetail();
    });
  },
  checkOutCart: async (cartDetailUi) => {
    const result: CheckoutResult = {
      isSuccess: false,
      checkoutDetail: null
    };
    await runTask(async () => {
      result.isSuccess = await useCardStore.getState().checkMemberCard(
        { title: '商品購買作業', component: cartDetailUi },
        async () => {
          return await apiClient.twid.twidGenPkcs7TbsOrderBuyCreate({
            cart_id_list: JSON.stringify(get().getSelectedCartIdList())
          });
        },
        async (twid_record, b64Cert, pkcs1) => {
          const checkoutDetail = await apiClient.trade.tradeOrderBuyCreate(twid_record.toString(), {
            b64Cert,
            pkcs1,
            cart_id_list: JSON.stringify(get().getSelectedCartIdList())
          });
          result.checkoutDetail = checkoutDetail;
        }
      );

      if (result.isSuccess) {
        await get().getCartList();
        await get().getCartDetail();
      }

      return !result.isSuccess;
    });

    return result;
  }
}));
