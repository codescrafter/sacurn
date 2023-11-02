export type TableBodyItem =
  | {
      id: number;
      time: string;
      prodName: string;
      operator: string;
      unitPrice: string;
      quant: string;
      lumpsum: string;
      action: string;
      remark: string;
    }
  | {
      id: number;
      orderNumber: string;
      prodName: string;
      buysell: string;
      unitPrice: string;
      quant: string;
      lumpsum: string;
      orderStatus: string;
    };

export enum UniversalModalStatus {
  Loading = 'loading',
  Info = 'info'
}

export enum CardType {
  GovernmentCard = '2',
  MemberCard = '4'
}
