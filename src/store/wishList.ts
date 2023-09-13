import { create } from 'zustand';

import { WatchList } from '@/libs/api';
import apiClient from '@/libs/api/client';

import { Filters } from './filterOptions';
import { runTask } from './modal';

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
    runTask(async () => {
      const response = await apiClient.carbonCredit.carbonCreditWatchListList(...args);
      set({ wishList: response.results });
    });
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
    runTask(async () => {
      const wishListItem = await apiClient.carbonCredit.carbonCreditWatchListCreate({ carbon_credit: id });
      const newWishList = Array.from(get().wishList);
      newWishList.push(wishListItem);
      set({ wishList: newWishList });
    });
  },
  deleteWishList: async (whishItemId: number) => {
    runTask(async () => {
      await apiClient.carbonCredit.carbonCreditWatchListDestroy2(whishItemId);
      const newWishList = get().wishList.filter((wishListItem) => wishListItem.id !== whishItemId);
      set({ wishList: newWishList });
    });
  }
}));
