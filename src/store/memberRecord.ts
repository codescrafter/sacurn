import { create } from 'zustand';

import { ExtendMemberRecord, MemberRecord } from '@/libs/api';
import apiClient from '@/libs/api/client';
import PromiseModal from '@/pages/v2/UpgradeConfirmationModal';

import { useCardStore } from './card';
import { runTask } from './modal';

type MemberRecordState = {
  memberUpgradeRecord: null | ExtendMemberRecord;
  memberRecord: null | ExtendMemberRecord;
  getMemberRecord: () => void;
  getMemberUpgradeRecord: () => void;
  addMemberRecordToCart: (productName: MemberRecordProduct) => Promise<boolean>;
  upgradeMember: () => Promise<boolean>;
  applyRenewMemberRecord: () => Promise<boolean>;
  renewMemberRecord: () => Promise<boolean>;
  applyReissueMemberRecord: () => Promise<boolean>;
  reissueMemberRecord: () => Promise<boolean>;
  confirmReissueMemberRecord: () => Promise<boolean>;
};

enum MemberRecordProduct {
  Renew = '會員卡續卡',
  Reissue = '會員卡補發'
}

export const useMemberRecordStore = create<MemberRecordState>((set, get) => ({
  memberUpgradeRecord: null,
  memberRecord: null,
  getMemberRecord: async () => {
    await runTask(async () => {
      const memberRecord = await apiClient.member.memberRecordRetrieve();
      set({ memberRecord });
    });
  },
  getMemberUpgradeRecord: async () => {
    await runTask(async () => {
      const memberUpgradeRecord = await apiClient.member.memberUpgradeRetrieve();
      set({ memberUpgradeRecord });
    });
  },
  addMemberRecordToCart: async (productName: MemberRecordProduct) => {
    let isSuccess = false;
    await runTask(async () => {
      await apiClient.shop.shopCartCreate({ shop_product_name: productName, quantity: 1 });
      isSuccess = true;
    });
    return isSuccess;
  },
  upgradeMember: async () => {
    let isSuccess = false;
    await runTask(async () => {
      const isConfirm = await PromiseModal();
      if (!isConfirm) return;
      isSuccess = await useCardStore.getState().checkMemberCard(
        async () => {
          return await apiClient.twid.twidGenPkcs7TbsUpgradeCreate();
        },
        async (twid_record, b64Cert, pkcs1) => {
          await apiClient.member.memberUpgradeCreate(twid_record.toString(), {
            b64Cert,
            pkcs1
          });
          isSuccess = true;
        }
      );
      if (isSuccess) await apiClient.member.memberUpgradeRetrieve();
      return true;
    });
    return isSuccess;
  },
  applyRenewMemberRecord: async () => {
    let isSuccess = false;
    const memberRecord = get().memberRecord;
    if (memberRecord) {
      await runTask(async () => {
        await apiClient.member.memberRenewalCreate(memberRecord as unknown as MemberRecord);
        isSuccess = true;
      });
    } else {
      alert('Member Record not found');
    }
    return isSuccess;
  },
  renewMemberRecord: async () => {
    return await get().addMemberRecordToCart(MemberRecordProduct.Renew);
  },
  applyReissueMemberRecord: async () => {
    let isSuccess = false;
    const memberRecord = get().memberRecord;
    if (memberRecord) {
      await runTask(async () => {
        isSuccess = await useCardStore.getState().checkGovernmentCard();
        if (isSuccess) await apiClient.member.memberCardReissueApplyCreate(memberRecord);
        return true;
      });
    } else {
      alert('Member Record not found');
    }
    return isSuccess;
  },
  reissueMemberRecord: async () => {
    return await get().addMemberRecordToCart(MemberRecordProduct.Reissue);
  },
  confirmReissueMemberRecord: async () => {
    let isSuccess = false;
    const memberRecord = get().memberRecord;
    if (memberRecord) {
      await runTask(async () => {
        await apiClient.member.memberCardReissueCheckCreate(memberRecord);
        isSuccess = true;
      });
    } else {
      alert('Member Record not found');
    }
    return isSuccess;
  }
}));
