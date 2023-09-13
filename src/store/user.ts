import cookies from 'js-cookie';
import { create } from 'zustand';

import { LoginResponse, Registration, User } from '@/libs/api';
import apiClient from '@/libs/api/client';
import { Login } from '@/libs/api/models/Login';
import { CompanyStatus } from '@/type';

import { ModalType, useModalStore } from './modal';

export const COOKIE_AUTH_NAME = 'auth';

export type AuthResult = {
  isSuccess: boolean;
  companyId: LoginResponse['company_id'];
  redirectUrl: string;
};

type UserState = {
  user: User | null;
  login: (arg: Login) => Promise<AuthResult>;
  signup: (arg: Registration) => Promise<boolean>;
};

export const useUserStore = create<UserState>((set) => ({
  user: null,
  login: async (arg: Login) => {
    const result: AuthResult = {
      isSuccess: false,
      companyId: undefined,
      redirectUrl: '/'
    };

    try {
      useModalStore.getState().open(ModalType.Loading);
      const response = await apiClient.login.loginCreate(arg);
      result.isSuccess = true;
      result.companyId = response.company_id;

      if (response.company_status === CompanyStatus.PassReview) {
        result.redirectUrl = '/';
      } else {
        result.redirectUrl = '/company-registration';
      }

      cookies.set(COOKIE_AUTH_NAME, JSON.stringify(result), { expires: 1 });

      set({ user: response.user });
      useModalStore.getState().close();
    } catch (error) {
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
      if (response.user.email) isSuccess = true;
      set({ user: response.user });
      useModalStore.getState().close();
    } catch (error) {
      set({ user: null });
      const err = error as Error;
      console.error(err);
      isSuccess = false;
      useModalStore.getState().open(ModalType.Error, {
        errorText: `[${err.name}] ${err.message}`
      });
    }
    return isSuccess;
  }
}));
