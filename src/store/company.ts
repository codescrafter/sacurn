import cookies from 'js-cookie';
import { create } from 'zustand';

import { Company, Employee, ExtendedCompany, PatchedEmployeesPatch, PatchedExtendedCompany } from '@/libs/api';
import apiClient from '@/libs/api/client';

import { ModalType, runTask, useModalStore } from './modal';
import { AuthResult, COOKIE_AUTH_NAME } from './user';

type CompanyState = {
  company: Partial<Company>;
  employee: Employee | null;
  isSuccess: boolean;
  createCompany: (arg: FormData) => void;
  getCompany: (companyId: number) => Promise<Company | null>;
  updateCompany: (id: number, companyData?: FormData) => void;
  getProfileId: () => number | null;
  getCompanyEmployee: () => void;
  updateCompanyEmployee: (data: PatchedEmployeesPatch) => void;
};

export const useCompanyStore = create<CompanyState>((set, get) => ({
  company: {},
  employee: null,
  isSuccess: false,
  createCompany: async (arg: FormData) => {
    try {
      useModalStore.getState().open(ModalType.Loading);
      const data = arg as unknown as ExtendedCompany;
      const company = await apiClient.company.companyCreate(data);
      const auth = cookies.get(COOKIE_AUTH_NAME);
      if (auth) {
        const authData = JSON.parse(auth);
        authData.companyId = company.id;
        cookies.set(COOKIE_AUTH_NAME, JSON.stringify(authData), { expires: 1 });
      }
      set({ company, isSuccess: true });
      useModalStore.getState().close();
    } catch (error) {
      set({ company: {} });
      const err = error as Error;
      console.error(err);
      set({ isSuccess: false });
      useModalStore.getState().open(ModalType.Error, {
        errorText: `[${err.name}] ${err.message}`
      });
    }
  },
  getCompany: async (companyId: number) => {
    let company: Company | null = null;
    await runTask(async () => {
      company = await apiClient.company.companyRetrieve(companyId);
      set({ company });
    });
    return company;
  },
  updateCompany: async (id: number, companyData?: FormData) => {
    try {
      useModalStore.getState().open(ModalType.Loading);
      const data = companyData as PatchedExtendedCompany;
      const company = await apiClient.company.companyPartialUpdate(id, data);
      set({ company });
      set({ isSuccess: true });
      useModalStore.getState().close();
    } catch (error) {
      const err = error as Error;
      console.error(err);
      set({ isSuccess: false });
      useModalStore.getState().open(ModalType.Error, {
        errorText: `[${err.name}] ${err.message}`
      });
    }
  },
  getProfileId: () => {
    const cookie = cookies.get(COOKIE_AUTH_NAME);
    if (cookie) {
      const result = JSON.parse(cookie) as AuthResult;
      if (result?.profileId) {
        return result?.profileId;
      }
    }
    return null;
  },
  async getCompanyEmployee() {
    const profileId = get().getProfileId();
    if (profileId) {
      await runTask(async () => {
        const employee = await apiClient.company.companyEmployeeRetrieve(profileId);
        set({ employee });
      });
    }
  },
  async updateCompanyEmployee(data: PatchedEmployeesPatch) {
    const profileId = get().getProfileId();
    if (profileId) {
      await runTask(async () => {
        const employee = await apiClient.company.companyEmployeePartialUpdate(profileId, data);
        set({ employee });
      });
    }
  }
}));
