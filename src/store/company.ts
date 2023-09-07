import { create } from 'zustand';

import { Company, ExtendedCompany, PatchedExtendedCompany } from '@/libs/api';
import apiClient from '@/libs/api/client';

import { ModalType, useModalStore } from './modal';

type CompanyState = {
  company: Partial<Company>;
  createCompany: (arg: ExtendedCompany) => void;
  updateCompany: (id: number, companyData?: PatchedExtendedCompany) => void;
};

export const useCompanyStore = create<CompanyState>((set) => ({
  company: {},
  createCompany: async (arg: ExtendedCompany) => {
    // eslint-disable-next-line no-debugger
    debugger;
    try {
      useModalStore.getState().open(ModalType.Loading);
      const company = await apiClient.company.companyCreate(arg);
      set({ company });
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
  updateCompany: async (id: number, companyData?: PatchedExtendedCompany) => {
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
