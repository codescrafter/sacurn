import { create } from 'zustand';

import { ForgotPasswordFillingSteps } from '@/util/constants';

type ForgotPasswordState = {
  isTermsModalOpen: boolean;
  setIsTermsModalOpen: (isTermsModalOpen: boolean) => void;
  currentStep: number;
  setCurrentStep: (currentStep: number) => void;
};

export const useForgotPasswordStore = create<ForgotPasswordState>((set) => ({
  isTermsModalOpen: false,
  currentStep: ForgotPasswordFillingSteps.PASSWORD_RECOVERY_FILLING,
  setIsTermsModalOpen: (isTermsModalOpen) => {
    set({ isTermsModalOpen });
  },
  setCurrentStep: (currentStep) => {
    set({ currentStep });
  }
}));
