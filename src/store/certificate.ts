import { create } from 'zustand';

import { Certificate } from '@/libs/api';
import apiClient from '@/libs/api/client';

import { ModalType, runTask } from './modal';

type CertificateState = {
  getCertificatePdf: (
    ...args: Parameters<typeof apiClient.carbonCredit.carbonCreditCertificateRetrieve>
  ) => Promise<Certificate | undefined>;
  applyCertificate: (...args: Parameters<typeof apiClient.carbonCredit.carbonCreditMailCertificateRetrieve>) => void;
};

export const useCertificateStore = create<CertificateState>(() => ({
  getCertificatePdf: async (...args) => {
    let certificate = undefined;
    await runTask(async () => {
      certificate = await apiClient.carbonCredit.carbonCreditCertificateRetrieve(...args);
    });
    return certificate;
  },
  applyCertificate: async (...args) => {
    await runTask(
      async () => {
        await apiClient.carbonCredit.carbonCreditMailCertificateRetrieve(...args);
      },
      {
        onComplete: () => ModalType.FinishedApplyCertificate
      }
    );
  }
}));
