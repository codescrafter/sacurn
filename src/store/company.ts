import { create } from 'zustand';

import { Company } from '@/libs/api';
import apiClient from '@/libs/api/client';

import { ModalType, useModalStore } from './modal';
import { useUserStore } from './user';

type CompanyState = {
  company: Partial<Company>;
  createCompany: (arg: FormData) => void;
  getCompany: (companyId: number) => Promise<Company | null>;
  updateCompany: (id: number, companyData?: FormData) => void;
};

export const useCompanyStore = create<CompanyState>((set) => ({
  company: {},
  createCompany: async (arg: FormData) => {
    try {
      useModalStore.getState().open(ModalType.Loading);
      const company = await apiClient.company.companyCreate(arg);
      set({ company });
      useUserStore.setState({
        companyId: company?.id
      });
      useModalStore.getState().close();
    } catch (error) {
      set({ company: {} });
      const err = error as Error;
      console.error(err);
      useModalStore.getState().open(ModalType.Error, {
        errorText: `[${err.name}] ${err.message}`
      });
    }
  },
  getCompany: async (companyId: number) => {
    let company: Company | null = null;
    try {
      useModalStore.getState().open(ModalType.Loading);
      company = await apiClient.company.companyRetrieve(companyId);
      useModalStore.getState().close();
      set({ company });
    } catch (error) {
      const err = error as Error;
      console.error(err);
      useModalStore.getState().open(ModalType.Error, {
        errorText: `[${err.name}] ${err.message}`
      });
    }
    return company;
  },
  updateCompany: async (id: number, companyData?: FormData) => {
    try {
      useModalStore.getState().open(ModalType.Loading);
      const company = await apiClient.company.companyPartialUpdate(id, companyData);
      useModalStore.getState().close();
      set({ company });
    } catch (error) {
      const err = error as Error;
      console.error(err);
      useModalStore.getState().open(ModalType.Error, {
        errorText: `[${err.name}] ${err.message}`
      });
    }
  }
}));
