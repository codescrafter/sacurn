export type NavbarItemTypes = {
  name: string;
  path: string;
};

export type ProductDetailTypes = {
  price: number;
  memberCode: string;
  availableQuantity: number;
  minimumUnit: number;
  orderQuantity: number;
};

export type NewsTypes = {
  id: string;
  heading: string;
  description: string;
};

export type CartItemTypes = {
  id: string;
  img: string;
  memberCode: string;
  heading: string;
  price: string;
  left: string;
  total: string;
};

export type SelectedCartItemTypes = {
  id: string;
  name: string;
  quantity: string;
};

export type ProductItemTypes = {
  id: string;
  name: string;
  projectby: string;
  type: string;
  location: string;
  description: string;
  imagePath: string;
};

export type WishlistTypes = {
  id: number;
  name: string;
  imagePath: string;
};

export enum CardType {
  GovernmentCard = '2',
  MemberCard = '4'
}

export enum InputSize {
  MEDIUM = 'medium',
  SMALL = 'small'
}

export enum ItemColor {
  CYAN = 'cyan',
  WHITE = 'white'
}

export enum CarbonTag {
  White = '綠碳,黃碳,藍碳',
  Green = '綠碳',
  Yellow = '黃碳',
  Blue = '藍碳'
}

export enum CompanyStatus {
  NoReview = 0, // 有註冊 尚未送審
  Reviewing = 1, // 送審中
  PassReview = 2 // 審核通過
}

export enum OrderStatus {
  OnSale = 0, // 商品上架中
  OffShelve = 1 // 商品已下架
}

export enum MembershipStep {
  RENEWAL = 'RENEWAL',
  REISSUE = 'REISSUE',
  REVOKED = 'REVOKED'
}

export type MembershipTypes = {
  id: number;
  title: string;
  icon: string;
  slug: MembershipStep;
};

export enum CardRenewalEnum {
  EXPIRY_DATE = 1,
  PAYMENT_METHOD = 2,
  COMPLETE_RENEWAL = 3
}

export enum CardMembershipEnum {
  APPLY = 1,
  APPLICATION = 2,
  COMPLETE = 3
}

export type CardMembershipTypes = {
  id: number;
  name: string;
  title: string;
  subTitle: string;
  info: string;
  responseTitle: string;
  responseDetail?: string;
  buttonText?: string;
  terms?: string;
  slug?: string;
};

export enum AccountStepsEnum {
  ACCOUNT_INFORMATION = 'ACCOUNT_INFORMATION',
  ENTERPRISE_ACCOUNT = 'ENTERPRISE_ACCOUNT',
  ACCOUNT_CARBON_CREDIT = 'ACCOUNT_CARBON_CREDIT',
  OPERATING_INSTRUCTION = 'OPERATING_INSTRUCTION'
}

export enum CardRevokedEnum {
  ANNULMENT = 1,
  CANCELLATION_CONFIRMATION = 2,
  COMPLETE_ABOLITION = 3
}

export enum CardReIssueEnum {
  REPORT_LOSS = 1,
  PAYMENT_METHOD = 2,
  APPLICATION_STATUS = 3
}

<<<<<<< HEAD
export type InstructionCardTypes = {
  title: string;
  name: string;
  description: string;
  subTitle: string;
=======
export type AccountInformationTypes = {
  key: string;
  value: string;
>>>>>>> e6f2b9ad0359edd236e68b8c3eecfa2f938d5d72
};
