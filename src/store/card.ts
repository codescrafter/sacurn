import { create } from 'zustand';

import apiClient from '@/libs/api/client';
import PromiseModal from '@/pages/v2/SignatureConfirmationModal';
import { CardType } from '@/types';

import { ModalType, useModalStore } from './modal';

enum IdPassError {
  CallbackShouldBeFunction = '1181000',
  ClientSideNotFound = '1182000',
  NormalError = '1185001',
  InvalidArguments = '1185005',
  CertificationNotFound = '1185010',
  CertificationNotFoundUsingCerTx = '1185011',
  CertificationNotFoundCannotGetCSR = '1185012',
  SignatureFail1 = '1185061',
  SignaturePasswordIncorrect = '1185071',
  CertificationReadingError = '1185112',
  Others = '1189999',
  AuthenticationCodeGenerationFailA = '118a001',
  AuthenticationCodeGenerationFailB = '118a002',
  AuthenticationFail = '118a005',
  SignatureFail2 = '118c001',
  SignatureFail3 = '118c002',
  CertificationPickErrorA = '118d001',
  CertificationPickErrorB = '118d002',
  SignatureFail4 = '118d003',
  SignatureFail5 = '118d004',
  CardNotFound = '118t001',
  CardReadingError = '118t002',
  CardPasswordIncorrect = '118t007',
  CodeError = '118t008'
}

const idPassErrorMsgMap: Record<IdPassError, string> = {
  [IdPassError.CallbackShouldBeFunction]: `[${IdPassError.CallbackShouldBeFunction}]參數錯誤，請回報系統管理員`,
  [IdPassError.ClientSideNotFound]: `[${IdPassError.ClientSideNotFound}]找不到啟動的元件或元件版本不符，請下載安裝正確版本元件`,
  [IdPassError.NormalError]: `[${IdPassError.NormalError}]系統錯誤，請回報系統管理員`,
  [IdPassError.InvalidArguments]: `[${IdPassError.InvalidArguments}]參數錯誤，請回報系統管理員`,
  [IdPassError.CertificationNotFound]: `[${IdPassError.CertificationNotFound}]找不到憑證`,
  [IdPassError.CertificationNotFoundUsingCerTx]: `[${IdPassError.CertificationNotFoundUsingCerTx}]找不到憑證`,
  [IdPassError.CertificationNotFoundCannotGetCSR]: `[${IdPassError.CertificationNotFoundCannotGetCSR}]找不到憑證`,
  [IdPassError.SignatureFail1]: `[${IdPassError.SignatureFail1}]簽章失敗`,
  [IdPassError.SignaturePasswordIncorrect]: `[${IdPassError.SignaturePasswordIncorrect}]憑證密碼錯誤`,
  [IdPassError.CertificationReadingError]: `[${IdPassError.CertificationReadingError}]讀取憑證失敗`,
  [IdPassError.Others]: `[${IdPassError.Others}]非預期錯誤，請回報系統管理員`,
  [IdPassError.AuthenticationCodeGenerationFailA]: `[${IdPassError.AuthenticationCodeGenerationFailA}]元件產生認證碼失敗`,
  [IdPassError.AuthenticationCodeGenerationFailB]: `[${IdPassError.AuthenticationCodeGenerationFailB}]元件產生認證碼失敗`,
  [IdPassError.AuthenticationFail]: `[${IdPassError.AuthenticationFail}]元件認證失敗`,
  [IdPassError.SignatureFail2]: `[${IdPassError.SignatureFail2}]簽章失敗`,
  [IdPassError.SignatureFail3]: `[${IdPassError.SignatureFail3}]簽章失敗`,
  [IdPassError.CertificationPickErrorA]: `[${IdPassError.CertificationPickErrorA}]挑選憑證失敗`,
  [IdPassError.CertificationPickErrorB]: `[${IdPassError.CertificationPickErrorB}]挑選憑證失敗`,
  [IdPassError.SignatureFail4]: `[${IdPassError.SignatureFail4}]簽章失敗`,
  [IdPassError.SignatureFail5]: `[${IdPassError.SignatureFail5}]簽章失敗`,
  [IdPassError.CardNotFound]: `[${IdPassError.CardNotFound}]請將ATM金融卡插入您的讀卡機`,
  [IdPassError.CardReadingError]: `[${IdPassError.CardReadingError}]讀取卡片資料錯誤`,
  [IdPassError.CardPasswordIncorrect]: `[${IdPassError.CardPasswordIncorrect}]密碼錯誤`,
  [IdPassError.CodeError]: `[${IdPassError.CodeError}]押碼失敗`
};

type CardState = {
  checkMemberCard: (
    getHashContent: () => Promise<{ twid_record: number; hashed_content: string }>,
    doPkcs7: (twid_record: number, b64Cert: string, pkcs1: string) => void
  ) => Promise<boolean>;
  checkGovernmentCard: () => Promise<boolean>;
  errorHandler: (error: unknown) => void;
};

const getClientAuthCode = function (type: CardType) {
  return new Promise<string>((resolve, reject) => {
    window.twcaVerifyLibSS.IDPaaSCpntCheck(type, (code, msg, reserved, data) => {
      if (code === '0') {
        resolve(data.clientAuthCode);
      }
      reject(code);
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
      reject(code);
    });
  });
};

const signXmlPkc = function (pwd: string, hash: string) {
  return new Promise<{ b64Cert: string; signature: string }>((resolve, reject) => {
    window.twcaVerifyLibSS.IDPaaSXmlSignPKCS1(pwd, hash, (code, msg, reserved, data) => {
      console.log('data', msg, data);
      if (code === '0') {
        resolve(data);
      }
      reject(code);
    });
  });
};

const signMonicaPkc = function (pwd: string, hash: string) {
  return new Promise<{ b64Cert: string; signature: string }>((resolve, reject) => {
    window.twcaVerifyLibSS.IDPaaSMoicaSignPKCS1(pwd, hash, (code, msg, reserved, data) => {
      console.log('data', msg, data);
      if (code === '0') {
        resolve(data);
      }
      reject(code);
    });
  });
};

export const ModalCloseError = 'modal-close';

export const useCardStore = create<CardState>((set, get) => ({
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

      get().errorHandler(error);
    }
    return isSuccess;
  },

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
        type: CardType.GovernmentCard
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
        b64Cert
      });
      console.log('H.ok');
      isSuccess = true;
    } catch (error) {
      console.log('checkGovernmentCard.Error', error);

      get().errorHandler(error);

      isSuccess = false;
    }
    return isSuccess;
  },
  errorHandler: (error: unknown) => {
    if (error === ModalCloseError) {
      return;
    }
    if (Object.values(IdPassError).includes(error as IdPassError)) {
      if (error === IdPassError.ClientSideNotFound) {
        useModalStore.getState().open(ModalType.CardEnvDetectError);
      } else {
        const errorMsg = idPassErrorMsgMap[error as IdPassError];
        useModalStore.getState().open(ModalType.Error, {
          errorText: errorMsg
        });
      }
    } else if (typeof error === 'string') {
      useModalStore.getState().open(ModalType.Error, { errorText: error });
    } else {
      useModalStore.getState().open(ModalType.Error);
      throw new Error(error as string);
    }
  }
}));
