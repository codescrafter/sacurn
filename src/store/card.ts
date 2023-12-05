import { ReactNode } from 'react';
import { create } from 'zustand';

import { ModalCloseError, SacurnExchangeTwidError } from '@/error';
import apiClient from '@/libs/api/client';
import PromiseModal from '@/pages/v2/SignatureConfirmationModal';
import { CardType } from '@/types';

import { ModalType, useModalStore } from './modal';

type CardState = {
  checkMemberCard: (
    modal: {
      title: string;
      component?: ReactNode;
    },
    getHashContent: () => Promise<{ twid_record: number; hashed_content: string }>,
    doPkcs7: (twid_record: number, b64Cert: string, pkcs1: string) => void
  ) => Promise<boolean>;
  checkGovernmentCard: (modal: { title: string; component?: ReactNode }) => Promise<boolean>;
};

const getClientAuthCode = function (type: CardType) {
  return new Promise<string>((resolve, reject) => {
    window.twcaVerifyLibSS.IDPaaSCpntCheck(type, (code, msg, reserved, data) => {
      if (code === '0') {
        resolve(data.clientAuthCode);
      }
      reject(new SacurnExchangeTwidError(code, msg));
    });
  });
};

const validServerAuthCode = function (serverAuthCode: string, type: CardType) {
  return new Promise<boolean>((resolve, reject) => {
    window.twcaVerifyLibSS.IDPaaSCpntServerAuth(type, serverAuthCode, (code, msg, reserved, data) => {
      if (code === '0') {
        console.log('validServerAuthCode', msg, data);
        resolve(true);
      }
      reject(new SacurnExchangeTwidError(code, msg));
    });
  });
};

const signXmlPkc = function (pwd: string, hash: string) {
  return new Promise<{ b64Cert: string; signature: string }>((resolve, reject) => {
    window.twcaVerifyLibSS.IDPaaSXmlSignPKCS1(pwd, hash, (code, msg, reserved, data) => {
      console.log('signXmlPkc', msg, data);
      if (code === '0') {
        resolve(data);
      }
      reject(new SacurnExchangeTwidError(code, msg));
    });
  });
};

const signMonicaPkc = function (pwd: string, hash: string) {
  return new Promise<{ b64Cert: string; signature: string }>((resolve, reject) => {
    window.twcaVerifyLibSS.IDPaaSMoicaSignPKCS1(pwd, hash, (code, msg, reserved, data) => {
      console.log('signMonicaPkc', msg, data);
      if (code === '0') {
        resolve(data);
      }
      reject(new SacurnExchangeTwidError(code, msg));
    });
  });
};

export const useCardStore = create<CardState>(() => ({
  checkMemberCard: async (
    modal,
    getHashContent: () => Promise<{ twid_record: number; hashed_content: string }>,
    doPkcs7: (twid_record: number, b64Cert: string, signature: string) => void
  ) => {
    let isSuccess = false;

    try {
      useModalStore.getState().open(ModalType.Loading);
      const clientAuthCode = await getClientAuthCode(CardType.MemberCard);
      console.log('A.getClientAuthCode', clientAuthCode);

      const { serverAuthCode } = await apiClient.twid.twidCpntAuthCreate({ clientAuthCode });
      console.log('B.serverAuthCode', serverAuthCode);
      if (!serverAuthCode || serverAuthCode.toLowerCase() === 'none') {
        throw new SacurnExchangeTwidError('99999', 'ServerAuthCode Error');
      }
      console.log('C.serverAuthCode', serverAuthCode);
      const isValid = await validServerAuthCode(serverAuthCode, CardType.MemberCard);
      if (!isValid) {
        throw new SacurnExchangeTwidError('99999', 'ServerAuthCode Invalid');
      }
      console.log('E.isValid', isValid);
      const { twid_record, hashed_content } = await getHashContent();
      console.log('G.hashedContent', hashed_content);
      useModalStore.getState().close();
      const data = await PromiseModal({
        title: modal.title,
        component: modal.component,
        type: CardType.MemberCard
      });
      console.log(data);
      useModalStore.getState().open(ModalType.Loading);
      const { b64Cert, signature } = await signXmlPkc(data.password, hashed_content);
      console.log('I.b64Cert', b64Cert);
      console.log('I.signature', signature);
      console.log('J.doPkcs7');
      await doPkcs7(twid_record, b64Cert, signature);
      console.log('K.ok');
      isSuccess = true;
      useModalStore.getState().close();
    } catch (error: unknown) {
      console.log('checkMemberCard.Error', error);

      isSuccess = false;
      if (error !== ModalCloseError) {
        useModalStore.getState().close();
        throw error;
      }
    }
    return isSuccess;
  },
  checkGovernmentCard: async (modal) => {
    let isSuccess = false;
    try {
      useModalStore.getState().open(ModalType.Loading);
      const { unfinishedPdfs, semiPdfs, tbsPdfs, timestamp } = await apiClient.twid.twidPreDoTwdsS0Create();
      console.log('A.preDoTwdsS0', { unfinishedPdfs, tbsPdfs, timestamp });
      const clientAuthCode = await getClientAuthCode(CardType.GovernmentCard);
      console.log('B.getClientAuthCode', clientAuthCode);
      const { serverAuthCode } = await apiClient.twid.twidCpntAuthCreate({ clientAuthCode });
      console.log('C.cpntAuth', serverAuthCode);

      if (!serverAuthCode || serverAuthCode.toLowerCase() === 'none') {
        throw new SacurnExchangeTwidError('99999', 'ServerAuthCode Error');
      }
      console.log('D.serverAuthCode', serverAuthCode);
      const isValid = await validServerAuthCode(serverAuthCode, CardType.GovernmentCard);
      if (!isValid) {
        throw new SacurnExchangeTwidError('99999', 'ServerAuthCode Invalid');
      }
      console.log('E.signMonicaPkc');
      useModalStore.getState().close();
      const data = await PromiseModal({
        ...modal,
        type: CardType.GovernmentCard
      });
      console.log(data);
      useModalStore.getState().open(ModalType.Loading);
      const { b64Cert, signature } = await signMonicaPkc(data.password, tbsPdfs);
      console.log('F.b64Cert', b64Cert);
      console.log('F.signature', signature);
      console.log('G.doTwdsS0S1');
      await apiClient.twid.twidDoTwdsS0S1Create({
        semiPdfs,
        unfinishedPdfs,
        pkcs1s: signature,
        b64Cert,
        timestamp
      });
      console.log('H.ok');
      isSuccess = true;
      useModalStore.getState().close();
    } catch (error) {
      console.log('checkGovernmentCard.Error', error);

      isSuccess = false;
      if (error !== ModalCloseError) {
        useModalStore.getState().close();
        throw error;
      }
    }
    return isSuccess;
  }
}));
