import { create } from 'zustand';

import { WatchList } from '@/libs/api';
import apiClient from '@/libs/api/client';

import { ModalType, useModalStore } from './modal';

type WishListState = {
  wishList: WatchList[];
  getWishList: (page?: number) => void;
  addToWhishList: (id: number) => void;
  deleteWishList: (id: number) => void;
};

export const useWishListStore = create<WishListState>((set, get) => ({
  wishList: [],
  getWishList: async (page) => {
    try {
      useModalStore.getState().open(ModalType.Loading);
      const response = await apiClient.carbonCredit.carbonCreditWatchListList(page);
      set({ wishList: response.results });
      useModalStore.getState().close();
    } catch (error) {
      set({ wishList: [] });
      const err = error as Error;
      console.error(err);
      useModalStore.getState().open(ModalType.Error, {
        errorText: `[${err.name}] ${err.message}`
      });
    }
  },
  addToWhishList: async (id: number) => {
    try {
      useModalStore.getState().open(ModalType.Loading);
      const wishListItem = await apiClient.carbonCredit.carbonCreditWatchListCreate({ carbon_credit: id });
      const newWishList = Array.from(get().wishList);
      newWishList.push(wishListItem);
      set({ wishList: newWishList });
      useModalStore.getState().close();
    } catch (error) {
      const err = error as Error;
      console.error(err);
      useModalStore.getState().open(ModalType.Error, {
        errorText: `[${err.name}] ${err.message}`
      });
    }
  },
  deleteWishList: async (id: number) => {
    try {
      useModalStore.getState().open(ModalType.Loading);
      await apiClient.carbonCredit.carbonCreditWatchListDestroy2(id);
      const newWishList = get().wishList.filter((wishListItem) => wishListItem.id === id);
      set({ wishList: newWishList });
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
