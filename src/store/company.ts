import { create } from 'zustand';

import { Company, ExtendedCompany, PatchedExtendedCompany } from '@/libs/api';
import apiClient from '@/libs/api/client';

import { ModalType, runTask, useModalStore } from './modal';

type CompanyState = {
  company: Partial<Company>;
  isSuccess: boolean;
  createCompany: (arg: FormData) => void;
  getCompany: (companyId: number) => Promise<Company | null>;
  updateCompany: (id: number, companyData?: FormData) => void;
};

export const useCompanyStore = create<CompanyState>((set) => ({
  company: {},
  isSuccess: false,
  createCompany: async (arg: FormData) => {
    runTask(
      async () => {
        // Check is work or not
        const data = arg as unknown as ExtendedCompany;
        const company = await apiClient.company.companyCreate(data);
        set({ company });
        set({ isSuccess: true });
      },
      {
        onError: () => set({ isSuccess: false })
      }
    );
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
    // runTask(
    //   async () => {
    //     const data = companyData as PatchedExtendedCompany;
    //     const company = await apiClient.company.companyPartialUpdate(id, data);
    //     set({ company });
    //     set({ isSuccess: true });
    //   },
    //   {
    //     onError: () => set({ isSuccess: false })
    //   }
    // );

    //! Reason: Commented this code because when this function was called, after calling api, it was returning the calling function without setting the state in line number 46,47 it means there is some bug there. Using old code it was working fine.
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
  }
}));
