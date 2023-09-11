import { create } from 'zustand';

import { Certificate } from '@/libs/api';
import apiClient from '@/libs/api/client';

import { ModalType, useModalStore } from './modal';

type CertificateState = {
  getCertificatePdf: (
    ...args: Parameters<typeof apiClient.carbonCredit.carbonCreditCertificateRetrieve>
  ) => Promise<Certificate | undefined>;
  applyCertificate: (...args: Parameters<typeof apiClient.carbonCredit.carbonCreditMailCertificateRetrieve>) => void;
};

export const useCertificateStore = create<CertificateState>(() => ({
  getCertificatePdf: async (...args) => {
    try {
      useModalStore.getState().open(ModalType.Loading);
      const certificate = await apiClient.carbonCredit.carbonCreditCertificateRetrieve(...args);
      useModalStore.getState().close();
      return certificate;
    } catch (error) {
      const err = error as Error;
      console.error(err);
      useModalStore.getState().open(ModalType.Error, {
        errorText: `[${err.name}] ${err.message}`
      });
    }
  },
  applyCertificate: async (...args) => {
    try {
      useModalStore.getState().open(ModalType.Loading);
      await apiClient.carbonCredit.carbonCreditMailCertificateRetrieve(...args);
      useModalStore.getState().open(ModalType.FinishedApplyCertificate);
    } catch (error) {
      const err = error as Error;
      console.error(err);
      useModalStore.getState().open(ModalType.Error, {
        errorText: `[${err.name}] ${err.message}`
      });
    }
  }
}));
