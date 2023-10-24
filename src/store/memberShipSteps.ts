import { create } from 'zustand';

type MembershipStepsState = {
  step: 'RENEWAL' | 'REISSUE' | 'REVOKED';
};

export const useMembershipStepsStore = create<MembershipStepsState>((set) => ({
  step: 'RENEWAL',
  setMembershipStep: ({ step }: MembershipStepsState) => set({ step })
}));
