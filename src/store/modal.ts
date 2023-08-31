import { create } from 'zustand';

import { UniversalModalProps } from '@/components/Modal/UniversalModal';
import { UniversalModalStatus } from '@/types';

type ModalState = {
  isOpen: boolean;
  type: ModalType | null;
  data: UniversalModalProps | null;
  open: (type: ModalType, override?: Partial<UniversalModalProps>) => void;
  close: () => void;
};

export enum ModalType {
  AddToCart = 'AddToCart',
  Loading = 'Loading',
  Error = 'Error'
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
  [ModalType.AddToCart]: {
    status: UniversalModalStatus.Info,
    icon: '/images/ic_success.svg',
    title: '恭喜！已開始交易',
    description: '已完成上架作業',
    buttons: [
      {
        text: '關閉'
      }
    ]
  }
};

export const useModalStore = create<ModalState>((set) => ({
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
  close: () => set({ isOpen: false, type: null, data: null })
}));
