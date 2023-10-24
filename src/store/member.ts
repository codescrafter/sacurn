import { create } from 'zustand';

import { ExtendMemberSerilizer } from '@/libs/api';
import apiClient from '@/libs/api/client';

import { runTask } from './modal';

type MemebershipState = {
  membershipComparison: ExtendMemberSerilizer[];
  getMembershipComparison: (...args: Parameters<typeof apiClient.member.memberList>) => void;
};

export const useMembershipStore = create<MemebershipState>((set) => ({
  membershipComparison: [],
  getMembershipComparison: async (...args) => {
    await runTask(async () => {
      const response = await apiClient.member.memberList(...args);
      set({ membershipComparison: response.results });
    });
  }
}));
