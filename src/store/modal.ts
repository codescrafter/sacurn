import { HttpStatusCode } from 'axios';
import cookies from 'js-cookie';
import { create } from 'zustand';

import { UniversalModalProps } from '@/components/Modal/UniversalModal';
import { UniversalModalStatus } from '@/types';

import { COOKIE_AUTH_NAME } from './user';

type ModalState = {
  isOpen: boolean;
  type: ModalType | null;
  data: UniversalModalProps | null;
  open: (type: ModalType, override?: Partial<UniversalModalProps>) => void;
  close: () => void;
  runTask: (
    task: () => Promise<void | boolean>,
    result?: { onComplete?: () => ModalType | void; onError?: (error: unknown) => void }
  ) => Promise<void>;
};

export enum ModalType {
  AddToCart = 'AddToCart',
  Loading = 'Loading',
  StartApplyCertificate = 'StartApplyCertificate',
  FinishedApplyCertificate = 'FinishedApplyCertificate',
  MakeStockOnSale = 'MakeStockOnSale',
  MakeStockOffShelve = 'MakeStockOffShelve',
  CheckOutConfirm = 'CheckOutConfirm',
  Error = 'Error',
  CompanyReviewing = 'CompanyReviewing',
  DeleteCartItem = 'DeleteCartItem',
  DeleteEmployeeAccount = 'DeleteEmployeeAccount',
  FreezeEmployeeAccount = 'FreezeEmployeeAccount',
  CardEnvDetectError = 'CardEnvDetectError'
}

const ModalDataRecord: Record<ModalType, UniversalModalProps> = {
  [ModalType.Loading]: {
    status: UniversalModalStatus.Loading,
    icon: 'https://www.benmvp.com/f3b3c5fd2893249d60a9cadfc077b96d/loading-spinner-final.svg',
    title: 'Loading...',
    description: '',
    buttons: []
  },
  [ModalType.Error]: {
    status: UniversalModalStatus.Info,
    icon: '/images/ic_error.svg',
    title: '出了一點錯',
    description: '',
    errorText: '',
    buttons: []
  },
  [ModalType.StartApplyCertificate]: {
    status: UniversalModalStatus.Info,
    icon: '/images/certificate/ic_certificate.svg',
    title: '證書申請付款資訊',
    description: '點擊確認申請後，將新增證書申請費用於購物車內。待付款成功後，系統將寄發證書給您。',
    errorText: '',
    buttons: [
      {
        text: '確認申請'
      }
    ]
  },
  [ModalType.FinishedApplyCertificate]: {
    status: UniversalModalStatus.Info,
    icon: '/images/ic_success.svg',
    title: '申請成功',
    description: '待付款成功後，系統將寄發證書將會到您登記的信箱',
    errorText: '',
    buttons: [
      {
        text: '確定'
      }
    ]
  },
  [ModalType.AddToCart]: {
    status: UniversalModalStatus.Info,
    icon: '/images/ic_success.svg',
    title: '商品已加入購物車',
    description: '已完成',
    buttons: [
      {
        text: '關閉'
      }
    ]
  },
  [ModalType.MakeStockOnSale]: {
    status: UniversalModalStatus.Info,
    icon: '/images/ic_success.svg',
    title: '恭喜！已開始交易',
    description: '已完成上架作業',
    buttons: [
      {
        text: '關閉'
      }
    ]
  },
  [ModalType.MakeStockOffShelve]: {
    status: UniversalModalStatus.Info,
    icon: '/images/ic_error.svg',
    title: '再次提醒',
    description: '確認停止交易後，資料將無法恢復 ',
    buttons: [
      {
        text: '取消送出'
      },
      {
        text: '確認停止交易'
      }
    ]
  },
  [ModalType.CheckOutConfirm]: {
    status: UniversalModalStatus.Info,
    icon: '/images/ic_error.svg',
    title: '再次提醒',
    description: '結帳後請您於30分鐘內進行付款，否則系統將會取消交易。 ',
    buttons: [
      {
        text: '返回商品列表'
      },
      {
        text: '確認結帳'
      }
    ]
  },
  [ModalType.CompanyReviewing]: {
    status: UniversalModalStatus.Info,
    icon: '/images/ic_error.svg',
    title: '公司審核中',
    description: '我們已經收到您建立法人帳戶的申請，待審核過尚可使用本系統',
    buttons: [
      {
        text: '返回商品列表'
      },
      {
        text: '確認結帳'
      }
    ]
  },
  [ModalType.DeleteCartItem]: {
    status: UniversalModalStatus.Info,
    icon: '/images/ic_error.svg',
    title: '再次提醒',
    description: '購物車項目即將刪除',
    buttons: [
      {
        text: '取消'
      },
      {
        text: '確認'
      }
    ]
  },
  [ModalType.DeleteEmployeeAccount]: {
    status: UniversalModalStatus.Info,
    icon: '/images/ic_error.svg',
    title: '再次提醒',
    description: '確認刪除帳號後，資料將無法恢復',
    buttons: [
      {
        text: '取消送出'
      },
      {
        text: '確認刪除帳號'
      }
    ]
  },
  [ModalType.CardEnvDetectError]: {
    status: UniversalModalStatus.Info,
    icon: '/images/ic_error.svg',
    title: '商品購買作業',
    description: '環境監測失敗',
    errorText: '請下載元件',
    buttons: [
      {
        text: '元件下載',
        onClick: () => {
          const anchor = document.createElement('a');
          anchor.setAttribute('href', 'data:text/plain;charset=utf-8, ' + encodeURIComponent('/idPaas/PC元件.zip'));
          anchor.setAttribute('download', 'PC元件.zip');
          anchor.click();
        }
      }
    ]
  },
  [ModalType.FreezeEmployeeAccount]: {
    status: UniversalModalStatus.Info,
    icon: '/images/ic_error.svg',
    title: '再次提醒',
    description: '確認凍結帳號 ?',
    buttons: [
      {
        text: '取消送出'
      },
      {
        text: '確認凍結帳號'
      }
    ]
  }
};

export const useModalStore = create<ModalState>((set, get) => ({
  isOpen: true,
  type: null,
  data: null,
  open: (type: ModalType, override?: Partial<UniversalModalProps>) => {
    set({
      isOpen: true,
      type,
      data: { ...ModalDataRecord[type], ...override }
    });
  },
  close: () => {
    set({ isOpen: false, type: null, data: null });
  },
  runTask: async (task, result) => {
    try {
      get().open(ModalType.Loading);
      const isNotAutoCloseModal = await task();

      const modalType = await result?.onComplete?.();

      if (modalType) {
        useModalStore.getState().open(modalType);
      } else {
        if (!isNotAutoCloseModal) useModalStore.getState().close();
      }
    } catch (error) {
      console.error(error);
      await result?.onError?.(error);

      const err1 = error as APIError;

      if (err1.status === HttpStatusCode.Unauthorized) {
        cookies.remove(COOKIE_AUTH_NAME);
        window.location.reload();
        return;
      }

      if (err1?.body?.msg) {
        useModalStore.getState().open(ModalType.Error, {
          errorText: err1?.body?.msg
        });
        return;
      }
      const err2 = error as Error;
      useModalStore.getState().open(ModalType.Error, {
        errorText: `[${err2.name}] ${err2.message}`
      });
    }
  }
}));

export const runTask = useModalStore.getState().runTask;

type APIError = {
  url: string;
  status: number;
  statusText: string;
  body: {
    msg: string;
  };
  request: {
    method: string;
    url: string;
    body: Record<string, string>;
    mediaType: string;
  };
  name: string;
};
