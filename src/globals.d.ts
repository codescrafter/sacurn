import { CardType } from './types';

declare global {
  interface Window {
    twcaVerifyLibSS: {
      IDPaaSCpntCheck(
        type: CardType,
        callback: (code: string, msg: string, reserved: null, data: { clientAuthCode: string }) => void
      ): void;
      IDPaaSCpntServerAuth(
        type: CardType,
        serverAuthCode: string,
        callback: (code: string, msg: string, reserved: null, data: { clientAuthCode: string }) => void
      ): void;
      IDPaaSMoicaSignPKCS1(
        pwd: string,
        hash: string,
        callback: (
          code: string,
          msg: string,
          reserved: null,
          data: {
            b64Cert: string;
            signature: string;
          }
        ) => void
      ): void;
      IDPaaSXmlSignPKCS1(
        pwd: string,
        hash: string,
        callback: (code: string, msg: string, reserved: null, data: { b64Cert: string; signature: string }) => void
      );
    };
  }
}

export {};
