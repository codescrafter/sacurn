import { create } from 'zustand';

import apiClient from '@/libs/api/client';
import PromiseModal from '@/pages/v2/SignatureConfirmationModal';
import { CardType } from '@/types';

import { ModalType, useModalStore } from './modal';

type CardState = {
  checkMemberCard: (
    getHashContent: () => Promise<{ twid_record: number; hashed_content: string }>,
    doPkcs7: (twid_record: number, b64Cert: string, pkcs1: string) => void
  ) => Promise<boolean>;
  checkGovernmentCard: () => Promise<boolean>;
};

const getClientAuthCode = function (type: CardType) {
  return new Promise<string>((resolve, reject) => {
    window.twcaVerifyLibSS.IDPaaSCpntCheck(type, (code, msg, reserved, data) => {
      if (code === '0') {
        resolve(data.clientAuthCode);
      }
      reject(`${code}: ${msg}`);
    });
  });
};

const validServerAuthCode = function (serverAuthCode: string, type: CardType) {
  return new Promise<boolean>((resolve, reject) => {
    window.twcaVerifyLibSS.IDPaaSCpntServerAuth(type, serverAuthCode, (code, msg, reserved, data) => {
      if (code === '0') {
        console.log('data', msg, data);
        resolve(true);
      }
      reject(`${code}: ${msg}`);
    });
  });
};

const signXmlPkc = function (pwd: string, hash: string) {
  return new Promise<{ b64Cert: string; signature: string }>((resolve, reject) => {
    window.twcaVerifyLibSS.IDPaaSXmlSignPKCS1(pwd, hash, (code, msg, reserved, data) => {
      if (code === '0') {
        console.log('data', msg, data);
        resolve(data);
      }
      reject(`${code}: ${msg}`);
    });
  });
};

const signMonicaPkc = function (pwd: string, hash: string) {
  return new Promise<{ b64Cert: string; signature: string }>((resolve, reject) => {
    window.twcaVerifyLibSS.IDPaaSMoicaSignPKCS1(pwd, hash, (code, msg, reserved, data) => {
      if (code === '0') {
        console.log('data', msg, data);
        resolve(data);
      }
      reject(`${code}: ${msg}`);
    });
  });
};

export const useCardStore = create<CardState>(() => ({
  checkMemberCard: async (
    getHashContent: () => Promise<{ twid_record: number; hashed_content: string }>,
    doPkcs7: (twid_record: number, b64Cert: string, signature: string) => void
  ) => {
    let isSuccess = false;
    try {
      const clientAuthCode = await getClientAuthCode(CardType.MemberCard);
      console.log('A.getClientAuthCode', clientAuthCode);

      const { serverAuthCode } = await apiClient.twid.twidCpntAuthCreate({ clientAuthCode });
      console.log('B.serverAuthCode', serverAuthCode);
      if (!serverAuthCode || serverAuthCode.toLowerCase() === 'none') {
        throw new Error('ServerAuthCode Error');
      }
      console.log('C.serverAuthCode', serverAuthCode);
      const isValid = await validServerAuthCode(serverAuthCode, CardType.MemberCard);
      if (!isValid) {
        throw new Error('ServerAuthCode Invalid');
      }
      console.log('E.isValid', isValid);
      const { twid_record, hashed_content } = await getHashContent();
      console.log('G.hashedContent', hashed_content);
      const data = await PromiseModal({
        type: CardType.MemberCard
      });
      console.log(data);
      const { b64Cert, signature } = await signXmlPkc(data.password, hashed_content);
      console.log('I.b64Cert', b64Cert);
      console.log('I.signature', signature);
      console.log('J.doPkcs7');
      await doPkcs7(twid_record, b64Cert, signature);
      console.log('K.ok');
      isSuccess = true;
    } catch (error: unknown) {
      isSuccess = false;
      console.log('checkMemberCard.Error', error);

      // 偵測不到用戶端服務啟動中或版本不符
      if (typeof error === 'string') {
        if (error.startsWith('1182000')) {
          useModalStore.getState().open(ModalType.CardEnvDetectError);
        }
      } else {
        throw new Error(error as string);
      }
    }
    return isSuccess;
  },
  // taxID: 統編
  checkGovernmentCard: async () => {
    let isSuccess = false;
    try {
      const { unfinishedPdfs, semiPdfs, tbsPdfs, timestamp } = await apiClient.twid.twidPreDoTwdsS0Create();
      console.log('A.preDoTwdsS0', { unfinishedPdfs, tbsPdfs, timestamp });
      const clientAuthCode = await getClientAuthCode(CardType.GovernmentCard);
      console.log('B.getClientAuthCode', clientAuthCode);
      const { serverAuthCode } = await apiClient.twid.twidCpntAuthCreate({ clientAuthCode });
      console.log('C.cpntAuth', serverAuthCode);

      if (!serverAuthCode || serverAuthCode.toLowerCase() === 'none') {
        throw new Error('serverAuthCode Error');
      }
      console.log('D.serverAuthCode', serverAuthCode);
      const isValid = await validServerAuthCode(serverAuthCode, CardType.GovernmentCard);
      if (!isValid) {
        throw new Error('serverAuthCode Invalid');
      }
      console.log('E.signMonicaPkc');
      const data = await PromiseModal({
        type: CardType.MemberCard
      });
      console.log(data);
      const { b64Cert, signature } = await signMonicaPkc(data.password, tbsPdfs);
      console.log('F.b64Cert', b64Cert);
      console.log('F.signature', signature);
      console.log('G.doTwdsS0S1');
      await apiClient.twid.twidDoTwdsS0S1Create({
        semiPdfs,
        unfinishedPdfs,
        pkcs1s: signature,
        timestamp,
        b64Cert,
        memberNo: data.username
      });
      console.log('H.ok');
      isSuccess = true;
    } catch (error) {
      console.log('checkGovernmentCard.Error', error);

      // 偵測不到用戶端服務啟動中或版本不符
      if (typeof error === 'string') {
        if (error.startsWith('1182000')) {
          useModalStore.getState().open(ModalType.CardEnvDetectError);
        }
      } else {
        throw new Error(error as string);
      }
      isSuccess = false;
    }
    return isSuccess;
  }
}));
