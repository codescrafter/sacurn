import { create } from 'zustand';

type AccountStepsState = {
  step: 'ACCOUNT_INFORMATION' | 'ENTERPRISE_ACCOUNT' | 'ACCOUNT_CARBON_CREDIT' | 'OPERATING_INSTRUCTION';
};

export const useAccountSteps = create<AccountStepsState>((set) => ({
  step: 'ACCOUNT_INFORMATION',
  setMembershipStep: ({ step }: AccountStepsState) => set({ step })
}));
