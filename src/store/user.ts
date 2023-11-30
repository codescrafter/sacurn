import cookies from 'js-cookie';
import { create } from 'zustand';

import { LoginResponse, Registration, User } from '@/libs/api';
import apiClient from '@/libs/api/client';
import { Login } from '@/libs/api/models/Login';
import { CompanyStatus } from '@/type';

import { runTask } from './modal';

export const COOKIE_AUTH_NAME = 'auth';

export type AuthResult = {
  isSuccess: boolean;
  companyId: LoginResponse['company'];
  redirectUrl: string;
  profileId: number;
};

type UserState = {
  user: User | null;
  login: (arg: Login) => Promise<AuthResult>;
  signup: (arg: Registration) => Promise<boolean>;
  logout: () => void;
};

export const useUserStore = create<UserState>((set) => ({
  user: null,
  login: async (arg: Login) => {
    const result: AuthResult = {
      isSuccess: false,
      companyId: undefined,
      redirectUrl: '/',
      profileId: -1
    };

    await runTask(async () => {
      const response = await apiClient.login.loginCreate(arg);
      result.isSuccess = true;
      result.companyId = response.company;

      if (response.company_status === CompanyStatus.PassReview) {
        result.redirectUrl = '/';
      } else {
        result.redirectUrl = '/company-registration';
      }

      if (response.profile) {
        result.profileId = response.profile;
      }

      cookies.set(COOKIE_AUTH_NAME, JSON.stringify(result), { expires: 1 });
      set({ user: response.user });
    });

    return result;
  },
  signup: async (arg: Registration) => {
    let isSuccess = false;
    await runTask(async () => {
      const response = await apiClient.registration.registrationCreate(arg);
      if (response.user.email) isSuccess = true;
      set({ user: response.user });
    });
    return isSuccess;
  },
  logout: async () => {
    runTask(async () => {
      await apiClient.djRestAuth.djRestAuthLogoutCreate();
      cookies.remove(COOKIE_AUTH_NAME);
      set({ user: null });
    });
  }
}));
