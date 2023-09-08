import cookies from 'js-cookie';
import { create } from 'zustand';

import { Registration, User } from '@/libs/api';
import apiClient from '@/libs/api/client';
import { Login } from '@/libs/api/models/Login';

import { ModalType, useModalStore } from './modal';

export const COOKIE_AUTH_NAME = 'auth';

export type AuthResult = {
  isSuccess: boolean;
  companyId?: number;
  companyStatus?: number;
};

type UserState = {
  user: User | null;
  companyId: number | null;
  companyStatus: number | null;
  login: (arg: Login) => Promise<AuthResult>;
  signup: (arg: Registration) => void;
};

export const useUserStore = create<UserState>((set) => ({
  user: null,
  companyId: null,
  companyStatus: null,
  login: async (arg: Login) => {
    const result: AuthResult = {
      isSuccess: false,
      companyId: undefined,
      companyStatus: undefined
    };

    try {
      useModalStore.getState().open(ModalType.Loading);
      const response = await apiClient.login.loginCreate(arg);
      result.isSuccess = true;
      result.companyId = response.company_id;
      result.companyStatus = response.company_status;
      cookies.set(COOKIE_AUTH_NAME, JSON.stringify(result), { expires: 1 });
      set({ user: response.user, companyId: response.company_id, companyStatus: response.company_status });
      useModalStore.getState().close();
    } catch (error) {
      set({ user: null });
      const err = error as Error;
      console.error(err);
      useModalStore.getState().open(ModalType.Error, {
        errorText: `[${err.name}] ${err.message}`
      });
    }
    return result;
  },
  signup: async (arg: Registration) => {
    let isSuccess = false;
    try {
      useModalStore.getState().open(ModalType.Loading);
      const response = await apiClient.registration.registrationCreate(arg);
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
  }
}));
