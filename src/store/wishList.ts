import { create } from 'zustand';

import { WatchList } from '@/libs/api';
import apiClient from '@/libs/api/client';

import { Filters } from './filterOptions';
import { ModalType, useModalStore } from './modal';

type WishListState = {
  wishList: WatchList[];
  filters: Filters;
  getWishList: (...args: Parameters<typeof apiClient.carbonCredit.carbonCreditWatchListList>) => void;
  getWishListWithFilter: () => void;
  updateWishListByFilters: (filters: Filters) => void;
  addToWhishList: (id: number) => void;
  deleteWishList: (id: number) => void;
};

export const useWishListStore = create<WishListState>((set, get) => ({
  wishList: [],
  filters: {
    location: undefined,
    vintage: undefined,
    price: undefined,
    desc: false,
    tag: undefined,
    page: undefined
  },

  getWishList: async (...args) => {
    try {
      useModalStore.getState().open(ModalType.Loading);
      const response = await apiClient.carbonCredit.carbonCreditWatchListList(...args);
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
  getWishListWithFilter: async () => {
    const filters = get().filters;
    get().getWishList(filters.desc, filters.location, filters.page, filters.price, filters.tag, filters.vintage);
  },
  updateWishListByFilters: (filters: Filters) => {
    set({
      filters: {
        ...get().filters,
        ...filters
      }
    });
    get().getWishListWithFilter();
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
  deleteWishList: async (whishItemId: number) => {
    try {
      useModalStore.getState().open(ModalType.Loading);
      await apiClient.carbonCredit.carbonCreditWatchListDestroy2(whishItemId);
      const newWishList = get().wishList.filter((wishListItem) => wishListItem.id !== whishItemId);
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
