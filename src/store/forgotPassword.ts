import { create } from 'zustand';

import { PasswordResetConfirm } from '@/libs/api';
import apiClient from '@/libs/api/client';
import { ForgotPasswordFillingSteps } from '@/util/constants';

import { runTask } from './modal';

type ForgotPasswordState = {
  userEmail: string;
  isTermsModalOpen: boolean;
  currentStep: number;
  isRequireTermsReadModalOpen: boolean;
  isDoNotAgreeTermsModalOpen: boolean;
  isAgreedToTerms: boolean;
  setUserEmail: (userEmail: string) => void;
  setIsTermsModalOpen: (isTermsModalOpen: boolean) => void;
  setCurrentStep: (currentStep: number) => void;
  setIsRequireTermsReadModalOpen: (value: boolean) => void;
  setIsDoNotAgreeTermsModalOpen: (value: boolean) => void;
  setIsAgreedToTerms: (value: boolean) => void;
  forgetPassword: () => Promise<boolean>;
  createNewPassword: (details: PasswordResetConfirm) => Promise<boolean>;
};

export const useForgotPasswordStore = create<ForgotPasswordState>((set, get) => ({
  userEmail: '',
  isTermsModalOpen: false,
  currentStep: ForgotPasswordFillingSteps.DYNAMIC_CODE_NOTIFIER,
  isRequireTermsReadModalOpen: false,
  isDoNotAgreeTermsModalOpen: false,
  isAgreedToTerms: false,

  setUserEmail: (userEmail) => {
    set({ userEmail });
  },
  setIsTermsModalOpen: (isTermsModalOpen) => {
    set({ isTermsModalOpen });
  },
  setCurrentStep: (currentStep) => {
    set({ currentStep });
  },
  setIsRequireTermsReadModalOpen: (value: boolean) => {
    set({ isRequireTermsReadModalOpen: value });
  },
  setIsDoNotAgreeTermsModalOpen: (value: boolean) => {
    set({ isDoNotAgreeTermsModalOpen: value });
  },
  setIsAgreedToTerms: (value: boolean) => {
    set({ isAgreedToTerms: value });
  },
  forgetPassword: async () => {
    let isSuccess = false;
    await runTask(async () => {
      const response = await apiClient.djRestAuth.djRestAuthPasswordResetCreate({ email: get().userEmail });
      isSuccess = response.detail === 'Password reset e-mail has been sent.';
    });
    return isSuccess;
  },
  createNewPassword: async (details) => {
    const { uid, token, new_password1, new_password2 } = details;
    let isSuccess = false;
    await runTask(async () => {
      const response = await apiClient.djRestAuth.djRestAuthPasswordResetConfirmCreate({
        uid,
        token,
        new_password1,
        new_password2
      });
      isSuccess = response.detail === 'Password has been reset with the new password.';
    });
    if (isSuccess) set({ currentStep: 3 });
    return isSuccess;
  }
}));
