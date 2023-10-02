import { create } from 'zustand';

import { Cart, CartDetailResonse, CartRequest, TransactionDetail } from '@/libs/api';
import apiClient from '@/libs/api/client';

import { ModalType, runTask } from './modal';

export type CheckoutResult = {
  isSuccess: boolean;
  checkoutDetail: TransactionDetail | null;
};

type CartItem = {
  selected: boolean;
} & Cart;

type CartState = {
  cartList: CartItem[];
  cartDetail: CartDetailResonse | null;
  getSelectedCartIdList: () => CartItem['id'][];
  getCartList: (page?: number) => void;
  getCartDetail: () => void;
  addToCart: (arg: CartRequest) => void;
  updateCartItemSelected: (id: Cart['id'], index: number, isSelected: boolean) => void;
  updateCartItemQty: (...args: Parameters<typeof apiClient.trade.tradeCartPartialUpdate>) => void;
  deleteCartItem: (id: number) => void;
  checkOutCart: () => Promise<CheckoutResult>;
};

export const useCartStore = create<CartState>((set, get) => ({
  cartList: [],
  cartDetail: null,
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
      const cartDetail = await apiClient.trade.tradeCartDetailCreate({ cart_id_list: get().getSelectedCartIdList() });
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
  updateCartItemSelected: async (id: Cart['id'], index: number, isSelected: boolean) => {
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
  checkOutCart: async () => {
    const result: CheckoutResult = {
      isSuccess: false,
      checkoutDetail: null
    };
    await runTask(async () => {
      const checkoutDetail = await apiClient.trade.tradeOrderBuyCreate({
        cart_id_list: get().getSelectedCartIdList()
      });
      result.isSuccess = true;
      result.checkoutDetail = checkoutDetail;
    });

    return result;
  }
}));
