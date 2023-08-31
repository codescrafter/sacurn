import { create } from 'zustand';

import apiClient from '@/libs/api/client';
import { Login } from '@/libs/api/models/Login';
import { Register } from '@/libs/api/models/Register';
import { UserDetails } from '@/libs/api/models/UserDetails';

import { ModalType, useModalStore } from './modal';

type UserState = {
  user: UserDetails | null;
  login: (arg: Login) => Promise<boolean>;
  signup: (arg: Register) => void;
};

export const useUserStore = create<UserState>((set) => ({
  user: null,
  login: async (arg: Login) => {
    let isSuccess = false;
    try {
      useModalStore.getState().open(ModalType.Loading);
      const response = await apiClient.djRestAuth.djRestAuthLoginCreate(arg);
      set({ user: response.user });
      useModalStore.getState().close();
      isSuccess = true;
    } catch (error) {
      set({ user: null });
      const err = error as Error;
      console.error(err);
      useModalStore.getState().open(ModalType.Error, {
        errorText: `[${err.name}] ${err.message}`
      });
    }
    return isSuccess;
  },
  signup: async (arg: Register) => {
    try {
      useModalStore.getState().open(ModalType.Loading);
      const response = await apiClient.registration.registrationCreate(arg);
      set({ user: response.user });
    } catch (error) {
      set({ user: null });
      const err = error as Error;
      console.error(err);
      useModalStore.getState().open(ModalType.Error, {
        errorText: `[${err.name}] ${err.message}`
      });
    }
  }
}));
