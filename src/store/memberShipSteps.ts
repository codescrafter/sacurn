import { create } from 'zustand';

type MembershipStepsState = {
  step: 'RENEWAL' | 'REISSUE' | 'REVOKED' | undefined;
};

export const useMembershipStepsStore = create<MembershipStepsState>((set) => ({
  step: undefined,
  setMembershipStep: ({ step }: MembershipStepsState) => set({ step })
}));
