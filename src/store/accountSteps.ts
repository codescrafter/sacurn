import { create } from 'zustand';

import { AccountStepsEnum } from '@/type';

type AccountStepsState = {
  step:
    | AccountStepsEnum.ACCOUNT_INFORMATION
    | AccountStepsEnum.ENTERPRISE_ACCOUNT
    | AccountStepsEnum.ACCOUNT_CARBON_CREDIT
    | AccountStepsEnum.OPERATING_INSTRUCTION;
};

export const useAccountSteps = create<AccountStepsState>((set) => ({
  step: AccountStepsEnum.ACCOUNT_INFORMATION,
  setMembershipStep: ({ step }: AccountStepsState) => set({ step })
}));
