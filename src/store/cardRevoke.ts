import { create } from 'zustand';

import { MemberCard, MemberChange } from '@/libs/api';
import apiClient from '@/libs/api/client';

import { useCardStore } from './card';
import { runTask } from './modal';

type CardRevokeState = {
  cardDetails: MemberCard | undefined;
  getCardDetails: () => void;
  cardRevokeApply: () => void;
  cardRevokeConfirm: () => void;
};

export const useCardRevokeStore = create<CardRevokeState>((set, get) => ({
  cardDetails: undefined,
  getCardDetails: async () => {
    await runTask(async () => {
      const response = await apiClient.member.memberCardRetrieve();
      set({ cardDetails: response });
    });
  },
  cardRevokeApply: async () => {
    await runTask(async () => {
      const isSuccess = await useCardStore.getState().checkMemberCard(
        async () => {
          return await apiClient.twid.twidGenPkcs7TbsRevokeCreate();
        },
        async (twid, b64Cert, pkcs1) => {
          await apiClient.member.memberCardRevokeCreate(twid.toString(), {
            pkcs1,
            b64Cert
          });
        }
      );

      if (isSuccess) {
        const response = await apiClient.member.memberCardRevokeApplyCreate(get().cardDetails as MemberCard);
        set({ cardDetails: response });
      }
      return true;
    });
  },
  async cardRevokeConfirm() {
    await runTask(async () => {
      const card = get().cardDetails;
      if (!card || !card.id) return;
      const response = await apiClient.member.memberCardRevokeCreate(card.id.toString(), card as MemberChange);
      set({ cardDetails: response });
    });
  }
}));
