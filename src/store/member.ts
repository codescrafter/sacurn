import { create } from 'zustand';

import { ExtendMemberSerilizer, MemberPointRecord } from '@/libs/api';
import apiClient from '@/libs/api/client';
import { getDaysOldDate } from '@/util/helper';

import { runTask } from './modal';

type MemebershipState = {
  membershipComparison: ExtendMemberSerilizer[];
  getMembershipComparison: (...args: Parameters<typeof apiClient.member.memberList>) => void;
  pointRecordList: MemberPointRecord[];
  recordFilters: {
    page: number;
    startDate: string | null;
    endDate: string | null;
  };
  setRecordFilters: (filters: Partial<MemebershipState['recordFilters']>) => void;
  getPointRecordList: (...args: Parameters<typeof apiClient.member.memberPointRecordList>) => void;
};

export const useMembershipStore = create<MemebershipState>((set, get) => ({
  membershipComparison: [],
  pointRecordList: [],
  recordFilters: {
    page: 1,
    startDate: getDaysOldDate(30),
    endDate: getDaysOldDate(0)
  },
  getMembershipComparison: async (...args) => {
    await runTask(async () => {
      const response = await apiClient.member.memberList(...args);
      set({ membershipComparison: response.results });
    });
  },
  getPointRecordList: async () => {
    await runTask(async () => {
      const filters = get().recordFilters;

      const response = await apiClient.member.memberPointRecordList(
        filters.page,
        `${filters.startDate},${filters.endDate ? filters.endDate : getDaysOldDate(0)}`
      );
      set({ pointRecordList: response.results });
    });
  },
  setRecordFilters: (filters: Partial<MemebershipState['recordFilters']>) => {
    set((state) => ({
      recordFilters: {
        ...state.recordFilters,
        ...filters
      }
    }));
  }
}));
