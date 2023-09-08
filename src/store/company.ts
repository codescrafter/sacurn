import { create } from 'zustand';

import { Company, ExtendedCompany, PatchedExtendedCompany } from '@/libs/api';
import apiClient from '@/libs/api/client';

import { ModalType, useModalStore } from './modal';
import { useUserStore } from './user';

type CompanyState = {
  company: Partial<Company> | null;
  createCompany: (arg: ExtendedCompany) => void;
  getCompany: (companyId: number) => void;
  updateCompany: (id: number, companyData?: PatchedExtendedCompany) => void;
};

export const useCompanyStore = create<CompanyState>((set) => ({
  company: null,
  createCompany: async (arg: ExtendedCompany) => {
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
    let company = null;
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
